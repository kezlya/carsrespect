<template>
  <div style="background-color: #f7f7f7;">

    <section >
      <v-parallax src="subaru.png" height="600">
        <v-container>
          <v-layout row align-center justify-center stuck>
            <v-flex sm12 md12 lg9>
            </v-flex>
            <v-flex sm12 md12 lg4 align-center justify-center mt-5>
              <v-card flat tile class="text-xs-center justify-center white elevation-4 pa-2 mt-4" width="Fill">
                <v-img src="inspection.png" alt="Inspection" height="200" contain ></v-img>
                <v-card-title class="title-xs-center">
                    <h3 class="display-1 pa-2">Full service auto repair shop</h3>
                </v-card-title>
                <v-card-text>
                  <h3 class="text-center">All mechanics are Certified</h3>
                  <span>just 7mil away </span><v-btn>Get directions</v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="py-5" align-center white>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-2 py-2">Services</h2>
            <span class="subheading"><a id="services"></a>
              We service all makes and models. Domestic and Foreign.
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <template v-for="service in services">
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <v-layout>
                        <v-flex xs5>
                          <v-img :src="'services/'+service.split(' ').join('')+'.png'" class="center-right" :alt="service" height="64px" contain></v-img>
                        </v-flex>
                        <v-flex xs6 text-xs-left>
                          <div class="headline py-3">{{service}}</div>
                        </v-flex>
                      </v-layout>
                    </v-card-title>
                  </v-card>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-container fill-height pa-5 >

        <v-layout
          row
          wrap
          class="pa-2"
          align-center
          >
          <v-flex xs12 pb-5 ml-2>
            <div class="text-xs-center">
              <h2 class="headline py-2"><a id="sale"></a>For sale</h2>
          </div>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card>
              <v-img
                class="white--text"
                height="200px"
                src="IMG_4168.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <v-chip class="title red--text white elevation-2"><strike>15.000</strike>  </v-chip>
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
                <v-btn flat color="orange">Test drive</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </section>

    <section class="white">
      <v-container fill-height  px-5 >

        <v-layout
          row
          wrap
          class="pa-2"
          align-center
          >
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline"><a id="promo"></a>Promotions</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
            </div>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
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

          <v-flex xs12 md6 lg4 pa-2>
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

          <v-flex xs12 md6 lg4 pa-2>
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


        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container fill-height pa-5 >

        <v-layout
          row
          wrap
          class="pa-2"
          align-center
          >
          <v-flex xs12 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline"><a id="partners"></a>Partners</h2>
              <span class="body-1">
                SELLING ONLY QUALITY BRANDS
              </span>
            </div>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card flat tile class="text-xs-center justify-center white elevation-4 pa-5 mt-5" width="Fill">
              <v-img src="inspection.png" alt="Inspection" height="200px" contain ></v-img>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card flat tile class="text-xs-center justify-center white elevation-4 pa-5 mt-5" width="Fill">
              <v-img src="inspection.png" alt="Inspection" height="200px" contain ></v-img>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card flat tile class="text-xs-center justify-center white elevation-4 pa-5 mt-5" width="Fill">
              <v-img src="inspection.png" alt="Inspection" height="200px" contain ></v-img>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>

    </section>

    <section>
<a id="contact"></a>
        <v-layout row wrap justify-center align-center white class="my-0 pa-0">
          <v-flex xs12 sm8>
            <iframe width="100%" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48957.93166082604!2d-75.23429345152195!3d39.921909032951184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C+Pennsylvania%2C+USA!3m2!1d39.9525839!2d-75.1652215!4m5!1s0x89c6c3f2d28dcdfb%3A0x352e216800820a8c!2s522+Ellis+Ave+Unit+1-C%2C+Darby%2C+PA+19023%2C+USA!3m2!1d39.9112115!2d-75.2572854!5e0!3m2!1sen!2sru!4v1545740728637" height="450px" frameborder="0" style="border:0" allowfullscreen></iframe>
          </v-flex>
          <v-flex xs12 sm4 pa-5 style="background-color: rgba(255,255,255,0.97)">
            <v-card class="elevation-0 transparent" >
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

    </section>

  </div>
</template>

<script>
export default {
  name: "index",
  data: () => ({
      services: [
        "Air conditioning",
        "Wheel balancing",
        "Wheel alignment",
        "Engine check",
        "Engine rebuild",
        "Oil change",
        "Electrical service",
        "Break change",
        "Inspection",
      ],
    }),
  }
</script>

<style>
.center-right .v-image__image{
  background-position: center right !important;
}
</style>
