<template>
  <div>
    <component v-for="(val,key) in moduleList" :key="key" :is="val" />
  </div>
</template>

<script>
let comp = {};
let moduleList = JSON.parse(localStorage.moduleList);
console.log('moduleList',moduleList);
for (let item of moduleList) {
  let moduleName = item.moduleName;
  let moduleType = item.moduleType;
  comp[moduleType] = (resolve) =>
    require(["../wxModules/" + moduleType], resolve);
}
console.log('comp',comp);

export default {
  //   components: comp,
  data() {
    return {
      moduleList: comp,
    };
  },
};
</script>

<style scoped>
</style>