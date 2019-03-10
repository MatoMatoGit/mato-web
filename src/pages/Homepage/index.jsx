import React from 'react'
import smoothscroll from 'smoothscroll-polyfill';

// General imports
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'
import ScrollUpButton from '../../components/ScrollUpButton'


//Page specific imports
import Hero from './components/Hero'
import About from './components/About'
import ProductOverviewPage from './components/ProductOverviewPage'
import ProductDetailPage from './components/ProductDetailPage'

// Data
import * as data from './data/cms.json';

const Homepage = () => {

    smoothscroll.polyfill();

    return (
        <>
            <Header data={data}/>
            <ScrollUpButton ContainerClassName="scroll-top" />

            <Hero data={data}/>
            <About data={data}/>

            <ProductOverviewPage data={data}/>
            <ProductDetailPage data={data}/>

            <Contact data={data}/>

            <Footer data={data}/>
        </>
    )
}

export default Homepage