import logo from "../../../public/image/logo.png"
import "./style.scss"
import { FaCartPlus } from "react-icons/fa";

import { listItems } from "./data";
import List from "./list";

const Header = () => {
    return (
        <>
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

            <div class="modal cartModel fade" id="cartModel" tabindex="-1" aria-labelledby="cartModel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header pb-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body pt-0 border-0">
                            <h3 class="pb-5 text-center">Your Cart Items</h3>
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody id="tablebody">
                                    <tr>
                                        <th colspan="6">
                                            <p class="text-center mb-0 p-2">NO Data Found</p>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <h3 class="w-100 text-end pb-3">Total Amount: $<span id="fainal_total">0</span></h3>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Checkout</button>
                            <button id="clearcart" type="button" class="btn btn-primary">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default Header;