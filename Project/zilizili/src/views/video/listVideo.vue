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
      TableList
	},
  created:function(){
      
  },
  mounted:function(){
      this.GetVideoList();
  },
  methods:{
    //获取列表
    GetVideoList(){
      this.$api.auto(GetVideoList, {}, response =>{
          if(response.Status == 10000){
              this.tableOptions.TableData = response.Data
          }else{
              this.$notify({
                title: '警告',
                message: response.Message,
                type: 'warning'
              });
          }
      });
    },
    GoToAddVideo(){
      this.$router.push({path: '/AddVideo'})
    },
    ToolsClickHandle(data,buttonType){
      console.log(data);
      console.log(buttonType);
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
            }
          ],
          TableData:[]
      }
    }
  },
}
</script>