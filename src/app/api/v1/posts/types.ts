export interface PostResponse {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  imageUrl: string | null;
  date: string;
  dateGmt: string;
  modified: string | null;
  modifiedGmt: string | null;
  slug: string;
  status: string;
  commentStatus: string;
  pingStatus: string;
  guid: string | null;
  menuOrder: number;
  vimeoVideoId: string | null;
  author: {
    id: string;
    name: string;
    slug: string;
    email: string | null;
    url: string | null;
    avatarUrl: string | null;
  };
  categories: {
    category: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
  institutions: {
    institution: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
  writers: {
    writer: {
      id: string;
      name: string;
      slug: string;
      imgUrl: string | null;
    };
  }[];
  createdAt: string;
  updatedAt: string;
}


export interface RawPost {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  imageUrl: string | null;
  date: Date;
  dateGmt: Date;
  modified: Date | null;
  modifiedGmt: Date | null;
  slug: string;
  status: string;
  commentStatus: string;
  pingStatus: string;
  guid: string | null;
  menuOrder: number;
  vimeoVideoId: string | null;
  authorId: string;
  author: {
    id: string;
    name: string;
    slug: string;
    email: string | null;
    url: string | null;
    avatarUrl: string | null;
  };
  categories: { category: { id: string; name: string; slug: string } }[];
  tags: { tag: { id: string; name: string; slug: string } }[];
  institutions: { institution: { id: string; name: string; slug: string } }[];
  writers: { writer: { id: string; name: string; slug: string; imgUrl: string | null } }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ErrorResponse {
  error: {
    message: string;
    details?: string[] | Record<string, string[] | undefined> | undefined;
  };
}

export interface CategoryPosts {
  categoryName: string;
  posts: PostResponse[];
  total: number;
}

export interface ApiResponse {
  data: CategoryPosts[];
  meta: {
    take: number;
    skip: number;
    order: 'latest' | 'random';
    randomSelection?: boolean;
    categories?: number;
  };
}

export interface TagPostsResponse {
  tag: { name: string };
  posts: PostResponse[];
  take: number;
  total: number;
}

export interface CategoryPostGroup {
  category: {
    id: string;
    name: string;
    slug: string;
    parentId: string | null;
  };
  posts: PostResponse[];
}

export interface FilterOption {
  id: string;
  name: string;
  slug: string;
  type?: string;
}


export interface PaginationInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}
export interface ParentCategoryResponse {
  parentCategory: {
    id: string;
    name: string;
    slug: string;
    type?: string;
  };
  daughterCategory?: {
    id: string;
    name: string;
    slug: string;
    type?: string;
  } | null;
  posts: PostResponse[];
  pagination: PaginationInfo;
  filterOptions: FilterOption[];
}
