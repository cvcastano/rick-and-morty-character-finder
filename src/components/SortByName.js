import '../stylesheets/AllFilters.scss';

function SortByName(props) {

    const changeHandler = ev => {
        props.filterHandler({
            key: 'sorting',
            value: ev.target.value
        });
    }

    return (
        <button className="sort-button" id="byName" name="sort" value="byName" onClick={changeHandler} >
            Sort by name
        </button>

    );
}

export default SortByName;