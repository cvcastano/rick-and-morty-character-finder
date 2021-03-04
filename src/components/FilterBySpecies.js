import '../stylesheets/index.scss';


const FilterBySpecies = props => {

  const changeHandler = ev => {
    props.filterHandler({
      key: 'species',
      value: ev.target.value
    });
  }
  return (
    <>
      <label htmlFor="species">
        Species:
        </label>
      <select name="species" id="species" onChange={changeHandler}>
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  )
}
export default FilterBySpecies;