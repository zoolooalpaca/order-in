<template>
  <div
      class="food-category-chip-container"
      v-bind:style="containerStyle"
      @click="onClick"
      >

    <div class="mask food-category-chip-container p-5 transbox-food-category">
      <p class="title-large text-form-food-category">{{ name }}</p>
      </div>
    </div>

</template>

<script>
export default {
  props: [
      'image',
      'name'
  ],
  methods: {
    onClick() {
    },
  },

  computed: {
    containerStyle() {
      return {
        'background-image': 'url(' + this.image + ')',
        'background-repeat': 'none',
        'background-size': 'cover',
        'background-position': 'center',
      };
    },
  },
};
</script>

<style>
.food-category-chip-container{
  position: relative;
  height: 80px;
  overflow: hidden;
  border-radius: 20px;
}
.transbox-food-category {
  position: absolute;
  align-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255,220,196,0.5);
}
.text-form-food-category{
  text-align: center;
  font-weight: bold;
  color: #000000;
}
</style>
