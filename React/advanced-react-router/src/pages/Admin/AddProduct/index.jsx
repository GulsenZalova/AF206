import React from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from 'yup';
function AddProduct() {

    const formik = useFormik({
        initialValues: {
          email: '',
          name:""
        },
        validationSchema: Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .min(3, 'Must be 3 characters more')
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          }),
        onSubmit: values => {
          axios.post("https://northwind.vercel.app/api/products",values)
          .then(()=>console.log("result: " + values)  )
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
        <br />
           <br />
           <label htmlFor="name">Name</label>
          
             <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
             {formik.touched.name && formik.errors.name ? (
         <div style={{color:"red"}}>{formik.errors.name}</div>
       ) : null}
    
          <button type="submit">Submit</button>
        </form>
      );
  
}

export default AddProduct
