import { fetchAPI } from '../../lib/fetch-client';
import { getAllSlugs, getPageData } from '../../lib/query/pages.data';
import Components from '../../src/shared/Components';
import { PageInterface } from '../page';

export async function generateStaticParams() {
  const { pages } = await fetchAPI(getAllSlugs);

  return pages.nodes
    .filter(({ uri }: { uri: string }) => uri !== '/')
    .map(({ uri }: { uri: string }) => ({
      slug: uri.split('/').filter((item) => item),
    }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { page } = await fetchAPI(getPageData, { id: !params.slug ? '/' : params.slug.join('/') }) as PageInterface;

  if (!page) {
    return (<h1>404</h1>);
  }

  const { acfComponents: { components }, contentType: { node: { graphqlSingleName: postType } } } = page;

  return (
    <>
      <h1>{page.title && page.title}</h1>
      <Components postType={postType} components={components} />
    </>
  );
}
