import PropTypes from 'prop-types';
import types from '../store/init';

const TypeFilter = ({ handleFilterChange, value }) => (
  <div id="filter_container">
    <select className="filter" name="filter" onChange={e => handleFilterChange(e)} value={value}>
      <option value="All" key="All">All</option>
      {types.map(type => (
        <option value={type} key={type}>{type}</option>
      ))}
    </select>
  </div>
);

TypeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TypeFilter;
