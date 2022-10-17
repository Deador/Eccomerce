import React, {useContext} from 'react';
import classes from "./Header.module.css"
import {AuthContext} from "../../../context/context";

const Header = () => {

    // Выход
    const {auth, setAuth} = useContext(AuthContext);
    const logOut = () => {
        setAuth(false);
        localStorage.removeItem("auth");
    };

    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.container__nav}>
                    <div className={classes.nav}>
                        <svg className={classes.nav_icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 3V21" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M16.1667 6H9.91667C9.14312 6 8.40125 6.31607 7.85427 6.87868C7.30729 7.44129 7 8.20435 7 9C7 9.79565 7.30729 10.5587 7.85427 11.1213C8.40125 11.6839 9.14312 12 9.91667 12H14.0833C14.8569 12 15.5987 12.3161 16.1457 12.8787C16.6927 13.4413 17 14.2044 17 15C17 15.7956 16.6927 16.5587 16.1457 17.1213C15.5987 17.6839 14.8569 18 14.0833 18H7"
                                stroke="#222529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Товары
                    </div>
                    <div className={classes.nav}>
                        <svg className={classes.nav_icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.76923 15H4.84615C4.35652 15 3.88695 14.8055 3.54073 14.4593C3.1945 14.1131 3 13.6435 3 13.1538V4.84615C3 4.35652 3.1945 3.88695 3.54073 3.54073C3.88695 3.1945 4.35652 3 4.84615 3H13.1538C13.6435 3 14.1131 3.1945 14.4593 3.54073C14.8055 3.88695 15 4.35652 15 4.84615V5.76923"
                                stroke="#222529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M9 11C9 9.89543 9.89543 9 11 9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H11C9.89543 21 9 20.1046 9 19V11Z"
                                stroke="#222529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Типы
                    </div>
                </div>

                <div className={classes.nav} onClick={logOut}>
                    <svg className={classes.nav_icon} width="25" height="24" viewBox="0 0 25 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 12L1.91435 11.5315L1.53953 12L1.91435 12.4685L2.5 12ZM11.5 12.75C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25V12.75ZM5.91435 6.53148L1.91435 11.5315L3.08565 12.4685L7.08565 7.46852L5.91435 6.53148ZM1.91435 12.4685L5.91435 17.4685L7.08565 16.5315L3.08565 11.5315L1.91435 12.4685ZM2.5 12.75H11.5V11.25H2.5V12.75Z"
                            fill="#757575"/>
                        <path
                            d="M10.5 8.13193V7.38851C10.5 5.77017 10.5 4.961 10.974 4.4015C11.4479 3.84201 12.2461 3.70899 13.8424 3.44293L15.5136 3.1644C18.7567 2.62388 20.3782 2.35363 21.4391 3.25232C22.5 4.15102 22.5 5.79493 22.5 9.08276V14.9172C22.5 18.2051 22.5 19.849 21.4391 20.7477C20.3782 21.6464 18.7567 21.3761 15.5136 20.8356L13.8424 20.5571C12.2461 20.291 11.4479 20.158 10.974 19.5985C10.5 19.039 10.5 18.2298 10.5 16.6115V16.066"
                            stroke="#757575" strokeWidth="1.5"/>
                    </svg>
                    Выход
                </div>
            </div>
        </div>
    );
};

export default Header;