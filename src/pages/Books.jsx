import React, { useState } from 'react'
import bookServices from '../services/bookServices'
import { Link, useLoaderData } from 'react-router-dom';
import Modals from '../components/Modals';
import { useFormik } from 'formik';
//load our data
export const loader = async() =>{
    const books = await bookServices.getbooks();
    return books;
}
const Books = () => {
 const books = useLoaderData();
 const [book, setBook] = useState(books)
 //console.log(book)
 const[showModal, setShowModal] = useState(false);
 const[selectedBook, setSelectedBook]=useState(null);
 const handleDelete =(deleteId)=>{
  const deleteBook= book.filter((data)=>data.id !== deleteId)
  setBook(deleteBook);
 }
 const handleEditClick = (id) => {
      
  setSelectedBook(id);

setShowModal(true); 
}
 
 const validate = values =>{
  const errors ={};
  if(!values.title){
      errors.title = '## Title is required....'
  }
  if(!values.author){
      errors.author ='## Author name is required....'
}
  if(!values.ISBN){
      errors.ISBN='ISBN Number is required'
  }else if(values.ISBN.length !==17){
      errors.ISBN = '## Invalid ISBN Number '
  }
  if(!values.published){
      errors.published = '## published date is required'
  }
return errors;
}

const formik = useFormik({
initialValues:{
  
  title:'',
  author:'',
  ISBN:'',
  published:''
},    
validate,
onSubmit: values =>{
  const newBook = {
   
    title: values.title,
    author: values.author,
    ISBN: values.ISBN,
    published: values.published
};
setBook([...books, newBook]);
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
    <div className='header text-center'>
      <h1>Book List</h1>
      </div>
      <div className='form'>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange} placeholder='Enter Title'/>
        </div>
        <div style={style}>{formik.errors.title}</div>
        <div>
          <input type='text' name='author' value={formik.values.author} onChange={formik.handleChange} placeholder='Enter author'/></div>
        <div style={style}>{formik.errors.author}</div>
        <div>
        <input type='text' name='ISBN' value={formik.values.ISBN} onChange={formik.handleChange}placeholder='Enter ISBN'/>
        </div>
        <div style={style}>{formik.errors.ISBN}</div>
        <div>
        <input type='text' name='published' value={formik.values.published} onChange={formik.handleChange} placeholder='Enter published'/>
        </div>
        <div style={style}>{formik.errors.published}</div>
       <button type='submit'>Add</button>
      </form>
      </div>
       <table>
          <thead>
            <tr>
              
              <th>Title</th>
              <th><Link to="authors">Author</Link></th>
              <th>ISBN</th>
              <th>published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {book.map(books => (
           <tr key ={books.id}>
              <td>{books.title}</td>
              <td>{books.author}</td>
              <td>{books.ISBN}</td>
              <td>{books.published}</td>
              <td>
               <button type='button' className='edit-btn' onClick={()=>handleEditClick(books.id)}>edit</button>
               <button type='button' className='dlt-btn' onClick={()=>handleDelete(books.id)}>delete</button>
              </td>
              </tr>
        ))}
         </tbody>
        </table>
        {showModal && (<Modals closeModal={()=>{setShowModal(false)}}
        initialBook={selectedBook}/>
        )}
      </div>
      
      </div>  
      
     </> 
  )

}

export default Books;