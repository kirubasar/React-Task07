import React, { useState } from 'react'
import './Modals.css';
import { useFormik } from 'formik';

const Modals = ({closeModal, initialBook}) => {
    const[book, setBook] = useState(initialBook);
    console.log(book)
    const validate = values =>{
        const errors ={};
        if(!values.title){
            errors.title = '## Title is required....'
        }
        if(!values.author){
            errors.author ='## Author name is required....'
    }
    return errors;
}
   const formik = useFormik({
    initialValues:{
        title:'',
        author:''
    },    
    validate,
    onSubmit: values =>{
        setBook(values)
        closeModal();
        console.log(values)
    },
})
  const style={
    color:'red',
    fontweight:'italic',
}
return (
    <div className='modal-container' onClick={(e)=>{
        if(e.target.className ==='modal-container')
        closeModal()}}>
        <div className='modal'>
            <form onSubmit={formik.handleSubmit}>
            <div className='form-group'>
               <label>Title</label>
               <input type='text'name='title' value={formik.values.title} onChange={formik.handleChange}/>
            </div>
            <div style={style}>{formik.errors.title}</div>
            <div className='form-group'>
               <label >Author</label>
               <input type='text' name='author' value={formik.values.author} onChange={formik.handleChange}/>
                </div>
                <div style={style}>{formik.errors.author}</div>
                <button type='submit' className='btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}
export default Modals;