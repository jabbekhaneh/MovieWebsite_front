<template>
<!--card-->
  <div class="card h-48">
    <div class="card-body flex flex-row">
      <div class="img-wrapper w-40 h-48 flex">
        <img src="@/assets/img/01.png" class=""  :alt="title" />
      </div>

      <div class="py-2 ml-10 grid grid-cols-1">
        <h1 class="text-lg font-bold">{{title}}</h1>

        <div class="">
          <span class="mt-5"
            ><i class="_icon _icon-calendar mr-2 mb-2"></i>2014-10-22</span
          >
          <ul class="flex gap-6">
            <li class="text-sm font-light" v-for="(tag,index) in tags">{{tag}}</li>
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
        msg:"vue start",
        tags:["Action","Adventure","Sci-Fi","Movies","film"],
        img:"",
        title:'Inception',
    };
  },
  created:function(){
      console.log("created");
  },
  methods:{

  },
  props: {},
};
</script>
