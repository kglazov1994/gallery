export const state = () => ({
    basket: {},
})
export const mutations = {
    setBasket(state, payload) {
        // state.basket.push(payload)
        state.basket[payload.id] = payload
        state.basket = Object.assign({}, state.basket)
    },
    removeBasket(state, payload) {
        console.log(state.basket[payload])
        delete state.basket[payload]
        state.basket = Object.assign({}, state.basket)
    },
}
