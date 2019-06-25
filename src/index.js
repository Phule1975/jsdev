const init = () => {
    const myMap = new ymaps.Map('map', {
        center: [59.91807704, 30.30489950],
        zoom: 14
    });
};
ymaps.ready(init);
