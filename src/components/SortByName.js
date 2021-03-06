import '../stylesheets/AllFilters.scss';

function SortByName(props) {

    const changeHandler = ev => {
        console.log('clicked in SortByName')
        props.filterHandler({
            key: 'sorting',
            value: ev.target.value
        });
    }

    return (
        <section className="sort-section">
            <p>Sort: </p>
            <section>
                <input type="radio" id="byName" name="sort" value="byName" onChange={changeHandler} />
                <label htmlFor="byName"> alphabetically</label>
            </section>
        </section>
    );
}

export default SortByName;