import {getData} from "./constants/db.js";
import Card from "./components/card/card.jsx";
import './App.css'
import Cart from "./components/cart/cart.jsx";
import {useEffect, useState} from "react";

const courses = getData()

const telegram = window.Telegram.WebApp;
const App = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        telegram.ready()
    })
    const onAddItem = (item) => {
        const existItem = cartItems.find(c => c.id === item.id)

        if (existItem) {
            const data = cartItems.map(c =>
                c.id === item.id
                    ? {...existItem, quantity: existItem.quantity + 1}
                    : c);
            setCartItems(data)
        } else {
            const newData = [...cartItems, {...item, quantity: 1}]
            setCartItems(newData)
        }
    }
    const onRemoveItem = (item) => {
        const existItem = cartItems.find(c => c.id === item.id)

        if (existItem.quantity === 1) {
            const newData = cartItems.filter(c =>
            c.id !== existItem.id
            );
            setCartItems(newData)
        }else {
            const newData = cartItems.map(c =>
            c.id === existItem.id
                ? {...existItem, quantity: existItem.quantity - 1}
                : c
            );
            setCartItems(newData)
        }
    }

    const onCheckout = () => {
        telegram.MainButton.text = "Sotib olish";
        telegram.MainButton.show();
    }

    return (
        <>
            <h1 className='heading'>Kurslar</h1>
            <Cart cartItems={cartItems} onCheckout={onCheckout}/>
            <div className="cards_container">
                {courses.map(c => (
                    <Card key={c.id} course={c} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>
                ))}
            </div>
        </>
    )
}

export default App;