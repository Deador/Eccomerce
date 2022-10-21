import React from 'react';
import Title from "../../basic/title/Title";
import ButtonRound from "../UI Admin/Button/ButtonRound";
import classes from "./TitleBtn.module.css";

const TitleBtn = ({setValue, title}) => {
    return (
        <div className={classes.container}>
            <Title props={title}/>
            <ButtonRound style={{width: 232, height: 48}} onClick={() => setValue(true)}>Добавить</ButtonRound>
        </div>
    );
};

export default TitleBtn;