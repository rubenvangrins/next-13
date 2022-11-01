import { fetchAPI } from "../lib/fetch-client";
import { getCurrentSlug } from "../lib/query/pages.data";
import Components from "./shared/Components";

export default async function Page({ params }: { params: { slug: string[] } }) {
  const data = await fetchAPI(getCurrentSlug, {
    slug: !params.slug ? '/' : `/${params.slug.join('/')}/`
  });

  console.log(data);

  if (!data.page) return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
    </>
  );

  return (
    <>
      <h1>{data.page.title}</h1>
    </>
  )
}
