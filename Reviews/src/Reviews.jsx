import React,{useState} from 'react'
import data from './data'
import {FaChevronLeft, FaChevronRight, FaQuoteRight}  from 'react-icons/fa'

const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name,job,image,text} = data[index]

    const checkNumber =(number) => {
        if(number > data.length - 1){
            return 0;
        }
        if(number < 0){
            return data.length - 1
        }
        return number;
    }

    const prevReview = () => {
        setIndex((index)=>{
            let newIndex = index - 1;
            return checkNumber(newIndex)
        })
    }

    const nextReview = () => {
        setIndex((index)=>{
        const newIndex = index + 1;
        return checkNumber(newIndex)
        })
    }

    const randomReview = ()=>{
            let newIndex = Math.floor(Math.random() * data.length)
            if(newIndex === index){
                newIndex = index + 1
            }
            setIndex(checkNumber(newIndex))
    }



  return (
   <article className='review'>
    <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
            <FaQuoteRight />
        </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div>
    <button className='prev-btn' onClick={prevReview}>
        <FaChevronLeft />
    </button>
    <button className='next-btn' onClick={nextReview}>
        <FaChevronRight />
    </button>
    </div>
    <button className='random-btn' onClick={randomReview}>
        Random one
    </button>
   </article>
  )
}

export default Reviews