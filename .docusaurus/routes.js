import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '805'),
    routes: [
      {
        path: '/docs/1.2.0',
        component: ComponentCreator('/docs/1.2.0', 'd0c'),
        routes: [
          {
            path: '/docs/1.2.0',
            component: ComponentCreator('/docs/1.2.0', 'cbe'),
            routes: [
              {
                path: '/docs/1.2.0/aqua_protocol',
                component: ComponentCreator('/docs/1.2.0/aqua_protocol', '237'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2.0/contribution-guidelines',
                component: ComponentCreator('/docs/1.2.0/contribution-guidelines', 'f68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1.2.0/intro',
                component: ComponentCreator('/docs/1.2.0/intro', '62c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', 'f00'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', 'f0d'),
            routes: [
              {
                path: '/docs/next/contribution-guidelines',
                component: ComponentCreator('/docs/next/contribution-guidelines', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/implementations/reference-architecture',
                component: ComponentCreator('/docs/next/implementations/reference-architecture', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/intro',
                component: ComponentCreator('/docs/next/intro', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/aqua_protocol_v1_2',
                component: ComponentCreator('/docs/next/protocol/aqua_protocol_v1_2', '98c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/aqua-identity-protocol',
                component: ComponentCreator('/docs/next/protocol/aqua-identity-protocol', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/aqua-name-resolution',
                component: ComponentCreator('/docs/next/protocol/aqua-name-resolution', '9ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/aqua-protocol-version_1.3',
                component: ComponentCreator('/docs/next/protocol/aqua-protocol-version_1.3', '40c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/assurance-levels-aal',
                component: ComponentCreator('/docs/next/protocol/assurance-levels-aal', 'dd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/data-accounting',
                component: ComponentCreator('/docs/next/protocol/data-accounting', 'd49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/data-governance',
                component: ComponentCreator('/docs/next/protocol/data-governance', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/delegated-witnessing',
                component: ComponentCreator('/docs/next/protocol/delegated-witnessing', '9e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/design-principles',
                component: ComponentCreator('/docs/next/protocol/design-principles', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/guardian',
                component: ComponentCreator('/docs/next/protocol/guardian', '1b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/immutable-hyperlinks',
                component: ComponentCreator('/docs/next/protocol/immutable-hyperlinks', '47e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/protocol/whitepaper',
                component: ComponentCreator('/docs/next/protocol/whitepaper', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '537'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ead'),
            routes: [
              {
                path: '/docs/aqua-protocol-version',
                component: ComponentCreator('/docs/aqua-protocol-version', '1ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/contribution-guidelines',
                component: ComponentCreator('/docs/contribution-guidelines', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '572'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/key-terms',
                component: ComponentCreator('/docs/key-terms', '27e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
