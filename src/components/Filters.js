import React from 'react';
import '../stylesheets/index.scss';


function Filters() {

    return (
        <form>
            <p className="input-group">
                <label className="label" htmlFor="name">Type to search</label>
                <input className="input" type="text" id="name" name="name"/>
            </p>
        </form>

    );
}

export default Filters;


