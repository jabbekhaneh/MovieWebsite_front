<template>
  <div class="home">
 
  <!-- searchBox -->
      <div
        class="wrapper flex items-center justify-around w-full h-20 rounded-md"
      >
        <!-- search -->
        <div>
          <label class="w-40 h-5">Search by release date:</label>
          <input type="search" placeholder="search" class="w-56 h-8 ml-7" />
        </div>
        <!-- submit -->
        <input type="submit" value="submit" class="btn-primary-search" />
      </div>

      <!-- result -->
      <div class="result mt-10 grid gap-6 xl:grid-cols-3">
        <!-- Cards -->
        <CardMovie />
      </div>
      <!-- pagination -->
      <div class="w-96 mx-auto pagination mt-10">
        <div class="flex justify-around">
          <a href="">Next Page</a>
          <span class="border-l-2 border-gray-500"></span>
          <a href="" class="text-blue-700">Previous page</a>
        </div>
        <span class="flex justify-center text-gray-400"
          >Showing results 1-20</span
        >
      </div>
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardMovie from "@/components/Home/CardComponent.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    CardMovie,
  },
};
</script>
<style>
li {
  list-style: square;
}



</style>
