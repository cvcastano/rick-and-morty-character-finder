import '../stylesheets/index.scss';
import CharacterCard from './CharacterCard';


function CharacterList(props) {
    const characterCard = props.characters.map(character => {
        return <li key={character.id} className="card"> <CharacterCard character={character} /> </li>
    })
    if (characterCard.length === 0) {
        return (
            <div>
                <h2>Aw, jeez! It seems there are no results</h2>
            </div>
        )
    } else {

        return (
            <>
                <ul className="card-list">

                    {characterCard}

                </ul>
            </>
        );
    }
}
export default CharacterList;