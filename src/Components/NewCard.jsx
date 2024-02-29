import './NewCard.scss'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

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
        <div className='new-card__container d-flex flex-column justify-content-center'>
            <form onSubmit={handleSubmit}>
                <div className='d-flex flex-column align-items-center'>
                    <div className='new-card__title-input-container w-100 d-flex flex-column align-items-center mb-2'>
                        <input 
                            className='new-card__title-input d-flex mt-2 mb-2 ' 
                            type="text" 
                            placeholder="Adicione um título..." 
                            value={titleName} 
                            onChange={handleTitleNameChange} />
                    </div>
                    <div className='d-flex mb-2 new-card__width-90'>
                        <textarea 
                            className='new-card__description-input'
                            onChange={handleDescriptionChange}
                            placeholder="Adicione uma descrição..." 
                            >{description}</textarea>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <input className='mb-2 mx-2' type="submit" value="Adicionar" />
                    <input className='mb-2 ms-2 me-3' type="button" value="Cancelar" onClick={toggleCloseNewCardButton} />
                </div>
            </form> 
        </div>
    )
}

export default NewCard;