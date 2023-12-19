import { useState } from 'react';
import cardContext from './CardContext'

function CardProviders(props) {

    let [items, setItems] = useState([])

    let addCard = (item) => {

        let updateData = items;

        let exist = items.find(data => {
            return data.id == item.id;
        })

        if (!exist) {
            updateData = [
                ...items,
                item
            ]
        }
        setItems(updateData)
    }

    let removeCard = (item) => {
        let updateItems = items.filter((data) => {
            return data.id != item.id;
        })

        setItems(updateItems)
    }

    let clearCard = () => {

    }

    let cardContextValue = {
        item: items,
        totalAmount: 0,
        addCard: addCard,
        removeCard: removeCard,
        clearCard: clearCard
    }

    return (
        <cardContext.Provider value={cardContextValue}>
            {props.children}
        </cardContext.Provider>
    )
}

export default CardProviders