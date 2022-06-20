<template>
  <div class="home">
    <!-- topBar -->
    <header class="topBar relative top-0 w-full h-12"></header>

    <!-- container -->
    <section class="container mx-auto mt-28">
      <!-- searchBox -->
      <div
        class="searchBox flex items-center justify-around w-full h-20 rounded-md"
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
      <div class="result mt-10 grid grid-cols-3 gap-6">
        <!-- Cards -->
         <CardMovie/>


      </div>

      <div class="w-96 mx-auto pagination container">
        <div class="flex justify-around">
          <a href="">Next Page</a>
          <span class="border-l-2 border-gray-500"></span>
          <a href="" class="text-blue-700">Previous page</a>
        </div>
        <span class="flex justify-center text-gray-400"
          >Showing results 1-20</span
        >
      </div>
    </section>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import CardMovie from "@/components/Home/CardComponent.vue"

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

.topBar {
  background: #11b980;
}
.searchBox {
  background: #cfcfcf;
}
.card {
  border-radius: 0.25rem;
  background: #f1f1f1;
}

.btn-primary-search {
  background: #549df2 !important;
  border-radius: 100px;
  width: 74px;
  height: 33px;
  cursor: pointer;
}
</style>
