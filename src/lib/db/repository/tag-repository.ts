import { PrismaClient, Tag } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface TagCreateInput {
  name: string;
  slug: string;
}

export interface TagUpdateInput {
  name?: string;
  slug?: string;
}

export class TagRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data: {
        id: uuidv4(),
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async findById(id: string): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }

  async findBySlug(slug: string): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: { slug },
      include: { posts: { include: { post: true } } },
    });
  }

  async findAll(skip?: number, take?: number): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      skip,
      take,
      include: { posts: { include: { post: true } } },
    });
  }

  async update(id: string, data: TagUpdateInput): Promise<Tag> {
    return this.prisma.tag.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async delete(id: string): Promise<Tag> {
    return this.prisma.tag.delete({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }
}