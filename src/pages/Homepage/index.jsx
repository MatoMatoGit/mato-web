import React from 'react'

// General imports
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'
import ScrollUpButton from '../../components/ScrollUpButton'

//Page specific imports
import Hero from './components/Hero'
import About from './components/About'
import ProductOverviewPage from './components/ProductOverviewPage'

// Data
import * as menu from './data/menu.json';
import * as general from './data/general.json';
import * as products from './data/products.json';

const Homepage = () => {

    return (
        <>
            <Header data={menu}/>
            <ScrollUpButton data={general}/>

            <Hero data={general}/>

            <ProductOverviewPage data={products}/>

            <About data={general}/>

            <Contact data={general}/>

            <Footer data={general}/>
        </>
    )
}

export default Homepage