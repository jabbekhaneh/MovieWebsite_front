<template>
  <div class="detail-page">
    <!-- wrapper movies details -->
    <div
      class="wrapper flex items-center justify-between w-full h-20 rounded-md"
    >
      <div class="flex justify-between">
        <a href="/" class="btn-primary-search ml-9">
          <span class="_icon _icon-long-arrow-left"></span> back
        </a>
        <label class="grid h-5 ml-5">
            <b>Guardians of the Galaxy</b>
            <small>All heroes start somewhere.</small>
        </label>
      </div>
    </div>
    <!--  -->
    <div class="grid grid-cols-3 gap-6 mt-6">
      <div class="cover col-span-1">
        <img class="w-full" src="@/assets/img/01.png" />
      </div>
      <ul class="post_meta col-span-2">
        <li>
          <strong>ژانر</strong><i class="seprator"></i>
          <div class="post_meta--left">
            <a href="https://kelaketfilm.imahmoodzz.ir/genre/drama/" rel="tag"
              >درام</a
            >
          </div>
        </li>
        <li>
          <strong>سال تولید</strong><i class="seprator"></i>
          <div class="post_meta--left">
            <a href="https://kelaketfilm.imahmoodzz.ir/year/2008/" rel="tag"
              >2008</a
            >
          </div>
        </li>
        <li>
          <strong>محصول</strong><i class="seprator"></i>
          <div class="post_meta--left">
            <a
              href="https://kelaketfilm.imahmoodzz.ir/country/germany/"
              rel="tag"
              >آلمان</a
            >،
            <a
              href="https://kelaketfilm.imahmoodzz.ir/country/united-states/"
              rel="tag"
              >آمریکا</a
            >
          </div>
        </li>
        <li>
          <strong>مدت زمان</strong><i class="seprator"></i>
          <div class="post_meta--left">116 دقیقه</div>
        </li>
        <li>
          <strong>زبان</strong><i class="seprator"></i>
          <div class="post_meta--left">انگلیسی، همونگ</div>
        </li>
        <li>
          <strong>بازیگران</strong><i class="seprator"></i>
          <div class="post_meta--left">
            <a
              href="https://kelaketfilm.imahmoodzz.ir/actor/ahney-her/"
              rel="tag"
              >Ahney Her</a
            >،
            <a
              href="https://kelaketfilm.imahmoodzz.ir/actor/andrew-tamez-hull/"
              rel="tag"
              >Andrew Tamez-Hull</a
            >،
            <a
              href="https://kelaketfilm.imahmoodzz.ir/actor/antonio-mireles/"
              rel="tag"
              >Antonio Mireles</a
            >،
            <a
              href="https://kelaketfilm.imahmoodzz.ir/actor/arthur-cartwright/"
              rel="tag"
              >Arthur Cartwright</a
            >،
            <a
              href="https://kelaketfilm.imahmoodzz.ir/actor/austin-douglas-smith/"
              rel="tag"
              >Austin Douglas Smith</a
            >
          </div>
        </li>
        <li>
          <strong>کارگردان</strong><i class="seprator"></i>
          <div class="post_meta--left">
            <a
              href="https://kelaketfilm.imahmoodzz.ir/director/clint-eastwood/"
              rel="tag"
              >Clint Eastwood</a
            >
          </div>
        </li>
        <li>
          <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quae vitae animi? Dolor tempore nostrum officiis odit! Cum, repudiandae quibusdam ipsa iure deleniti fugiat ullam quis vel alias nihil asperiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio nesciunt consectetur obcaecati voluptatem eum alias, quia illo vero dolorum repellat esse explicabo, doloremque minus eveniet dignissimos eos minima at?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam similique minus veniam delectus possimus, sequi alias velit culpa non debitis molestias eaque. Maxime amet quos nobis dolor, rerum nesciunt qui?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste corrupti nam sunt asperiores possimus velit harum earum fugit quia. Voluptas voluptatem doloremque iure mollitia sapiente atque blanditiis architecto sit nam!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis tempore deleniti hic sint similique suscipit expedita iste temporibus, fugiat eveniet cumque. Consequatur, atque non eaque ab molestias consectetur voluptatibus. 
          
          </p>
        </li>
      </ul>
    </div>

    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CardMovie",
  data() {
    return {
      msg: "vue start",
      
      
    };
  },
  created: function () {
    
    console.log("created");
    
  },
  methods: {
    GetMovie: function () {
     
    },
    
  },
  
  props: {},
};
</script>
