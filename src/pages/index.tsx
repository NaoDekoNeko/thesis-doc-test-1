import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const areas = [
  {
    emoji: '⚙️',
    title: 'CI/CD',
    desc: 'Pipelines de integración y entrega continua con GitHub Actions y OIDC.',
    to: '/docs/cicd/github-actions',
  },
  {
    emoji: '🐳',
    title: 'Containers',
    desc: 'Empaquetado de aplicaciones con Docker y builds multi-stage optimizados.',
    to: '/docs/containers/docker-fundamentals',
  },
  {
    emoji: '🏗️',
    title: 'IaC',
    desc: 'Infraestructura declarativa en GCP con módulos Terraform reutilizables.',
    to: '/docs/iac/terraform-basics',
  },
  {
    emoji: '📊',
    title: 'Observability',
    desc: 'Logging estructurado, métricas y estrategias de monitoreo de servicios.',
    to: '/docs/observability/logging',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={`hero hero--primary ${styles.heroBanner}`}>
        <div className="container">
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Explorar documentación →
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {areas.map(({emoji, title, desc, to}) => (
                <div key={title} className="col col--3 margin-bottom--lg">
                  <Link to={to} style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="card card--full-height padding--lg">
                      <div className="card__header">
                        <span style={{fontSize: '2rem'}}>{emoji}</span>
                        <Heading as="h3">{title}</Heading>
                      </div>
                      <div className="card__body">
                        <p>{desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
