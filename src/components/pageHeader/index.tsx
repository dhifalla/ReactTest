import Card from "@components/card";
import di from "@di/index";
import PartnerCategory from "@domains/entities/PartnerCategory";
import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import css from "./_pageHeader.module.scss";

const PageHeader = () => {
  const [postes1, setPosts1] = useState([] as any);
  useEffect(() => {
      
    
    di.partnerCategory.getPartnersCategries().then(data =>  {console.log(data)
   setPosts1(data)

  

  
   })
        
 
   
  
   }, [])
  function test (){
console.log("tedt")
  }
 

  
  const deve={
        _nameKey:'all',
        _nameKey1:'Coffrets Cadeaux et Box',
         
       }
  return (
    <div className={css.pageHeader}>
      
    
      <BrowserRouter>
      <Fragment>
        
        <Routes>
          <Route   path='/partnercategories' element={<Card/>}>
           
          </Route>
         
        </Routes>
      </Fragment>
      <Link  to={"/partnercategories"}
     
  state={{a: deve}}><h2><button className="btn" onClick={test} >all     .</button></h2></Link> 



 
{  
        postes1.map((post:  PartnerCategory )=>(
        <div key = {post.id}    >    <div/>
        <div className="li" > 
       <Link   className="btn" to={"/partnercategories"}
        
  state={{ a: post }}><h2><button className="btn"   >{post.nameKey}</button></h2></Link> 
      </div>  </div> 
        ))

        
      }
 














      </BrowserRouter>
     
    
   
    
  
    </div>
  );
};

export default PageHeader;
