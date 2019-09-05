import React, {useState, useEffect, useReducer, useContext} from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context'

export const HooksContainer1 = () => {
    const context = useContext(Context)
    const [stateValue, setValue] = useState(0)
    const [useEffectValue, setUseEffectValue] = useState(null)
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)
    
    useEffect(()=>{
        setTimeout(() => setUseEffectValue("useEffect Worked"), 3000 );
    }, [stateValue]
    )
    const incrementValue = () => {
        setValue(stateValue + 1)
    }
    const decrementValue = () => {
        setValue(stateValue - 1)
    }
    const changeuseEffectValue = () =>{
        setUseEffectValue('Some string')
    }

    const handleDispatchTrue = () => {
        //dispatch(ACTION.SUCCESS)
        //dispatch(type: "SUCCESS")
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () =>{
        //dispatch(ACTION.FAILURE)
        //dispatch(type: "FAILURE")
        dispatch(ACTIONS.failure())
    }

    return(
      <div>
      React Hooks
      <br/>
      <button onClick = { () => incrementValue()}> Inc Local State </button>
      <button onClick = { () => decrementValue()}> Dec Local State </button>
      <button onClick = { () => changeuseEffectValue()}> Change Use Effect Value </button>
      <button onClick = { () => handleDispatchTrue()}> Dispatch True Value </button>
      <button onClick = { () => handleDispatchFalse()}> Dispatch False Value </button>
      <button onClick = { () => context.addGlobalValue()}> add global Value </button>
      <button onClick = { () => context.decGlobalValue()}> dec global Value </button>
      <button onClick = { () => context.dispatchContextTrue()}> Dispatch Context True </button>
      <button onClick = { () => context.dispatchContextFalse()}> Dispatch Context False </button>
      <br />
      <div>
          <br/>
            <p> {useEffectValue
            ?<p> {useEffectValue}</p>
            : <p> No Value </p>
        } <br/>
        {state.stateprop1
        ? <p> stateprop is true </p>
        : <p> stateprop is False </p>
        }
        <br/> 
        {context.reducerGlobalState
        ? <p> State prop2 is true </p>
        : <p> State prop2 is false </p>
        }
        </p>
          <p> Local State: {stateValue} </p>
          <br/>
          <p>
             Global State: {context.valueGlobalState}
          </p>
      </div>
      </div>
    )
}

export default HooksContainer1;
