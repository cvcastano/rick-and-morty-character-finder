import '../stylesheets/index.scss';
import {Link} from 'react-router-dom';


function CharacterCard(props) {
    return (
        <>
            <Link to= {`/character/${props.character.id}`}>
                <img
                    className="card-img"
                    src={props.character.image}
                    alt={`Image of ${props.character.name}`}
                    title= {`Image of ${props.character.name}`}
                />
                <h4 className="card-title">{props.character.name}</h4>
                <p className="card-text">{props.character.species}</p>
            </Link>
        </>
    );
}



export default CharacterCard;