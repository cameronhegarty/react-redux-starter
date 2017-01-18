import { routerReducer } from 'react-router-redux';

import counter from 'core/reducers/counter';

export const initialState = {
    counter : {}
};

export default function reducer(state = initialState, action) {
    return {
        counter : counter(state.counter, action),
        routing : routerReducer(state.routing, action)
    };  
}
