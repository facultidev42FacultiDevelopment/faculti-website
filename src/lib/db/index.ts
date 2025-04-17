import { PrismaClient } from './generated/prisma';
import { CategoryRepository } from './repository/category-repository';
import { InstitutionRepository } from './repository/institution-repository';
import { PostRepository } from './repository/post-repository';
import { TagRepository } from './repository/tag-repository';
import { UserRepository } from './repository/user-repository';
import { WriterRepository } from './repository/writer-repository';

export const prisma = new PrismaClient();

export const postRepo = new PostRepository(prisma);
export const userRepo = new UserRepository(prisma);
export const categoryRepo = new CategoryRepository(prisma);
export const tagRepo = new TagRepository(prisma);
export const institutionRepo = new InstitutionRepository(prisma);
export const writerRepo = new WriterRepository(prisma);