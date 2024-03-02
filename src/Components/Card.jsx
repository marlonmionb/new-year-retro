import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Card.scss'
import './NewCard.scss'

const Card = (props) => {
    const [inEditingMode, setEditingMode] = useState(false)
    const [titleName, setTitleName] = useState(props.title);
    const [description, setDescription] = useState(props.description);

    function handleDelete() {
        props.sendDeletion(props.id)
    }

    function handleOpenEditMode() {
        setEditingMode(true)
    }

    function handleCloseEditMode() {
        setEditingMode(false)
    }

    function handleTitleNameChange(event) {
        setTitleName(event.target.value)
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        const id = props.id
        props.sendEditedCardData({
            titleName,
            description,
            id
        })
        handleCloseEditMode()
    }
    
    return (
        <div className='card__container d-flex flex-column justify-content-center my-4'>
            { inEditingMode ?
                <form onSubmit={handleOnSubmit}>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='new-card__title-input-container w-100 d-flex flex-column align-items-center mb-2'>
                            <input 
                                className='new-card__title-input d-flex mt-2 mb-2' 
                                type="text" 
                                placeholder="Adicione um título..." 
                                value={titleName} 
                                required
                                onChange={handleTitleNameChange} />
                        </div>
                        <div className='d-flex mb-2 new-card__width-90'>
                            <textarea 
                                className='new-card__description-input'
                                onChange={handleDescriptionChange}
                                placeholder="Adicione uma descrição..."
                                required
                                value={description}
                                ></textarea>
                        </div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <input className='mb-2 mx-2 new-card__primary-button' type="submit" value="Confirmar" />
                        <input className='mb-2 ms-2 me-3 new-card__primary-button' type="button" value="Cancelar" onClick={handleCloseEditMode} />
                    </div>
                </form> 
                :
                <>
                    <div className='card__title-container d-flex flex-column mt-1 pt-1 mb-2'>
                        <span className='ms-2 card__title' title={props.title}>{props.title}</span>  
                    </div>
                    <div className='d-flex new-card__width-90 ms-2 mb-2'>
                        <p className='card__description card__word-break overflow-auto'>{props.description}</p>
                    </div>
                    <div className='d-flex justify-content-end mb-2'>
                        <input type='button' className='mb-2 mx-2 new-card__primary-button' value='Editar' onClick={handleOpenEditMode} />
                        <input  type='button' className='mb-2 ms-2 me-3 new-card__primary-button' value='Deletar' onClick={handleDelete} />
                    </div>
                </>
            }
        </div>
    )
}

export default Card;