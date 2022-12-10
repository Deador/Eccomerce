import React, {useState} from 'react';
import classes from "./two_lvl.module.css"
import ModaleCart from "../../modale_cart/ModaleCart";
import {useSelector} from "react-redux";
import Chip from "../chip/Chip";
import {Link} from "react-router-dom";
import Auth from "../../auth/Auth";

const TwoLvl = ({setSearch}) => {
    const cart = useSelector(state => state.inCart.products);

    // Наведение на иконку корзина открывает корзину
    const [mouse, setMouse] = useState(false);
    const onMouseEnter = () => {
        setMouse(true);
    };
    const onMouseLeave = () => {
        setMouse(false);
    };

    // Состояние для отображения пупапа логина
    const [modale, setModale] = useState(false);

    return (
        <div className={classes.header_row}>
            {/*{<!-- Btn catalog search -->}*/}
            <div className={classes.left_nav_element_two}>
                <div className={classes.btn_catalog}>
                    <hr className={classes.line}/>
                    <hr className={classes.line}/>
                    <hr className={classes.line}/>
                </div>
                <Link to="/" className={classes.logo}>
                    <svg width="148" height="20" viewBox="0 0 148 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.00108 17.0586C5.80505 17.0586 4.08755 16.401 2.8486 15.0859C1.6162 13.7708 1 11.9707 1 9.68555C1 8.23372 1.28843 6.95768 1.8653 5.85742C2.44217 4.75065 3.29108 3.88802 4.41204 3.26953C5.533 2.65104 6.85718 2.3418 8.38456 2.3418C10.1348 2.3418 11.636 2.71615 12.8881 3.46484L12.0228 5.4375C10.8297 4.79948 9.63335 4.48047 8.43373 4.48047C6.97845 4.48047 5.83455 4.94922 5.00202 5.88672C4.1695 6.82422 3.75323 8.10026 3.75323 9.71484C3.75323 11.3164 4.12361 12.5827 4.86436 13.5137C5.60511 14.4447 6.69001 14.9102 8.11907 14.9102C9.03682 14.9102 9.86934 14.7669 10.6166 14.4805V11.1602H7.59793L7.61759 9.08008H13.1241V15.9844C12.2325 16.349 11.3869 16.6191 10.5872 16.7949C9.79396 16.9707 8.93193 17.0586 8.00108 17.0586Z"
                            fill="#DA1934"/>
                        <path
                            d="M18.5912 17.0586C17.5882 17.0586 16.7754 16.7852 16.1526 16.2383C15.5364 15.6849 15.2283 14.8906 15.2283 13.8555C15.2283 12.7422 15.5954 11.9186 16.3296 11.3848C17.0638 10.8444 18.1717 10.5026 19.6532 10.3594C19.8564 10.3333 20.076 10.3073 20.312 10.2812C20.548 10.2552 20.8134 10.2292 21.1084 10.2031C21.4034 10.1771 21.6361 10.1543 21.8066 10.1348V9.56836C21.8066 8.91732 21.6558 8.44531 21.3543 8.15234C21.0527 7.85286 20.5938 7.70312 19.9776 7.70312C19.0992 7.70312 18.0143 7.94727 16.7229 8.43555C16.7164 8.41602 16.6082 8.11979 16.3984 7.54688C16.1887 6.97396 16.0805 6.68099 16.0739 6.66797C17.3457 6.1276 18.7223 5.85742 20.2038 5.85742C21.6591 5.85742 22.7178 6.17318 23.3799 6.80469C24.0419 7.42969 24.373 8.44531 24.373 9.85156V16.8535H22.4654C22.4588 16.8275 22.3867 16.6094 22.2491 16.1992C22.1114 15.7891 22.0426 15.571 22.0426 15.5449C21.505 16.0658 20.9773 16.4499 20.4595 16.6973C19.9481 16.9382 19.3254 17.0586 18.5912 17.0586ZM19.2893 15.2422C19.8859 15.2422 20.4037 15.1022 20.8429 14.8223C21.2887 14.5358 21.6066 14.1908 21.7967 13.7871V11.7168C21.7771 11.7168 21.6034 11.7298 21.2756 11.7559C20.9544 11.7819 20.7807 11.7949 20.7544 11.7949C19.7122 11.8861 18.9485 12.0814 18.4634 12.3809C17.9783 12.6803 17.7357 13.1621 17.7357 13.8262C17.7357 14.2819 17.8701 14.6335 18.1389 14.8809C18.4076 15.1217 18.7911 15.2422 19.2893 15.2422Z"
                            fill="#DA1934"/>
                        <path
                            d="M26.9689 16.8535V6.12109H29.0535L29.3485 7.48828C29.4796 7.32552 29.6041 7.18229 29.7221 7.05859C29.8467 6.92839 30.0138 6.78516 30.2236 6.62891C30.4399 6.46615 30.6661 6.33268 30.9021 6.22852C31.1446 6.12435 31.4396 6.03646 31.787 5.96484C32.141 5.89323 32.518 5.85742 32.9178 5.85742C33.7766 5.85742 34.4616 6.02995 34.9729 6.375C35.4908 6.72005 35.8546 7.1237 36.0644 7.58594C36.4512 7.03255 36.9526 6.60612 37.5688 6.30664C38.185 6.00716 38.8701 5.85742 39.6239 5.85742C40.8629 5.85742 41.7708 6.20573 42.3477 6.90234C42.9311 7.59896 43.2228 8.63086 43.2228 9.99805V16.8535H40.6367V10.7598C40.6367 9.71159 40.5187 8.95638 40.2827 8.49414C40.0533 8.02539 39.6108 7.79102 38.9553 7.79102C37.9523 7.79102 37.2312 8.24023 36.792 9.13867C36.6085 9.53581 36.4839 10.0143 36.4184 10.5742V16.8535H33.8421V10.6426C33.8421 9.68555 33.7143 8.97266 33.4586 8.50391C33.203 8.03516 32.7408 7.80078 32.0722 7.80078C31.5281 7.80078 31.0594 7.9375 30.6661 8.21094C30.2728 8.48438 29.9745 8.84245 29.7713 9.28516C29.6205 9.94271 29.5451 10.7305 29.5451 11.6484V16.8535H26.9689Z"
                            fill="#DA1934"/>
                        <path
                            d="M50.7647 17.0586C49.0275 17.0586 47.6739 16.5638 46.7037 15.5742C45.74 14.5781 45.2582 13.2044 45.2582 11.4531C45.2582 9.7474 45.7138 8.38997 46.625 7.38086C47.5362 6.37174 48.7784 5.86393 50.3517 5.85742C51.8398 5.85742 52.9935 6.31966 53.8129 7.24414C54.6389 8.16862 55.0519 9.39583 55.0519 10.9258C55.0519 11.0365 55.0486 11.2155 55.042 11.4629C55.042 11.7103 55.042 11.8926 55.042 12.0098H47.8541C47.8803 13.0124 48.1557 13.7904 48.6801 14.3438C49.2111 14.8906 49.9387 15.1641 50.863 15.1641C52.043 15.1641 53.177 14.8581 54.2652 14.2461L54.629 16.0625C53.5474 16.7266 52.2593 17.0586 50.7647 17.0586ZM47.9033 10.3984H52.6231C52.6231 9.52604 52.4232 8.85547 52.0233 8.38672C51.6234 7.91797 51.0695 7.68359 50.3615 7.68359C49.6994 7.68359 49.139 7.91146 48.6801 8.36719C48.2278 8.82292 47.9688 9.5 47.9033 10.3984Z"
                            fill="#DA1934"/>
                        <path
                            d="M60.6075 17.0488C59.0145 17.0488 57.7395 16.7786 56.7825 16.2383L57.048 14.3145C57.4806 14.5488 58.0313 14.7604 58.6999 14.9492C59.3685 15.1315 59.9782 15.2227 60.5288 15.2227C61.0991 15.2227 61.5416 15.1185 61.8563 14.9102C62.1775 14.6953 62.3414 14.3828 62.3479 13.9727C62.3479 13.6016 62.1972 13.3086 61.8956 13.0938C61.6006 12.8789 61.0336 12.612 60.1945 12.293C59.9061 12.1888 59.7192 12.1204 59.634 12.0879C58.6376 11.7038 57.9198 11.2773 57.4806 10.8086C57.0414 10.3333 56.8218 9.69206 56.8218 8.88477C56.8218 7.9082 57.1758 7.15951 57.8838 6.63867C58.5983 6.11784 59.5914 5.85742 60.8631 5.85742C62.2398 5.85742 63.4492 6.11458 64.4915 6.62891L63.8524 8.39648C62.8232 7.92122 61.8432 7.68359 60.9123 7.68359C60.3944 7.68359 59.988 7.77148 59.693 7.94727C59.4046 8.11654 59.2604 8.37695 59.2604 8.72852C59.2604 9.06055 59.4013 9.32096 59.6832 9.50977C59.9651 9.69206 60.5157 9.93294 61.3351 10.2324C61.3614 10.2389 61.4466 10.2682 61.5908 10.3203C61.735 10.3724 61.8464 10.4147 61.9251 10.4473C62.915 10.8053 63.6426 11.235 64.108 11.7363C64.5735 12.2311 64.8062 12.8789 64.8062 13.6797C64.7996 14.7539 64.4325 15.584 63.7049 16.1699C62.9772 16.7559 61.9448 17.0488 60.6075 17.0488Z"
                            fill="#DA1934"/>
                        <path
                            d="M70.3815 13.543C71.096 14.4479 72.1514 14.9004 73.5477 14.9004C74.944 14.9004 75.9961 14.4512 76.7041 13.5527C77.4186 12.6478 77.7759 11.3717 77.7759 9.72461C77.7759 8.05794 77.4186 6.76562 76.7041 5.84766C75.9961 4.92969 74.9472 4.4707 73.5575 4.4707C72.1612 4.4707 71.1026 4.93294 70.3815 5.85742C69.6669 6.77539 69.3097 8.06445 69.3097 9.72461C69.3097 11.3652 69.6669 12.638 70.3815 13.543ZM73.5379 17.0586C71.368 17.0586 69.6538 16.4076 68.3952 15.1055C67.1431 13.7969 66.5171 11.9935 66.5171 9.69531C66.5171 7.38411 67.1464 5.58073 68.405 4.28516C69.6637 2.98958 71.3779 2.3418 73.5477 2.3418C75.7175 2.3418 77.4284 2.99284 78.6805 4.29492C79.9326 5.59049 80.5586 7.39388 80.5586 9.70508C80.5586 11.9902 79.9293 13.7871 78.6707 15.0957C77.412 16.4043 75.7011 17.0586 73.5379 17.0586Z"
                            fill="#DA1934"/>
                        <path
                            d="M82.8398 16.8535V6.12109H84.9146L85.1998 7.47852C86.3011 6.39779 87.5236 5.85742 88.8675 5.85742C90.1261 5.85742 91.0668 6.21875 91.6895 6.94141C92.3188 7.65755 92.6335 8.69922 92.6335 10.0664V16.8535H90.0474V10.3789C90.0409 9.51302 89.8999 8.86523 89.6246 8.43555C89.3493 8.00586 88.8543 7.79102 88.1398 7.79102C87.5826 7.79102 87.0713 7.93424 86.6059 8.2207C86.147 8.50065 85.8127 8.85547 85.6029 9.28516C85.4784 9.79297 85.4161 10.5742 85.4161 11.6289V16.8535H82.8398Z"
                            fill="#DA1934"/>
                        <path d="M98.199 16.8535V4.66602H94.0003V2.54688H105.053V4.66602H100.874V16.8535H98.199Z"
                              fill="#DA1934"/>
                        <path
                            d="M109.212 17.0586C108.209 17.0586 107.396 16.7852 106.773 16.2383C106.157 15.6849 105.849 14.8906 105.849 13.8555C105.849 12.7422 106.216 11.9186 106.95 11.3848C107.684 10.8444 108.792 10.5026 110.274 10.3594C110.477 10.3333 110.697 10.3073 110.933 10.2812C111.169 10.2552 111.434 10.2292 111.729 10.2031C112.024 10.1771 112.257 10.1543 112.427 10.1348V9.56836C112.427 8.91732 112.276 8.44531 111.975 8.15234C111.673 7.85286 111.215 7.70312 110.598 7.70312C109.72 7.70312 108.635 7.94727 107.344 8.43555C107.337 8.41602 107.229 8.11979 107.019 7.54688C106.809 6.97396 106.701 6.68099 106.695 6.66797C107.966 6.1276 109.343 5.85742 110.824 5.85742C112.28 5.85742 113.338 6.17318 114.001 6.80469C114.663 7.42969 114.994 8.44531 114.994 9.85156V16.8535H113.086C113.08 16.8275 113.007 16.6094 112.87 16.1992C112.732 15.7891 112.663 15.571 112.663 15.5449C112.126 16.0658 111.598 16.4499 111.08 16.6973C110.569 16.9382 109.946 17.0586 109.212 17.0586ZM109.91 15.2422C110.507 15.2422 111.024 15.1022 111.464 14.8223C111.909 14.5358 112.227 14.1908 112.417 13.7871V11.7168C112.398 11.7168 112.224 11.7298 111.896 11.7559C111.575 11.7819 111.401 11.7949 111.375 11.7949C110.333 11.8861 109.569 12.0814 109.084 12.3809C108.599 12.6803 108.356 13.1621 108.356 13.8262C108.356 14.2819 108.491 14.6335 108.76 14.8809C109.028 15.1217 109.412 15.2422 109.91 15.2422Z"
                            fill="#DA1934"/>
                        <path
                            d="M123.381 17.0586C122.647 17.0586 121.978 16.8991 121.375 16.5801C120.779 16.2546 120.346 15.8867 120.077 15.4766L119.822 16.8438H117.59V2.16602L120.166 2V5.32031C120.166 5.96484 120.146 6.69727 120.107 7.51758C120.959 6.41081 122.07 5.85742 123.44 5.85742C124.817 5.85742 125.895 6.36523 126.675 7.38086C127.462 8.39648 127.855 9.72461 127.855 11.3652C127.855 13.071 127.449 14.4479 126.636 15.4961C125.83 16.5378 124.745 17.0586 123.381 17.0586ZM122.762 15.1152C123.529 15.1152 124.142 14.793 124.6 14.1484C125.059 13.5039 125.289 12.5892 125.289 11.4043C125.289 10.2129 125.063 9.3112 124.61 8.69922C124.165 8.08724 123.558 7.78125 122.791 7.78125C121.048 7.78125 120.166 8.94987 120.146 11.2871C120.146 12.6022 120.366 13.569 120.805 14.1875C121.244 14.806 121.896 15.1152 122.762 15.1152Z"
                            fill="#DA1934"/>
                        <path
                            d="M133.745 17C133.004 17 132.388 16.9154 131.897 16.7461C131.411 16.5703 131.028 16.2936 130.746 15.916C130.464 15.5384 130.268 15.0892 130.156 14.5684C130.045 14.0475 129.989 13.3997 129.989 12.625V2.16602L132.565 2V12.5762C132.565 13.5397 132.68 14.194 132.909 14.5391C133.139 14.8776 133.585 15.0469 134.247 15.0469C134.574 15.0469 134.991 15.0111 135.495 14.9395L135.564 16.7656C135.558 16.7656 135.476 16.7819 135.318 16.8145C135.168 16.847 135.02 16.873 134.876 16.8926C134.738 16.9186 134.561 16.9414 134.345 16.9609C134.129 16.987 133.929 17 133.745 17Z"
                            fill="#DA1934"/>
                        <path
                            d="M141.779 17.0586C140.042 17.0586 138.688 16.5638 137.718 15.5742C136.754 14.5781 136.272 13.2044 136.272 11.4531C136.272 9.7474 136.728 8.38997 137.639 7.38086C138.55 6.37174 139.792 5.86393 141.366 5.85742C142.854 5.85742 144.008 6.31966 144.827 7.24414C145.653 8.16862 146.066 9.39583 146.066 10.9258C146.066 11.0365 146.063 11.2155 146.056 11.4629C146.056 11.7103 146.056 11.8926 146.056 12.0098H138.868C138.894 13.0124 139.17 13.7904 139.694 14.3438C140.225 14.8906 140.953 15.1641 141.877 15.1641C143.057 15.1641 144.191 14.8581 145.279 14.2461L145.643 16.0625C144.561 16.7266 143.273 17.0586 141.779 17.0586ZM138.917 10.3984H143.637C143.637 9.52604 143.437 8.85547 143.037 8.38672C142.637 7.91797 142.084 7.68359 141.376 7.68359C140.713 7.68359 140.153 7.91146 139.694 8.36719C139.242 8.82292 138.983 9.5 138.917 10.3984Z"
                            fill="#DA1934"/>
                    </svg>
                </Link>


                <input type="search" className={classes.search} placeholder="Я ищу…"
                       onChange={(e) => setSearch(e.target.value)}/>
            </div>

            {/*{ <!-- Icons nav -->}*/}
            <div className={classes.right_nav_element_two}>
                <Link to="/" className={classes.item_nav}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14.584 2.5C12.2923 2.5 11.0382 3.6975 10.0007 4.75C8.96315 3.6975 7.70898 2.5 5.41732 2.5C2.36148 2.5 0.833984 5.05917 0.833984 7.75C0.833984 12.2808 6.18148 16 10.0007 17.5C13.8198 16 19.1673 12.2808 19.1673 7.75C19.1673 5.05917 17.6398 2.5 14.584 2.5Z"
                              stroke="#222529" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className={classes.text_icon}>Избранное</div>
                </Link>
                <Link className={classes.item_nav} onClick={() => setModale(true)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M10.0007 9.16659C12.3007 9.16659 14.1673 7.30075 14.1673 4.99992C14.1673 2.69909 12.3007 0.833252 10.0007 0.833252C7.70065 0.833252 5.83398 2.69909 5.83398 4.99992C5.83398 7.30075 7.70065 9.16659 10.0007 9.16659Z"
                              stroke="#222529" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M17.5 19V16.875C17.5 14.4675 14.125 12.5 10 12.5C5.875 12.5 2.5 14.4675 2.5 16.875V19"
                              stroke="#222529" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <div className={classes.text_icon}>Войти</div>
                </Link>
                <div onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <div className={classes.item_nav}>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0.849609 1.6001C0.849609 1.18588 1.1854 0.850098 1.59961 0.850098H3.26628C3.58324 0.850098 3.86598 1.04935 3.97258 1.34785L7.74405 11.9081L7.74412 11.9083C7.87511 12.2739 8.22035 12.5168 8.60711 12.5168H16.1929C16.5925 12.5168 16.9445 12.2592 17.0661 11.8796L18.5634 5.68343H7.03794C6.62373 5.68343 6.28794 5.34764 6.28794 4.93343C6.28794 4.51922 6.62373 4.18343 7.03794 4.18343H19.5163C19.7462 4.18343 19.9634 4.28889 20.1056 4.46955C20.2478 4.65021 20.2993 4.88612 20.2453 5.10961L18.5186 12.2546C18.5154 12.2678 18.5119 12.2809 18.508 12.2939C18.2012 13.3169 17.261 14.0168 16.1929 14.0168H8.60711C7.5856 14.0168 6.6759 13.3747 6.33184 12.4137L6.33164 12.4132L2.73773 2.3501H1.59961C1.1854 2.3501 0.849609 2.01431 0.849609 1.6001ZM9.10026 17.3501C8.59447 17.3501 8.18359 17.761 8.18359 18.2668C8.18359 18.7725 8.59447 19.1834 9.10026 19.1834C9.60605 19.1834 10.0169 18.7725 10.0169 18.2668C10.0169 17.761 9.60605 17.3501 9.10026 17.3501ZM6.68359 18.2668C6.68359 16.9326 7.76605 15.8501 9.10026 15.8501C10.4345 15.8501 11.5169 16.9326 11.5169 18.2668C11.5169 19.601 10.4345 20.6834 9.10026 20.6834C7.76605 20.6834 6.68359 19.601 6.68359 18.2668ZM14.8496 18.2668C14.8496 17.761 15.2605 17.3501 15.7663 17.3501C16.2721 17.3501 16.6829 17.761 16.6829 18.2668C16.6829 18.7725 16.2721 19.1834 15.7663 19.1834C15.2605 19.1834 14.8496 18.7725 14.8496 18.2668ZM15.7663 15.8501C14.4321 15.8501 13.3496 16.9325 13.3496 18.2668C13.3496 19.601 14.4321 20.6834 15.7663 20.6834C17.1005 20.6834 18.1829 19.601 18.1829 18.2668C18.1829 16.9325 17.1005 15.8501 15.7663 15.8501Z"
                                  fill="#222529"/>
                        </svg>
                        <div className={classes.text_icon}>Корзина</div>
                    </div>
                    {cart.length > 0 && <Chip count={cart.length}/>}
                    {mouse && <ModaleCart/>}
                    {modale && <Auth modale={modale} setModale={setModale}/>}
                </div>
            </div>
        </div>

    );
};

export default TwoLvl;