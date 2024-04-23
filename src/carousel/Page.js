import React from "react";

export default function Page({title, onMouseEnter}) {
    return <li onMouseEnter={onMouseEnter} className="c-mouse-vertical-carousel__list-item list-item">{title}</li>
}