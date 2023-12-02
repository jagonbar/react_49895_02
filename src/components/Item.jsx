function Item({nombre_juego, imagen, precio, descripcion, id, dataset}) {
  return (
    <div className="games__game">
        <div className="games__game_img">
            <h2>{nombre_juego}</h2>
            <img src={imagen} alt= {"cover"+nombre_juego}/>
        </div>
        <div className="games__game_price">
            <h3>{precio}</h3>
        </div>
        <div className="games__game_option">
            <a href="" className="games__game_option_buy">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Comprar
            </a>
        </div>
        <div className="games__game_cart">
            <div className="games__game_desc">

                <p>
                    {descripcion}
                </p>
            </div>
            <div>
                <a id={"juego_id_"+id} href="#" {...dataset} className="link_agregar_juego games__game_option_cart">

                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    Agregar al carro
                </a>
            </div>
        </div>
    </div>
  )
}

export default Item