import React from 'react'
import Nav from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return <section>

        <div>
            <Nav />
            <Outlet />
        </div>

    </section>
}

export default Root