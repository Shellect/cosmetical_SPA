import React from "react";
export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-primary" >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Услуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Обследования</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Запись на прием</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Поиск"></input>
                            <button className="btn btn-outline-success" type="submit">Поиск</button>
                        </form>

                    </div>
                </div>


            </nav>

        </header>
    )
}