import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

function CardStructure(props) {
    const [increment, setIncrement] = useState(1);

    let clickHandler = (e) => {
        e.preventDefault();

        setIncrement(increment + 1)

        props.onclick(increment);
    }

    return (
        <div className="col-lg-3">
            <div className="food-items">
                <img src={props.src} alt={props.alt} />
                <div className="food-information">
                    <div className="name">
                        <span>{props.title}</span>
                    </div>
                    <div className="rating d-flex mt-3 mb-3">

                        {
                            // console.log(new Array(5).fill(null))
                            new Array(5).fill(null).map((item, index) => {
                                if (props.ratting > index) {
                                    return <FaStar key={index} className="active" />
                                }
                                else {
                                    return <FaRegStar key={index} />
                                }
                            })
                        }

                        {/* <FaStar />
                        <FaStar />
                        <FaRegStar /> */}
                        <div className="price ms-auto">
                            <span>${(props.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="food-btn">
                        <a data-id="01" className="add-to-cart-btn" href="#" onClick={clickHandler}>Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardStructure