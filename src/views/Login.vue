<style lang="sass" scoped>
.login-container
  background: url("../assets/login-background-image.jpg") no-repeat
    -moz-background-size: 100%
    /* Firefox 3.6+ */
    -webkit-background-size: 100%
    /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%
    /* Opera 9.6+ */
    background-size: 100%
</style>

<template>
  <v-content class="login-container">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ appName }}</v-toolbar-title>
              <v-spacer><LanguageSwitcher/></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form @keyup.enter="submit">
                <v-text-field @keyup.enter="submit"
                              v-model="email"
                              prepend-icon="person"
                              name="login"
                              :label="$t('loginPage.loginLabel')"
                              type="text"
                ></v-text-field>
                <v-text-field @keyup.enter="submit"
                              v-model="password"
                              prepend-icon="lock"
                              name="password"
                              :label="$t('loginPage.passwordLabel')"
                              id="password"
                              type="password"
                ></v-text-field>
              </v-form>
              <div v-if="loginError">
                <v-alert :value="loginError" transition="fade-transition" type="error">
                  {{ $t('loginPage.errors.incorrectEmailOrPassword') }}
                </v-alert>
              </div>
              <v-flex class="caption text-xs-right">
                <router-link to="/signup">
                  {{$t('loginPage.createAccount')}}
                </router-link>
              </v-flex>
              <v-flex class="caption text-xs-right">
                <router-link to="/recover-password">
                  {{$t('loginPage.forgotYourPassword')}}
                </router-link>
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="submit">{{$t('loginPage.login')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {appName} from '@/env';
import {readLoginError} from '@/store/main/getters';
import {dispatchLogIn} from '@/store/main/actions';
import NotificationsManager from "@/components/NotificationsManager.vue";
import LanguageSwitcher from "@/views/LanguageSwitcher.vue";


@Component({
  components: {
    NotificationsManager,
    LanguageSwitcher,
  },
})

export default class Login extends Vue {
  public email: string = '';
  public password: string = '';
  public appName = appName;

  public get loginError() {
    return readLoginError(this.$store);
  }

  public submit() {
    dispatchLogIn(this.$store, {username: this.email, password: this.password});
  }
}
</script>

<style>
</style>
