
import { addComments } from "../commsentsReducer/commsentsReducer"
import { addManyC } from "../customerReducer/customerReducer"

export const  fetchCustomers = () => {
    return function(dispatch){
        try {
            //posts
            fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then(response => response.json())
            .then(json => dispatch(addManyC(json)))
            //comments
            fetch('https://jsonplaceholder.typicode.com/comments?_limit=50')
            .then(response => response.json())
            .then(json => dispatch(addComments(json)))
        }
        catch (e) {
            console.log(e);
        }
    }
}