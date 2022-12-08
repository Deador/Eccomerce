import React from 'react';
import classes from "./oneLvlHeader.module.css";

const OneLvl = () => {
    return (
        <div className={classes.nav_one_lvl}>
            <div className={classes.social_media}>
                    <div className={classes.location}>
                        <img
                            src="/source/icons/location.svg"
                            alt=""
                            className={classes.icon_loc}
                        /><div className="text_header_one">Москва</div>
                    </div>
                <div className={classes.icon_loc}>
                    <img
                        src="/source/icons/instagram.svg"
                        alt=""
                        className={classes.icon_social}
                    />
                    <img src="/source/icons/fb.svg" alt="" className={classes.icon_social}/>
                    <img src="/source/icons/03_vk.svg" alt="" className={classes.icon_social}/>
                    <img
                        src="/source/icons/Telegram.svg"
                        alt=""
                        className={classes.icon_social}
                    />
                </div>
                <div className={classes.phone_number}>
                    <div>8 800 333-01-82</div>
                </div>
            </div>
            <a href="#" className={classes.link_map}>Карта магазинов</a>
        </div>
    );
};

export default OneLvl;