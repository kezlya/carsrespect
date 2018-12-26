<template>
  <div>
    <section>
      <v-container pa-0 fluid white>
        <v-layout row wrap class="my-5" align-center>
          <v-flex xs12 v-if="name && cars[name]">
            <template v-for="index in cars[name].images">
              <v-img :src="'/cars/'+name+'/'+index+'.jpg'"></v-img>
              <div class="car-divider"></div>
            </template>

            <v-card fluid class="rounded-card elevation-0 transparent fixed" style="bottom:20px;right:0;">
              <v-card-text class="pa-3">
                <v-layout wrap column >
                  <v-flex xs12 md4 >
                    <v-chip class="white elevation-2 subheading right"><strong>HONDA {{name}}</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Year: <strong class="pl-1">2016</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Year: <strong class="pl-1">2016</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right "><strong>HONDA CRZ</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Year: <strong class="pl-1">2016</strong></v-chip>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-chip class="white elevation-2 subheading right">Year: <strong class="pl-1">2016</strong></v-chip>
                  </v-flex>


                  <v-dialog
                      v-model="dialog"
                      width="700"
                      >
                      <v-btn
                        slot="activator"
                        color="blue darken-2"
                        round
                      >
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
          },
          mercedes: {
            images: 13,
          },
          mazda: {
            images: 12,
          },
          ram_truck: {
            images: 4,
          },
          ram_van: {
            images: 2,
          },
          honda_crz: {
            images: 15,
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
