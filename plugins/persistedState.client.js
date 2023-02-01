import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'gallery',
        paths: ['basket.basket'],
    })(store)
}
