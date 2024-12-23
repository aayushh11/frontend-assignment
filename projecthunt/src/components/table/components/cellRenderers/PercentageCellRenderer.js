import React from 'react'
import PropTypes from 'prop-types'
import TextRenderer from './TextRenderer';

function PercentageCellRenderer(props) {
    const { value } = props;
    const valueWithCurrency = `${value} %`;
  return (
    <TextRenderer value={valueWithCurrency}/>
  )
}

PercentageCellRenderer.propTypes = {
    value: PropTypes.string,
}

export default PercentageCellRenderer;
