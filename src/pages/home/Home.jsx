import React from 'react';
import AlgodersHome from '../../components/algoders/AlgodersHome';
import About from '../../components/about/About';
import Team from '../../components/team/Team';
import Join from '../../components/joinus/Join'
import './Home.css';
const Home = () => {
return <>

        <AlgodersHome />
            <About/>
            <Team/>
          <Join/>
  </>;
};

export default Home;
