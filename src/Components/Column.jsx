import { useState } from 'react';

import classes from './Column.module.css'
import NewCard from './NewCard'
import Card from './Card';

const Column = (props) => {
    const [isAddCardButtonVisible, setAddCardButtonVisible] = useState(true);
    const [cards, setCards] = useState([])

    function toggleAddCardButton() {
        setAddCardButtonVisible(!isAddCardButtonVisible)
    }

    function toggleAddCard(data) {
        setAddCardButtonVisible(data)
    }

    function receiveNewCardData(newCard) {
        const updatedCards = [...cards, newCard]
        setCards(updatedCards)
    }

    function receiveCardDeletion(deletedCardId) {
        const newCards = cards.filter(card => card.id !== deletedCardId)
        setCards(newCards)
    }

    return (
        <div className={classes.container}>
            <p className={classes.red}>{props.title}</p>
            { isAddCardButtonVisible ? 
                <button onClick={toggleAddCardButton}>+</button> : 
                <NewCard sendDataToColumn={toggleAddCard} 
                toggleAddButton={isAddCardButtonVisible}
                sendNewCardData={receiveNewCardData}
                />
            }
            {
                cards.map(card => {
                    return (
                        <Card 
                            title={card.titleName} 
                            description={card.description}
                            id={card.id}
                            sendDeletion={receiveCardDeletion}
                            key={card.id}                      
                            />
                    )
                })
            }
        </div>
    )
}

export default Column;