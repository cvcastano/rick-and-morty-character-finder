import '../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import React from 'react';

function CharacterDetail(props) {

    if (props.character === undefined) {
        return (
            <section class="card">
                <Link className="close__card" to="/">
                    <span className="icon fas fa-times"></span>
                </Link>
                <h2>User not found</h2>
            </section>
        );
    } else {
        return (
            <section class="card">
                <Link className="close__card" to="/">
                    <span className="fas fa-times"></span>
                </Link>
                <img
                    className="card-img"
                    src={props.character.image}
                    alt={`Image of ${props.character.name}`}
                    title={`Image of ${props.character.name}`}
                />
                <h4 className="card-title">{props.character.name}</h4>
                <p className="card-text">Status: {props.character.status}</p>
                <p className="card-text">Species: {props.character.species}</p>
                <p className="card-text">Origin: {props.character.origin}</p>
                <p className="card-text">Episodes: {props.character.episode}</p>
            </section>
        );
    }
}

export default CharacterDetail;