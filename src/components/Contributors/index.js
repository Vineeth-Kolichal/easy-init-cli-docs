import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Vineeth-Kolichal/easy_init_cli/contributors')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        return response.json();
      })
      .then(data => {
        setContributors(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className={styles.contributors}>
        <div className="container">
          <h2 className={styles.title}>Contributors</h2>
          <p className={styles.loading}>Loading contributors...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return null; // Silently fail if GitHub API is unavailable
  }

  if (contributors.length === 0) {
    return null;
  }

  return (
    <section className={styles.contributors}>
      <div className="container">
        <h2 className={styles.title}>Contributors</h2>
        <p className={styles.subtitle}>
          Thanks to these amazing people who have contributed to Easy Init CLI! 💙
        </p>
        <div className={styles.contributorGrid}>
          {contributors.map((contributor) => (
            <a
              key={contributor.id}
              href={contributor.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contributorCard}
              title={`${contributor.login} - ${contributor.contributions} contributions`}
            >
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className={styles.avatar}
              />
              <div className={styles.info}>
                <h3 className={styles.name}>{contributor.login}</h3>
                <p className={styles.contributions}>
                  {contributor.contributions} {contributor.contributions === 1 ? 'contribution' : 'contributions'}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
