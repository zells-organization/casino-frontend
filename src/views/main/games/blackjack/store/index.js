import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
  isTitleShowing: true,
  settings: {
    deckCount: 6,
    startingBank: 25,
    shuffleAfterPercent: 0.75,
    minimumBet: 1,
    showBasicStrategy: false
  },
  bank: 0,
  shoe: [],
  hands: [],
  activeHandIndex: null,
  isDealing: false,
  showDrawer: false
}


export const blackjackModule = {
  state,
  mutations,
  actions,
  getters,
};
