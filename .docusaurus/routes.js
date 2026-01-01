import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3bf'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e07'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '579'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '5be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/mermaid-examples',
                component: ComponentCreator('/docs/mermaid-examples', 'd92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人博客/docusaurus2.4',
                component: ComponentCreator('/docs/个人博客/docusaurus2.4', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人博客/docusaurus3.7',
                component: ComponentCreator('/docs/个人博客/docusaurus3.7', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人生活/2025国家生育政策8大补贴汇总',
                component: ComponentCreator('/docs/个人生活/2025国家生育政策8大补贴汇总', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人生活/孕早期',
                component: ComponentCreator('/docs/个人生活/孕早期', '48d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人生活/怀孕注意',
                component: ComponentCreator('/docs/个人生活/怀孕注意', '85a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人生活/自建房',
                component: ComponentCreator('/docs/个人生活/自建房', 'f7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/个人生活/顺产',
                component: ComponentCreator('/docs/个人生活/顺产', 'f79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/人生哲学/人生的底层逻辑',
                component: ComponentCreator('/docs/人生哲学/人生的底层逻辑', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/AI相关/AI核心技能',
                component: ComponentCreator('/docs/技术博客/AI相关/AI核心技能', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/网络/网络问题',
                component: ComponentCreator('/docs/技术博客/网络/网络问题', 'ecf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/调试/linux信号机制',
                component: ComponentCreator('/docs/技术博客/调试/linux信号机制', '2d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/调试/Linux内核追踪神器：perf实现原理剖析',
                component: ComponentCreator('/docs/技术博客/调试/Linux内核追踪神器：perf实现原理剖析', '94e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/调试/Linux性能分析神器ftrace：从原理到实战',
                component: ComponentCreator('/docs/技术博客/调试/Linux性能分析神器ftrace：从原理到实战', 'f1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/调试/Linux性能工具(三)ftrace框架',
                component: ComponentCreator('/docs/技术博客/调试/Linux性能工具(三)ftrace框架', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/技术博客/调试/信号机制学习记录',
                component: ComponentCreator('/docs/技术博客/调试/信号机制学习记录', 'e6a'),
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
