import './me.css'
import photo from './../../img/image.png'
import git from './../../img/git.svg'
import tg from './../../img/tg.svg'

const Me = () => {
    return (
        <section className='Me'>
            <div className="container">
                <div className="me__content">
                    <div className="me__text">
                        <div className="text__title">
                            <h1>Меличенков Евгений</h1>
                            <h2>Backend и Fronted разработчик</h2>
                        </div>
                        <div className="text__description">
                            <p>😎 Активно развиваю собственные пет-проекты</p>
                            <p>🔥 Подхожу к разработке с акцентом на эффективность и долгосрочную ценность</p>
                            <p>⚡ Стремлюсь к созданию масштабируемых и устойчивых решений в каждом проекте</p>
                        </div>
                        <div className="socials">
                            <a href="https://t.me/evgml4off" target="_blank" rel="noreferrer">
                                <img src={tg} alt="tg" />
                            </a>
                            <a href="https://github.com/StuffCod3" target="_blank" rel="noreferrer">
                                <img src={git} alt="git" />
                            </a>
                        </div>
                    </div>
                    <div className="me__image">
                        <img src={photo} alt="Me" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Me;