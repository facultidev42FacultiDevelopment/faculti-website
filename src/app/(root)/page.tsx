import FeaturedLatestPosts, { LatestPostResponse } from '@/components/layout/featured';
import PolicyCarousel from '@/components/layout/landing/policy';
import ResearchCarousel from '@/components/layout/landing/research';
import { PostResponse } from '@/app/api/v1/posts/types';
import { headers } from 'next/headers';
import AnalysisCarousel from '@/components/layout/landing/analysis';

interface TagPostsResponse {
  category: string;
  posts: PostResponse[];
}

async function getBaseUrl() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';

  return "https://0gzmmx2m-4000.uks1.devtunnels.ms";
}

async function fetchTagPosts(): Promise<TagPostsResponse[]> {
  const baseUrl = await getBaseUrl();

  const categoryMapParam = [
    'research:prof|artshums|scicat|socsci|policy;10',
    'policy:central-banks|global-organisations|social-policy;10',
    'analysis:editorial|deep-dive|perspective;10'
  ].join(',');

  const response = await fetch(
    `${baseUrl}/api/v1/posts/by-category?map=${encodeURIComponent(categoryMapParam)}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.statusText}`);
  }

  return response.json();
}

async function fetchLatestPosts(take: number = 5): Promise<LatestPostResponse[]> {
  const baseUrl = await getBaseUrl();
  const response = await fetch(`${baseUrl}/api/v1/posts/latest-posts?take=${take}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch latest posts: ${response.statusText}`);
  }

  return response.json();
}

export default async function Home() {
  const tagPosts = await fetchTagPosts();
  const latestPosts = await fetchLatestPosts(5);

  const researchPosts = tagPosts.find((result) => result.category.toLowerCase() === 'research')?.posts || [];
  const policyPosts = tagPosts.find((result) => result.category.toLowerCase() === 'policy')?.posts || [];
  const analysisPosts = tagPosts.find((result) => result.category.toLowerCase() === 'analysis')?.posts || [];

  return (
    <div className="w-full max-w-full block opacity-100 visible mb-16">
      <FeaturedLatestPosts posts={latestPosts} />
      <ResearchCarousel posts={researchPosts} />
      <PolicyCarousel posts={policyPosts} />
      <AnalysisCarousel posts={analysisPosts} />
    </div>
  );
}
