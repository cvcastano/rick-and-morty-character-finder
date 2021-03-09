import '../stylesheets/index.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import SortByName from './SortByName';
import Reset from './Reset';
import FilterByGender from './FilterByGender';


const submitHandler = (ev) => {
  ev.preventDefault();
}

const Filters = props => {
  return (
    <section className="filters__container">
      <form className="filters" onSubmit={submitHandler}>
        <FilterByName filterHandler={props.filterHandler} />
        <FilterBySpecies filterHandler={props.filterHandler} />
        <FilterByGender filterHandler={props.filterHandler} />
      </form>
      <SortByName filterHandler={props.filterHandler} />
      <Reset resetHandler={props.resetHandler} />
    </section>
  )
}
export default Filters;