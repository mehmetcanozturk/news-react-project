import React from 'react'

function Card(props) {
    return (
        <>
            <div className="box">
                <div className="img">
                    <img src={props.item.cover} alt="" />
                </div>
                <div className="text">
                    <span className="category">{props.item.category}</span>
                    <div className="detail">
                        <h1 className='TitleBg'>{props.item.title}</h1>
                        <div className="author flex">
                            <span>by <span className="bold">{props.item.authorName}</span></span>
                            <span>{props.item.time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card