# react-ant-input
> Ant input.

## installation
```shell
npm install -S @feizheng/react-ant-input
```

## update
```shell
npm update @feizheng/react-ant-input
```

## properties
| Name         | Type   | Default | Description                                  |
| ------------ | ------ | ------- | -------------------------------------------- |
| className    | string | -       | The extended className for component.        |
| value        | any    | -       | Default value.                               |
| shouldTrim   | bool   | false   | If the value should be trim before returned. |
| autoComplete | string | 'off'   |
| onChange     | func   | noop    | The change handler.                          |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-input/dist/style.scss";

  // customize your styles:
  $react-ant-input-options: ()
  ```
2. import js
  ```js
  import ReactAntInput from '@feizheng/react-ant-input';
  import ReactDOM from 'react-dom';
  import React from 'react';
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
        <div className="app-container">
          <ReactAntInput
            name="value"
            value={value}
            onChange={this.handleChange}
          />

          <ReactAntInput
            shouldTrim
            name="value2"
            value={value2}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-input/
