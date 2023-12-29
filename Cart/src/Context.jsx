import React,{useState,useEffect,useContext,useReducer} from 'react'
import cartItems from './data'
import Reducer from './Reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const intialState = {
    loading:false,
    cart:cartItems,
    total:0,
    amount:0,
}

export const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(Reducer,intialState)

    const clearCart = ()=>{
        dispatch({type:'CLEAR_CART'})
    }

    const removeItem = (id)=>{
        dispatch({type:'REMOVE',payload:id})
    }

    const increase =(id) =>{
        dispatch({type:'INCREASE', payload:id})
    }

    const decrease = (id) => {
        dispatch({type:'DECREASE',payload:id})
    }

    const fetchData = async ()=>{
        dispatch({type:'LOADING'})
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({type:'DISPLAY_ITEMS',payload:cart})
    }

    useEffect(()=>{
        fetchData();
    },[])

    const toggleAmount = (id,type) =>{
        dispatch({type:'TOGGLE_AMOUNT',payload:{id,type}})
    }

    useEffect(()=>{
        dispatch({type:'GET_TOTALS'})
    },[state.cart])

    return (
        <AppContext.Provider
        value={{
            ...state,
            clearCart,
            removeItem,
            increase,
            decrease,
            toggleAmount,
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
