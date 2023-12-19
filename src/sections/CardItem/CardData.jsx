import { useContext } from "react"
import CardStructure from "./CardStructure"
import { cardData } from "./data"
import cardContext from "../../data/CardContext"

function CardData() {
    let cardCtx = useContext(cardContext)

    let addItemHandler = (item) => {
        cardCtx.addCard(item)
    }
    return (
        <>
            {cardData.map((item, index) => <CardStructure
                key={index}
                id={item.id}
                src={item.src}
                alt={item.alt}
                title={item.title}
                price={item.price}
                ratting={item.ratting}
                onAddItem={addItemHandler}
            />
            )
            }
        </>
    )
}

export default CardData