import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { HomeComponent } from './components/static/HomeComponent';
import { BiographyComponent } from './components/shared/BiographyComponent';
import { SkillsComponent } from './components/shared/SkillsComponent';
import { Notfoundpage } from './components/Notfoundpage';
import { Layout} from './components/shared/Layout';


function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomeComponent/>} />
        <Route path={"biography"} element={<BiographyComponent/>} />
        <Route path={"skills"} element={<SkillsComponent/>} />
        <Route path={"*"} element={<Notfoundpage/>} />
      </Route>
    </Routes>
    </div>
    
  );
}


export default App;
