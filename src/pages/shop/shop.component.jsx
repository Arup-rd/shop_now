import React, { Component } from 'react'
import shopData from './shop.data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component'

class ShopPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections : shopData
        }
    }

    render(){

        const {collections} = this.state;

        return(
            <div>
            {
                collections.map(({id, ...otherProps})=> 
                    <CollectionPreview key={id} {...otherProps}/>
                )
            }
            </div>
        )
    }
}

export default ShopPage;