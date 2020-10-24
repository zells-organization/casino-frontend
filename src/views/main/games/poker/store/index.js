export const pokerModule = {
    state: {
        handCount: 0,
        handStats: []
    },
    mutations: {
        INCREMENT_HANDCOUNT(state) {
            state.poker.handCount = state.poker.handCount + 1
        },
        INCREMENT_STATS(state, payload) {
            state.poker.handStats.push(payload)
        }
    },
    actions: {
        incrementHandcount({commit}) {
            commit('INCREMENT_HANDCOUNT')
        },
        incrementStats({commit}, payload) {
            commit('INCREMENT_STATS', payload)
        }
    },
    getters: {},
};
