<template>
    <div>
        hi,carousel
    </div>
</template>

<script>
    export default {
        mounted () {
            console.log('car');
             let param = { userId: "weiyf1ww6" };
      this.$api.push(param).then((res)=>{
                console.log('carres');
            }).catch(err=>{
                console.log('carerr');
            });
        },
    }
</script>

<style scoped>

</style>