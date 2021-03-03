# react-ant-input
> Ant input.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-input
```

## properties
| Name         | Type   | Required | Default | Description                                  |
| ------------ | ------ | -------- | ------- | -------------------------------------------- |
| className    | string | false    | -       | The extended className for component.        |
| value        | any    | false    | -       | Default value.                               |
| shouldTrim   | bool   | false    | false   | If the value should be trim before returned. |
| autoComplete | string | false    | 'off'   | Should autoComplete on.                      |
| onChange     | func   | false    | noop    | The change handler.                          |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-input/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-input/dist/style.scss";

  // customize your styles:
  $react-ant-input-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntInput from '@jswork/react-ant-input';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: '',
      value2: ''
    };

    handleChange = (inEvent) => {
      this.setState({
        [inEvent.target.name]: inEvent.target.value
      });
    };

    render() {
      const { value, value2 } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-ant-input">
          <article className="message is-info">
            <div className="message-header">Preview:</div>
            <div className="message-body">
              <ReactAntInput
                name="value"
                value={value}
                placeholder="Please input text1..."
                className="mb-2"
                onChange={this.handleChange}
              />

              <ReactAntInput
                shouldTrim
                name="value2"
                placeholder="Please input text2..."
                value={value2}
                onChange={this.handleChange}
              />
            </div>
          </article>

          <article className="message">
            <div className="message-header">Status changed:</div>
            <div className="message-body">
              {JSON.stringify(this.state, null, 2)}
            </div>
          </article>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-input/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-input/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-input
[version-url]: https://npmjs.org/package/@jswork/react-ant-input

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-input
[license-url]: https://github.com/afeiship/react-ant-input/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-input
[size-url]: https://github.com/afeiship/react-ant-input/blob/master/dist/react-ant-input.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-input
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-input
