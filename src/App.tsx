
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
 
import ListPage from './pages/ListsFormacao'

import Home from './pages/Home'

import Formacaod from './pages/IdFormacao'
import ListFormacao from './pages/ListFormacao'
import NotFoud from './pages/NotFoud'



function App() {
 
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/lists/:listid/formacao' element= {<ListFormacao/>}/>
          <Route path='/formacao/:id' element={<Formacaod/>} />
          <Route path = "/lists" element={<ListPage/>}/>
          <Route path='*' element= {<NotFoud/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
