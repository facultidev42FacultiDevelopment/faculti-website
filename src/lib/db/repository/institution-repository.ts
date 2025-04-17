import { PrismaClient, Institution } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface InstitutionCreateInput {
  name: string;
  slug: string;
}

export interface InstitutionUpdateInput {
  name?: string;
  slug?: string;
}

export class InstitutionRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: InstitutionCreateInput): Promise<Institution> {
    return this.prisma.institution.create({
      data: {
        id: uuidv4(),
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async findById(id: string): Promise<Institution | null> {
    return this.prisma.institution.findUnique({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }

  async findBySlug(slug: string): Promise<Institution | null> {
    return this.prisma.institution.findUnique({
      where: { slug },
      include: { posts: { include: { post: true } } },
    });
  }

  async findAll(skip?: number, take?: number): Promise<Institution[]> {
    return this.prisma.institution.findMany({
      skip,
      take,
      include: { posts: { include: { post: true } } },
    });
  }

  async update(id: string, data: InstitutionUpdateInput): Promise<Institution> {
    return this.prisma.institution.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
      },
      include: { posts: { include: { post: true } } },
    });
  }

  async delete(id: string): Promise<Institution> {
    return this.prisma.institution.delete({
      where: { id },
      include: { posts: { include: { post: true } } },
    });
  }
}