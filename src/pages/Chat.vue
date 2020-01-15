<template>
  <q-page class="flex flex-center">
    <q-scroll-area
      class="fit"
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      :visible="false"
    >
      <div v-for="n in dialogLists" :key="n" class="q-pa-xs" v-show="false">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
        <br />
        <q-space />
        <hr>
      </div>
      <div class="q-pa-xs" v-show="true" style="text-align: center;">
          <p class="text-body1">В данный момент у Вас нет диалогов... связаться с персональным менеджером?</p> 
          <q-btn unelevated rounded color="primary" label="Написать менеджеру" />
          <br>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: "Main",
  data: function() {
      return {
          dialogLists: ["firstEntity", "secondEntity", "thirdEntity", "fourthEntity"],
      }
  },
  computed: {
    contentStyle() {
      return {
        backgroundColor: "rgba(0,0,0,0)",
        color: "#555"
      };
    },

    contentActiveStyle() {
      return {
        backgroundColor: "#eee",
        color: "black"
      };
    },

    thumbStyle() {
      return {
        right: "2px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75
      };
    }
  }
};
</script>

<style>
</style>
