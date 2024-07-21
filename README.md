## React Formik Validation
users to manage book and author details. Use Formik for all form validations.
1. Create the react folder
   - React-tasko6 
   - open this folder with vs code

2. Install Dependencies
   ````
   npm install
   ````
3. Clear the codes
    - App.js and index.css, App.css these files default codes are cleared.

4. Create components
   1. Created pages folder within this folder create [Books.jsx](Books.jsx) and [Authors.jsx](Authors.jsx) files
   2. Created Components folder within this folder create [Modals.jsx](Modals.jsx) and [Modal.jsx](Modal.jsx) files
   3. created the css files [Modals.css](Modals.css) and [Modal.css](Modal.css)
   4. created services components folder within this folder create [bookServices.js](bookServices.js)and [authorServices.js](authorServices.js)
   
5. Install Router and Formik
   ````
   npm install react-router-dom
   npm install formik --save
   ````
   - checked it installed in package.json
6. Start the server and Open in Browser
   ````
   npm run dev
   ````
    - when we click the above comment in terminal, display localhost like `http:localhost:3000`. 
   - then copy it and paste our browser
   - it display our application
## Write the code in Components
## 1. App component
   - Sets up routing using `react-router-dom`.
   - Create `Books` and `Authors` as the path
## 2. serveices folder
   - In bookServices file we write the get function to get the data from book.json file
   - In authorServices file we write the get function to get the data from author.json file
## 4. Books page
   - we load the data from authorServices file using loader function
   - Then we create a table to create, edit, delete the data
   - using formik method to create table and edit function using Modals component to diplay the modal within this component using formik mehtod 
   - The Modals.css import to Modals component
## 3. Authors page   
   - we load the data from bookServices file using loader function
   - Then we create a table to create, edit, delete the data
   - using formik method to create table and edit function using Modals component to diplay the modal within this component using formik mehtod 
   - The Modal.css import to Modal component

finally  ready our application then we push to github and depolyed in netlify  to display our application in browser.