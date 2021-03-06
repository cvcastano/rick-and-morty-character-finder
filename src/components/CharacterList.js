import '../stylesheets/CharacterList.scss';
import CharacterCard from './CharacterCard';
import awJeez from '../images/awJeez.jpg';


function CharacterList(props) {
    const characterCard = props.characters.map(character => {
        return <li key={character.id} className="card"> <CharacterCard character={character} /> </li>
    })
    if (characterCard.length === 0) {
        return (
            <main className="main">
                <h2 className="no-results-title">Aw, jeez! It seems there are no results</h2>
                <img className="no-results-img" src={awJeez} alt="Marty with watery eyes and a pursed mouth as if he was about to burst into tears." title="Marty's in the verge of crying" />
            </main>
        )
    } else {

        return (
            <main className="main">
                <ul className="card-list">
                    {characterCard}
                </ul>
            </main>
        );
    }
}
export default CharacterList;