import React from "react";
import './NavButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NavButton(props) {
    const { link, desc } = props;
    return (
        <button className='heroNavButtons'>
            <a href={link}>
                <FontAwesomeIcon icon={faArrowRight} className="right-arrow" />
                {desc}
            </a>
        </button>
    )
}