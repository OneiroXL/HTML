<template>
    <el-row :gutter="20">
      <el-col :span="3" v-for="video in videoList" :key="video.ID">
        <el-card class="video-card" @click.native="PlayVideo(video)">
          <img :src="video.CoverUrl" class="image">
          <div style="padding: 14px;">
            <span class="Title">标题:{{video.Title}}</span>
            <div class="Info">
              <span>简介:{{video.Info}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
</template>
<script>
import { GetVideoList } from '@/api/video/index.js'
export default {
  data() {
      return {
          videoList: [],
      };
  },
  created:function(){
      
  },
  beforeMount() {
      this.GetVideoList();
  },
  methods:{
    //获取列表
    GetVideoList(){
      this.$api.auto(GetVideoList, {}, response =>{
        if(response.Status == 10000){
          this.videoList = response.Data
        }else{
          this.$notify({
            title: '警告',
            message: response.Message,
            type: 'warning'
          });
        }
      });
    },
    PlayVideo(video){
      this.$router.push({ name: 'PlayVideo', query: { videoID: video.ID } });
    }
  }
}
</script>
<style>
  .Title  {
    font-size: 12px;
    letter-spacing:1px;
    color: #999;
  }
  .Info{
    font-size: 10px;
    letter-spacing:1px;
    color: #999;
    text-overflow:ellipsis;/*表示文本超出用省略号代替*/
    white-space:nowrap;/*表示文本不换行*/
    overflow:hidden;/*表示超出隐藏；*/
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .video-card {
    cursor: pointer;
  }
  .image {
    width: 100%;
    display: block;
  }
</style>