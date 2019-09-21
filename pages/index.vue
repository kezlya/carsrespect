<template>
  <div style="background-color: #f7f7f7;">

    <section>
      <v-parallax src="subaru.png" height="600">
        <v-container>
          <v-layout row align-center justify-center stuck>
            <v-flex sm12 md12 lg9>
            </v-flex>
            <v-flex sm12 md12 lg6 align-center justify-center mt-5>
              <v-card flat tile class="text-xs-center justify-center white elevation-4 pa-2 mt-4" width="Fill">
                <img src="inspection.png" alt="Inspection" height="200" contain />
                <v-card-title class="title-xs-center">
                    <h3 class="display-1 pa-2">Full service auto repair shop</h3>
                </v-card-title>
                <v-card-text>
                  <h3 class="text-center">All mechanics are Certified</h3>
                  <span>Just 7 miles away </span><v-btn>Get directions</v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="py-5" align-center white>
        <a id="services"></a>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="display-2 py-2">Services</h2>
            <span class="subheading">
              We service all makes and models both domestic and foreign.
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
                      <v-layout class="align-center">
                        <v-flex xs5>
                          <v-img :src="'services/'+service.split(' ').join('')+'.png'" class="center-right" :alt="service" height="64px" contain></v-img>                        </v-flex>
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
          <a id="sale"></a>
          <v-flex xs12 pb-5 ml-2>
            <div class="text-xs-center">
              <h2 class="display-2 py-2">Cars for sale</h2>
              <span class="subheading">
                All cars are fully inspected! Warranty on a powertrain (engine, transmission, suspension) for an additional fee.
                <a href="#contact">Contact us</a> to pre order the vehicle that you have always wanted.
              </span>
            </div>
          </v-flex>
          <template v-for="car in cars">
            <v-flex xs12 md6 lg4 pa-2>
              <v-card>
                <v-img height="200px" :src="'cars/'+car.name+'/1.jpg'">
                  <v-container fill-height fluid pa-1>
                    <v-layout fill-height>
                      <v-flex v-if="car.oldPrice" xs12 align-end flexbox>
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
                  <v-btn v-if="car.action1" flat :href="'/car?name='+car.name" color="indigo">{{car.action1}}</v-btn>
                  <v-btn v-if="car.action2" flat href="#contact" color="indigo">{{car.action2}}</v-btn>
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
          <a id="promo"></a>
          <v-flex xs12 pb-5 ml-2>
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
                When you do a wheel alignment with us you'll get a free oil change.
                Just show this promotional code.
                <v-chip class="subheading elevation-2">WHEELS-AND-OIL</v-chip>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">$200 Referal</div>
              </v-card-title>
              <v-card-text>
                If you bring your friend, you'll get
                <v-chip class="subheading  elevation-2">$200 cash</v-chip>
                when your friend purchase one of our <a href="#sale">cars for sale</a>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 lg4 pa-2>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">Free Inspection</div>
              </v-card-title>
              <v-card-text>
                When you service your car for the total amount of $1000,
                you are eligible for a free inspection
                <v-chip class="subheading elevation-2">PREMIUM-MEMBER</v-chip>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-parallax src="engine.jpg">
        <v-container fill-height pa-3>
          <v-layout row wrap class="pa-2" align-center>
            <a id="partners"></a>
            <v-flex xs12 pb-5 ml-2>
              <div class="text-xs-center">
                <h2 class="display-2 py-2">Partners</h2>
                <span class="title">
                  We are selling only quality brands.
                </span>
              </div>
            </v-flex>

            <v-flex xs12 md4 >
                <v-img src="partners/castrol.png" alt="castrol" width="200px" height="150px"></v-img>
            </v-flex>

            <v-flex xs12 md4>
                <v-img src="partners/bapdahl.png" alt="bapdahl" width="200px" height="150px" ></v-img>
            </v-flex>

            <v-flex xs12 md4>
                <v-img src="partners/autozone.png" alt="autozone" width="200px" height="150px" ></v-img>
            </v-flex>

          </v-layout>
        </v-container>
      </v-parallax>
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
                We are open:   <b>Monday - Friday 8am - 5pm </b>
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>484-374-0322</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      522 Ellis Ave Unit 1-C
                    </v-list-tile-title>
                    <v-list-tile-title>
                      Darby, PA 19023, USA
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>carsrespect@gmail.com</v-list-tile-title>
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
          name: "cadilac",
          title:"2013 Cadilac XTS 2013",
          oldPrice: "$17,000",
          newPrice: "SOLD",
          desc: "Platinum edition; Cutting-edge multimedia interface; FWD",
          action2: "order the same"
        },
        {
          name: "mercedes",
          title:"2002 Mercedes Benz S55 AMG",
          newPrice: "$8,750",
          desc: "Leather interior Seats heated and cooled seat front seat have a massage. Navigation",
          action1: "view",
          action2: "test drive"
        },
        {
          name: "mazda",
          title:"2012 Mazda Miata MX5",
          oldPrice: "$12.000",
          newPrice: "$9,500",
          desc: "Grand Touring; CONVERTIBLE 2-DR; 2.0L L4 DOHC 16V; 6-Speed Manual; RWD",
          action1: "view",
          action2: "test drive"
        },
        {
          name: "ram_truck",
          title:"2013 Dodge RAM 1500 4x4",
          oldPrice: "$20,000",
          newPrice: "$19,000",
          desc: "Tradesman/Express 4x4 Quad Cab; 3.6L; 6-speed",
          action1: "view",
          action2: "test drive"
        },
        {
          name: "ram_van",
          title:"2016 RAM Promaster",
          newPrice: "$14,000",
          desc: "City cargo van; FWD; Gas; 4 cylinders",
          action1: "view",
          action2: "test drive"
        },
        {
          name: "honda_crz",
          title:"2016 Honda CRZ",
          oldPrice: "$10,500",
          newPrice: "$9,500",
          desc: "2 doors; 36mpg",
          action1: "view",
          action2: "test drive"
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
