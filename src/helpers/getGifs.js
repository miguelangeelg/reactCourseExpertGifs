export const getGifts = async (category) => {
    const api_key = 'lfQWT2P0fcQXeOi3qbmek3VfPPnz55qf';
    const endPoint = 'https://api.giphy.com/v1/gifs/search';
    const url = `${endPoint}?q=${category}&limit=10&api_key=${api_key}`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = await data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}