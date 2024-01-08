import React from 'react'
import styles from './Card.module.css'
interface Iprops {
  name?: string;
  title?: string;
  interests?: string[];
  twitterUrl?: string;
  linkedinUrl?: string;
}

const BlogCard: React.FC<Iprops> = ({ name, title, interests, twitterUrl, linkedinUrl }) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.title}>{title}</p>
      <h2 className={styles.header}>Interests</h2>
      <ul className={styles.list}>
        {interests?.map((interest) => (
          <li key={interest}>{interest}</li> // Use interest as key if it's unique
        ))}
      </ul>
      <div className={styles.socialLinks}>
        <a href={linkedinUrl} className={`${styles.button} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={twitterUrl} className={`${styles.button} ${styles.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  )
}
BlogCard.defaultProps = {
  name: 'Lokeshwar',
  title: 'Ta from 100xdevs cohort',
  interests: ['Iconic', 'Open source', 'App dev'],
  twitterUrl: '#',
  linkedinUrl: '#'
}
export default BlogCard
