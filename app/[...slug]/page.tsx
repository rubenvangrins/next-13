import { fetchAPI } from '../../lib/fetch-client';
import { getAllSlugs, getCurrentSlug } from '../../lib/query/pages.data';

export async function generateStaticParams() {
  const { pages } = await fetchAPI(getAllSlugs);

  const filteredPages = pages.nodes.filter((page: any) => page.uri !== '/');

  return filteredPages.map(({ uri }: { uri: string }) => ({
    slug: uri === '/' ? [''] : uri.split('/').filter((item) => item),
  }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { page } = await fetchAPI(getCurrentSlug, { id: !params.slug ? '/' : params.slug.join('/') });

  if (!page) {
    return (<h1>404</h1>);
  }

  return (
    <h1>{page.title && page.title}</h1>
  );
}
