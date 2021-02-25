import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';
import  { Message } from './Message';
import { Form } from './components/Form'
import { getPosts } from './api/post'
import Post from './components/Post'

function App() {
  const [posts, setPosts] = useState<Array<any>>([]);
   
  const newChange = () => {
    console.log('hello')
  }
  return (
    <>
    <TextField text="hello" person={{firstName: 'James', lastName: 'Bellamy'}}/>
    <Message message="message" newChange={newChange} />
    <Form />
    <Post/>
    
    
    </>
  );
}

export default App;
