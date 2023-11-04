import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return <section>

        <div className='container mx-auto px-5'>
            <Nav />
            <Outlet />
        </div>

    </section>
}

export default Root