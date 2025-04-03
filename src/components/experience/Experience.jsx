import { useState } from "react";
import "./exp.css";

const projects = {
    "Several Systems Solution | Стартап": {
        title: "Several Systems Solution",
        role: "Java Developer & JS Developer",
        description: [
            "Разработал серверную архитектуру мессенджера на Spring Boot и оптимизировал базу данных PostgreSQL.",
            "Реализовал механизмы аутентификации и авторизации с использованием JWT.",
            "Спроектировал API для взаимодействия клиентского приложения с сервером и внедрил функции обмена сообщениями в реальном времени с WebSocket."
        ]
    },
    "Ступор": {
        title: "Ступор",
        role: "Java Developer",
        description: [
            "Разработал микросервисную архитектуру, улучшив масштабируемость и поддержку приложений.",
            "Спроектировал систему интеграции физических устройств для обмена данными в реальном времени.",
            "Организовал миграцию с монолита на микросервисы",
            "Разработал бекенд для CRM",
            "Развернул Git-сервер"
        ]
    },
    "СБЕР": {
        title: "СБЕР",
        role: "Java Developer",
        description: [
            "Внедрение новых фич в сервисы продукта",
            "Поиск и исправление багов",
            "Покрытие кода Unit тестами",
            "Обновление и актуализация таблиц базы данных",
            "Анализ логов"
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
