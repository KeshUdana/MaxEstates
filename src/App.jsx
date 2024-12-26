import { useState } from 'react'
import SearchBar from './components/searchbar'
import NavigationBar from './components/NavigationBar'
import SearchFilter from './components/SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
    </main>
    
    <footer></footer>
    </>
      
  )
}

export default App
