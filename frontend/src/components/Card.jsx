import React from 'react'
import { BiPurchaseTagAlt } from "react-icons/bi";
const Card = ({items}) => {
    return (
        <>
            <div className='my-5 md:my-5 z-10 mx-3  pt-4'> 
                <div className="card bg-base-100 h-[500px] shadow-sm w-[100%] hover:scale-105 transition-all duration-200 ">
                    <figure className='my-5'>
                        <img className='h-[100%]'
                            src={items.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {items.title}
                            <div className="badge badge-secondary">{items.category}</div>
                        </h2>
                        <p>{items.desc}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">&#8377;{items.price}</div>
                            <div className="badge badge-outline hover:bg-[#00A385] hover:text-white duration-300 hover:scale-110"><BiPurchaseTagAlt/> Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
