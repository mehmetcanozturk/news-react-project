import React, { } from 'react'
import Popular from '../popular/Popular'
import { Lastest } from '../../sideContent/lastest/Lastest'
import { Ppost } from '../Ppost/Ppost'
import './Home.scss'

function Home() {

    return (
        <><main>
            <div className="container">
                <section className='mainContent'>
                    <Popular />
                    <Ppost />
                </section>
                <section className='sideContent'>

                    <Lastest />

                </section>
            </div>
        </main></>
    )
}

export default Home