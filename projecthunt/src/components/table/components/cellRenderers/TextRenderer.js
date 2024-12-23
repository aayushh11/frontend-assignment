import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Lodash
import _isNil from 'lodash/isNil';

import { EMPTY_OBJECT } from '../../../../constants/app.general';

const EMPTY_PLACEHOLDER = '-';

class TextRenderer extends PureComponent {
    render() {
      const { value, placeHolder, className, style } = this.props;
      return (
        <div className={className} style={style}>
          { !_isNil(value) ? value:  placeHolder }
        </div>
      );
    }
  }

TextRenderer.propTypes = {
    value: PropTypes.string, // eslint-disable-line
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

TextRenderer.defaultProps = {
  placeHolder: EMPTY_PLACEHOLDER,
  className: '',
  value: undefined,
  style: EMPTY_OBJECT,
};

export default TextRenderer;
