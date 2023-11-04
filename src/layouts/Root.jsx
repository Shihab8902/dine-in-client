import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
    return <section>

        <div className='container mx-auto px-5'>
            <Nav />
            <Outlet />
        </div>

        <Footer />

    </section>
}

export default Root