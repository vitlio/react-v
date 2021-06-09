import React from 'react';
import style from './header.module.css';
import {NavLink} from 'react-router-dom';

function Header(){
    return (
        <div className={style.divStyle}>
            <ul className={style.headerLinks}>
                <li><NavLink to="/first"  activeClassName={style.headerLinksActive}>Первая   </NavLink></li>
                <li><NavLink to="/second" activeClassName={style.headerLinksActive}>Вторая   </NavLink></li>
                <li><NavLink to="/third"  activeClassName={style.headerLinksActive}>Третья   </NavLink></li>
                <li><NavLink to="/fourth" activeClassName={style.headerLinksActive}>Четвертая</NavLink></li>
                <li><NavLink to="/fifth"  activeClassName={style.headerLinksActive}>Пятая    </NavLink></li>
                <li><NavLink to="/six"    activeClassName={style.headerLinksActive}>Шестая   </NavLink></li>
            </ul>
        </div>
    );
}

export default Header;