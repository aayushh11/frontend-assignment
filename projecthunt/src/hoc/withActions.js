import React, { Component } from 'react';

import _isFunction from 'lodash/isFunction';

// Constants
import { EMPTY_OBJECT } from '../constants/app.general';

const withActions = (initialState = EMPTY_OBJECT, actionHandlers = EMPTY_OBJECT) =>
  function wrapComponent(WrappedComponent) {
    class WithActions extends Component {
      state = _isFunction(initialState) ? initialState(this.props) : initialState;

      getState = () => {
        return {
          ...this.props,
          ...this.state,
        };
      };

      handleAction = (action = EMPTY_OBJECT) => {
        const handler = actionHandlers[action.type];

        let result;

        if (handler) {
          result = handler({
            params: action.payload,
            getState: this.getState,
            setState: this.setState.bind(this),
          });
        }

        return result;
      };

      render() {
        return <WrappedComponent  {...this.props} {...this.state} onAction={this.handleAction} />;
      }
    }

    return (props => <WithActions {...props} />);
  };

export default withActions;
