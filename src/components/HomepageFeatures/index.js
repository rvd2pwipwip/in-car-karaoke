import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Trophy',
    Svg: require('@site/static/img/karaokeTrophyMic.svg').default,
    description: (
      <>
        Enjoy road trips with our in-car karaoke app, packed with scoreable songs and live lyrics for family fun.
      </>
    ),
  },
  {
    title: 'Passenger App',
    Svg: require('@site/static/img/karaokeTrophyMic.svg').default,
    description: (
      <>
        Passengers can grab their phone for synched lyrics and queue management on their screen!
      </>
    ),
  },
  {
    title: 'Sing Safely In-Car',
    Svg: require('@site/static/img/karaokeTrophyMic.svg').default,
    description: (
      <>
        Safely sing on the go: Our karaoke app offers distraction-free, passenger-centric features for secure drive mode fun.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
