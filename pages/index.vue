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
            <a id="services"></a>
            <h2 class="display-2 py-2">Services</h2>
            <span class="subheading">
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
      <v-container fill-height pa-5>
        <v-layout row wrap class="pa-2" align-center>
          <v-flex xs12 pb-5 ml-2>
            <a id="sale"></a>
            <div class="text-xs-center">
              <h2 class="display-2 py-2">Car for sale</h2>
              <span class="subheading">
                All cars are fully inspected! Warranty on a powertrain (engine, transmission, suspension) for an additional fee.
                <a href="#contact">Contact us</a> to pre order vehicle that you always wanted.
              </span>
            </div>
          </v-flex>
          <template v-for="car in cars">
            <v-flex xs12 md6 lg4 pa-2>
              <v-card>
                <v-img height="200px" :src="'cars/'+car.name+'/1.jpg'">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <v-chip class="subheading red--text white elevation-2"><strike>{{car.oldPrice}}</strike>  </v-chip>
                      </v-flex>
                    </v-layout>
                    <v-layout fill-height align-end>
                      <v-flex xs12 flexbox right>
                        <v-chip class="title gray--text white elevation-2 right">{{car.newPrice}}</v-chip>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>
                <v-card-title>
                  <div>
                    <span class="title">{{car.title}}</span><br><br>
                    <span class="grey--text">{{car.desc}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="indigo">More details</v-btn>
                  <v-btn flat href="#contact" color="indigo">Test drive</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </section>

    <section class="white">
      <v-container fill-height px-5>
        <v-layout row wrap class="pa-2" align-center>
          <v-flex xs12 pb-5 ml-2>
            <a id="promo"></a>
            <div class="text-xs-center">
              <h2 class="display-2">Promotions</h2>
            </div>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Free Oil Change</div>
              </v-card-title>
              <v-card-text>
                When you do wheel alignment with us you'll get free Oil change.
                <v-chip class="subheading elevation-2">WHEELS-AND-OIL</v-chip>
                Just show this promotional code.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">$200 Referal</div>
              </v-card-title>
              <v-card-text>
                Bring your friend. You'll get
                <v-chip class="subheading  elevation-2">$200 cache</v-chip>
                When your friend purchase one of our <a href="#sale">cars for sale</a>.
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Free Inspection</div>
              </v-card-title>
              <v-card-text>
                When you service your car with total amount about $1000.
                You are eligible for free inspection
                <v-chip class="subheading elevation-2">PREMIUM-MEMBER</v-chip>
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
      cars:[
        {
          name: "mazda",
          title:"2012 Mazda Miata MX5 17K mil",
          oldPrice: "$15.000",
          newPrice: "$9.500",
          desc: "Grand Touring; CONVERTIBLE 2-DR; 2.0L L4 DOHC 16V; 6-Speed Manual; RWD"
        }
      ],
    }),
  }
</script>

<style>
.center-right .v-image__image{
  background-position: center right !important;
}
</style>
