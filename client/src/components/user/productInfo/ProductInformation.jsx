import React from 'react';
import classes from "./ProductInfo.module.css"
import Title from "../../basic/title/Title";
import Button from "../../basic/UI/button/Button";
import Tabs from "../tabs/Tabs";

const ProductInformation = ({info}) => {
    const IMG = `http://localhost:5000/${info.img}`;

    return (
        <div className={classes.container}>
            <Title props={info.name}/>
            <div className={classes.content_container}>
                <div className={classes.title}><img src={IMG} alt="Image"/></div>
                <div className={classes.right_info}>
                    <div className={classes.raiting}>
                        <svg width="120" height="24" viewBox="0 0 120 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.3075 7.21986C10.9496 5.61918 11.2706 4.81883 11.7922 4.70791C11.9293 4.67874 12.0711 4.67874 12.2082 4.70791C12.7298 4.81883 13.0508 5.61918 13.6929 7.21986C14.058 8.13014 14.2406 8.58528 14.5822 8.89485C14.678 8.98168 14.782 9.05901 14.8928 9.12576C15.2876 9.36374 15.7805 9.40788 16.7663 9.49617C18.4351 9.64562 19.2695 9.72034 19.5243 10.1961C19.577 10.2946 19.6129 10.4013 19.6304 10.5117C19.7149 11.0447 19.1015 11.6028 17.8747 12.7189L17.534 13.0288C16.9605 13.5506 16.6737 13.8115 16.5078 14.1372C16.4083 14.3325 16.3416 14.5428 16.3104 14.7598C16.2582 15.1215 16.3422 15.5 16.5102 16.2569L16.5702 16.5274C16.8714 17.8849 17.022 18.5637 16.834 18.8973C16.6651 19.197 16.3541 19.3889 16.0105 19.4053C15.6279 19.4236 15.089 18.9844 14.011 18.106C13.3008 17.5273 12.9457 17.2379 12.5515 17.1249C12.1912 17.0216 11.8092 17.0216 11.4489 17.1249C11.0547 17.2379 10.6996 17.5273 9.98941 18.106C8.91144 18.9844 8.37245 19.4236 7.98993 19.4053C7.64633 19.3889 7.33528 19.197 7.16642 18.8973C6.97842 18.5637 7.12902 17.8849 7.43022 16.5274L7.49023 16.2569C7.65818 15.5 7.74216 15.1215 7.69004 14.7598C7.65878 14.5428 7.59207 14.3325 7.49257 14.1372C7.32669 13.8115 7.03992 13.5506 6.46637 13.0288L6.1257 12.7189C4.89891 11.6028 4.28552 11.0447 4.36999 10.5117C4.38749 10.4013 4.42337 10.2946 4.47614 10.1961C4.73094 9.72034 5.56532 9.64562 7.23408 9.49617C8.21986 9.40788 8.71276 9.36374 9.1076 9.12576C9.21834 9.05901 9.32236 8.98168 9.41818 8.89485C9.75979 8.58528 9.94236 8.13014 10.3075 7.21986Z"
                                fill="#6F15D2" stroke="#6F15D2" strokeWidth="1.5"/>
                            <path
                                d="M34.3075 7.21986C34.9496 5.61918 35.2706 4.81883 35.7922 4.70791C35.9293 4.67874 36.0711 4.67874 36.2082 4.70791C36.7298 4.81883 37.0508 5.61918 37.6929 7.21986C38.058 8.13014 38.2406 8.58528 38.5822 8.89485C38.678 8.98168 38.782 9.05901 38.8928 9.12576C39.2876 9.36374 39.7805 9.40788 40.7663 9.49617C42.4351 9.64562 43.2695 9.72034 43.5243 10.1961C43.577 10.2946 43.6129 10.4013 43.6304 10.5117C43.7149 11.0447 43.1015 11.6028 41.8747 12.7189L41.534 13.0288C40.9605 13.5506 40.6737 13.8115 40.5078 14.1372C40.4083 14.3325 40.3416 14.5428 40.3104 14.7598C40.2582 15.1215 40.3422 15.5 40.5102 16.2569L40.5702 16.5274C40.8714 17.8849 41.022 18.5637 40.834 18.8973C40.6651 19.197 40.3541 19.3889 40.0105 19.4053C39.6279 19.4236 39.089 18.9844 38.011 18.106C37.3008 17.5273 36.9457 17.2379 36.5515 17.1249C36.1912 17.0216 35.8092 17.0216 35.4489 17.1249C35.0547 17.2379 34.6996 17.5273 33.9894 18.106C32.9114 18.9844 32.3724 19.4236 31.9899 19.4053C31.6463 19.3889 31.3353 19.197 31.1664 18.8973C30.9784 18.5637 31.129 17.8849 31.4302 16.5274L31.4902 16.2569C31.6582 15.5 31.7422 15.1215 31.69 14.7598C31.6588 14.5428 31.5921 14.3325 31.4926 14.1372C31.3267 13.8115 31.0399 13.5506 30.4664 13.0288L30.1257 12.7189C28.8989 11.6028 28.2855 11.0447 28.37 10.5117C28.3875 10.4013 28.4234 10.2946 28.4761 10.1961C28.7309 9.72034 29.5653 9.64562 31.2341 9.49617C32.2199 9.40788 32.7128 9.36374 33.1076 9.12576C33.2183 9.05901 33.3224 8.98168 33.4182 8.89485C33.7598 8.58528 33.9424 8.13014 34.3075 7.21986Z"
                                fill="#6F15D2" stroke="#6F15D2" strokeWidth="1.5"/>
                            <path
                                d="M58.3075 7.21986C58.9496 5.61918 59.2706 4.81883 59.7922 4.70791C59.9293 4.67874 60.0711 4.67874 60.2082 4.70791C60.7298 4.81883 61.0508 5.61918 61.6929 7.21986C62.058 8.13014 62.2406 8.58528 62.5822 8.89485C62.678 8.98168 62.782 9.05901 62.8928 9.12576C63.2876 9.36374 63.7805 9.40788 64.7663 9.49617C66.4351 9.64562 67.2695 9.72034 67.5243 10.1961C67.577 10.2946 67.6129 10.4013 67.6304 10.5117C67.7149 11.0447 67.1015 11.6028 65.8747 12.7189L65.534 13.0288C64.9605 13.5506 64.6737 13.8115 64.5078 14.1372C64.4083 14.3325 64.3416 14.5428 64.3104 14.7598C64.2582 15.1215 64.3422 15.5 64.5102 16.2569L64.5702 16.5274C64.8714 17.8849 65.022 18.5637 64.834 18.8973C64.6651 19.197 64.3541 19.3889 64.0105 19.4053C63.6279 19.4236 63.089 18.9844 62.011 18.106C61.3008 17.5273 60.9457 17.2379 60.5515 17.1249C60.1912 17.0216 59.8092 17.0216 59.4489 17.1249C59.0547 17.2379 58.6996 17.5273 57.9894 18.106C56.9114 18.9844 56.3724 19.4236 55.9899 19.4053C55.6463 19.3889 55.3353 19.197 55.1664 18.8973C54.9784 18.5637 55.129 17.8849 55.4302 16.5274L55.4902 16.2569C55.6582 15.5 55.7422 15.1215 55.69 14.7598C55.6588 14.5428 55.5921 14.3325 55.4926 14.1372C55.3267 13.8115 55.0399 13.5506 54.4664 13.0288L54.1257 12.7189C52.8989 11.6028 52.2855 11.0447 52.37 10.5117C52.3875 10.4013 52.4234 10.2946 52.4761 10.1961C52.7309 9.72034 53.5653 9.64562 55.2341 9.49617C56.2199 9.40788 56.7128 9.36374 57.1076 9.12576C57.2183 9.05901 57.3224 8.98168 57.4182 8.89485C57.7598 8.58528 57.9424 8.13014 58.3075 7.21986Z"
                                fill="#6F15D2" stroke="#6F15D2" strokeWidth="1.5"/>
                            <path
                                d="M82.3075 7.21986C82.9496 5.61918 83.2706 4.81883 83.7922 4.70791C83.9293 4.67874 84.0711 4.67874 84.2082 4.70791C84.7298 4.81883 85.0508 5.61918 85.6929 7.21986C86.058 8.13014 86.2406 8.58528 86.5822 8.89485C86.678 8.98168 86.782 9.05901 86.8928 9.12576C87.2876 9.36374 87.7805 9.40788 88.7663 9.49617C90.4351 9.64562 91.2695 9.72034 91.5243 10.1961C91.577 10.2946 91.6129 10.4013 91.6304 10.5117C91.7149 11.0447 91.1015 11.6028 89.8747 12.7189L89.534 13.0288C88.9605 13.5506 88.6737 13.8115 88.5078 14.1372C88.4083 14.3325 88.3416 14.5428 88.3104 14.7598C88.2582 15.1215 88.3422 15.5 88.5102 16.2569L88.5702 16.5274C88.8714 17.8849 89.022 18.5637 88.834 18.8973C88.6651 19.197 88.3541 19.3889 88.0105 19.4053C87.6279 19.4236 87.089 18.9844 86.011 18.106C85.3008 17.5273 84.9457 17.2379 84.5515 17.1249C84.1912 17.0216 83.8092 17.0216 83.4489 17.1249C83.0547 17.2379 82.6996 17.5273 81.9894 18.106C80.9114 18.9844 80.3724 19.4236 79.9899 19.4053C79.6463 19.3889 79.3353 19.197 79.1664 18.8973C78.9784 18.5637 79.129 17.8849 79.4302 16.5274L79.4902 16.2569C79.6582 15.5 79.7422 15.1215 79.69 14.7598C79.6588 14.5428 79.5921 14.3325 79.4926 14.1372C79.3267 13.8115 79.0399 13.5506 78.4664 13.0288L78.1257 12.7189C76.8989 11.6028 76.2855 11.0447 76.37 10.5117C76.3875 10.4013 76.4234 10.2946 76.4761 10.1961C76.7309 9.72034 77.5653 9.64562 79.2341 9.49617C80.2199 9.40788 80.7128 9.36374 81.1076 9.12576C81.2183 9.05901 81.3224 8.98168 81.4182 8.89485C81.7598 8.58528 81.9424 8.13014 82.3075 7.21986Z"
                                fill="#6F15D2" stroke="#6F15D2" strokeWidth="1.5"/>
                            <path
                                d="M106.144 6.62753C106.93 4.66653 107.324 3.68604 108 3.68604C108.676 3.68604 109.07 4.66653 109.856 6.62753L109.893 6.71885C110.337 7.82672 110.56 8.38065 111.012 8.71734C111.465 9.05403 112.06 9.10727 113.249 9.21374L113.464 9.23299C115.409 9.40726 116.382 9.49439 116.59 10.1134C116.799 10.7324 116.076 11.3897 114.631 12.7044L114.149 13.1432C113.417 13.8087 113.052 14.1414 112.881 14.5776C112.849 14.6589 112.823 14.7423 112.802 14.8271C112.69 15.2817 112.797 15.7645 113.011 16.7299L113.078 17.0305C113.472 18.8048 113.668 19.692 113.325 20.0746C113.196 20.2176 113.029 20.3206 112.844 20.3712C112.348 20.5066 111.643 19.9325 110.234 18.7844C109.309 18.0305 108.847 17.6536 108.315 17.5688C108.107 17.5354 107.894 17.5354 107.685 17.5688C107.154 17.6536 106.691 18.0305 105.766 18.7844C104.357 19.9325 103.652 20.5066 103.156 20.3712C102.971 20.3206 102.804 20.2176 102.676 20.0746C102.332 19.692 102.529 18.8048 102.922 17.0305L102.989 16.7299C103.203 15.7645 103.31 15.2817 103.198 14.8271C103.177 14.7423 103.151 14.6589 103.119 14.5776C102.949 14.1414 102.583 13.8087 101.851 13.1432L101.369 12.7044C99.9241 11.3897 99.2016 10.7324 99.4097 10.1134C99.6179 9.49439 100.591 9.40726 102.537 9.23299L102.752 9.21374C103.94 9.10727 104.535 9.05403 104.988 8.71734C105.441 8.38065 105.663 7.82672 106.107 6.71885L106.144 6.62753Z"
                                stroke="#6F15D2" strokeWidth="1.5"/>
                        </svg>
                        <div className={classes.text_review}>10 отзывов</div>
                    </div>
                    <div className={classes.cost}>
                        <div className={classes.text_cost}>{info.price} ₽</div>
                        {info.old_price > 0 && <div className={classes.text_old_cost}>{info.old_price} ₽</div>}
                    </div>
                    <div className={classes.points}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="12" r="6.25" stroke="#CCCCCC" strokeWidth="1.5"/>
                            <circle cx="8" cy="12" r="6.25" fill="white" stroke="#CCCCCC" strokeWidth="1.5"/>
                        </svg>
                        <p className={classes.points_text}>129 бонусов за покупку</p>

                    </div>
                    <Button>Купить</Button>
                    <div className={classes.delivery}>
                        <div className={classes.delivery_item}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#CCCCCC" strokeWidth="1.5"/>
                                <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                                      stroke="#CCCCCC" strokeWidth="1.5"/>
                            </svg>

                            <p className={classes.text_delivery}>Самовывоз из 11 пунктов выдачи, 2-36 дней, от 161 ₽
                            </p>
                        </div>
                        <div className={classes.delivery_item}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 13V5.69371C6 5.37716 6 5.21888 6.10382 5.14405C6.20764 5.06921 6.3578 5.11927 6.65811 5.21937L16.577 8.52566C17.1653 8.72176 17.4594 8.81981 17.4594 9C17.4594 9.18019 17.1653 9.27824 16.577 9.47434L6 13ZM6 13V18V19"
                                    stroke="#CCD2E3" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <p className={classes.text_delivery}>Почта России, от 3 дней, от 290 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs/>
        </div>
    );
};

export default ProductInformation;