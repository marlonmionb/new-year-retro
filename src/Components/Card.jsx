import classes from './Card.module.css'

const Card = (props) => {
    function handleDelete() {
        props.sendDeletion(props.id)
    }
    
    return (
        <div className={classes.container}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={handleDelete}>Deletar</button>
        </div>
    )
}

export default Card;