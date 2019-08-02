<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="视频名称">
                    <el-input v-model="form.Title"></el-input>
                </el-form-item>
                <el-form-item label="视频地址">
                    <el-input v-model="form.URL"></el-input>
                </el-form-item>
                <el-form-item label="视频介绍">
                    <el-input type="textarea" v-model="form.Info"></el-input>
                </el-form-item>
                <el-form-item label="视频封面">
                    <Upload></Upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
        </el-form>
       
    </div>
</template>
<script>
import { AddVideo } from '@/api/video/index.js'
import Upload from '@/components/upload.vue'
export default {
    components: {
        Upload
    },
    data() {
        return {
            form: {
                Title: '',
                URL: '',
                Info: '',
            },
            rules:{
                Title:{
                    required:true,
                    message: "请输入视频名称",
                },
                URL:{
                    required:true,
                    message: "请输入视频地址",
                },
                URL:{
                    required:true,
                    message: "请输入视频介绍",
                },
            }
        }
    },
    methods: {
        onSubmit() {
            this.$api.auto(AddVideo, this.form, response =>{
                if(response.Status == 10000){
                    this.$Notify.SuccessNotification("投稿成功")
                } else {
                    this.$Notify.AutoNotification(response.Message,response.Status)
                }
            });
        }
    }
}
</script>