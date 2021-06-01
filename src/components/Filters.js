import '../stylesheets/index.scss';
import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';
import SortByName from './SortByName';
import Reset from './Reset';
import PropTypes from 'prop-types';


const submitHandler = (ev) => {
  ev.preventDefault();
}

const Filters = props => {
  return (
    <section className="filters__container">
      <form className="filters" onSubmit={submitHandler}>
        <FilterByName filterHandler={props.filterHandler} />
        <FilterBySpecies filterHandler={props.filterHandler} />
      </form>
      <SortByName filterHandler={props.filterHandler} />
      <Reset resetHandler={props.resetHandler} />
    </section>
  )
}
export default Filters;

Filters.propTypes = {
  filterHandler: PropTypes.func,
  resetHandler: PropTypes.func
};