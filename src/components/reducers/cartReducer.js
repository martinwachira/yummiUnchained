
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Pepperoni', desc: "Pepperoni", price:3000.00,img:'https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg/awesome-pepperoni-pizza-7f8696.jpg'},
        {id:2,title:'Chicken Tikka', desc: "Chicken Tikka", price:3400.00,img: 'https://www.bawarchi.com/uploads/oesuy8iicjcgb_bigger.jpg'},
        {id:3,title:'Mixed sliced mushrooms and garlic', desc: "Mixed sliced mushrooms and garlic.",price:1200.00,img: 'https://prods3.imgix.net/images/articles/2016_11/Feature-21-Greenpoint-Mushroom-Pesto-Garlic-NEW1.jpg?auto=format%2Ccompress&dpr=2.63&ixjsv=2.2.3&q=38&w=370'},
        {id:4,title:'Broccolini', desc: 'Broccolini', price:1550.00,img:'https://nyssaskitchen.com/wp-content/uploads/2016/01/brocolini-and-red-onion-flat-bread-3.jpg'},
        {id:5,title:'PeriPeri', desc: "PeriPeri", price:3400.00,img: 'https://i.pinimg.com/736x/f7/80/72/f78072871496473d23f70e02a9ac4fc6.jpg'},
        {id:6,title:'BBQ STeak', desc: "BBQ STeak", price:2300.00,img: 'https://consumerpricecheck.com/wp-content/uploads/2019/05/mr-mike-s-pizza-company.jpg'},
        {id:7,title:'Sweetcorn-green pepper- chilli -onion', desc: "Sweetcorn-green pepper- chilli -onion",price:4590.00,img: 'https://image.shutterstock.com/image-photo/italian-delicious-fresh-baked-pizza-600w-1455564008.jpg'},
        {id:8,title:'Macon-pineapple', desc: "Macon-pineapple",price:4560.00,img: 'https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/f0d15e5b-1e2f-46cf-8063-ee7a2eb0d73e/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4'},

    ],

    // currentPizza: {

    //     getPizza(id) {
    //         PizzaService.get(id)
    //           .then(response => {
    //             this.setState({
    //                 currentPizza: response.data
    //             });
    //             console.log(response.data);
    //           })
    //           .catch(e => {
    //             console.log(e);
    //           });
    //       }
    // },
    // items: [],
    addedItems:[],
    total: 0

}
  
const cartReducer= (state = initState,action)=>{    
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 50
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 50
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
