import '../stylesheets/index.scss';


function CharacterCard() {
    return (
        <>
            <img
                className="card-img"
                src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                alt=""
            />
            <h4 className="card-title">Character Name</h4>
            <p className="card-text">Species</p>
        </>
    );
}



export default CharacterCard;