import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cartItems } = useSelector((state) => state.cart)
    const [totalPrice, setTotalPrice] = useState(0);


    const countTotal = () => {
        var price = 0;
        cartItems.map(cart => {
            price += cart.price * cart.quantity;
        })
        setTotalPrice(price)
    }

    useEffect(() => {
        countTotal()
    }, [totalPrice])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            cartItems.length > 0 ?
                                cartItems.map(product => (
                                    <div key={product.id} className="row">
                                        <div className="col-lg-2">
                                            <img className='img-fluid' src={product.img} alt='' />
                                        </div>
                                        <div className="col-lg-4">{product.name}</div>
                                        <div className="col-lg-4">
                                            <button >-</button>
                                            <input type="text" defaultValue={product.quantity} />
                                            <button >+</button>
                                        </div>
                                        <div className="col-lg-2">{product.price} Total: {product.price * product.quantity}</div>
                                    </div>
                                ))

                                : (
                                    "Mehsul yoxdu"
                                )
                        }

                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className='cart-title'>Order Description</h1>
                                <p>TotalPrice: {totalPrice}</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/">
                                    <Button variant="contained">
                                        Sifarisi tamamla
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart