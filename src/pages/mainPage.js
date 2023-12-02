import React from 'react';
import style from "./mainPage.module.css";

const MainPage = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <h1>Hello world!</h1>
                {/*<div className={style.container}><RickMortyPage /></div>*/}
                {/*<div className={style.container}><UserComponent /></div>*/}
            </div>

        </div>
    );
};

export default MainPage;