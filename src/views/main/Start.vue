<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { store } from '@/store';
import { dispatchCheckLoggedIn } from '@/store/main/actions';
import { readIsLoggedIn } from '@/store/main/getters';
import {endPoints} from "@/constants/endPoints";

const startRouteGuard = async (to, from, next) => {
  await dispatchCheckLoggedIn(store);
  if (readIsLoggedIn(store)) {
    if (to.path === endPoints.logLogin || to.path === endPoints.rootDirectory) {
      next(endPoints.mainMain);
    } else {
      next();
    }
  } else if (readIsLoggedIn(store) === false) {
    if (to.path === endPoints.rootDirectory || (to.path as string).startsWith(endPoints.mainMain)) {
      next(endPoints.logLogin);
    } else {
      next();
    }
  }
};

@Component
export default class Start extends Vue {
  public beforeRouteEnter(to, from, next) {
    startRouteGuard(to, from, next);
  }

  public beforeRouteUpdate(to, from, next) {
    startRouteGuard(to, from, next);
  }
}
</script>
