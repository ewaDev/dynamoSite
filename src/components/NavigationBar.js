import React from "react";
import styleSheet from "./navigation.module.css"


const NavigationBar = () => {
    return (
    <div class={styleSheet.navColor}>
        <nav>
            <ul>
            <li> ABOUT US </li>
                <li> SERVICES </li>
                <li> EQUIPMENT LIBRARY</li>
                <li> MEMBERSHIP </li>
                <li> CONTACT </li>
            </ul>
        </nav>

    </div>
    )

}

export default NavigationBar;