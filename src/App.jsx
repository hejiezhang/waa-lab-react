import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import Header from './components/Header';
import Posts from './components/Posts';
import AddPost from './components/AddPost';
import Dashboard from './components/Dashboard';


function App() {

  return (
    <PostProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Router>
    </PostProvider>
  )
  
}

export default App
