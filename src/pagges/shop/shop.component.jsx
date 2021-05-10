import React from 'react';
import '../../components/collection-preview/collection-preview.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';

const ShopPage = ({collections}) => (
    <div className='shop-page'> 
        {
            collections.map(({ id , ...otherCollectionsProps}) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }    
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
    
export default  connect(mapStateToProps)(ShopPage);