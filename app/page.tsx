import { ComponentInterface } from '../declare/global.components';
import { fetchAPI } from '../lib/fetch-client';
import { getPageData } from '../lib/query/pages.data';

export interface PageInterface {
  page: {
    __typename: string;
    title: string;

    acfComponents: {
      components: ComponentInterface[];
    };

    content: string
  }
}

export default async function Page() {
  const { page } = await fetchAPI(getPageData, { id: '/' }) as PageInterface;

  if (!page) {
    return (<h1>404</h1>);
  }

  return (
    <h1>{page.title && page.title}</h1>
  );
}
