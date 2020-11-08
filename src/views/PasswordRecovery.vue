<style lang="sass" scoped>
.password-recovery-container
  background: url("../assets/password-recovery-background-image.jpg") no-repeat
    -moz-background-size: 100% /* Firefox 3.6+ */
    -webkit-background-size: 100% /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100% /* Opera 9.6+ */
    background-size: 100%
</style>

<template>
  <v-content class="password-recovery-container">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{appName}} - {{$t('passwordRecoveryPage.title')}}</v-toolbar-title>
              <v-spacer><LanguageSwitcher/></v-spacer>
            </v-toolbar>
            <v-card-text>
              <p class="subheading">{{$t('passwordRecoveryPage.emailWillBeSent')}}</p>
              <v-form @keyup.enter="submit" v-model="valid" ref="form" @submit.prevent="" lazy-validation>
                <v-text-field @keyup.enter="submit" :label="$t('passwordRecoveryPage.usernameLabel')" type="text" prepend-icon="person" v-model="username" v-validate="'required'" data-vv-name="username" :error-messages="errors.collect('username')" required></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="cancel">{{$t('passwordRecoveryPage.cancel')}}</v-btn>
              <v-btn @click.prevent="submit" :disabled="!valid">
                {{ $t('passwordRecoveryPage.recoverPassword') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { appName } from '@/env';
import { dispatchPasswordRecovery } from '@/store/main/actions';
import LanguageSwitcher from '@/views/LanguageSwitcher.vue';
import NotificationsManager from '@/components/NotificationsManager.vue';


@Component({
  components: {
    NotificationsManager,
    LanguageSwitcher,
  },
})
export default class PasswordRecovery extends Vue {
  public valid = true;
  public username: string = '';
  public appName = appName;

  public cancel() {
    this.$router.back();
  }

  public submit() {
    dispatchPasswordRecovery(this.$store, { username: this.username });
  }
}
</script>

<style>
</style>
