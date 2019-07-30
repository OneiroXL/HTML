<template>
  <div class="post-video">
    <el-row :gutter="20">
      <el-col :span="12">
        <video-player
          class="video-player-box"
          :options="playerOptions">
        </video-player>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import { GetVideo } from '@/api/video/index.js'
export default {
    name: 'PlayVideo',
    data() {
        return {
            playerOptions: {
                fluid: true,
                autoplay: false,
                sources: [{
                    type: 'video/mp4',
                    src: '',
                }],
            },
        };
    },
    methods: {
        //获取列表
        GetVideo(){
            this.$api.auto(GetVideo, {ID:this.$route.query.videoID}, response =>{
                if(response.Status == 10000){
                    this.playerOptions.sources[0].src =  response.Data.URL;
                }else{
                    this.$notify({
                        title: '警告',
                        message: response.Message,
                        type: 'warning'
                    });
                }
            });
        },
    },
    components: {
        videoPlayer,
    },
    beforeMount() {
        this.GetVideo();
    },
};
</script>

<style>
</style>