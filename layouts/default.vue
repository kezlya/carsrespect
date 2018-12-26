<template>
  <v-app light>
    <v-toolbar color="white" elevation-4 fixed scroll-off-screen>
      <v-toolbar-title><nuxt-link to="/" style="text-decoration:none;">CarsRespect.com</nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="#services">Services</v-btn>
        <v-btn flat href="#sale">Sale</v-btn>
        <v-btn flat href="#promo">Promotions</v-btn>
        <v-btn flat href="#partners">Partners</v-btn>
        <v-btn flat href="#contact">Contacts</v-btn>
      </v-toolbar-items>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      light
      temporary
    >
      

      <v-list class="pt-0">
        <v-list-tile>
            <v-list-tile-title >
            <a href="#services">Services</a>  
            </v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-title >
            <a href="#sale">Sale</a>  
          </v-list-tile-title>
        </v-list-tile>


        <v-list-tile>
          <v-list-tile-title >
            <a href="#promo">Promotions</a>  
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-title >
            <a href="#partners">Partners</a>  
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-title >
            <a href="#contacts">Contacts</a>  
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
      <nuxt />
      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        right: null
      }
    }
  }
</script>
