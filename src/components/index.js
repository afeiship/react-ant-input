import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Input } from 'antd';

const CLASS_NAME = 'react-ant-input';

export default class ReactAntInput extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.any,
    /**
     * If the value should be trim before returned.
     */
    shouldTrim: PropTypes.bool,
    /**
     * Should autoComplete on.
     */
    autoComplete: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    shouldTrim: false,
    autoComplete: 'off',
    onChange: noop
  };

  handleChange = (inEvent) => {
    const { value } = inEvent.target;
    const { shouldTrim, onChange } = this.props;
    inEvent.target.value = shouldTrim ? value.trim() : value;
    onChange(inEvent);
  };

  render() {
    const { className, onChange, shouldTrim, ...props } = this.props;
    return (
      <Input
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}
      />
    );
  }
}
