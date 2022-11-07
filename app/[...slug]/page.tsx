import { fetchAPI } from '../../lib/fetch-client';
import { getPageData } from '../../lib/query/pages.data';
import Components from '../../src/shared/Components';
import { PageInterface } from '../page';

// export async function generateStaticParams() {
//   const { pages } = await fetchAPI(getAllSlugs);

//   return pages.nodes
//     .filter(({ uri }: { uri: string }) => uri !== '/')
//     .map(({ uri }: { uri: string }) => ({
//       slug: uri.split('/').filter((item) => item),
//     }));
// }

export default async function Page({ params }: { params: { slug: string[] } }) {
  const pageSlug = params.slug.join('/');

  const { page } = await fetchAPI(getPageData, { id: !params.slug ? '/' : pageSlug }) as PageInterface;

  if (!page) {
    return (<h1>404</h1>);
  }

  const { title, acfComponents: { components }, contentType: { node: { graphqlSingleName: postType } } } = page;

  return (
    <>
      <h1>{title && title}</h1>
      <Components postType={postType} components={components} />
    </>
  );
}
