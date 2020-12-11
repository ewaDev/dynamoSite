import React from "react";
import styleSheet from "./navigation.module.css"


const NavigationBar = () => {
    return (
    <div class={styleSheet.navColor}>
        <nav>
            <ul>
                <li> About us </li>
                <li> Workshops </li>
                <li> Contact us</li>
            </ul>
        </nav>

    </div>
    )

}

export default NavigationBar;