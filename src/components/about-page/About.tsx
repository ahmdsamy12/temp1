import React, { useEffect } from 'react'
import { fetchProducts } from '../../rtk/slices/productsSlice';
import { useAppDispatch, useAppSelector } from '../../rtk/store';
import "./about.scss";


const About = () => {

  const productsitems = useAppSelector((state) => state.products)
  

  const dispatch = useAppDispatch();
  
  

  useEffect(() => {
    dispatch(fetchProducts())
  },[]) 


  return (
    <>
    <h2 style={{padding: "20px", textAlign:"center", fontSize: "25px", color:"#ab0d0d"}}>About Us</h2>
    <div className='about-card' style={{backgroundColor: "rgb(153 153 153 / 13%)"}}>
    {productsitems.map((product: any) => (
      
        <div className='about-box' key={product.id}>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <p>{product.description.slice(0, 40)}....</p>
        </div>
      
    ))}
    </div>
    </>
  ) }
export default About;