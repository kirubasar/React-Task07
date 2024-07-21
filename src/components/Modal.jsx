import React, { useState } from 'react'
import "./Modal.css"
import { useFormik } from 'formik';
const Modal = ({closeModal, initialAuthor}) => {
    const[author, setAuthor] = useState(initialAuthor);
    console.log(author)
    const validate = values =>{
        const errors ={};
        if(!values.name){
            errors.name = '## AuthorName is required....'
        }
        if(!values.title){
            errors.title ='## Title is required....'
        }
        if(!values.birth){
            errors.birth ='## BirthDate is required....'
        }
    return errors;
    }
    const formik = useFormik({
        initialValues:{
            title:'',
            author:'',
            birth:''
        },    
        validate,
        onSubmit: values =>{
            setAuthor(values)
            closeModal();
            //console.log(values)
        },
        
      })
      
       const style={
        color:'red',
        fontweight:'italic'
       }
 
  return (
    <div
    className='modal-container'
    onClick={(e) => {
      if (e.target.className === 'modal-container') closeModal();
    }}
  >
    <div className='modal'>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        <div style={style}>{formik.errors.name}</div>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </div>
        <div style={style}>{formik.errors.title}</div>
        <div className='form-group'>
          <label>Birth</label>
          <input
            type='text'
            name='birth'
            value={formik.values.birth}
            onChange={formik.handleChange}
          />
        </div>
        <div style={style}>{formik.errors.birth}</div>
       
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    </div>
  </div>
);
};

export default Modal;