import { fetchAPI } from "../lib/fetch-client";
import { getAllSlugs, getCurrentSlug } from "../lib/query/pages.data";

export async function generateStaticParams() {
  const { pages } = await fetchAPI(getAllSlugs);

  return pages.nodes.map((page: { uri: string }) => ({
    slug: page.uri,
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const data = await fetchAPI(getCurrentSlug, {
    slug: !params.slug ? '/' : `/${params.slug.join('/')}/`
  });

  if (!data.page) return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
    </>
  );

  return (
    <>
      <h1>{data.page.title}</h1>
    </>
  )
}
