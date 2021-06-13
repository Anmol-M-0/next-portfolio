import Link from 'next/link'

import styles from './Header.module.css'


const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link href="/">
        <h1><a>
          {/* <img className={styles.logo} src={logo} width="150" alt="" /> */}
          Portfolio
        </a></h1>
      </Link>
      <nav className={styles.nav}>
        {/* <a href="">Blog</a> */}
        <a
          className={styles.contactLink}
          href="mailto:amaniyar000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header
