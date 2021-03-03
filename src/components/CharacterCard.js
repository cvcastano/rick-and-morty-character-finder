import '../stylesheets/index.scss';


function CharacterCard(props) {
    return (
        <>
            <img
                className="card-img"
                src={props.character.image}
                alt={`Image of ${props.character.name}`}
            />
            <h4 className="card-title">{props.character.name}</h4>
            <p className="card-text">{props.character.species}</p>
        </>
    );
}



export default CharacterCard;