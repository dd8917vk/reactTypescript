import React, { useState, useEffect, useReducer } from 'react'
import { FormInterface, initStateLayout } from '../interfaces/Form'


export const Form = () => {

    //USE STATE EXAMPLE OF FORM
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [obj, setObj] = useState<FormInterface>({
        username: '',
        password: '',
    });

    const submitForm = (e: React.ChangeEvent<HTMLFormElement>):void => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):object => {
        // if (e.target.type === "text") {
        //     // setObj({...obj, [obj.username]: e.target.value})
        //     // newObj = Object.assign({}, obj);
        //     setObj({...obj, username: e.target.value})
        //     console.log(obj)
        // } else {

        // }
        switch (e.target.type) {
            case "text":
                setObj({...obj, username: e.target.value})
                break;
            case "password":
                setObj({...obj, password: e.target.value})
                break;
            default:
                return obj;
        }
        return obj;
    }

    useEffect(()=>{
        console.log(isLoggedIn);
        console.log(obj);
    }, [isLoggedIn, obj])



    //REDUCER EXAMPLE OF SAME THING
    const submitFormReducer = (e: React.ChangeEvent<HTMLFormElement>):void => {
        e.preventDefault();
        dispatch({type: "login"})
    }
    // const handleChangeReducer = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     switch (e.target.type) {
    //         case "text":
    //             dispatch({type:"username"})
    //             break;
    //         case "password":
    //             dispatch({type:"password"})
    //             break;
    //         default:
    //             return state;
    //     }
    //     return state;
    // }

    const initialState: initStateLayout = {username: '', password: '', isLoggedIn: false, count:0};

    const loginReducer = (state: typeof initialState, action: any):any => {
        switch (action.type) {
            case "login":
                return {
                    ...state, 
                    isLoggedIn: true
                }
                break;
            case "field":
                return {
                    ...state,
                    [action.field]: action.value,
                }
                break;
            case "increment":
                return {
                    ...state,
                    count: state.count+1
                }
                break;
            case "decrement":
                return {
                    ...state,
                    count: state.count-1
                }
                break;
            case "reset":
                return {
                    ...state,
                    count: 0,
                }
                break;
            default:
                break;
        }
        return state;
    }
    const [state, dispatch] = useReducer(loginReducer, initialState)
    console.log(state);

    return (
        <div>
            <form onSubmit={submitForm}>
                <p>Please Login</p>
                <input type="text" placeholder="username" onChange={handleChange}/>
                <input type="password" placeholder="password" autoComplete="new-password" onChange={handleChange}/> 
                <button type="submit">Submit</button>
            </form>
            {/* REDUCER BELOW */}
            <form onSubmit={submitFormReducer}>
                <p>Please Login</p>
                <input type="text" placeholder="username" onChange={e => dispatch({type: 'field', field: 'username', value: e.target.value})}/>
                <input type="password" placeholder="password" autoComplete="new-password" onChange={e => dispatch({type: 'field', field: 'password', value: e.target.value})}/> 
                <button type="submit">Submit</button>
            </form>
            <button onClick={e => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={e => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={e => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}
