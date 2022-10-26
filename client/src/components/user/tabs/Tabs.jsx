import React, {useEffect, useState} from 'react';
import classes from "./Tabs.module.css";
import Tab from "./tab/Tab";

const Tabs = () => {

    const [tab, setTab] = useState(1);

    const [content, setContent] = useState(1)

    const getActive = (index) => {
        setTab(index)
        setContent(index)
    }
    console.log(content)

    const [test, setTest] = useState([])
    const find = () => {
        const result = info.find(i => i.id === content)
        setTest(result)
    }

    useEffect(() => {
        find()
    }, [content])


    const [data, setData] = useState([{
        id: 1,
        title: "О товаре",
    }, {
        id: 2,
        title: "Правила"
    }, {
        id: 3,
        title: "Отзывы"
    }, {
        id: 4,
        title: "Наличие и доставка"
    }]);

    const [info, setInfo] = useState([{
        id: 1,
        content: "«Взрывные котята» — это карточная игра, дико популярная на «Кикстартере». Она там собрала почти девять миллионов долларов — для настольных игр это рекорд. Все в неё просто влюбились. Кому-то эта игра напоминает «Уно», кому-то русскую рулетку. Вы тянете карты из колоды, в которой среди прочих карт замешаны взрывные котята — они сразу выкидывают вас из игры. Все остальные карты помогают избежать встречи с опасными котятами и подставить под удар друзей. Вам нужно остаться в игре последним выжившим."
    }, {
        id: 2,
        content: "Правила будут добавленны позже"
    }, {
        id: 3,
        content: "Отзывов на товар пока нет"
    }, {
        id: 4,
        content: "Доставка 100500 рублей"
    }])

    return (
        <div>
            <div className={classes.container}>
                <div className={classes.group_items}>
                    {data.map(item => <Tab props={item} active={getActive} tab={tab} content={test}/>)}
                </div>

            </div>
            <div className={classes.tab_content}>{test.content}</div>
        </div>
    );
};

export default Tabs;