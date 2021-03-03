import React from 'react';
import '../stylesheets/index.scss';


function Filters(props) {

    const handleInput = (ev) => {
        props.handleInput({
            key: 'name',
            value: ev.target.value
        });
    }

    return (
        <form>
            <p className="input-group">
                <label className="label" htmlFor="name">Type to search</label>
                <input className="input" type="text" id="name" name="name" onChange={handleInput} />
            </p>
        </form>
    );
}

export default Filters;


