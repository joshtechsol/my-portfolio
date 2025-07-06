import Head from 'next/head'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Section from '../components/Section'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Njoroge | CEO & Tech Entrepreneur</title>
        <meta name="description" content="Professional portfolio of Joshua Njoroge - CEO, Software Engineer, Tech Entrepreneur, Writer" />
        <meta property="og:title" content="Joshua Njoroge Portfolio" />
        <meta property="og:description" content="CEO, Software Engineer, Tech Entrepreneur, Writer." />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <main className={styles.main}>
        <Section id="about" title="Profile Summary">
          <p>I am a passionate software engineer, entrepreneur, and the founder of <strong>CoreSphere Africa</strong>. My journey has been rooted in building scalable digital solutions to empower businesses across Africa. From smart POS systems to security technologies and publishing, my mission is to innovate, inspire, and deliver value to every client and community.</p>
        </Section>
        <Section id="skills" title="Core Competencies">
          <ul>
            <li>Software & SaaS Development</li>
            <li>Web & E-Commerce Platforms</li>
            <li>CCTV & Smart Security Installations</li>
            <li>POS Systems & Retail Management</li>
            <li>Car Tracking Solutions</li>
            <li>Graphic Design & Branding</li>
            <li>Digital Publishing & E-books</li>
            <li>Tech Consultancy & Training</li>
          </ul>
        </Section>
        <Section id="experience" title="Experience">
          <h3>CEO – CoreSphere Africa (2024 – Present)</h3>
          <p>Leading a multidisciplinary team to deliver custom digital solutions across various sectors. Successfully launched major products including CoreSphere Smart POS and ProTrack360.</p>
          <h3>CTO – Skylife Technologies (2023 – 2024)</h3>
          <p>Oversaw software architecture and deployment strategies, ensuring high uptime and efficient tech stack adoption.</p>
          <h3>Software Trainer – Chip Intel Links (2023 – 2024)</h3>
          <p>Trained over 100 learners in software development, databases, and system security modules.</p>
        </Section>
        <Section id="projects" title="Notable Projects">
          <ul>
            <li><strong>Smart POS Pro</strong> – A web & mobile POS system with SaaS capabilities.</li>
            <li><strong>ProTrack360</strong> – GPS-enabled vehicle tracking and fleet analytics software.</li>
            <li>Institutional websites for schools, churches, and SMEs.</li>
            <li>Multiple high-quality CCTV & smart surveillance deployments.</li>
          </ul>
        </Section>
        <Section id="books" title="Published Books">
          <ul>
            <li>The Entrepreneur's Journey</li>
            <li>Shadows of Betrayal</li>
            <li>Failing for a Stranger</li>
            <li>When Vows Are Not Enough</li>
            <li>When Blood Turns Cold</li>
          </ul>
        </Section>
        <Section id="education" title="Education & Certifications">
          <ul>
            <li>Diploma in Software Engineering & Web Development</li>
            <li>Diploma in Office Support & Business Management</li>
            <li>Certificate in Business Data Analytics</li>
          </ul>
        </Section>
        <Section id="impact" title="Community Impact">
          <p>Through CoreSphere, I support digital literacy, mentor young developers, and give back through outreach programs to schools and churches in underserved regions.</p>
        </Section>
        <Section id="vision" title="Vision">
          <p>To power African businesses digitally by delivering accessible, reliable, and innovative tech solutions tailored for local needs.</p>
        </Section>
        <Section id="contact" title="Contact">
          <p><strong>Website:</strong> <a href="https://coresphereafrica.online" target="_blank" rel="noopener">www.coresphereafrica.online</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@coresphereafrica.online">info@coresphereafrica.online</a></p>
          <p><strong>Phone:</strong> +254 708 251 832</p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/c/254708251832" target="_blank" rel="noopener">Click Here</a></p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
