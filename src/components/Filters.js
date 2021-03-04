import '../stylesheets/index.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

const submitHandler = (ev) => {
  ev.preventDefault();
}

const Filters = props => {
  return (
    <section>
      <form onSubmit={submitHandler}>
        <FilterByName filterHandler={props.filterHandler} />
        <FilterBySpecies filterHandler={props.filterHandler} />
      </form>
    </section>
  )
}
export default Filters;