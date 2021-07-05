<template>
    <div>
        hi,health
    </div>
</template>

<script>
    export default {
        mounted () {
            console.log('hel');
             let param = { userId: "weiyf16" };
      this.$api.userLogin(param).then((res)=>{
                console.log('heles');
            }).catch(err=>{
                console.log('helerr');
            });
        },
    }
</script>

<style scoped>

</style>