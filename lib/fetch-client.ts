/* eslint-disable no-console */
export const fetchAPI = async (
  query: string,
  variables?: {
    id?: string,
    idType?: string,
  },
  revalidate: boolean = false,
) => {
  const result = await fetch('http://next13.gwst13.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: revalidate ? 10 : undefined,
    },
  });

  const json = await result.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
};
