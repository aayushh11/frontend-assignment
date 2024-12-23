import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    const { heading, className } = props;
  return (
    <h2 className={className}>{heading}</h2>
  )
}

Header.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
}

export default Header;

