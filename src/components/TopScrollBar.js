import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TopScrollBar() {

    const route2Path = useLocation();
    const loaDer = () => {
        const myloader = document.getElementById('myloader-sec');

        // 👇️ add element from DOM
        // myloader.style.display = 'block';
        myloader.style.display = 'none';

        setTimeout(() => {
            const myloader = document.getElementById('myloader-sec');

            // 👇️ removes element from DOM
            myloader.style.display = 'none';
        }, 1000);

    }

    useEffect(() => {
        loaDer()
        if (route2Path.pathname === '/') {
            document.body.setAttribute("class", "myhome");
        }
        else if (route2Path.pathname === '/cart' || route2Path.pathname === '/checkout') {
            document.body.setAttribute("class", "myhidesearch");
        }
        else {
            document.body.removeAttribute("class");
        }

    }, [route2Path]);

    return (
        <div id="myloader-sec">
            <div id="myloader"><i className="fa-solid fa-spinner fa-spin"></i> <br /> Loading...</div>
        </div>
    )
}
