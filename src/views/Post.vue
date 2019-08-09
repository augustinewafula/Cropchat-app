<template>
<v-container fluid grid-list-md>
  <v-layout row wrap>
      <v-flex xs12 sm6 md6>
          <img :src="this.catUrl" height="332"
               :lazy-src="`https://via.placeholder.com/332x400?text=Image+Loading...`"
               aspect-ratio="1"
               class="grey lighten-2"
          />
      </v-flex>
  </v-layout>
  <v-layout row wrap>
      <v-flex xs12 sm6 md6>
          <v-text-field label="My name" v-model="title"></v-text-field>
      </v-flex>
  </v-layout>
  <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-textarea
          name="input-3-1"
          label="Describe me"
          hint="A little description of the cat"
          v-model="description"
        ></v-textarea>
      </v-flex>
  </v-layout>
  <v-btn color="success" @click.prevent="postCat">Submit</v-btn>
</v-container>
</template>
<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        'catUrl': 'https://via.placeholder.com/332x400?text=Image+Loading...',
        'title': '',
        'description': ''
      }
    },
    methods: {
        postCat: function() {
            this.$root.$firebaseRefs.cat.push(
                {
                'url': this.catUrl,
                'title': this.title,
                'description': this.description,
                'info': 'Posted by Augustine on Tuesday',
                'created_at': -1 * new Date().getTime()
                })
                .then(this.$router.push('/'))
        }
    },
    created(){
        axios
        .get('https://api.thecatapi.com/v1/images/search?size=full',{
            headers: {
                'X-Api-Key' : '84f9b4f8-dc9d-45c4-9596-103a403479ef'
            }
        })
        .then(response => (
            this.catUrl = response.data[0].url
        ))
    }
  }
</script>