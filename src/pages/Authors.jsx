import React, { useState } from 'react'
import authorServices from '../services/authorServices';
import { Link, useLoaderData } from 'react-router-dom';
import Modal from '../components/Modal';
import { useFormik } from 'formik';

export const loader = async() =>{
    const authors= await authorServices.getauthors();
    return authors
}
const Authors = () => {
    const authors= useLoaderData();
    const[author, setAuthor]=useState(authors)
    const [showModal, setShowModal] = useState(false);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
   
    const handleDelete =(deleteId)=>{
    const deleteAuthor= author.filter((data)=>data.id !== deleteId)
     setAuthor(deleteAuthor);
    }
    const handleEditClick = (id) => {
      
      setSelectedAuthor(id);
    //console.log(author)
    setShowModal(true); 
    }
   
    const validate = values =>{
      const errors ={};
      if(!values.name){
          errors.name = '## Title is required....'
      }
      if(!values.title){
          errors.title ='## Author name is required....'
    }
      if(!values.birth){
          errors.birth='ISBN Number is required'
      }else if(values.birth.length !==9){
          errors.birth = '## Invalid ISBN Number '
      }
      if(!values.biography){
          errors.biography = '## published date is required'
      }
    return errors;
    }
    
    const formik = useFormik({
    initialValues:{
      
        name:'',
        title:'',
        birth:'',
        biography:''
    },    
    validate,
    onSubmit: values =>{
      const newAuthor = {
       
        name: values.name,
        title: values.title,
        birth: values.birth,
        biography: values.biography
    };
    setAuthor([...authors, newAuthor]);
    formik.resetForm(); // Reset form after submission
    },
    
    })
    
    const style={
    color:'red',
    fontweight:'italic',
    }
return ( 
    <>
    <div className='container'>
    <div className='row'>
    <div className='header tex-center'>
    <h1>Authors List</h1>
    </div>
    <div className='form'>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input type='text' name='name' value={formik.values.name} onChange={formik.handleChange}placeholder='Enter Name'/>
        </div>
        <div style={style}>{formik.errors.name}</div>
        <div>
        <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange}  placeholder='Enter Title'/>
        </div>
        <div style={style}>{formik.errors.title}</div>
        <div>
        <input type='text' name='birth' value={formik.values.birth} onChange={formik.handleChange}placeholder='Enter Birth'/>
        </div>
        <div style={style}>{formik.errors.birth}</div>
       <div>
       <input type='text' name='biography' value={formik.values.biography} onChange={formik.handleChange} placeholder='Enter Biography'/>
       </div>
       <div style={style}>{formik.errors.biography}</div>
        <button type='submit'>Add</button>
      </form>
      </div>
    
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th><Link to="/">Title</Link></th>
              <th>Birth Date</th>
              <th>Short-Biography</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {author.map(authors=> (
          
            <tr key ={authors.id}>
              <td>{authors.name}</td>
              <td>{authors.title}</td>
              <td>{authors.birth}</td>
              <td>{authors.biography}</td>
              <td>
                <button type='submit' className='edit-btn' onClick={() => handleEditClick(authors.id)}>edit</button>
                <button type='submit' className='dlt-btn' onClick={()=>handleDelete(authors.id)}>delete</button>
              </td>
            </tr>
        ))}
         </tbody>
        </table>
      
      {showModal && (<Modal closeModal={()=>{setShowModal(false)}}
        initialAuthor={selectedAuthor}
        
        />
        )}
        </div>
        </div>
    </>
  )
}
export default Authors;