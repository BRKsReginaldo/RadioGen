import Vuex from 'vuex'
import modules from './modules'

export default new Vuex.Store({
    modules,
    plugins: [
        store => {
            for (let field in store._actions) {
                if (field.match(/moduleInit$/)) {
                    store.dispatch(field, store)
                }
            }
        }
    ]
})