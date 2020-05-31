import React, { Component } from "react";
import axios from "axios";
import { addToCart } from "./actions/cartActions";
import { connect } from "react-redux";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
    console.log(id);
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
    //   .get("http://localhost:8000/api/pizza")
      .get('https://yupizza-backend.herokuapp.com/api/pizza')
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let pizzaList = this.state.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <br></br>
        
          {/* <small>Idnt: {item.id}</small> */}
          <div className="card-image">
            <img src={item.imgUrl} alt={item.name} />

            <span
              to="/cart"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="material-icons">add</i>
            </span>
          </div>

          <br></br>

          <span className="card-title">{item.name}</span>

          <div className="card-content">
            <p>{item.description}</p>

            <br></br>

            <p>
              <b>Price: Kes. {item.price}</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="box">{pizzaList}</div>
      </div>
    );
}  
}

// const mapStateToProps = state => ({
//     items: Object.keys(state.offers).map((k) => state.items[k])

//   });

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};


// export default connect(mapStateToProps)(Home);

export default connect(mapStateToProps, mapDispatchToProps)(Home);