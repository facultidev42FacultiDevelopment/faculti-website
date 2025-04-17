import { PrismaClient, Writer } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface WriterCreateInput {
  name: string;
  slug: string;
  imgUrl?: string;
}

export interface WriterUpdateInput {
  name?: string;
  slug?: string;
  imgUrl?: string;
}

export class WriterRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: WriterCreateInput): Promise<Writer> {
    return this.prisma.writer.create({
      data: {
        id: uuidv4(),
        name: data.name,
        slug: data.slug,
        imgUrl: data.imgUrl,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async findById(id: string): Promise<Writer | null> {
    return this.prisma.writer.findUnique({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }

  async findBySlug(slug: string): Promise<Writer | null> {
    return this.prisma.writer.findUnique({
      where: { slug },
      include: { posts: { include: { post: true } } },
    });
  }

  async findAll(skip?: number, take?: number): Promise<Writer[]> {
    return this.prisma.writer.findMany({
      skip,
      take,
      include: { posts: { include: { post: true } } },
    });
  }

  async update(id: string, data: WriterUpdateInput): Promise<Writer> {
    return this.prisma.writer.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
        imgUrl: data.imgUrl,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async delete(id: string): Promise<Writer> {
    return this.prisma.writer.delete({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }
}