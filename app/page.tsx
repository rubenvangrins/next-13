import { fetchAPI } from '../lib/fetch-client';
import { getCurrentSlug } from '../lib/query/pages.data';

export default async function Page() {
  const { page } = await fetchAPI(getCurrentSlug, { id: '/' });

  if (!page) {
    return (<h1>404</h1>);
  }

  return (
    <h1>{page.title && page.title}</h1>
  );
}
