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
                    <el-upload
                        class="avatar-uploader"
                        action="http://192.168.199.125:3000/api/v1/Upload/UploadFile"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
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
export default {
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
                    this.$notify({
                        title: '成功',
                        message: response.Message,
                        type: 'success'
                    });
                } else {
                    this.$notify({
                        title: '警告',
                        message: response.Message,
                        type: 'warning'
                    });
                }
            });
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>