import httpClient from '.';
const API_CONTROLLER = 'Video/';

export default {
    getById(id) {
        let url = API_CONTROLLER + 'GetById';
        return httpClient.get(url, {
            params: {
                id: id
            }
        });
    },

    getVideos(pageIndex, pageSize, userId, categortId, title) {
        let url = API_CONTROLLER + 'GetVideos';
        return httpClient.get(url, {
            params: {
                pageIndex: pageIndex,
                pageSize: pageSize,
                userId: userId,
                categoryId: categortId,
                title: title
            }
        });
    }
}