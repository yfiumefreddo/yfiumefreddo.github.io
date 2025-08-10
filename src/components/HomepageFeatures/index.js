import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    description: (
      <>
      <a href="pictures/yves.png"><img src="pictures/yves_t.png" alt="yfiumefreddo"/></a>
      </>
    ),
  },
  {
    title: 'Highlights',
    description: (
      <>
      • Creator of <a href="https://gammasoft71.github.io/xtd">xtd</a>, a modern C++ framework inspired by .NET.
      <br/>• 25+ years of experience in software architecture, R&D, and cross-platform development.
      <br/>• Strong expertise in modern C++, UI frameworks, and broadcast industry solutions.
      </>
    ),
  },
  {
    title: 'Nickname',
    description: (
      <>
      <a href="https://gammasoft71.github.io">Gammasoft71</a>
      </>
    ),
  },
  {
    title: 'Phone',
    description: (
      <>
      +32 477 609120
      </>
    ),
  },
  {
    title: 'Email',
    description: (
      <>
      <a href="mailto:y.fiumefreddo@gmail.com">y.fiumefreddo@gmail.com</a>
      </>
    ),
  },
  {
    title: 'Date of Birth',
    description: (
      <>
      January 5, 1971
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('row')}>
      <div className="text--center">
      </div>
      <div className="text--left padding-horiz--md">
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
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
