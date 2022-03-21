<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ item.name }}</span>
        <el-button class="button" type="text">Use It</el-button>
      </div>
    </template>
    <div class="text item">
      <span>Emplacement : {{ item.emplacement }}</span>
    </div>
    <div class="text item">
      <span>Armor : {{ item.armor }}</span>
    </div>
    <div class="text item">
      <span>Equipement Level : {{ item.ilvl }}</span>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>