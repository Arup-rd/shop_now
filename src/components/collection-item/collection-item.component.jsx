import React from 'react'
import './collection-item.style.scss'

export const CollectionItem = ({ id, name,imageUrl,price }) => (
    <div className='collection-item'>
        <div className='image' style={{ backgroundImage : `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
    </div>
)