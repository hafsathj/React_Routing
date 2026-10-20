
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import BlogList from './pages/BlogList'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './pages/NavigationBar'
import Favorites from './pages/Favorites'
function App() {
  return (
    <>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/bloglist' element={<BlogList />} />
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>

    </>
  )
}

export default App
