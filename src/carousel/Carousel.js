import React, {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import Slide from "./Slide";
import Page from "./Page";

import "../scss/carousel.scss";

export default function Carousel() {
    const urls = [
        "/public/img/cosm.jpg",
        "/public/img/cosm-1.jpeg",
        "/public/img/cosm-2.jpg",
        "/public/img/cosm-3.jpg",
        "/public/img/cosm-4.jpeg",
        "/public/img/cosm-5.jpg"
    ];
    const titles = [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06"
    ];
    const [currentId, setCurrentId] = useState(0);
    const listRef = useRef(null);
    const container = useRef(null);
    const {contextSafe} = useGSAP( {scope: container})
    const mouseHandler = contextSafe(e => {
        let offset = (container.current.offsetTop - e.pageY) / container.current.clientHeight * listRef.current.clientHeight;
        gsap.to(listRef.current, {
            y: offset,
            ease: "power4.easeOut",
            duration: .3
        });
    });

    return (
        <div className="carousel">
            <div onMouseMove={e => mouseHandler(e)} ref={container}
                 className="c-mouse-vertical-carousel u-media-wrapper">
                <ul ref={listRef} className="c-mouse-vertical-carousel__list">
                    {titles.map((title, i) => <Page title={title} onMouseEnter={() => setCurrentId(i)} key={i}></Page>)}
                </ul>
                {urls.map((url, i) =>  <Slide url={url} key={i} isVisible={i === currentId}></Slide>)}
                <i className="c-gradient-overlay"></i>
            </div>
        </div>
    );
}