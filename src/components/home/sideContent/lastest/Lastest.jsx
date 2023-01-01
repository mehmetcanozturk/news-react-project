import React from "react"
import './lastest.scss'
import { tpost } from "../../../../dummydata"
import Heading from "../../../master/heading/Heading"

export const Lastest = () => {



    return (
        <>

            <section className=' lastest'>
                <Heading title='Lastest' />
                <div className='content'>
                    {tpost.slice(0, 6).map((val) => {
                        return (
                            <div className='items'>
                                <div className='box shadow'>
                                    <div className='images row'>
                                        <div className='img'>
                                            <img src={val.cover} alt='' />
                                        </div>

                                    </div>
                                    <div className='text row'>
                                        <h1 className='title'>{val.title.slice(0, 40)}</h1>

                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </section>

        </>
    )
}
