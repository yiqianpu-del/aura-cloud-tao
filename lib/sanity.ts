import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aaarojtl';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
const readToken = process.env.SANITY_READ_TOKEN;

export const client = createClient({
  projectId, dataset, apiVersion,
  useCdn: true, perspective: 'published',
});

export const previewClient = createClient({
  projectId, dataset, apiVersion,
  useCdn: false, token: readToken, perspective: 'previewDrafts',
});

export const getClient = (preview?: boolean) => (preview ? previewClient : client);

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
