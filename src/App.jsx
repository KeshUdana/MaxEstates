import { useState } from 'react'
import SearchBar from './components/searchbar'
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  

  return (
    <>
    <header>
    <NavigationBar/>
    </header>
    <main>
    <SearchBar/>
    </main>
    <footer></footer>
    </>
      
  )
}

export default App
