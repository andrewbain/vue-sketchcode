<template>
  	<el-row>
      <el-col v-for="(item, key) in columns" :span="colWidth" :key="key">
        <div class="grid-content">
          <background v-if="item[0] != 'image_full'" :background="item[0]" :content="item[1]"></background>
          <image-full v-if="item[0] == 'image_full'" :content="item[1]" :justify="item[2]" :align="item[3]"></image-full>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  mounted(){
    this.parseRow()
  },
  props:['markup'],
  data () {
    return {
      columns: [],
      content: [],
      colWidth: ''
    }
  },
  methods:{
    parseRow(){
      this.columns = this.markup.split(' / ')
      this.columns = this.columns.map((column) => this.parseColumn(column))
      this.colWidth = 24 / this.columns.length
    },
    parseColumn(column){
      return column = column.split(',')
    }
  }
}
</script>
<style scoped>
  .el-row {
    /*margin-bottom: 20px;*/
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>