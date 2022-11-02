import { fetchAPI } from "../../lib/fetch-client";
import { getAllSlugs, getCurrentSlug } from "../../lib/query/pages.data";

export async function generateStaticParams() {
  const { pages } = await fetchAPI(getAllSlugs);

  return pages.nodes.map((page: { uri: string }) => ({
    slug: page.uri === '/' ? [''] : page.uri.split('/').filter((item) => item),
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = !params.slug ? '/' : `/${params.slug.join('/')}`;

  const { page } = await fetchAPI(getCurrentSlug, { slug }, { next: { revalidate: 1 }});

  if (!page) {
    return <h1>404</h1>;
  }

  return (
    <>
      <h1>{page.title && page.title}</h1>
    </>
  )
}
