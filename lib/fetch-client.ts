export const fetchAPI: any = async (
  query: string,
  variables?: { id?: string; idType?: string; language?: string },
  maxTries: number = 3,
) => {
  const headers = { 'Content-Type': 'application/json' };

  if (!maxTries) throw new Error('Failed to fetch API');

  try {
    const res = await fetch('https://rietveld.stellate.sh/', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      // eslint-disable-next-line no-console
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }

    return json.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }

  return fetchAPI(query, variables, maxTries - 1);
};
