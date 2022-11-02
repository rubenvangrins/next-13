import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  message: string
}

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  // No token? Bail..
  if (req.query.token !== 'password') {
    return res
      .status(401)
      .json({ message: 'Invalid token. Please check your .env file.' });
  }

  // No slug? Bail...
  if (!req.query.slug) {
    return res.status(400).json({
      message: 'A slug is required to revalidate the cache.',
    });
  }

  try {
    // Attempt to revalidate the cache for the slug.
    await res.revalidate(req.query.slug as string);
    console.log(`Revalidated cache for ${req.query.slug}`); // eslint-disable-line no-console
    return res.status(200).json({
      message: `Success! The cache for ${req.query.slug} was successfully revalidated.`,
    });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({
      message: error.message,
    });
  }
}
