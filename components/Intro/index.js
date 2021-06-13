import styles from './Intro.module.css'

const Intro = () => (
  <>
    <div className={styles.intro}>
      <div className={styles.shortOne}>
        <p className={styles.greeting}>Hi, I’m Anmol,</p>
        <p className={styles.myTitle}>
          a Go lang, Java and JS developer <br />

        </p>
        <a target="_blank" rel="noopener noreferrer" href="mailto:amaniyar000@gmail.com">
          <button className={styles.helloButton}>Greet</button>
        </a>
      </div>
      <div className={styles.longOne}>
        <p>
          I'm a Software developer with practical skills in Java,
          Go lang, JavaScript, and associated technologies
          as well as skill certification from CDAC ACTS Pune
          seeking relevant position as a backend or full stack
          developer.
        </p>
        
      </div>
    </div>
    <div className={styles.br}></div>
  </>
)

export default Intro
