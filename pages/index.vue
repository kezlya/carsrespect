<template>
  <div>
    <section>
      <v-parallax src="subaru.png" height="500">
        <v-layout row align-center justify-center stuck>
          <v-flex xs3>
          </v-flex>
          <v-flex xs3>
            <v-img src="inspection.png" alt="Inspection" height="200" width="200"></v-img>
          </v-flex>
          <v-flex xs6 align-center justify-center>
            <v-card flat tile class="text-xs-center transparent" width="Fill">
               <v-card-title  class="title-md-center">
                   <h3 class="display-3">Full service auto repair shop</h3>
                   <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
               </v-card-title>

            </v-card>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Services</h2>
            <span class="subheading">
              We service all makes and models. European, Asian, Domestic
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    <div class="headline">Fast development</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    <div class="headline">Fast development</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    <div class="headline">Fast development</div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <span class="layout justify-center headline" >For sale</span>
      <v-layout>
        <v-flex xs12 sm4>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="IMG_4168.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <v-chip class="headline red--text">Sold</v-chip>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
                <span class="grey--text">Number 10</span><br>
                <span>Whitehaven Beach</span><br>
                <span>Whitsunday Island, Whitsunday Islands</span>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="IMG_4168.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <v-chip class="headline red--text">15.000</v-chip>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
              <div>
                <span>Honda CRZ, 2016</span> <v-spacer/><span>$9.999</span><br>
                <span class="grey--text">Manual transmision .asdfas .a sdfa. asdfa.s </span><br>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">More details</v-btn>
              <v-btn flat color="orange">Schedule a test dirive</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card>
            <v-img
              class="white--text"
              height="200px"
              src="IMG_4168.jpg"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">Top 10 Australian beaches</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title>
                <span class="grey--text">Number 10</span><br>
                <span>Whitehaven Beach</span><br>
                <span>Whitsunday Island, Whitsunday Islands</span>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="orange">Share</v-btn>
              <v-btn flat color="orange">Explore</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Promotions</h2>
            <span class="subheading">
              Cras facilisis mi vitae nunc
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Material Design</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Fast development</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completely Open Sourced</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Partners</h2>
            <span class="subheading">
              SELLING ONLY QUALITY BRANDS
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Image partner</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Image partner</div>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Image partner</div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="engine-work.jpg" height="500">
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm8>
            <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48957.93166082604!2d-75.23429345152195!3d39.921909032951184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C+Pennsylvania%2C+USA!3m2!1d39.9525839!2d-75.1652215!4m5!1s0x89c6c3f2d28dcdfb%3A0x352e216800820a8c!2s522+Ellis+Ave+Unit+1-C%2C+Darby%2C+PA+19023%2C+USA!3m2!1d39.9112115!2d-75.2572854!5e0!3m2!1sen!2sru!4v1545740728637" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
          </v-flex>
          <v-flex xs12 sm4 >
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
      feedback: "",
    }),
  }
</script>
