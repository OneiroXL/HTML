<template>
  <div>
      <!-- <el-button type="primary" @click="GoToAddVideo">添加</el-button> -->
      <TableList v-bind:tableOptions="tableOptions"></TableList>
      <Pagination v-bind:paginationOptions="paginationOptions"></Pagination>
  </div>
</template>
<script>
import { GetVideoList } from '@/api/video/index.js'
import TableList from '@/components/tableList.vue'
import Pagination from '@/components/pagination.vue'
export default {
  components: {
      TableList,
      Pagination
	},
  created:function(){
      
  },
  mounted:function(){
      this.GetVideoList(1,10);
  },
  methods:{
    //获取列表
    GetVideoList(){
      this.$api.auto(GetVideoList, {PageIndex:this.paginationOptions.CurrentPage,PageSize:this.paginationOptions.PageSize}, response =>{
          if(response.Status == 10000){
              this.tableOptions.TableData = response.Data
              this.paginationOptions.Total = response.Count
          }else{
              this.$Notify.WarningNotification(response.Message)
          }
      });
    },
    GoToAddVideo(){
      this.$router.push({path: '/AddVideo'})
    },
    Action(myaction){
      eval(myaction);
    },
    ToolsClickHandle(data,buttonType){
      switch(buttonType){
          case "Play":{
              this.$router.push({ name: 'PlayVideo', query: { videoID: data.ID } })
          }
      }
    }
  },
  data () {
    return {
      tableOptions:{
          HeadFiles:[
            {
              FileID:"Title",
              FileName:"标题",
              Width:"200",
              Align:"center"
            },
            {
              FileID:"URL",
              FileName:"地址",
              Width:"500",
              Align:"center"
            },
            {
              FileID:"URL",
              FileName:"地址",
              Width:"500",
              Align:"center"
            },
            {
              FileID:"URL",
              FileName:"地址",
              Width:"500",
              Align:"center"
            },
            {
              FileID:"URL",
              FileName:"地址",
              Width:"500",
              Align:"center"
            },
            {
              FileID:"URL",
              FileName:"地址",
              Width:"500",
              Align:"center"
            }
          ],
          ToolButtons:[
            {
                ButtonType:"Show",
                ButtonName:"查看",
            },
            {
                ButtonType:"Edit",
                ButtonName:"编辑",
            },
            {
                ButtonType:"Play",
                ButtonName:"观看",
            }
          ],
          TableData:[]
      },
      paginationOptions:{
          Total:0,
          PageSize:10,
          CurrentPage:1,
      }
    }
  },
}
</script>