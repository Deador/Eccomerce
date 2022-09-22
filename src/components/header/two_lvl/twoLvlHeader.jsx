import React from 'react';
import classes from "./two_lvl.module.css"

const TwoLvl = ({setSearch}) => {

    return (
        <div className={classes.header_row}>
            {/*{<!-- Btn catalog search -->}*/}
            <div className={classes.left_nav_element_two}>
                <div className={classes.btn_catalog}>
                    <hr className={classes.line}/>
                    <hr className={classes.line}/>
                    <hr className={classes.line}/>
                </div>
                <a href="" className={classes.logo}>
                    <img src="/source/logo.svg" alt="" className=""/>
                </a>
                <input type="search" className={classes.search} placeholder="Я ищу…" onChange={(e)=>setSearch(e.target.value)}/>
            </div>

            {/*{ <!-- Icons nav -->}*/}
            <div className={classes.right_nav_element_two}>
                <div className={classes.item_nav}>
                    <img
                        src="/source/icons/icons_menu/heart.svg"
                        alt=""

                    /><a href="" className={classes.text_icon}>Избранное</a>
                </div>
                <div className={classes.item_nav}>
                    <img
                        src="/source/icons/icons_menu/user.svg"
                        alt=""
                    /><a href="" className={classes.text_icon}>Войти</a>
                </div>
                <div className={classes.item_nav}>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.849609 1.6001C0.849609 1.18588 1.1854 0.850098 1.59961 0.850098H3.26628C3.58324 0.850098 3.86598 1.04935 3.97258 1.34785L7.74405 11.9081L7.74412 11.9083C7.87511 12.2739 8.22035 12.5168 8.60711 12.5168H16.1929C16.5925 12.5168 16.9445 12.2592 17.0661 11.8796L18.5634 5.68343H7.03794C6.62373 5.68343 6.28794 5.34764 6.28794 4.93343C6.28794 4.51922 6.62373 4.18343 7.03794 4.18343H19.5163C19.7462 4.18343 19.9634 4.28889 20.1056 4.46955C20.2478 4.65021 20.2993 4.88612 20.2453 5.10961L18.5186 12.2546C18.5154 12.2678 18.5119 12.2809 18.508 12.2939C18.2012 13.3169 17.261 14.0168 16.1929 14.0168H8.60711C7.5856 14.0168 6.6759 13.3747 6.33184 12.4137L6.33164 12.4132L2.73773 2.3501H1.59961C1.1854 2.3501 0.849609 2.01431 0.849609 1.6001ZM9.10026 17.3501C8.59447 17.3501 8.18359 17.761 8.18359 18.2668C8.18359 18.7725 8.59447 19.1834 9.10026 19.1834C9.60605 19.1834 10.0169 18.7725 10.0169 18.2668C10.0169 17.761 9.60605 17.3501 9.10026 17.3501ZM6.68359 18.2668C6.68359 16.9326 7.76605 15.8501 9.10026 15.8501C10.4345 15.8501 11.5169 16.9326 11.5169 18.2668C11.5169 19.601 10.4345 20.6834 9.10026 20.6834C7.76605 20.6834 6.68359 19.601 6.68359 18.2668ZM14.8496 18.2668C14.8496 17.761 15.2605 17.3501 15.7663 17.3501C16.2721 17.3501 16.6829 17.761 16.6829 18.2668C16.6829 18.7725 16.2721 19.1834 15.7663 19.1834C15.2605 19.1834 14.8496 18.7725 14.8496 18.2668ZM15.7663 15.8501C14.4321 15.8501 13.3496 16.9325 13.3496 18.2668C13.3496 19.601 14.4321 20.6834 15.7663 20.6834C17.1005 20.6834 18.1829 19.601 18.1829 18.2668C18.1829 16.9325 17.1005 15.8501 15.7663 15.8501Z" fill="#222529"/>
                    </svg>
                    <a href="" className={classes.text_icon}>Корзина</a>
                </div>
            </div>
        </div>

    );
};

export default TwoLvl;