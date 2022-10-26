import React from 'react';
import classes from "./Banner.module.css";
import Title from "../../basic/title/Title";

const Banner = () => {
    return (
        <div className={classes.container}>
            <Title props="Что новенького"/>
            <iframe width="1200" height="650" src="https://www.youtube.com/embed/o9z2G6y-2Bg?controls=0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    );
};

export default Banner;