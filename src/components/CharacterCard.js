import '../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import dead from '../images/dead.png';
import alive from '../images/alive.png';
import human from '../images/human.png';
import alien from '../images/alien.png';
import unknown from '../images/unknown.png';


function CharacterCard(props) {

    const species = () => {
        if (props.character.species === 'Alien') {
            return alien;
        } else if (props.character.species === 'Human') {
            return human;
        }
    }
    const status = () => {
        if (props.character.status === 'Dead') {
            return dead;
        } else if (props.character.status === 'Alive') {
            return alive;
        } else {
            return unknown;
        }
    }

    console.log(props.character)
    return (
        <>
            <Link to={`/character/${props.character.id}`}>
                <img className="card-img" src={props.character.image} alt={`${props.character.name} image`} title={`${props.character.name} image`} />
                <h4 className="card-title">{props.character.name}</h4>
                <section class="icons__container">
                    <div className="icons__box">
                        <p className="icons__box--text">Species</p>
                        <img className="icons__box--icon"
                            src={species()} alt={`${props.character.species} icon`} title={`${props.character.species} icon`} />
                        <p className="icons__box--text">{`${props.character.species}`}</p>
                    </div>
                    <div className="icons__box">
                        <p className="icons__box--text">Status</p>
                        <img className="icons__box--icon"
                            src={status()} alt={`${props.character.status} icon`} title={`${props.character.status} icon`} />
                        <p className="icons__box--text">{`${props.character.status}`}</p>
                    </div>
                </section>
            </Link>
        </>
    );
}


export default CharacterCard;