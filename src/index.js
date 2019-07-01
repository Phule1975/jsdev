import getGeoObject from './geocoder';

const init = () => {
    const myMap = new ymaps.Map('map', {
        center: [59.91807704, 30.30489950],
        zoom: 14
    });

    const onMapClick = async(event) => {
        var x = await event.get('coords');
        console.log(x);
    };

    myMap.events.add('click', onMapClick);
};
ymaps.ready(init);
