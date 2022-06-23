<template>

<!--card-->
  <div  class="card h-48 columns-1" v-for="(film, index) in certifications" >
    <router-link tag="a" :to="'/details/' + film.order"  class="card-body flex flex-row">
      <div class="img-wrapper w-40 h-48 flex">
        <img src="@/assets/img/01.png" class="" :alt="film.certification" />
      </div>

      <div class="py-2 ml-10 grid grid-cols-1">
        <h1 class="text-lg font-bold">{{ film.certification }} - {{film.order}}</h1>

        <div class="mt-7">
          <span class="mt-5"
            ><i class="_icon _icon-calendar mr-2 mb-2"></i>2022-04-04</span
          >
          <ul class="grid grid-cols-3 gap-x-6">
            <li class="text-sm font-light" v-for="(tag, index) in tags">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </router-link>
  </div>

  
</template>

<script>
import axios from "axios";
export default {
  name: "CardMovie",
  data() {
    return {
      msg: "vue start",
      certifications: [{certification:'',meaning:'',order:''}],
      tags:["Dram","Action","Sci-Fi"]
    };
  },
  created: function () {
    console.log("created");
    this.GetMovies();
  },
  methods: {
    GetMovies: function () {
      axios
        .get(
          "https://api.themoviedb.org/3/certification/movie/list?api_key=f62f750b70a8ef11dad44670cfb6aa57",
          {
            headers: {
              // 'Authorization': 'Bearer' + 'Your Bearer Password',
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          this.certifications=response.data.certifications.US;
          console.log(response.data.certifications.US);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    
  },
  
  props: {},
};
</script>
