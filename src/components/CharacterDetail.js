import '../stylesheets/index.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import characterNotFound from '../images/characterNotFound.jpg';

function CharacterDetail(props) {

    if (props.character === undefined) {
        return (
            <section className="detail__card">
                <Link className="close__card" to="/">
                    <span className="icon fas fa-times"></span>
                </Link>
                <img className="detail__card-img" src={characterNotFound} alt="Ricky's image" title="Ricky's image" />
                <p>You think you're so smart... We only have up to 20 characters to show you (for now).</p>
            </section>
        );
    } else {
        return (
            <section className="detail__card">
                <Link className="close__card" to="/">
                    <span className="fas fa-times"></span>
                </Link>
                <img
                    className="detail__card-img"
                    src={props.character.image}
                    alt={`Image of ${props.character.name}`}
                    title={`Image of ${props.character.name}`}
                />
                <h4 className="detail__card-title">{props.character.name}</h4>
                <p className="detail__card-text">Status: {props.character.status}</p>
                <p className="detail__card-text">Species: {props.character.species}</p>
                <p className="detail__card-text">Origin: {props.character.origin}</p>
                <p className="detail__card-text">Episodes: {props.character.episode}</p>
            </section>
        );
    }
}

export default CharacterDetail;