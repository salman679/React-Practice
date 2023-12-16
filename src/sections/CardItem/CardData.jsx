import CardStructure from "./CardStructure"
import { cardData } from "./data"

function CardData(props) {
    let onclickHandler = (data) => {
        props.onClick(data)
    }
    return (
        <>
            {cardData.map((item, index) => <CardStructure
                key={index}
                src={item.src}
                alt={item.alt}
                title={item.title}
                price={item.price}
                ratting={item.ratting}
                onclick={onclickHandler}
            />
            )
            }
        </>
    )
}

export default CardData