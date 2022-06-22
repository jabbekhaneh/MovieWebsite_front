<template>
  <!--card-->
  <div class="card h-48 columns-1" v-for="(film, index) in Movies">
    <div class="card-body flex flex-row">
      <div class="img-wrapper w-40 h-48 flex">
        <img src="@/assets/img/01.png" class="" :alt="film.title" />
      </div>

      <div class="py-2 ml-10 grid grid-cols-1">
        <h1 class="text-lg font-bold">{{ film.title }}</h1>

        <div class="mt-7">
          <span class="mt-5"
            ><i class="_icon _icon-calendar mr-2 mb-2"></i>{{ film.date }}</span
          >
          <ul class="grid grid-cols-3 gap-x-6">
            <li class="text-sm font-light" v-for="(tag, index) in film.tags">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMovie",
  data() {
    return {
      msg: "vue start",

      Movies: [
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
        {
          title: "Inception",
          date: "2014-10-22",
          img: "",
          tags: ["Action", "Adventure", "Sci-Fi", "Movies", "film"],
        },
      ],
    };
  },
  created: function () {
    console.log("created");
    this.GetMovies();
  },
  methods: {
    GetMovies: function () {},
  },
  props: {},
};
</script>
