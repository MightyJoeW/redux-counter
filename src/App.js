// EXTERNAL DEPENDENCIES
import React, { Component } from 'react';
import { connect } from 'react-redux';

// INTERNAL DEPENDENCIES
import './App.css';
import {decrement, increment } from './state/counter'

// COMPONENT DEFINITION
class App extends Component {
  render() {
		const {
			currentValue,
			decrement,
			increment
		} = this.props;

    return (
      <div className='app'>
        <section className='counter'>
          <h1 className='counter__current-value'>{ 0 }</h1>
          <div className='counter__button-wrapper'>
            <button
              className='counter__button increment-one'
              onClick={ () => increment(1) }
            >
              +1
            </button>
            <button
              className='counter__button increment-five'
              onClick={ () => increment(5) }
            >
              +5
            </button>
            <button
              className='counter__button decrement-one'
              onClick={ () => decrement(1) }
            >
              -1
            </button>
            <button
              className='counter__button decrement-five'
              onClick={ () => decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className='counter__button undo'
              disabled={ true }
              onClick={ () => null }
            >
              Undo
            </button>
            <button
              className='counter__button redo'
              disabled={ true }
              onClick={ () => null }
            >
              Redo
            </button>
          </div>
        </section>
        <section className='state'>
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, { decrement, increment })(App);