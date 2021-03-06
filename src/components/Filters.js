import '../stylesheets/index.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import SortByName from './SortByName';


const submitHandler = (ev) => {
  ev.preventDefault();
}

const Filters = props => {
  return (
    <form className="filters" onSubmit={submitHandler}>
      <FilterByName filterHandler={props.filterHandler} />
      <FilterBySpecies filterHandler={props.filterHandler} />
      <SortByName filterHandler={props.filterHandler} />
    </form>
  )
}
export default Filters;