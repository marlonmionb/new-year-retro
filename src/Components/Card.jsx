import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Card.scss'

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
                    <input type='text' value={titleName} onChange={handleTitleNameChange}/>
                    <input type='text' value={description} onChange={handleDescriptionChange}/>
                    <div>
                        <input type='button'  value='Cancelar' onClick={handleCloseEditMode} />
                        <input type="submit" value="Confirmar" />
                    </div>
                </form>
                :
                <>
                    <div className='card__title-container d-flex flex-column mt-2 mb-2'>
                        <span className='ms-2 card__title'>{props.title}</span>  
                    </div>
                    <div className='d-flex new-card__width-90 ms-2'>
                        <p className='card__description card__word-break overflow-auto'>{props.description}</p>
                    </div>
                    <div className='d-flex justify-content-end mb-4'>
                        <input type='button' className='mb-2 mx-2' value='Deletar' onClick={handleDelete} />
                        <input  type='button' className='mb-2 ms-2 me-3' value='Editar' onClick={handleOpenEditMode} />
                    </div>
                </>
            }
        </div>
    )
}

export default Card;