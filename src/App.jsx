import './App.css'
import Main from './pages/Main'
import Education from './pages/Education'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import ProductPages from './pages/ProductPages'
 import AddProduct from './components/ui/AddProduct'
function App() {
  
  return (
    <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/edu" element={<Education/>}/>
       <Route path="/login" element={<Auth/>}/>
       <Route path="/pages/:id" element={<ProductPages/>}/>
       <Route path="/add" element={<AddProduct/>}/>
    </Routes>
  

  )
}

export default App
  