import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Aura Cloud Tao',
  projectId: 'bar29scb',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
