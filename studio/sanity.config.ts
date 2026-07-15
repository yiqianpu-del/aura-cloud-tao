import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sacred Tao Wisdom',
  projectId: 'aaarojtl',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // ============ PAGES ============
            S.listItem()
              .title('📄 Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.documentTypeListItem('homePage').title('🏠 Home Page'),
                    S.divider(),
                    S.documentTypeListItem('simplePage').title('About'),
                    S.documentTypeListItem('simplePage').title('Contact'),
                    S.documentTypeListItem('simplePage').title('FAQ'),
                    S.documentTypeListItem('simplePage').title('Culture'),
                    S.documentTypeListItem('simplePage').title('Community'),
                    S.documentTypeListItem('simplePage').title('Learn'),
                  ])
              ),
            S.divider(),

            // ============ CONTENT ============
            S.listItem()
              .title('🔮 Content Library')
              .child(
                S.list()
                  .title('Content Library')
                  .items([
                    S.documentTypeListItem('service').title('Services'),
                    S.documentTypeListItem('product').title('Products'),
                    S.documentTypeListItem('talisman').title('Talismans'),
                    S.documentTypeListItem('blogPost').title('Blog Posts'),
                  ])
              ),
            S.divider(),

            // ============ SETTINGS ============
            S.documentTypeListItem('siteConfig').title('⚙️ Site Config'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
