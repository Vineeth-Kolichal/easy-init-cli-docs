import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🏗️ Multiple Architecture Support',
    icon: '🏗️',
    description: (
      <>
        Choose between <strong>Clean Architecture</strong> with BLoC or <strong>MVVM</strong> with Provider.
        More architecture patterns coming soon to fit your project needs.
      </>
    ),
  },
  {
    title: '⚡ Automated Project Setup',
    icon: '⚡',
    description: (
      <>
        Instantly generate a complete, production-ready project structure with a single command.
        Say goodbye to manual boilerplate setup and start building immediately.
      </>
    ),
  },
  {
    title: '📦 Smart Package Management',
    icon: '📦',
    description: (
      <>
        Pre-configured with essential packages: <code>dio</code>, <code>get_it</code>, <code>freezed</code>,
        <code>flutter_bloc</code>/<code>provider</code>, and more. Dependencies ready out of the box.
      </>
    ),
  },
  {
    title: '🎯 Feature-Wise Separation',
    icon: '🎯',
    description: (
      <>
        Organize code by features, not layers. Each feature is self-contained with its own
        data, domain/models, and presentation layers for maximum modularity.
      </>
    ),
  },
  {
    title: '🎨 AI-Powered Development',
    icon: '🎨',
    description: (
      <>
        Includes <code>/ai_docs</code> folder with styling and API flow guides for consistent
        AI-assisted development. Perfect for vibe coding with your favorite AI tools.
      </>
    ),
  },
  {
    title: '🧪 Test-Ready Infrastructure',
    icon: '🧪',
    description: (
      <>
        Built-in testing setup with <code>mocktail</code> for mocking and clear separation
        of concerns. Write unit tests easily with pre-configured test infrastructure.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.iconContainer}>
          <span className={styles.featureIcon}>{icon}</span>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
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
