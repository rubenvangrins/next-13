import { ComponentInterface } from '../../declare/global.components';
import { fetchAPI } from '../../lib/fetch-client';
import { getAllSlugs, getPageData } from '../../lib/query/pages.data';

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

  // const { title, acfComponents: { components }, contentType: { node: { graphqlSingleName: postType } } } = page;
  const { title, content, __typename: postType, acfComponents: { test }, featuredImage } = page;

  return (
    <>
      <h1>{title && title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div dangerouslySetInnerHTML={{ __html: test + postType }} />
      {featuredImage && featuredImage.node.altText}
    </>
  );
}
