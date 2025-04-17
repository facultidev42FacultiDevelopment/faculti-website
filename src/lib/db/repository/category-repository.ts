import { PrismaClient, Category } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface CategoryCreateInput {
  name: string;
  slug: string;
}

export interface CategoryUpdateInput {
  name?: string;
  slug?: string;
}

export class CategoryRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data: {
        id: uuidv4(),
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async findById(id: string): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { slug },
      include: { posts: { include: { post: true } } },
    });
  }

  async findAll(options?: {
    skip?: number;
    take?: number;
    where?: { name?: { in: string[] } };
    select?: { name: boolean };
  }): Promise<Category[]> {
    if (options?.select) {
      return this.prisma.category.findMany({
        skip: options.skip,
        take: options.take,
        where: options.where,
        select: {
          id: true,
          name: true,
          slug: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    }
  
    return this.prisma.category.findMany({
      skip: options?.skip,
      take: options?.take,
      where: options?.where,
      include: { posts: { include: { post: true } } },
    });
  }

  async update(id: string, data: CategoryUpdateInput): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async delete(id: string): Promise<Category> {
    return this.prisma.category.delete({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }
}