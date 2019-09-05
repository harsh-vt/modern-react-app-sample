import React,{useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hook_reducer';
import Context from '../utils/context';


const HooksForm = () => {
    const context = useContext(Context)
    const [valueChange, setValueChange] = useState('')
    const [valueSubmit, setValueSubmit] = useState('')
    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

    const handleuseStateChange = (event) => {
        setValueChange(event.target.value)
    }
    
    const handleuseStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    }

    const handleuseReducerChange = (event) => {
        userDispatch(ACTIONS.user_input_change(event.target.value))
    }

    const handleuseReducerSubmit = (event) => {
        event.preventDefault()
        userDispatch(ACTIONS.user_input_submit(event.target.useReducer.value))
    }



    return (
        <div>
            <form onSubmit={handleuseStateSubmit}>
                <label> sReact useState: </label>
                <input id = 'useState' type='text' onChange = {handleuseStateChange}/>
                <button type = 'submit'> Submit </button>   
            </form>
            <form onSubmit={handleuseReducerSubmit}>
                <label> React useReducer: </label>
                <input id = 'useReducer' type='text' onChange = {handleuseReducerChange}/>
                <button type = 'submit'> Submit </button>   
            </form>
            <form onSubmit={context.useContextHandleSubmit}>
                <label> React useContext: </label>
                <input id = 'useContext' type='text' onChange = {context.useContextHandleChange}/>
                <button type = 'submit'> Submit </button>   
            </form>
            <div>
                <h2> React useState: </h2>
                <b> Change: {valueChange}</b>
                <b> Submit: {valueSubmit}</b>
                <br/>
                <h2> React useReducer: </h2>
                <b> Change: {userState.user_text_change}</b>
                <b> Submit: {userState.user_text_submit}</b>
                <br/>
                <h2> React useContext: </h2>
                <b> Change: {context.useContextChange}</b>
                <b> Submit: {context.useContextSubmit}</b>
            </div>
        </div>
    )
}
export default HooksForm;
