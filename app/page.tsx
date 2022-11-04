import { fetchAPI } from '../lib/fetch-client';
import { /* getAllSlugs, */ getCurrentSlug } from '../lib/query/pages.data';

// export async function generateStaticParams() {
//   const { pages } = await fetchAPI(getAllSlugs);

//   return pages.nodes.map(({ uri }: { uri: string }) => ({
//     slug: uri === '/' ? [''] : uri.split('/').filter((item) => item),
//   }));
// }

export default async function Page() {
  const { page } = await fetchAPI(getCurrentSlug, { id: '/' });

  if (!page) {
    return (<h1>404</h1>);
  }

  return (
    <h1>{page.title && page.title}</h1>
  );
}
