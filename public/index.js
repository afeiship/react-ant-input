import ReactAntInput from '../src/main';
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
