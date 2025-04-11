import { useState } from "react";
import "./exp.css";

const projects = {
    "Several Systems Solution | Стартап": {
        title: "Several Systems Solution",
        role: "Java Developer & JS Developer",
        description: [
            "Создавал серверную часть мессенджера, обеспечив надежную и эффективную работу системы",
            "Реализовал безопасную аутентификацию пользователей и удобный API для клиентского приложения",
            "Внедрил функции обмена сообщениями в реальном времени, улучшив пользовательский опыт",
            "Разработал прототип UI веб интерфейса для мессенджера"
        ]
    },
    "Ступор": {
        title: "Ступор",
        role: "Java Developer",
        description: [
            "Спроектировал микросервисную архитектуру и организовал миграцию с монолита на микросервисы",
            "Интегрировал физические устройства для обмена данными в реальном времени",
            "Разработал бекенд для внутренней корпоративной CRM-системы"
        ]
    },
    "СБЕР": {
        title: "СБЕР",
        role: "Java Developer",
        description: [
            "Разработка и развитии сервисов продукта, внедряя новые функции и улучшая их функциональность",
            "Исправление багов, обеспечение стабильности кода через написание Unit-тестов",
            "Поддержка актуальности базы данных и анализ логов для оптимизации работы системы"
        ]
    }
};

const Experience = () => {
    const [selectedProject, setSelectedProject] = useState("Several Systems Solution | Стартап");

    return (
        <section className="Experience">
            <div className="container">
                <div className="exp__content">
                    <div className="exp__projects">
                        <div className="text__title">
                            <h1>Решенные задачи</h1>
                            <h2>На проектах</h2>
                        </div>
                        <div className="buttons">
                            {Object.keys(projects).map((project) => (
                                <button
                                    key={project}
                                    className={`project-button ${selectedProject === project ? "active" : ""}`}
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {project}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="project-details">
                        <h2>{projects[selectedProject].role}</h2>
                        <ul>
                            {projects[selectedProject].description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
