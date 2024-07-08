import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Row from '../../Row/Row';

function Home() {
  return (
    <>
        <Header/>
        <Row title="NETFLIX ORIGINAL"/>
        <Row title="Trending Now"/>
        <Footer/>
    </>
  );
}

export default Home