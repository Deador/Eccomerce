import {ADD_PRODUCT, REMOVE_ITEM} from "./case";

const defaultState = {
    products: [],
}
// Редюсер для добавления товара в корзину
export const inCartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const item = state.products.find(n => n.id === action.payload.id);
            return {
                ...state,
                products: item
                    ? state.products.map(n => n === item ? {
                        ...n,
                        count: n.count + 1,
                    } : n)
                    : [...state.products, {...action.payload, count: 1}]
            };

        // const itemIndex = state.products.findIndex(item => item.id === action.payload.id);
        // return {
        //     ...state,
        //     products: itemIndex ? state.products[itemIndex].count += 1 : [...state.products, {
        //         ...action.payload,
        //         count: 1
        //     }]
        // }
        // const itemIndex = state.products.findIndex(item => item.id === action.payload.id);
        // return {
        //     ...state,
        //     products: [...state.products, action.payload]
        // }
        case REMOVE_ITEM:
            return {
                ...state, products: state.products.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    };
};

// Чтение
const stateItem = {
    items: [
        {
            id: 1,
            img: "./source/popular/game_img1.jpg",
            price: 1290,
            old_price: "1980 ₽",
            sale: -31,
            description: "Взрывные котята. Безумие, апокалипсис и котики",

        },
        {
            id: 2,
            img: "./source/popular/game_img2.jpg",
            price: 990,
            old_price: 0,
            sale: 0,
            description: "Манчкин 2 Дикий Топор. Ещё разрушительнее, ещё веселее!",

        },
        {
            id: 3,
            img: "./source/popular/game_img3.jpg",
            price: 1440,
            old_price: "1980 ₽",
            sale: -24,
            description: "Монополия Рик и Морти. Завяжи Мультивселеннуюв узел",

        },
        {
            id: 4,
            img: "./source/popular/game_img4.jpg",
            price: 1090,
            old_price: 0,
            sale: 0,
            description: "Зомби в доме. Дом на холме для детей",

        }
    ]
}

export const getItem = (state = stateItem, action) => {
    switch (action.type) {
        default:
            return state
    }
};

// Функция для добавления в редюсер
export const addInCart = (payload) => ({type: ADD_PRODUCT, payload});
export const removeItem = (payload) => ({type: REMOVE_ITEM, payload});