import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static defaultProps = {
    start: 0
  };

  static propTypes = {
    start: PropTypes.number.isRequired
  };

  state = {
    counter: this.props.start
  };

  updateCounter = value => {
    this.setState(prev => ({
      counter: prev.counter + value
    }));
  };

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', {
        value: this.state.counter,
        readOnly: true
      }),
      React.createElement(
        'button',
        {
          onClick: () => this.updateCounter(1)
        },
        'Increase'
      ),
      React.createElement(
        'button',
        {
          onClick: () => this.updateCounter(-1)
        },
        'Decrease'
      )
    );
    // return <>
    //     <input value={this.state.counter} readOnly={true} />
    //     <button onClick={() => this.updateCounter(1)}>Increase</button>
    //     <button onClick={() => this.updateCounter(-1)}>Decrease</button>
    // </>
  }
}

export default Counter;
