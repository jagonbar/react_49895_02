import CartWidget from "./CartWidget.jsx"
export default function NavBar(){

    const newLocal = <img src="/multimedia/img/joystick-rojo-lado-back.png" alt="joystick ps5 rojo" />;
    return(        
        <header>
            <div className="menu header-child">
                <i className="fa fa-bars" aria-hidden="true"></i>
                <div className="menu-float">
                    <a href="./index.html">
                        <i className="fa fa-home" aria-hidden="true"></i>
                        Home</a>
                    <a href="#">
                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                        Juegos</a>
                    <a href="#">
                        <i className="fa fa-laptop" aria-hidden="true"></i>
                        Armamos tu PC Gamer</a>
                    <a href="#">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        Nosotros</a>
                    <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        Contacto</a>
                    <a href="#">
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        Carrito compra</a>
                    
                </div>
            </div>
            <div className="title header-child">                
                <div className="title-text">POWER GAMES</div>
                <div className="title-image">
                    {newLocal}
                </div>
            </div>
            <nav className="header-child">
                <a className="nav-link" href="../index.html">
                    <i className="fa fa-home" aria-hidden="true"></i>
                    Home</a>
                    <a className="nav-link active" aria-current="page" href="#">
                        <i className="fa fa-gamepad" aria-hidden="true"></i>
                    Juegos</a>
                <a className="nav-link" href="#">
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                    Armamos tu PC Gamer</a>
                <a className="nav-link" href="#">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    Nosotros</a>
                <a className="nav-link" href="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    Contacto</a>
                <a className="nav-link" href="#"> 
                    <CartWidget/>
                </a>                
            </nav>
        </header>
    )
}