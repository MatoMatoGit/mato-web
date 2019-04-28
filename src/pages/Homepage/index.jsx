import React from 'react'

// General imports
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'
import ScrollUpButton from '../../components/ScrollUpButton'
import {ParallaxProvider} from 'react-scroll-parallax';

//Page specific imports
import Hero from './components/Hero'
import About from './components/About'
import ProductOverviewPage from './components/ProductOverviewPage'
import ProductDetailPage from './components/ProductDetailPage'

// Data
import * as data from './data/cms.json';

const Homepage = () => {

    return (
        <ParallaxProvider>

            <Header data={data}/>
            <ScrollUpButton data={data}/>

            <Hero data={data}/>
            <About data={data}/>

            <ProductOverviewPage data={data}/>
            <ProductDetailPage data={data}/>

            <Contact data={data}/>

            <Footer data={data}/>

        </ParallaxProvider>
    )
}

export default Homepage