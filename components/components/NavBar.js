import styles from '../styles/Home.module.css'

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "books", label: "Books" },
  { id: "education", label: "Education" },
  { id: "impact", label: "Community" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Contact" }
]

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        {sections.map(sec => (
          <li key={sec.id}><a href={`#${sec.id}`}>{sec.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
