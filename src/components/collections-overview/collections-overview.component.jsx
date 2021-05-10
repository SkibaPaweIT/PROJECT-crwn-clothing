import React from 'react'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {   
            collections.map(({ id , ...otherCollectionsProps}) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})
    
export default  connect(mapStateToProps)(CollectionsOverview);
