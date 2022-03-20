import React from 'react'

export default function CardCall({ cardData: { image, title, description } }) {
    return (
        <div className='flex flex-col bg-white text-center items-center p-14 rounded-lg shadow-md'>
            <img src={image} />
            <h6 className='font-semibold text-lg mt-6 text-brand-color'>{title}</h6>
            <p className='text-gray-700 text-sm mt-2'>{description}</p>
        </div>
    )
}
