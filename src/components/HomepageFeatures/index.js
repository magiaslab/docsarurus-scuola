import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Guide per alunni',
    Svg: require('@site/static/img/alunni.svg').default,
    description: (
      <>
        Un luogo dove trovare le guide per le componenti digitali della scuola
      </>
    ),
  },
  {
    title: 'Docenti e personale scolastico',
    Svg: require('@site/static/img/docenti.svg').default,
    description: (
      <>
        Le guide per una didattica digitale migliore e per aiutare alunni e famiglie nella transizione digitale
      </>
    ),
  },
  {
    title: 'Famiglie e genitori',
    Svg: require('@site/static/img/famiglie.svg').default,
    description: (
      <>
        Le guide ai servizi digitali della scuola
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
