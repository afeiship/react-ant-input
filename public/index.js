import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntInput from '../src/main';
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
