import React, { useState } from 'react'
import { hero } from '../../../dummydata.js'
import Card from './Card'
import './hero.scss'

function Hero() {
    const [items, setitems] = useState(hero)
    return (
        <>
            <section className="hero">
                <div className="container">
                    {items.map((item) => {
                        return <Card key={item.id} item={item} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Hero