import React from 'react'
import Nav from './componets/navBar/navBar.jsx';
import Hero from './componets/hero/hero';
import Programs from './componets/programs/programs.jsx'; 
import Title from './componets/Title/Title.jsx';
import About from './componets/About/About.jsx';
import Cumpus from './componets/Cumpus/Cumpus.jsx';
import Testi  from './componets/Testimun/Testi.jsx';
import Contact from './componets/Contact/Contact.jsx';
import Footer from './componets/Footer/Footer.jsx';

const App = () => {

  return (
    <div>
      <Nav />
       <Hero/> 
       <Title  title="What We Offer" subtitle="OUR PROGRAM"/>
       <Programs/>

       <div className='container'>
         <About/> </div>
 <Title  title="Gallery" subtitle="Cumpus Photos"/>
 <Cumpus/>
 <Title  title="Testimonials" subtitle="What Student say"/>
 <Testi/>
 <Title  title="Contact US" subtitle="Let us in touch"/>
<Contact/>
<Footer/>
 </div>
 
  )
}

export default App