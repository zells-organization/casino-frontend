import Vue from 'vue';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';

const options = {name: 'custom', lodash};

Vue.use(VueLodash, options);

export default new VueLodash();