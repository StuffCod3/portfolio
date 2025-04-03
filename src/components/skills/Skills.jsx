import './skills.css'

const Skills = () => {
    return ( 
        <section className='Skills'>
            <div className="container">
                <div className="skills__content">
                    <div className="skills__text">
                        <div className="text__title">
                            <h1>Навыки</h1>
                            <h2>Стек используемых технологий</h2>
                        </div>
                        <div className="text__description">
                            <p>💥 Design Patterns</p>
                            <p>🔍 Code Review</p>
                            <p>🚀 Software architecture</p>
                        </div>
                    </div>
                    <div className="skills__techs">
                        <ul className="skills__list">
                            <li>Kafka</li>
                            <li>Spring</li>
                            <li>Java</li>
                            <li>ELK</li>
                            <li>PostgreSQL</li>
                            <li>K8s</li>
                            <li>Docker</li>
                            <li>CI/CD</li>
                            <li>ReactJS</li>
                            <li>Kotlin</li>
                            <li>OpenShift</li>
                            <li>GIT</li>
                            <li>Python</li>
                            <li>Swagger</li>
                            <li>Redis</li>
                            <li>S3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;