import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Helmet } from 'react-helmet'
import TopFoods from '../../components/TopFoods/TopFoods'
import About from '../../components/About/About'
import Advertise from '../../components/Advertise/Advertise'

const Home = () => {
    return <section >

        <Helmet>
            <title>Dinein | Home</title>
        </Helmet>

        <Banner />
        <TopFoods />
        <About />
        <Advertise />
    </section>
}

export default Home