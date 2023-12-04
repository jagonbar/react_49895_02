//(1)-- https://www.robinwieruch.de/react-hooks-fetch-data/
import { useState, useEffect } from "react";
import Item from "./Item.jsx";
import { Routes, Route, useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([]);

    let { categoryId } = useParams();

    console.log({ categoryId });

    useEffect(()=>{
        /*(1)*/
        let fetchProducts = async () => {
                                let data = await fetch("/data/products.json");
                                let products = await data.json();
                                
                                let productsCategory = (categoryId!==undefined) ? 
                                    products.filter((p) => p.categoryId == categoryId)
                                    : products;

                                    setItems(productsCategory);
                            }
        fetchProducts();
    }, []);

    let itemParsed = []
    for (let item of items) {
        let dataset = {};
        for (let atributo in item) {
            // console.log({atributo})
            dataset["data-" + atributo] = item[atributo];
        }

        console.log({dataset})
        itemParsed.push(
            <Item
                key={item.productId}
                nombre_juego={item.productName}
                imagen={item.imgSrc}
                precio={item.price}
                descripcion={item.description}
                id={item.productId}
                data={dataset}
            />
        );
    }

    console.log({items})
    console.log({itemParsed})
    return (
        <main>
            <div className="games__title">
                <h1>{greeting}</h1>
            </div>
            <div className="games__content">
                <div className="games__options">
                    <p className="games__options__option">
                        <input
                            type="checkbox"
                            name="NSWITCH"
                            id="NSWITCH"
                            data-tipo="switch"
                            className="checkFiltro"
                            defaultChecked
                        />
                        <label htmlFor="NSWITCH"> NINTENDO SWITCH</label>
                    </p>
                    <p className="games__options__option">
                        <input
                            type="checkbox"
                            name="PS"
                            id="PS"
                            data-tipo="playstation"
                            className="checkFiltro"
                            defaultChecked
                        />
                        <label htmlFor="PS"> PlayStation </label>
                    </p>
                    <p className="games__options__option">
                        <input
                            type="checkbox"
                            name="XBOX"
                            id="XBOX"
                            data-tipo="xbox"
                            className="checkFiltro"
                            defaultChecked
                        />
                        <label htmlFor="XBOX"> XBOX </label>
                    </p>
                    <p className="games__options__option">
                        <input
                            type="checkbox"
                            name="PC"
                            id="PC"
                            data-tipo="pc"
                            className="checkFiltro"
                            defaultChecked
                        />
                        <label htmlFor="PC"> PC </label>
                    </p>
                </div>
                <div className="games__list">{itemParsed}</div>
                {/* ./games__list */}
            </div>
            {/* ./games__content */}
        </main>
    );
}
