import '../stylesheets/index.scss';

function FilterByName(props) {

    const changeHandler = ev => {
        props.filterHandler({
            key: 'name',
            value: ev.target.value
        });
    }

    return (
        <section className="input-group">
            <label className="label" htmlFor="name">Type to search</label>
            <input className="input" type="text" id="name" name="name" onChange={changeHandler} />
        </section>
    );
}

export default FilterByName;


