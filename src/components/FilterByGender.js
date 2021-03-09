import '../stylesheets/AllFilters.scss';


const FilterByGender = props => {

    const changeHandler = ev => {
        props.filterHandler({
            key: 'gender',
            value: ev.target.value
        });
    }
    return (
        <section className="input-group">
            <label className="label" htmlFor="gender">
                Gender
        </label>
            <select className="input select" name="species" id="species" onChange={changeHandler}>
                <option value="all" selected>All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="unknown">Unknown</option>
            </select>
        </section>
    )
}
export default FilterByGender;