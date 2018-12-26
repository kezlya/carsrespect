<template>
  <div>
    <section>
      <v-container pa-0 fluid white>
        <v-layout row wrap class="my-5" align-center>
          <v-flex xs12 v-if="name && cars[name]">
            <template v-for="index in cars[name].images">
              <img width="100%" :src="'/cars/'+name+'/'+index+'.jpg'" />
              <div class="car-divider"></div>
            </template>

            <v-card fluid class="rounded-card elevation-0 transparent fixed" style="top:70px;right:0;">
              <v-dialog v-model="dialog" max-width="700">
                  <v-btn slot="activator" color="blue darken-2" round>
                    Description
                  </v-btn>

                  <v-card>
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                    >
                      Description
                    </v-card-title>

                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        flat
                        @click="dialog = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
              </v-dialog>
            </v-card>

            <v-card fluid class="rounded-card elevation-0 transparent fixed" style="bottom:10px;right:0;">
              <v-card-text class="pa-1">
                <v-layout wrap column >
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right ">Year: <strong class="pl-1">{{cars[name].year}}</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Miles: <strong class="pl-1">{{cars[name].miles}}</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Price: <strong class="pl-1">{{cars[name].price}}</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right"><strong>{{cars[name].title}}</strong></v-chip>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
            <div class="fixed pa-3" style="bottom:0; left:0px;">
              <v-btn fab style="background-color:	#3b5998; overflow:hidden;">
                <v-img src="/f-logo.svg" height="56px"></v-img>
              </v-btn>
              <v-btn fab style="background-color:	#00aced; overflow:hidden;">
                <v-img src="/tw-logo.svg" height="46px"></v-img>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>




    </section>

  </div>
</template>

<script>
export default {
  name: "car",
  data: () => ({
      name: null,
      dialog: false,
      cars: {
          cadilac: {
            images: 9,
            year:2013,
            price: "SOLD",
            title: "Cadilac XTS",
            miles: "15K"
          },
          mercedes: {
            images: 13,
            year:2002,
            price: "$8,750",
            title: "Mercedes Benz S55 AMG",
            miles: "15K"
          },
          mazda: {
            images: 12,
            year: 2012,
            price: "$9,500",
            title: "Mazda Miata MX5",
            miles: "19K"
          },
          ram_truck: {
            images: 4,
            year: 2013,
            price: "$19,000",
            title: "Dodge RAM 1500",
            miles: "56K"
          },
          ram_van: {
            images: 2,
            year: 2016,
            price: "$14,000",
            title: "RAM Promaster",
            miles: "4K"
          },
          honda_crz: {
            images: 15,
            year: 2016,
            price: "$9,500",
            title: "Honda CRZ",
            miles: "14K"
          }
        },
    }),
  created() {
    this.name = this.$route.query.name
  },
}
</script>

<style>

.rounded-card{
    border-radius:5px;
}

.fixed{
  position:fixed;
}

.car-divider{
  width:100%;
  height:20px;
  background-image: url(../static/car-divider.png);
  background-size:contain;
  background-repeat: repeat-x;
}

</style>
