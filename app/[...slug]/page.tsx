import { ComponentInterface } from '../../declare/global.components';
import { fetchAPI } from '../../lib/fetch-client';
import { getAllSlugs, getPageData } from '../../lib/query/pages.data';
import Components from '../../src/shared/Components';

export interface PageInterface {
  page: {
    __typename: string;
    title: string;

    acfComponents: {
      components: ComponentInterface[];
      test: string
    };

    content: string

    featuredImage: {
      node: {
        altText: string
      }
    }
  }
}

export async function generateStaticParams() {
  const { pages } = await fetchAPI(getAllSlugs);

  return pages.nodes
    .filter(({ uri }: { uri: string }) => uri !== '/')
    .map(({ uri }: { uri: string }) => ({
      slug: uri.split('/').filter((item) => item),
    }));
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const pageSlug = params.slug.join('/');

  const { page } = await fetchAPI(getPageData, { id: !params.slug ? '/' : pageSlug }) as PageInterface;

  if (!page) {
    return (<h1>404</h1>);
  }

  const { title, acfComponents: { components }, __typename } = page;

  return (
    <>
      <h1>{title}</h1>
      {components.length > 0 && (
        <Components postType={__typename} components={components} />
      )}
    </>
  );
}
