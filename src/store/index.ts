import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { mainModule } from './main';
import { State } from './state';
import { adminModule } from './admin';
import {blackjackModule} from '../views/main/games/blackjack/store';
import {dominoesModule} from '../views/main/games/dominoes/store';

Vue.use(Vuex);

const storeOptions: StoreOptions<State> = {
  modules: {
    main: mainModule,
    admin: adminModule,
    blackjack: blackjackModule,
    dominoes: dominoesModule,
  },
};

export const store = new Vuex.Store<State>(storeOptions);

export default store;
