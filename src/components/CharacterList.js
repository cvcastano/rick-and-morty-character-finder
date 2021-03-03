import '../stylesheets/index.scss';
import CharacterCard from './CharacterCard';


function CharacterList() {


    return (
        <>
            <ul className="card-list">
                <li className="card">
                <CharacterCard/>
                </li>
            </ul>
        </>
    );
}

export default CharacterList;