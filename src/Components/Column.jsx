import { useState } from 'react';
import './Column.scss'
import NewCard from './NewCard'
import Card from './Card';

const Column = (props) => {
    const [cards, setCards] = useState([])

    function toggleAddCardButton() {
        props.sendDataToApp(props.id)
    }

    function toggleAddCard(data) {
        props.sendDataToApp(data)
    }

    function receiveNewCardData(newCard) {
        const updatedCards = [newCard, ...cards]
        setCards(updatedCards)
    }

    function receiveCardDeletion(deletedCardId) {
        const newCards = cards.filter(card => card.id !== deletedCardId)
        setCards(newCards)
    }

    function receiveNewData(editedCard) {
        console.log('Edited Card:', editedCard)
        const newCards = cards.map(card => {
            if (card.id === editedCard.id) {
                return {...card, titleName: editedCard.titleName, description: editedCard.description}
            }
            return card
        })
        console.log('Edited new cards:', newCards)
        setCards(newCards)
    }

    return (
        <div className='column__container d-flex flex-column align-items-center'>
            <div>
                <p className='d-flex justify-content-center p-3'>{props.title}</p>
            </div>
            { props.isAddCardButtonVisible ? 
            <div className='d-flex justify-content-center'>
                <button onClick={toggleAddCardButton}>+</button> 
            </div> :
            <div className='column__new-card-container'>
                <NewCard 
                    sendDataToColumn={toggleAddCard} 
                    toggleAddButton={props.isAddCardButtonVisible}
                    sendNewCardData={receiveNewCardData}
                />
            </div>
            }
            {
                cards.map(card => {
                    return (
                        <Card 
                            title={card.titleName} 
                            description={card.description}
                            id={card.id}
                            sendDeletion={receiveCardDeletion}
                            sendEditedCardData={receiveNewData}
                            key={card.id}                      
                            />
                    )
                })
            }
        </div>
    )
}

export default Column;