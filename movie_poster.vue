<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<div class="card" >
    <h3>{{make}}</h3>
    <p style="top:100%;
right: 0;
left: 100%;">{{message}}</p>
  <img :src="image" style="position: relative;">
  <div class="card-body">
    <p class="card-text">{{message}}</p>
    <h3>{{length}}</h3>
  </div>
</div>
</template>
<script>
export default{
  name:"movie_poster",
  props:{
    image:{
      type:String,
      default:"caps9.jpg",
      required:true
    },
    message:{
        type:String,
        default:"hello from this poster",
        required:true
    },
    length
    :{
        type:Number,
        default:10,
        required:true
    },
    make:{
        type:String,
        default:"make",
        required:true
    }
  }
}
</script>
<style>
div{
display:flex;

}


</style>