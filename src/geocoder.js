export default async (location) => {
    const [locationX, locationY] = location;
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=0082e970-37b9-4359-aa70-ac7545a33081&format=json&geocode=${locationX}, ${locationY}`);
    const result = response.json;

    return result.response.GeoObjectCollection.featureMember[0].GeoObject;
};