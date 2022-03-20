import React from 'react'

export default function FooterCall({ footerData: { title, items } }) {
    return (
        <div>
            <div className='mb-4 text-brand-color text-xl'>
                {title}
            </div>
            <ul className='text-black text-sm'>
                {items.map((item, key) => <li  key={key} className="pb-4"> <a href={item.url} > {item.title}</a>  </li>)}
            </ul>
        </div>

    )
}
