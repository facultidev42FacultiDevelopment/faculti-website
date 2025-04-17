import { PrismaClient, Post, User, Category, Tag, Institution, Writer } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface PostCreateInput {
  title: string;
  content: string;
  excerpt?: string;
  date: Date;
  dateGmt: Date;
  modified?: Date;
  modifiedGmt?: Date;
  slug: string;
  status?: string;
  commentStatus: string;
  pingStatus: string;
  guid?: string;
  menuOrder?: number;
  vimeoVideoId?: string;
  authorId: string;
  categoryIds?: string[];
  tagIds?: string[];
  institutionIds?: string[];
  writerIds?: string[];
}

export interface PostUpdateInput {
  title?: string;
  content?: string;
  excerpt?: string;
  date?: Date;
  dateGmt?: Date;
  modified?: Date;
  modifiedGmt?: Date;
  slug?: string;
  status?: string;
  commentStatus?: string;
  pingStatus?: string;
  guid?: string;
  menuOrder?: number;
  vimeoVideoId?: string;
  authorId?: string;
  categoryIds?: string[];
  tagIds?: string[];
  institutionIds?: string[];
  writerIds?: string[];
}

// Type for raw query results
interface RawCategory {
  category: Category | null;
}

interface RawTag {
  tag: Tag | null;
}

interface RawInstitution {
  institution: Institution | null;
}

interface RawWriter {
  writer: Writer | null;
}

interface RawPost extends Post {
  author: User | null;
  categories: RawCategory[];
  tags: RawTag[];
  institutions: RawInstitution[];
  writers: RawWriter[];
}

export class PostRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: PostCreateInput): Promise<Post> {
    return this.prisma.post.create({
      data: {
        id: uuidv4(),
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        date: data.date,
        dateGmt: data.dateGmt,
        modified: data.modified,
        modifiedGmt: data.modifiedGmt,
        slug: data.slug,
        status: data.status ?? 'publish',
        commentStatus: data.commentStatus,
        pingStatus: data.pingStatus,
        guid: data.guid,
        menuOrder: data.menuOrder ?? 0,
        vimeoVideoId: data.vimeoVideoId,
        authorId: data.authorId,
        categories: {
          create: data.categoryIds?.map(categoryId => ({
            categoryId,
          })),
        },
        tags: {
          create: data.tagIds?.map(tagId => ({
            tagId,
          })),
        },
        institutions: {
          create: data.institutionIds?.map(institutionId => ({
            institutionId,
          })),
        },
        writers: {
          create: data.writerIds?.map(writerId => ({
            writerId,
          })),
        },
      },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        institutions: { include: { institution: true } },
        writers: { include: { writer: true } },
      },
    });
  }

  async findById(id: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        institutions: { include: { institution: true } },
        writers: { include: { writer: true } },
      },
    });
  }

  async findBySlug(slug: string): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { slug },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        institutions: { include: { institution: true } },
        writers: { include: { writer: true } },
      },
    });
  }

  async findByCategoryNames(
    categoryNames: string[],
    take: number,
    skip: number,
    order: 'latest' | 'random',
    status?: string
  ): Promise<{ categoryName: string; posts: Post[]; total: number }[]> {
    const results = await Promise.all(
      categoryNames.map(async categoryName => {
        const where = {
          status: status || 'publish',
          categories: {
            some: {
              category: {
                name: categoryName,
              },
            },
          },
        };
  
     
        const total = await this.prisma.post.count({ where });
  
        let posts: Post[];
        if (order === 'random') {
         
          const fetchCount = Math.min(total, take * 3); 
          const allPosts = await this.prisma.post.findMany({
            where,
            take: fetchCount,
            skip,
            include: {
              author: true,
              categories: { include: { category: true } },
              tags: { include: { tag: true } },
              institutions: { include: { institution: true } },
              writers: { include: { writer: true } },
            },
          });
  
  
          for (let i = allPosts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allPosts[i], allPosts[j]] = [allPosts[j], allPosts[i]];
          }
  
       
          posts = allPosts.slice(0, take);
        } else {
       
          posts = await this.prisma.post.findMany({
            where,
            skip,
            take,
            orderBy: { date: 'desc' },
            include: {
              author: true,
              categories: { include: { category: true } },
              tags: { include: { tag: true } },
              institutions: { include: { institution: true } },
              writers: { include: { writer: true } },
            },
          });
        }
  
        return {
          categoryName,
          posts,
          total,
        };
      })
    );
  
    return results;
  }

  async search(query: string): Promise<Post[]> {
    const sanitizedQuery = query.replace(/[^a-zA-Z0-9\s]/g, '');
    const tsQuery = sanitizedQuery
      .split(' ')
      .filter(Boolean)
      .map((word: string) => `${word}:*`)
      .join(' & ');

    const posts = await this.prisma.$queryRaw<RawPost[]>`
      SELECT 
        p.*,
        u.* AS author,
        json_agg(json_build_object(
          'category', c.*
        )) AS categories,
        json_agg(json_build_object(
          'tag', t.*
        )) AS tags,
        json_agg(json_build_object(
          'institution', i.*
        )) AS institutions,
        json_agg(json_build_object(
          'writer', w.*
        )) AS writers
      FROM posts p
      LEFT JOIN users u ON p.author_id = u.id
      LEFT JOIN category_to_post cp ON p.id = cp.post_id
      LEFT JOIN categories c ON cp.category_id = c.id
      LEFT JOIN tag_to_post tp ON p.id = tp.post_id
      LEFT JOIN tags t ON tp.tag_id = t.id
      LEFT JOIN institution_to_post ip ON p.id = ip.post_id
      LEFT JOIN institutions i ON ip.institution_id = i.id
      LEFT JOIN writer_to_post wp ON p.id = wp.post_id
      LEFT JOIN writers w ON wp.writer_id = w.id
      WHERE p.search_vector @@ to_tsquery(${tsQuery})
      GROUP BY p.id, u.id
      ORDER BY ts_rank(p.search_vector, to_tsquery(${tsQuery})) DESC;
    `;

    return posts.map(post => ({
      ...post,
      author: post.author || null,
      categories: (post.categories || []).filter((c: RawCategory) => c.category).map((c: RawCategory) => ({
        category: c.category,
      })),
      tags: (post.tags || []).filter((t: RawTag) => t.tag).map((t: RawTag) => ({
        tag: t.tag,
      })),
      institutions: (post.institutions || []).filter((i: RawInstitution) => i.institution).map((i: RawInstitution) => ({
        institution: i.institution,
      })),
      writers: (post.writers || []).filter((w: RawWriter) => w.writer).map((w: RawWriter) => ({
        writer: w.writer,
      })),
    }));
  }

  async update(id: string, data: PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data: {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        date: data.date,
        dateGmt: data.dateGmt,
        modified: data.modified ?? new Date(),
        modifiedGmt: data.modifiedGmt ?? new Date(),
        slug: data.slug,
        status: data.status,
        commentStatus: data.commentStatus,
        pingStatus: data.pingStatus,
        guid: data.guid,
        menuOrder: data.menuOrder,
        vimeoVideoId: data.vimeoVideoId,
        authorId: data.authorId,
        categories: data.categoryIds
          ? {
              deleteMany: {},
              create: data.categoryIds.map(categoryId => ({
                categoryId,
              })),
            }
          : undefined,
        tags: data.tagIds
          ? {
              deleteMany: {},
              create: data.tagIds.map(tagId => ({
                tagId,
              })),
            }
          : undefined,
        institutions: data.institutionIds
          ? {
              deleteMany: {},
              create: data.institutionIds.map(institutionId => ({
                institutionId,
              })),
            }
          : undefined,
        writers: data.writerIds
          ? {
              deleteMany: {},
              create: data.writerIds.map(writerId => ({
                writerId,
              })),
            }
          : undefined,
      },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        institutions: { include: { institution: true } },
        writers: { include: { writer: true } },
      },
    });
  }

  async delete(id: string): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
      include: {
        author: true,
        categories: { include: { category: true } },
        tags: { include: { tag: true } },
        institutions: { include: { institution: true } },
        writers: { include: { writer: true } },
      },
    });
  }
}