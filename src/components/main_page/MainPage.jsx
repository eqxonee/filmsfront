import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Это главная страница сайта</h1>
            <p>Для доступа к списку фильмов
                <Link to="/register"> Зарегистрируйтесь</Link> или
                <Link to="/auth"> Войдите</Link>
            </p>
        </div>
    );
};

export default MainPage;