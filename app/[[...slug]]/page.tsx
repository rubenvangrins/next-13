import { fetchAPI } from "../../lib/fetch-client";
import { getAllSlugs, getCurrentSlug } from "../../lib/query/pages.data";

const fetchDynamicPages = async () => {
  const result = await fetch('https://rietveld.stellate.sh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getAllSlugs,
    })
  });

  const json = await result.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data.pages;
}

export async function generateStaticParams() {
  const pages = await fetchDynamicPages();

  return pages.nodes.map(({ uri }: { uri: string }) => ({
    slug: uri === '/' ? [''] : uri.split('/').filter((item) => item),
  }));
}

const fetchPageData = async (slug: string) => {
  const result = await fetch('https://rietveld.stellate.sh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getCurrentSlug,
      variables: { slug },
    }),
    cache: 'no-store',
  });

  const json = await result.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { page } = await fetchPageData(!params.slug ? '/' : params.slug.join('/'));

  if (!page) {
    return (
      <h1>404</h1>
    )
  }

  return (
    <>
      <h1>{page.title && page.title}</h1>
      <h1>hoi</h1>
    </>
  )
}
