<template>
  <div class="home">
    <el-button @click="showImage">编辑</el-button>

      <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="70%">
        <el-form :model="form">
          <el-form-item label="活动名称">
            <el-input
              placeholder="请输入内容"
              v-model="form.imgSrc"
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item width="300">
            <div style="float:left;margin-left:10px;position:relative" v-for="(item,index) in imageList" :key="index">
                <el-image
                  style="width: 100px; height: 100px;"
                  :src="item">
                </el-image>
                <el-radio v-model="radio" :label="index" @change="getValue"></el-radio>
                <!-- <div class="overlay"></div> -->
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      imageList : [],
      dialogFormVisible: false,
      form: {
        imgSrc: 'https://tse2-mm.cn.bing.net/th/id/OIP.TqCTPXNb5D42q5_hGQAQqwHaJl?w=136&h=180&c=7&o=5&pid=1.7'
      },
      radio: 0
    }
  },
  methods: {
    showImage() {
      this.dialogFormVisible = true
      for (let i = 0 ; i < this.imageList.length ; i++) {
        if(this.form.imgSrc == this.imageList[i]) {
          this.radio = i
        }
      }
    },
    getallImage() {
      this.imageList = ['https://tse2-mm.cn.bing.net/th/id/OIP.WGjYSVCjQAP79P8YyNJn8wHaKW?w=126&h=180&c=7&o=5&pid=1.7',
                  'https://tse2-mm.cn.bing.net/th/id/OIP.TqCTPXNb5D42q5_hGQAQqwHaJl?w=136&h=180&c=7&o=5&pid=1.7',
                  'https://tse3-mm.cn.bing.net/th/id/OIP.g80_OQO9owhktAY9p-av4QHaKc?w=125&h=180&c=7&o=5&pid=1.7']     
      
    },
    getValue(val) {
      this.form.imgSrc = this.imageList[val];
    }
  },
  created() {
    this.getallImage()
  },
  beforeDestory() {
  }
}
</script>

<style lang="less" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(255,255,255,0.4);
}
</style>
