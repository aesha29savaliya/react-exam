import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Product = () => {

     const [data, setData] = useState([]);

     const handleSubmit = () => {
          setData()
     }

     useEffect(() => {
          axios.get('http://localhost:4000/posts')
               .then((respons) => {
                    setData(respons.data);
               })
     }, []);

     return (
          <>
               <Navbar />
               {/* product add */}

               <label htmlFor="">Id :
                    <input type="text" />
               </label>

               <label htmlFor="">Product Name :
                    <input type="text" />
               </label>

               <label htmlFor="">Description :
                    <input type="text" />
               </label>

               <label htmlFor="">Price :
                    <input type="text" />
               </label>


               {/* card */}

               <div class="card col col-3">
                    <div class="card-body">
                         {
                              data.map((value, index) => {
                                   return (
                                        <>
                                             <h1>{value.id}</h1>
                                             <h2>{value.ProductName}</h2>
                                             <h3>{value.description}</h3>
                                             <h4>{value.price}</h4>
                                             <Link type='button' className='view' to={`/${value.id}`} onClick={handleSubmit}>View</Link>


                                        </>
                                   )
                              })
                         }
                    </div>
               </div>

          </>
     )
}

export default Product