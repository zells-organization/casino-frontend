<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on: menu }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
              icon
              v-on="{ ...tooltip, ...menu }"
          >
            <img class="icon"
                :src="currentLanguageIcon"
                v-if="currentLanguageIcon"
            />
            <v-icon v-else>mdi-earth</v-icon>
          </v-btn>
        </template>
        <span>Switch Language</span>
      </v-tooltip>
    </template>
    <v-list>
      <v-list-item
          v-for="language in languages"
          :key="language.id"
          @click="changeLanguage(language.id)"
      >
        <v-list-item-avatar
            tile
            size="24"
        >
          <v-img :src="language.flagSrc"></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ language.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {languages} from "@/constants/languagesChoose";
import {currentLocalLanguage, currentLocalEnglish} from "@/constants/currentLanguage";


export default {
  data(){
    return{
      currentLanguage: window.localStorage.getItem(currentLocalLanguage) || navigator.language.split('-')[0] || currentLocalEnglish,
      languages: languages
    }
  },
  computed: {
    currentLanguageIcon() {
      if (!this.currentLanguage || !this.currentLanguage) {
        return null;
      }
      return this.languages.filter(x => x.id === this.currentLanguage)[0]
          .flagSrc;
    }
  },

  methods: {
    changeLanguage(id) {
      if (this.$i18n.locale !== id){
        this.$i18n.locale = id;
        this.currentLanguage = id;
        window.localStorage.setItem(currentLocalLanguage, id);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>