<template>
  <div>
      <!-- <el-button type="primary" @click="GoToAddVideo">添加</el-button> -->
      <TableList v-bind:tableOptions="tableOptions"></TableList>
  </div>
</template>
<script>
import { GetVideoList } from '@/api/video/index.js'
import TableList from '@/components/tableList.vue'
export default {
  components: {
      TableList,
	},
  created:function(){
      
  },
  methods:{
    GoToAddVideo(){
      this.$router.push({path: '/AddVideo'})
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
          Api:GetVideoList,
          Param:{
             Search:""
          },
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
          PaginationOptions:{
              IsPage:true,
              Options:{
                Total:0,
                PageSize:10,
                PageIndex:1,
              }
          },
          TableData:[]
      },
      
    }
  },
}
</script>