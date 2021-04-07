<style lang="sass" scoped>
.login-container
  background: url("../assets/signup-background-image.jpg") no-repeat
  -moz-background-size: 100% /* Firefox 3.6+ */
  -webkit-background-size: 100% /* Safari 3.1+ и Chrome 4.0+ */
  -o-background-size: 100% /* Opera 9.6+ */
  //background-size: 100%
</style>

<template>
  <v-content class="login-container">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ appName }} - {{ $t('signupPage.title') }}</v-toolbar-title>
              <v-spacer><LanguageSwitcher/></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form @keyup.enter="submit">
                <v-text-field @keyup.enter="submit"
                              v-model="email"
                              prepend-icon="email"
                              name="login"
                              :label="$t('signupPage.emailLabel')"
                              type="text"
                ></v-text-field>
                <v-text-field @keyup.enter="submit"
                              v-model="username"
                              prepend-icon="person"
                              name="username"
                              :label="$t('signupPage.usernameLabel')"
                              type="text"
                ></v-text-field>
                <v-text-field type="password"
                              prepend-icon="lock"
                              ref="password"
                              :label="$t('signupPage.passwordLabel')"
                              data-vv-name="password"
                              data-vv-delay="100"
                              data-vv-rules="required"
                              v-validate="'required'"
                              v-model="password1"
                              :error-messages="errors.first('password')">
                </v-text-field>
                <v-text-field type="password"
                              prepend-icon="lock"
                              :label="$t('signupPage.confirmPasswordLabel')"
                              data-vv-name="password_confirmation"
                              data-vv-delay="100"
                              data-vv-rules="required|confirmed:$password"
                              data-vv-as="password"
                              v-validate="'required|confirmed:password'"
                              v-model="password2"
                              :error-messages="errors.first('password_confirmation')">
                </v-text-field>
              </v-form>
              <div v-if="signupError">
                <v-alert :value="signupError" transition="fade-transition" type="error">
                  {{ $t('signupPage.errors.incorrectEmail') }}
                </v-alert>
              </div>
              <v-flex class="caption text-xs-right">
                <router-link to="/login">
                  {{ $t('signupPage.login') }}
                </router-link>
              </v-flex>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click.prevent="submit">{{ $t('signupPage.signup') }}</v-btn>
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
import {readSignupError} from '@/store/main/getters';
import {dispatchSignup} from '@/store/main/actions';
import LanguageSwitcher from '@/views/LanguageSwitcher.vue';
import NotificationsManager from '@/components/NotificationsManager.vue';

@Component({
  components: {
    NotificationsManager,
    LanguageSwitcher,
  },
})
export default class Signup extends Vue {
  public email: string = '';
  public username: string = '';
  public password1 = '';
  public password2 = '';
  public appName = appName;
  public valid = true;

  public get signupError() {
    return readSignupError(this.$store);
  }

  public submit() {
    const {valid, email, username, password1, $store} = this;
    if (valid) {
      dispatchSignup($store, {username, email, password: password1});
    }
  }
}
</script>
