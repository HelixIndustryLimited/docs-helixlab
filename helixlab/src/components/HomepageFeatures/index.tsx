import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Friendly',
    Svg: require('@site/static/img/undraw_reading_time_re_phf7.svg').default,
    description: (
      <Translate>
        夜间模式
      </Translate>
    ),
  },
  {
    title: 'Simple',
    Svg: require('@site/static/img/undraw_faq_re_31cw.svg').default,
    description: (
      <Translate>
        快速找到答案
      </Translate>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('@site/static/img/undraw_file_searching_re_3evy.svg').default,
    description: (
      <Translate>
        搜索任何内容
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
