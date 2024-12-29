import { useState } from 'react'
import SearchBar from './components/Searchbar'
import NavigationBar from './components/NavigationBar'
import SearchFilter from './components/SearchFilter';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginCard from './components/LoginCard';

function App() {
  

  return (
    <>
    <header className='header'>
    <NavigationBar/>
    </header>
    
    <main>
      <div className='HomePageCard'>
        <div className='SearchBar'><SearchBar/></div>
        <div className='SearchFilter'><SearchFilter/></div>
      </div>
      <div className='"d-flex justify-content-center align-items-center vh-100"'>
      <LoginCard/>
      </div>
      <div className='Main Carousel'><Carousel/></div>
    </main>
    
    <footer></footer>
    </>
      
  )
}

export default App
