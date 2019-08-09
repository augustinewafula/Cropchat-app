<template>
<v-container
    fluid
    grid-list-md
  >
    <v-card>
    <v-img
        :src="cat.url"
        height="400px"
    >
    </v-img>

    <v-card-title primary-title>
        <div>
        <div class="headline">{{cat.title }}</div>
        <span class="grey--text">{{ cat.info }}</span>
        </div>
    </v-card-title>

    <v-card-actions>
        <v-btn icon>
            <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>share</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        
    </v-card-actions>

    <v-slide-y-transition>
        <v-card-text>
            {{ cat.description }}
        </v-card-text>
    </v-slide-y-transition>
    </v-card>
</v-container>   
</template>
<script>
  import { find } from 'lodash'
  export default {
    data(){
        return {
            cat: 'https://via.placeholder.com/117x400?text=Image+Loading...'
        }        
    },
    mounted () {
      this.cat = find(this.$root.cat, (cat) => cat['.key'] === this.$route.params.id);
    }
  }
</script>