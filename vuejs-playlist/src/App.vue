<template>
<div>
  <h1>{{title}}</h1>
  <p>{{greeting() }}</p>
</div>
</template>

<script>
export default {
data () {
  return{
    title: 'Your first Vue file'
  }
},
methods: {
  greeting: function (){
    return 'Hello.';
  }
}
}
</script>

<style>

</style>
