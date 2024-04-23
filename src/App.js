import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./carousel/Carousel";
export default class App extends React.Component{ 
    render() {
        return (
            <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Carousel></Carousel>
                    </div>
                </div>
                
            </div>
            <Footer></Footer>
            </>
        )
    }
}