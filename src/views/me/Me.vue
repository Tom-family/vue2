<template>
  <div class="home">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "my",
  data(){
    return{
      message:'我的'
    }
  },
  methods: {},
  mounted(){
    console.log(1111)
  },
  activated(){
    console.log(3333)
  }
};
</script>

