import React from 'react'
import Banner from '../../components/Banner/Banner'
import { Helmet } from 'react-helmet'

const Home = () => {
    return <section >

        <Helmet>
            <title>Dinein | Home</title>
        </Helmet>

        <Banner />
    </section>
}

export default Home