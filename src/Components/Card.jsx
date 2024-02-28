import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

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
        <div className='button__primary'>
            { inEditingMode ?
                <form onSubmit={handleOnSubmit}>
                    <input type='text' value={titleName} onChange={handleTitleNameChange}/>
                    <input type='text' value={description} onChange={handleDescriptionChange}/>
                    <button onClick={handleCloseEditMode}>Cancelar</button>
                    <input type="submit" value="Confirmar" />
                </form>
                :
                <>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <button onClick={handleDelete}>Deletar</button>
                    <button onClick={handleOpenEditMode}>Editar</button>
                </>
            }
        </div>
    )
}

export default Card;