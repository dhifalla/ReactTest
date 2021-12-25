
import di from '@di/index';
import React, { Component, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';
import css from './_card.module.scss';
import Partner from '@domains/entities/Partner';
import PartnerCategory from '@domains/entities/PartnerCategory';
import { useParams } from "react-router-dom";

let i =0
let table: any[] =[]
let tab: any[] =[]
const state = { count: 0 };
const Card = (props:any) => {
  
 
  let location =  useLocation();
 let lin=location.state.a
      console.log("mmm",lin)
     
    tab=  table[i]=lin._nameKey
      i=i+1
      
      
        
       if (tab.includes(lin._nameKey))
         var a=false
        else a=true
      
        if(a===true)
     state.count++
      
  
      if(!(table.includes(lin._nameKey)))
     {}

    
     console.log("table",(table.includes(lin._nameKey)))
      console.log("lin._nameKey",lin._nameKey)
      console.log("table1",tab)

      console.log("counter",state.count)







 
  const deve={
    namePC:'Coffrets Cadeaux et Box',
    partnerCategoryID: 1
   }

   
    const [postes, setPosts] = useState([] as any);
    const [postes1, setPosts1] = useState([] as any);
  
   


    

    useEffect(() => {
      
     di.partner.getPartners().then((res: any) =>{console.log(res)
     
      
   setPosts(res)


    } )
     di.partnerCategory.getPartnersCategries().then(data =>  {console.log(data)
    setPosts1(data)
 
   

   
    })
         
  
    
   
    }, [])
   
    let cat5=postes1.map((cat:PartnerCategory) => {return cat.nameKey} )
   
    let par5=postes.filter((cat:any , ) =>{
      for(const i in cat.partnerCategories){
        const a=cat.partnerCategories[i].namePC ;
       
        
       return  ((a===lin._nameKey)||lin._nameKey==="all")
       }
     } )

   

    ;
    
   
    let ab11= postes.filter(( obg:Partner, obg1:PartnerCategory ) =>{
      
      return  (obg.partnerCategories.partnerCategoryID==2)
     
      
      })
  
     



















    
    return <div className="position"   >
      <div className="row">
  
  {  
        par5.map((post:  Partner )=>(
        <div key = {post.id}>   <div  >
       
          <div className="image">
    <img className="image__img" src={"https://recette2.lepotcommuntest.fr"+post.mobileImageUrl} alt=""/>
    <div className="image__overlay image__overlay--primary">
    <div id="reseaux">
    <div id="reseau_menu">
        <a  id="lien_reseau"><img  src={"https://recette2.lepotcommuntest.fr"+post.logoUrl} alt="" className='log'/><div className='desc'>{post.desc} 
        <button className='button'>Choisir  </button>  </div></a>
    </div>
</div>
    </div>
</div>
        </div></div>
        ))

        
      }
  </div>
  </div>
  
}

export default Card;


