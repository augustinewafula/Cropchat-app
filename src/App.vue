<template>
  <v-app class="grey lighten-4">
    <v-toolbar app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>CropChat App</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app fixed>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="img/users/user.png">
              </v-list-tile-avatar>
  
              <v-list-tile-content>
                <v-list-tile-title>Augustine</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
  
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
  
          <v-list-tile v-for="item in items" :key="item.title" router :to="{name : item.route}" exact>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
  
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      drawer: false,
      items: [
          { title: 'Home', icon: 'home', route: 'home' },
          { title: 'Add cat image', icon: 'add_photo_alternate', route: 'post' },
          { title: 'Post picture', icon: 'add_a_photo', route: 'camera' }
        ],
      right: null
    }
  },
  methods: {
    // goToPage: function(route){
    //     this.$router.push({name: route});
    // }
  }
}
</script>
