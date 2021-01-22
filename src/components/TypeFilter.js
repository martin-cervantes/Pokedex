import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import types from '../store/init';

const TypeFilter = ({ handleFilterChange, value }) => (
  <div id="filter_container">
    <select className="filter" name="filter" onChange={e => handleFilterChange(e)} value={value}>
      <option value="All" key={uuidv4()}>All</option>
      {types.map(type => (
        <option value={type} key={uuidv4()}>{type}</option>
      ))}
    </select>
  </div>
);

TypeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TypeFilter;
