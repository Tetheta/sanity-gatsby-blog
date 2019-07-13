export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d292bc5d7e50e586331b504',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iqcvs6au',
                  apiId: '715282ab-2b06-40f8-a0d5-15fd3f5f2181'
                },
                {
                  buildHookId: '5d292bc581a764bae7a34c93',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-siszfwsa',
                  apiId: 'f27af2fe-e1ea-4ea9-82b4-00a2d6ca84a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tetheta/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-siszfwsa.netlify.com', category: 'apps'}
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
