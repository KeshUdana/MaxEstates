import { useState } from 'react'
import SearchBar from './components/searchbar'
import NavigationBar from './components/NavigationBar'
import SearchFilter from './components/SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  

  return (
    <>
    <header>
    <NavigationBar/>
    </header>
    
    <main>
      <div className='HomePageCard'>
    <SearchBar/>
    <SearchFilter/>
    </div>
    </main>
    
    <footer></footer>
    </>
      
  )
}

export default App
