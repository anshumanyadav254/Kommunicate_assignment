import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataFetchingOne from './Components/DataFetching';
import PostList from './Components/PostList';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <DataFetchingOne/>
      {/* <PostList/> */}
    </div>
  );
}

export default App;
