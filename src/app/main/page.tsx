import React from 'react';
import style from './style.module.css'

const MainPage = () => {



    return(
        <div>
        <header className={style.header}>
        <div className={`${style.container} ${style.header__container}`}>
            <select className={style.header__select} name="university">
                <option className={style.header__option} selected value="1">НИУ ВШЭ - Москва</option>
            </select>
            <select className={style.header__select} name="faculty">
                <option className={style.header__option} selected value="1">Факультет компьютерных наук</option>
            </select>
            <a href="#" className={style.header__lk}><img src="img/lk.svg" alt="личный кабинет"/></a>
        </div>
    </header>
    <main className={style.main}>
        <div className={`${style.container} ${style.main__container}`}>
            <div className={style.find}>
                <input placeholder="Предмет" type="text" className={style.findInput}/>
                <button className={style.findButton}>Найти</button>
            </div>
            <div className={style.linkOptionsWrapper}>
                <a className={style.linkOption}>Специалисты</a>
                <a className={style.linkOption}>Заказы</a>
            </div>
            <div className={style.content}>
                <ul className={`${style.content__list} ${style.list_reset}`}>
                    <li className={style.content__item}>
                        <div className={style.item__imgWrapper}>
                            <img className={style.item__img} src="img/user.png" alt="пользователь"/>
                        </div>
                        <div className={style.item__content}>
                            <h3 className={style.item__title}>Хомяк23</h3>
                            <p className={style.item__descr}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam blanditiis ex illo facere voluptas amet, similique perspiciatis aliquid modi earum explicabo nulla alias quos iste cupiditate. Blanditiis, itaque odio?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque inventore, recusandae blanditiis quisquam eos, ullam quas, ratione enim sed excepturi iusto cumque expedita sint itaque optio? Aliquid modi quam ut.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt, illum iure similique culpa facilis ex labore ab. Repudiandae, in. Accusantium nulla provident, placeat consequuntur rerum accusamus temporibus veniam necessitatibus!
                            </p>
                        </div>
                    </li>
                    <li className={style.content__item}>
                        <div className={style.item__imgWrapper}>
                            <img className={style.item__img} src="img/user.png" alt="пользователь"/>
                        </div>
                        <div className={style.item__content}>
                            <h3 className={style.item__title}>Единорог72</h3>
                            <p className={style.item__descr}></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    </div>
    );
};

export default MainPage