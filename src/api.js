export default {
    async fetchMeta() {
        const res = await window.app.$axios.get(
            'http://5uz8g6.natappfree.cc/mobile/whapi',
        );
        return res;
    },
};