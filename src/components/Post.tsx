import React, { useState, useEffect, useReducer } from 'react'
import { getPosts } from '../api/post'

// const initialState: object = {
//     userId: 0,
//     id: 0, 
//     title: '',
//     body: ''
// }
let initialState: { userId: number, id: number, title: string, body: string }[] = [
    { "userId": 0, "id": 0, "title": '', "body": ''},
];


console.log(Array.isArray(initialState))

const Post: React.FC = () => {
    const postReducer = (state: typeof initialState, action: any):any => {
        switch (action.type) {
            case "FETCH":
                return [
                    ...action.payload,
                ]
                break;
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(postReducer, initialState);
    const [arrState, setArrState] = useState<Array<any>>([]);

    const getAllPosts = async () => {
        let response = await getPosts();
        setArrState(response);
        dispatch({ type: "FETCH", payload: response})
    }
    useEffect(()=>{
        getAllPosts()
    }, [])

    console.log(Array.isArray(state))
    console.log(typeof state[0].userId)

    return (
        <div>
            {/* {arrState && arrState.map((item, index)=> {
               return <p>{item.title}</p>
            })} */}
            {state?.map((item:any)=>{
                return ( 
                <div>
                    <p>{item.userId}</p> 
                    <p>{item.id}</p> 
                    <p>{item.title}</p> 
                    <p>{item.body}</p> 
                </div>
                )
            })}
        </div>
    )
}

export default Post
