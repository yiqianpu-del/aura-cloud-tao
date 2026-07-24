import { createClient } from '@sanity/client';

const projectId = 'bar29scb';
const dataset = 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-07-24',
  useCdn: true,
});

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-07-24',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});
