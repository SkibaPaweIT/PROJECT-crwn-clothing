const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://www.freedomforuminstitute.org/wp-content/uploads/2016/08/0816_chew1.jpg',                 
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://cdn1.discovertuscany.com/img/shopping-typical_products/benheart-leather-shop.jpg?w=750&q=65',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/tronc/EBQNI3KUDVFQJE3EIA57KFZMZY.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://petiteinparis.com/wp-content/uploads/2019/11/Styling-a-black-blazer-1.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://64.media.tumblr.com/c3960a8ef4ba08a0719544f3ae7e6fe2/tumblr_pjvfe2aAyn1ufm7yqo1_1280.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;


