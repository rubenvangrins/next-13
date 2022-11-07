import { fetchAPI } from '../../lib/fetch-client';
import { getAllSlugs, getPageData } from '../../lib/query/pages.data';
// import Text from '../../src/components/Text';
// import { capital } from '../../utils/text';
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
  const pageSlug = params.slug.join('/');

  const { page } = await fetchAPI(getPageData, { id: !params.slug ? '/' : pageSlug }) as PageInterface;

  if (!page) {
    return (<h1>404</h1>);
  }

  // const { title, acfComponents: { components }, contentType: { node: { graphqlSingleName: postType } } } = page;
  const { title, content, __typename: postType } = page;

  console.log(postType);

  return (
    <>
      <h1>{title && title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />

      {/* {components.map((component, index) => {
        const { fieldGroupName } = component;

        switch (fieldGroupName) {
          case `${capital(postType)}_Acfcomponents_Components_Text`:
            return <Text key={index} {...component} />;
          default:
            return null;
        }
      })} */}
    </>
  );
}
