import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { removeAllCartAction } from '../../redux/Actions/CartAction'
import { ChekOutAction } from '../../redux/Actions/CheckOutAction'
import { getUserAction } from '../../redux/Actions/UserAction'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const { cartItems } = useSelector((state) => state.cart)
    const [totalPrice, setTotalPrice] = useState(0);
    const dispach = useDispatch()
    const {userInfo} = useSelector((state) => state.user)
    const navigate = useNavigate()
    console.log(userInfo);

    useEffect(() => {
        countTotal()
        dispach(getUserAction())
    }, [totalPrice])
    const addOrder = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Sifarişi tamamlamaq istədiyinizə əminsiniz?',
            text: `Sifarişin ümumi məbləği ${totalPrice}. Sifariş tamamlanandan sonra səbətdəki məhsullar silinəcək.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sifarişi tamamla',
            cancelButtonText: 'Ləğv et. ',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Sifariş tamamlandı.',
                    'Zəhmət olmassa emailinizə baxın',
                    'success'
                )
                    dispach(ChekOutAction(userInfo.id))
                    dispach(removeAllCartAction())

                // Bu hissədə add metodu işləyəcək
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Ləğv edildi.',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const countTotal = () => {
        var price = 0;
        cartItems.map(cart => {
            price += cart.price * cart.quantity;
        })
        setTotalPrice(price)
    }

   

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
                                <Button onClick={() => addOrder()} variant="contained">
                                    Sifarisi tamamla
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart