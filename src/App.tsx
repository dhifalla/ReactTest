import React, { Fragment, useEffect, useState } from 'react';
import './styles/global.scss';
import di from './di';
import PageHeader from '@components/pageHeader';
import axios from 'axios';
import { IPartnerData } from '@domains/entities/interfaces/iPartner';
import Partner from '@domains/entities/Partner';
import Card from '@components/card';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="App">
    
    
      <PageHeader />
  
     
     
  
 
     
    </div>
  );
}

export default App;
