<template>
  <v-app light>
    <v-toolbar color="white" elevation-4 fixed>
      <v-toolbar-title class="headline">
        <nuxt-link to="/" style="text-decoration:none;">CarsRespect.com</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="title" flat href="/#services">Services</v-btn>
        <v-btn class="title" flat href="/#sale">Sale</v-btn>
        <v-btn class="title" flat href="/#promo">Promotions</v-btn>
        <v-btn class="title" flat href="/#partners">Partners</v-btn>
        <v-btn class="title" flat href="/#contact">Contacts</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer=!drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      light
      temporary
    >
      <v-list class="pt-1">
        <v-list-tile >
          <v-list-tile-title class="headline">
            <a href="/#services">Services</a>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title class="headline">
            <a href="/#sale">Cars for sale</a>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title class="headline">
            <a href="/#promo">Promotions</a>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title class="headline">
            <a href="/#partners">Partners</a>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title class="headline">
            <a href="/#contacts">Contacts</a>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

      <nuxt />

      <v-footer class="lighten-2 right">
        <span class="caption">&copy; {{ new Date().getFullYear() }} CarsRespect.com</span>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false
      }
    }
  }
</script>
