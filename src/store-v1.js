import {combineReducers, createStore} from "redux";


const initialStateAccount = {
    balance : 0,
    loan: 0,
    loanPurpose: ''
};



const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: ""
}



// reducer not allowed to modify the existing state and to do any async task logic or other side effect.
// difference between redux and reducer hook is we directly pass in initial state to reducer as the default state
function accountReducer(state = initialStateAccount, action) {
    switch (action.type){
        case "accounts/deposit":
            return {
                ...state,
                balance: state.balance += action.payload
            };
        case "accounts/withdraw":
            return {
                ...state,
                balance: state.balance -= action.payload
            };

        case "accounts/requestLoan":
            if (state.loan > 0) return state;

            return  {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance += action.payload.amount,
            }
        case "accounts/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan
            }
        default:
            return state
    }
}


function customerReducer(state = initialStateCustomer, action) {
    // console.log(action)


    switch (action.type){
        case "customers/createCustomer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt,
            }
        case "customers/updateName" :
            return {
                ...state,
                fullName: action.payload
            }
        default :
            return state;
    }
}


const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

// create store.
const store = createStore(rootReducer)

// without action creator
// //dispatch action
// store.dispatch({
//     type: "accounts/deposit", payload: 500
// })
//
// //execute
// console.log(store.getState())
//
// store.dispatch({
//     type: "accounts/withdraw", payload: 300
// })
// console.log(store.getState())
//
// store.dispatch({
//     type: "accounts/requestLoan", payload: {
//         amount: 1000,
//         purpose: "buy a iphone"
//     }
// });
//
//
// console.log(store.getState())
//
// store.dispatch({
//     type: "accounts/payLoan"
// })
//
// console.log(store.getState())



//with action creator
// accounts action creator
const deposit = (amount) => {
    return {
        type: "accounts/deposit",
        payload : amount
    }
}
const withdraw = (amount) => {
    return {
        type: "accounts/withdraw",
        payload: amount
    }
}
const requestLoan = (amount, purpose) => {
    return {
        type: "accounts/requestLoan",
        payload: {
            amount,
            purpose
        }
    }
}
const payLoan = () => {
    return {
        type: "accounts/payLoan"
    }
}





// store.dispatch(deposit(500));
// console.log(store.getState())
//
//
// store.dispatch(withdraw(50));
// console.log(store.getState())
//
//
// store.dispatch(requestLoan(1000, "Bell Maka n"))
//
// console.log(store.getState())
//
//
// store.dispatch(payLoan())
//
// console.log(store.getState())





// customers action creator
function createCustomer(fullName, nationalID){
    return {
        type: 'customers/createCustomer',
        payload: {
            fullName,
            nationalID,
            createdAt: new Date().toString()
        }
    }
}


function updateName(fullName) {
    return {
        type: "accounts/updateName",
        payload: fullName
    }
}



store.dispatch(createCustomer("Kyle", 123245))

console.log(store.getState())

store.dispatch(updateName("Hero"))
console.log(store.getState())







