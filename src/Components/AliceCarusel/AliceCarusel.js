import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import SingleContent from '../SinglePage/SingleContent';

const Carusel = ({content}) => {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        768: { 
            items: 3
        },
        992: { 
            items: 4
        },
        1024: {
            items: 5, 
            itemsFit: 'contain'
        },
    };
    const items = content.map((item, index) => {
            return <SingleContent item={item} key ={index} category="movie"/>
        });
  return (
    <AliceCarousel 
        mouseTracking 
        items={items}
        infinite
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
        responsive={responsive} />
  );
}

export default Carusel

export function CaruselActors({contents}) {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        768: { 
            items: 3
        },
        992: { 
            items: 4
        },
        1024: {
            items: 5, 
            itemsFit: 'contain'
        },
    };
    const itemsActor = contents.map((item, index) => {
        return <SingleContent item={item} key ={index} category="movie"/>
    })
    return(
        <div>
            <AliceCarousel 
                mouseTracking 
                items={itemsActor}
                infinite
                autoPlay
                autoPlayInterval={2000}
                disableButtonsControls
                responsive={responsive} />
        </div>
    )
}
export function CaruselMovies({movies}) {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        768: { 
            items: 3
        },
        992: { 
            items: 4
        },
        1024: {
            items: 5, 
            itemsFit: 'contain'
        },
    };
    const itemsActor = movies.map((item, index) => {
        return <SingleContent item={item} key = {index} category="movie"/>
    })
    return(
        <div>
            <AliceCarousel 
                mouseTracking 
                items={itemsActor}
                infinite
                autoPlay
                autoPlayInterval={2000}
                disableButtonsControls
                responsive={responsive} />
        </div>
    )
}
export function CaruselSeries({series}) {
    const responsive = {
        0: { 
            items: 1
        },
        568: { 
            items: 2
        },
        768: { 
            items: 3
        },
        992: { 
            items: 4
        },
        1024: {
            items: 5, 
            itemsFit: 'contain'
        },
    };
    const itemsActor = series.map((item, index) => {
        return <SingleContent item={item} key ={index} category = "tv"/>
    })
    return(
        <div>
            <AliceCarousel 
                mouseTracking 
                items={itemsActor}
                infinite
                autoPlay
                autoPlayInterval={2000}
                disableButtonsControls
                responsive={responsive} />
        </div>
    )
}