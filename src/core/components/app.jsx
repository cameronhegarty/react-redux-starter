import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'core/actions';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleIncrement() {
        this.props.dispatch(actions.increment());
    }

    handleDecrement() {
        this.props.dispatch(actions.decrement());
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <h1> Count : {this.props.counter} </h1>
            </div>
        );
    }

}

App.propTypes = {
    dispatch: React.PropTypes.func,
    counter: React.PropTypes.number
};

export default connect(state => state)(App);