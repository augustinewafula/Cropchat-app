<template>
<v-container
    fluid
    grid-list-md
  >
  <v-layout row wrap>
    <div class="camera-modal text-xs-center">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <v-btn @click="capture" fab color="pink" dark>
                <v-icon>camera</v-icon>
            </v-btn>
        </div>
    </div>
  </v-layout>
</v-container>
</template>

<script>
  import { storage } from '../services/firebase'
  export default {
    data () {
      return {
        mediaStream: null
      }
    },
    methods: {
      capture () {
          const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
          const imageCapture = new window.ImageCapture(mediaStreamTrack)
          return imageCapture.takePhoto().then(blob => {
            storage.ref().child(`images/picture-${new Date().getTime()}`).put(blob).then(res => { console.log(res) })
            this.$router.go(-1)
         })
      }
    },
    mounted () {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.mediaStream = mediaStream
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
        })
        .catch(error => console.error('getUserMedia() error:', error))
    },
    destroyed () {
        const tracks = this.mediaStream.getTracks()
        tracks.map(track => track.stop())
    }
  }
</script>

<style scoped>
    .camera-modal-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: center;
        margin-bottom: 24px;
    }
    .take-picture-button {
        display: flex;
    }
</style>