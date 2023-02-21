import styles from './Home.module.css'
import photo from '../assets/myPhoto2.jpg'
import linkedin from '../assets/linkedin.jpg'
import github from '../assets/github.png'
import avatar from '../assets/avatar.png'

export function Home() {
    return (
        <div>
        <section className={styles.wrapperHome}>
            <div className={styles.texts}>
                <div class="animate__animated animate__backInDown animate__delay-1s">Olá, meu nome é</div>
                <span class="animate__animated animate__fadeInTopLeft animate__delay-1s">Leonardo Chaves</span>
                <div class="animate__animated animate__fadeInTopRight animate__delay-1s">Desenvolvedor web</div>
                <div>
                    <div className={styles.links}>
                    <a href="https://www.linkedin.com/in/leo-chaves-8a471122a/">
                        <div className={styles.linkedinLink}>
                            <img src={linkedin} alt="icone linkedin" />
                            <div>Linkedin</div>
                        </div>
                    </a>
                    <a href="https://github.com/LeoAzzE">
                        <div className={styles.githubLink}>
                            <img src={github} alt="icone github" />
                            <div>Github</div>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            <img class="animate__animated animate__pulse" className={styles.myimg} src={avatar} alt="my photo" />
            
        </section>
        </div>
    )
}