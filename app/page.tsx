import { ComponentInterface } from '../declare/global.components';
import { fetchAPI } from '../lib/fetch-client';
import { getPageData } from '../lib/query/pages.data';
import Components from '../src/shared/Components';

export interface PageInterface {
  page: {
    title: string;

    acfComponents: {
      components: ComponentInterface[];
    };

    contentType: {
      node: {
        graphqlSingleName: string;
      };
    };
  }
}

export default async function Page() {
  const { page } = await fetchAPI(getPageData, { id: '/' }) as PageInterface;

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
