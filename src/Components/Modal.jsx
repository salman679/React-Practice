import { useContext } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import cardContext from "../data/CardContext";


function Modal() {
    let modalDiv = document.getElementById('modal');
    let cardCtx = useContext(cardContext)

    let deleteHandler = (item) => {
        cardCtx.removeCard(item)
    }

    let clearHandler = () => {
        cardCtx.clearCard
    }

    return (
        <>
            {createPortal(
                <div className="modal cartModel fade" id="cartModel" tabIndex="-1" aria-labelledby="cartModel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header pb-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body pt-0 border-0">
                                <h3 className="pb-5 text-center">Your Cart Items</h3>
                                <table className="table table-hover table-bordered">
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
                                        {
                                            cardCtx.item.length === 0 ?
                                                <tr>
                                                    <th colSpan="6">
                                                        <p className="text-center mb-0 p-2">NO Data Found</p>
                                                    </th>
                                                </tr>
                                                :
                                                cardCtx.item.map((item) => {
                                                    return <tr key={item.id}>
                                                        <td>
                                                            <img src={item.src} alt={item.alt} />
                                                        </td>
                                                        <td>
                                                            <span>{item.title}</span>
                                                        </td>
                                                        <td>
                                                            <span>${(item.price).toFixed(2)}</span>
                                                        </td>
                                                        <td>
                                                            <div className="amount-area">
                                                                <span className="amount me-1">1</span>
                                                                <div className="plus">
                                                                    <span>
                                                                        <FaPlus />
                                                                    </span>
                                                                </div>
                                                                <div className="minus">
                                                                    <span>
                                                                        <FaMinus />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span>$14.00</span>
                                                        </td>
                                                        <td>
                                                            <div className="action deletebtn">
                                                                <RiDeleteBin5Fill onClick={() => deleteHandler(item)} />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <h3 className="w-100 text-end pb-3">Total Amount: $<span id="fainal_total">0</span></h3>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Checkout</button>
                                <button id="clearcart" type="button" onClick={clearHandler} className="btn btn-primary">Clear</button>
                            </div>
                        </div>
                    </div>
                </div>, modalDiv
            )}
        </>
    )
}

export default Modal