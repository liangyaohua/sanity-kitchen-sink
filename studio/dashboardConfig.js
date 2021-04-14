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
                  buildHookId: '6076f397eeb6f21f1355e6f8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ipejvcpb',
                  apiId: 'b18db098-29cc-405d-ad99-c0a4150dd666'
                },
                {
                  buildHookId: '6076f397546dc622054777bf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-raeh2b4r',
                  apiId: 'f61154da-056d-4a3f-8915-065e4d05febb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/liangyaohua/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-raeh2b4r.netlify.app', category: 'apps'}
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
