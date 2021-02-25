import React, { useState, useRef } from 'react'
//this is another interface to couple with the props
import { Person, Props, Node } from '../interfaces/TextField';

const TextField: React.FC<Props> = ({person}) => {
    //in typescript the type must be declared in brackets
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [nameDiv, setNameDiv] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLInputElement>(null);
    //you can hover over elements to see what type they take


    //we can get value of an element using useref, we don't have to set state all the time
    //if we don't want.  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        let text: string;
        //have to check if useref is null anytime you use or this will cause problems
        null !== inputRef.current ? console.log(inputRef.current.value) : console.log('useref is null');
        text = e.currentTarget.value; 
        console.log(text)
        setText((t)=>text)

      };
    //this is a complex type, hover over the element to check
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        setCount((c)=>count+1)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        let name: string;
        null !== formRef.current ? name = formRef.current.value : console.log('formRef is null')
        setNameDiv((n)=>name);
    }

    return (
        <div>
            <input onChange={handleChange}/>
            <button onClick={handleClick}>Increment</button>
            <input ref={inputRef}/>
            <div>{count}</div>
            <div>{text}</div>
            <form onSubmit={handleSubmit}>
                <input placeholder="name" type="text" ref={formRef}/>
                <button type="submit">Submit</button>
            </form>
            <div>{nameDiv}</div>
            <div>{person.firstName}</div>
        </div>
    )
}

export default TextField
