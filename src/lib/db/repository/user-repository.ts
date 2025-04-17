import { PrismaClient, User } from '../generated/prisma';
import { v4 as uuidv4 } from 'uuid';

export interface UserCreateInput {
  name: string;
  slug: string;
  email?: string;
  url?: string;
  avatarUrl?: string;
}

export interface UserUpdateInput {
  name?: string;
  slug?: string;
  email?: string;
  url?: string;
  avatarUrl?: string;
}

export class UserRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: {
        id: uuidv4(),
        name: data.name,
        slug: data.slug,
        email: data.email,
        url: data.url,
        avatarUrl: data.avatarUrl,
      },
      include: { posts: true },
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: { posts: true },
    });
  }

  async findBySlug(slug: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { slug },
      include: { posts: true },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: { posts: true },
    });
  }

  async findAll(skip?: number, take?: number): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
      include: { posts: true },
    });
  }

  async update(id: string, data: UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        slug: data.slug,
        email: data.email,
        url: data.url,
        avatarUrl: data.avatarUrl,
      },
      include: { posts: true },
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
      include: { posts: true },
    });
  }
}