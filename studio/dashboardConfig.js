export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d9f71cb172290a9b260337e',
                  title: 'Sanity Studio',
                  name: 'cd-site-studio',
                  apiId: '2d73564e-ab85-4bfb-9090-b53c5c078eff'
                },
                {
                  buildHookId: '5d9f71cb74db5f48020bb3b7',
                  title: 'CD Website',
                  name: 'carolinadoran',
                  apiId: '51287456-d1e0-4338-96b2-2d7db619a232'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bootsa/cd-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://carolinadoran.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
