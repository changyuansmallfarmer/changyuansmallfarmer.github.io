import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '个人博客',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        记录个人成长历程，分享生活点滴，打造属于自己的精神家园。
      </>
    ),
    link: '/blog',
  },
  {
    title: '技术博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        深入技术研究，分享编程心得，记录学习笔记和技术文章。
      </>
    ),
    link: '/docs',
  },
  {
    title: '个人生活',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        分享生活趣事，记录美好时光，展示真实的个人生活方式。
      </>
    ),
    link: '/blog',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        {link && (
          <a href={link} className={styles.featureLink}>
            了解更多 →
          </a>
        )}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
