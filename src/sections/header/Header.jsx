import logo from "../../../public/image/logo.png"
import "./style.scss"
import { FaCartPlus } from "react-icons/fa";

import { listItems } from "./data";
import List from "./list";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                    <nav className="list ms-auto">
                        <ul className="d-flex m-0 p-0">
                            {listItems.map((item, index) => {
                                return <List url={item.url} ami={item.label} key={index} />
                            })}
                        </ul>
                    </nav>
                    <div className="cart">
                        <div className="icon" data-bs-toggle="modal" data-bs-target="#cartModel">
                            <FaCartPlus />
                            <span id="card-status">0</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;