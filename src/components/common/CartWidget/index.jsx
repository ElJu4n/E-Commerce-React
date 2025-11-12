import './cartWidget.css'
import cartIcon from '../../../assets/cart.svg'

const CartWidget = () => {
    return(
        <div className='icon-with-notification'>
          <img src={cartIcon} alt="" className='cart-icon' />
          <div className='notification-bubble'>12</div>
        </div>
    )
    
}

export default CartWidget