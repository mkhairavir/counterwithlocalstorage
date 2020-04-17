import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Counter = () => {
    
    const [product, setProduct] = useState("")
    let [cart, setCart] = useState(0)
    let [urutan,setUrutan] = useState(1)
    

    const handleChange = (event) => {
        // console.log("hanChange", event.target.value)
        setProduct(event.target.value)
    }

    const plusClick = () => {
        setCart(cart+=1)
    }

    const minusClick = () => {
        if(cart >= 1) setCart(cart-=1)
    }

    const buttonClick = () => {
        const item  = {
            product: product,
            jumlah: cart,
        }
        let setate = true
        let key="list_"
        if(setate == true){
            key+=urutan;
            setUrutan(urutan+=1)
            console.log("ini urutan", urutan)
            console.log("ini key",key)
            localStorage.setItem(key,JSON.stringify(item))
        }

        setProduct("")
    }

    return(
        <div>
        <h1>Ini adalah Counter</h1> <br/>
        <input type="text" onChange={handleChange} value={product} placeholder="Input barang anda disini" />
        <button onClick={plusClick}>Plus</button> <span>{cart}</span> <button onClick={minusClick}>Minus</button> <br/><br/>
        <button onClick={buttonClick}>Tambah !</button>
        <Link to={"/listproduct"}>
            <button>List Product</button>
        </Link>
        </div>
    )
}

export default Counter;