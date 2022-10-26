import React, {useEffect, useState} from 'react';
import classes from "./Tab.module.css";

const Tab = ({props, active, tab}) => {
    const tabClass = [classes.item]

    const [activeTab, setActive] = useState(false);

    useEffect(() => {
        if (tab === props.id) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [tab])


    if (activeTab) {
        tabClass.push(classes.active)
    }

    const index = () => {
        active(props.id)
    }


    return (
        <div>
            <div className={tabClass.join(" ")} onClick={index}>
                {props.title}
            </div>
        </div>
    );
};

export default Tab;