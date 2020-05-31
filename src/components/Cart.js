import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import ShopCart from './ShopCart'
class Cart extends Component {

   
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
  
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
  
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }
    render() {

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item => {
                    return (

                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img">
                                <img src={item.img} alt={item.img} className="" />
                            </div>

                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: KES {item.price}</b></p>
                                <p>
                                    <b>Quantity: {item.quantity}</b>
                                </p>
                                <div className="add-remove">
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleAddQuantity(item.id) }}>arrow_drop_up</i></Link>
                                    {/* <button className="waves-effect waves-light btn green add" onClick={()=>{this.handleAddQuantity(item.id)}}>Add Quantity</button>
                                            &nbsp;
                                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleSubtractQuantity(item.id)}}>Remove Quantity</button> */}
                                    <Link to="/cart"><i className="material-icons" onClick={() => { this.handleSubtractQuantity(item.id) }}>arrow_drop_down</i></Link>
                                </div>
                                <br />
                                <button className="waves-effect waves-light btn pink remove" onClick={() => { this.handleRemove(item.id) }}>Remove</button>
                            </div>

                        </li>

                    )
                })
            ) :

            (
                <span></span>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5 className="fontT">You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <ShopCart />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)