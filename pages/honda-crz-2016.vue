<template>
  <div>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Honda CRZ 2016</h2>
            <span class="subheading">
              4K miles
            </span>
          </div>
        </v-flex>

      </v-layout>
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
