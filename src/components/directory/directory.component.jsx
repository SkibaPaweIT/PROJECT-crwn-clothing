import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://th.wallhaven.cc/small/rd/rd7drw.jpg',                 
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://th.wallhaven.cc/small/rd/rd3pjw.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://th.wallhaven.cc/small/rd/rddgwm.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://th.wallhaven.cc/small/z8/z8mq8y.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://w.wallhaven.cc/full/z8/wallhaven-z887yw.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }


    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    //this.state.sections.map(({title, imageUrl, id, size ,linkUrl})=> (
                      this.state.sections.map(({id, ...otherSectionProps})=> (
                        //<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                        <MenuItem key={id} { ...otherSectionProps } />

                    ))
                }
            </div>
        )
    }

}

export default Directory;