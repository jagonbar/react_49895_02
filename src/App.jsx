import "./App.css";
import NavBar from "./components/Navbar.jsx";
import ItemListContainer                from "./components/ItemListContainer.jsx";
import ItemDetailContainer              from "./components/ItemDetailContainer.jsx";
import Footer                           from "./components/Footer.jsx";
import Error                            from "./components/Error.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  let pathname = window.location.pathname
  console.log({pathname})
  let greeting = (pathname=="/")?"Tenemos todo para que seas el mejor GAMER":"categoria q corresponda";

  return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                  <Route exact path="/" element={<ItemListContainer greeting={greeting}/>}/>
                  <Route exact path="/category/:categoryId" element={<ItemListContainer greeting={greeting} />}/>
                  <Route exact path="/item/:productId" element={<ItemDetailContainer greeting={greeting} />}/>
                  <Route path="*" element={<Error />}/>
                </Routes>
            </BrowserRouter>

            <Footer />
        </>
    );
}

export default App;
