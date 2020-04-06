export default {
    async fetchMeta() {
        const res = await window.app.$axios.get(
            'https://my-json-server.typicode.com/menogo/jsonapi/whapi_new',
        );
        return res;
    },
};
