import React ,{useState}from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Question = ({id,title,info}) => {

    const[show, setShow] = useState(false)

    const handleShow = (id) =>{
        setShow(!show)
    }


  return (
  <article className="question">
    <header>
        <h4>{title}</h4>
        <button className="btn" onClick={()=>handleShow(id)}>{show ? <FontAwesomeIcon icon="fa-solid fa-minus" /> : <FontAwesomeIcon icon="fa-solid fa-plus" />}</button>
    </header>
    {show && <p>{info}</p>}
    </article>
  )
};

export default Question;
