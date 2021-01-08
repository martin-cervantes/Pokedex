import React from 'react';
import PropTypes from 'prop-types';
import { types } from '../store/init';

const TypeFilter = ({ handleFilterChange }) => {
  return (
    <div>
      <select className="filter" name="filter" onChange={e => handleFilterChange(e)}>
        <option value="All" key="All">All</option>
        {types.map(type => (
          <option value={type} key={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

TypeFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default TypeFilter;
