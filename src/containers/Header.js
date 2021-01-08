import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TypeFilter from '../components/TypeFilter';
import { changeFilter } from '../actions';

import logo from '../assets/img/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    event.preventDefault();

    const { changeFilter } = this.props;

    changeFilter(event.target.value);
  }

  render() {
    return (
      <header>
        <img src={logo} className="brand" alt="logo" />
        <TypeFilter handleFilterChange={this.handleFilterChange} />
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

Header.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Header);
