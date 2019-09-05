import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions';
import * as UserReducer from './store/hooks_state/user_input_hook_reducer';


const App = () => {
    const [stateGlobal, setStateGlobal] = useState(0)

    const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)
    
    const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState)
    
    const incrementGlobalState = () => {
        setStateGlobal(stateGlobal + 1)
    }

    const decrementGlobalState = () => {
        setStateGlobal(stateGlobal - 1)
    }
    
    const handleContextDispatchTrue = () => {
        //dispatch(ACTION.SUCCESS)
        //dispatch(type: "SUCCESS")
        dispatchContextGlobal(ACTIONS.success())
    }

    const handleContextDispatchFalse = () =>{
        //dispatch(ACTION.FAILURE)
        //dispatch(type: "FAILURE")
        dispatchContextGlobal(ACTIONS.failure())
    }
    
    const handleuseContextChange = (event) => {
        dispatchUser(ACTIONS.user_input_change(event.target.value))
    }

    const handleuseContextSubmit = (event) => {
        event.preventDefault()
        event.persist()
        dispatchUser(ACTIONS.user_input_submit(event.target.useContext.value))
    }

    return(
      <div>
      React
      <Context.Provider
        value={{
            valueGlobalState: stateGlobal, 
            addGlobalValue: () => incrementGlobalState(),
            decGlobalValue: () => decrementGlobalState(),
            reducerGlobalState: stateContextGlobal.stateprop2,
            dispatchContextTrue: () => handleContextDispatchTrue(),
            dispatchContextFalse: () => handleContextDispatchFalse(),
            useContextChange: stateUser.user_text_change,
            useContextSubmit: stateUser.user_text_submit,
            useContextHandleChange: (event) => handleuseContextChange(event),
            useContextHandleSubmit: (event) => handleuseContextSubmit(event)
        }}
        >
      <Routes />
      </Context.Provider>
      </div>
    )}

export default App;
