import '../stylesheets/index.scss';
import CharacterCard from './CharacterCard';


function CharacterList(props) {
const characterCard = props.characters.map(character => {
    console.log(character);
    return <li key={character.id} className="card"> <CharacterCard character={character} /> </li>
}) 

    return (
        <>
            <ul className="card-list">
            
                {characterCard}
             
            </ul>
        </>
    );
}

export default CharacterList;