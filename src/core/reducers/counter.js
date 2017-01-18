import * as actions from 'core/actions';

export default function counter(state = 0, action) {

    if (action.type === actions.INCREMENT || action.type === actions.DECREMENT){

        switch(action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default: 
                return state;
        }
    }
}
