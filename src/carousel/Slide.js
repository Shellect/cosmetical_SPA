import React from "react";

export default function Slide({url, isVisible}) {
    let className = isVisible
        ? "c-mouse-vertical-carousel__bg-img bg-img is-visible"
        : "c-mouse-vertical-carousel__bg-img bg-img";
    return <i className={className} style={{backgroundImage: `url('${url}')`}}></i>;
}