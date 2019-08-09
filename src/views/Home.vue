<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-layout row wrap>
      <v-flex
        v-for="picture in this.$root.cat"
        :key="picture.created_at"
        xs12 sm6 md4 lg3 xl2
      >
        <v-card 
        router :to="{name: 'detail', params: { id: picture['.key'] }}">
          <v-img
            :src="picture.url"
            height="200px"
            :lazy-src="`https://via.placeholder.com/332x400?text=Image+Loading...`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="picture.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-layout column class="fab-container">
        <v-btn router :to="{name: 'post'}" fab color="pink" dark absolute bottom right>
          <v-icon>add</v-icon>
        </v-btn>
      </v-layout>
    </v-layout>
  </v-container>      
</template>
<script>
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      },
      getCats () {
        if (navigator.onLine) {
          this.saveCatsToCache()
          return this.$root.cat
        } else {
          return JSON.parse(localStorage.getItem('cats'))
        }
      },
      saveCatsToCache () {
        this.$root.$firebaseRefs.cat.orderByChild('created_at').once('value', (snapchot) => {
          let cachedCats = []
          snapchot.forEach((catSnapchot) => {
            let cachedCat = catSnapchot.val()
            cachedCat['.key'] = catSnapchot.key
            cachedCats.push(cachedCat)
          })
          localStorage.setItem('cats', JSON.stringify(cachedCats))
        })
      }
    },
    mounted () {
      this.saveCatsToCache()
    }
  }
</script>

<style>
.fab-container {
  position: fixed;
  bottom: 40px;
  right: 0;
}
</style>

