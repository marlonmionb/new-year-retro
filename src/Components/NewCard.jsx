import classes from './Card.module.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewCard = (props) => {
    const [titleName, setTitleName] = useState('');
    const [description, setDescription] = useState('');

    function handleTitleNameChange(event) {
        setTitleName(event.target.value)
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    function toggleCloseNewCardButton() {
        sendDataToColumn(!props.isAddCardButtonVisible)
    }

    function sendDataToColumn(data) {
        props.sendDataToColumn(data)
    }

    function handleSubmit(event) {
        event.preventDefault();
        toggleCloseNewCardButton()
        const id = uuidv4();
        const data = {
            titleName,
            description,
            id
        }
        console.log('New Card Data:', data)
        props.sendNewCardData(data)
      }

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Adicione um título" value={titleName} onChange={handleTitleNameChange} />
                    <input type="text" placeholder="Adicione uma descrição" value={description} onChange={handleDescriptionChange} />
                <input type="submit" value="Submit" />
            </form> 
            <button onClick={toggleCloseNewCardButton}>Close</button>
        </div>
    )
}

export default NewCard;