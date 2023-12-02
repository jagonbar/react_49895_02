import './App.css'
import NavBar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'
function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Los JUEGOS geniales que tenemos para ti"/>
      <Footer/>      
    </>
      )
}

export default App
