import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/profile.jpg" alt="Joshua Njoroge" className={styles.profileImg} />
      <h1>Joshua Njoroge</h1>
      <p>CEO | Software Engineer | Tech Entrepreneur | Writer</p>
      <div className={styles.socials}>
        <a href="https://linkedin.com/" target="_blank" rel="noopener"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://github.com/" target="_blank" rel="noopener"><img src="/images/github.svg" alt="GitHub" /></a>
        <a href="mailto:info@coresphereafrica.online"><img src="/images/email.svg" alt="Email" /></a>
      </div>
      <a href="/resume.pdf" className={styles.ctaBtn} target="_blank">Download Resume</a>
    </header>
  )
}
