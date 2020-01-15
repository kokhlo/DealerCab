<template>
  <q-page class="flex flex-center">
    <q-scroll-area
      class="fit"
      :thumb-style="thumbStyle"
      :content-style="contentStyle"
      :content-active-style="contentActiveStyle"
      :visible="false"
    >
      <q-list bordered separator padding v-for="(news, index) in responseNews" :key="index">
        <q-item class="q-pa-xs">
          <q-item-section>
            <q-item-label>{{news.title}}</q-item-label><q-item-label caption>{{news.date}}</q-item-label>
            <q-item-label caption>{{news.news}}</q-item-label>
          </q-item-section>

          
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import Vue from "vue";
import axios from "axios";

Vue.use(axios);

//Vue.use(axios)

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  
  window.plugins.OneSignal.startInit("1cc64211-d4e7-460b-9d01-24237a20d460")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
  //alert("OneSignal has been initialized");
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

  var notificationOpenedCallback = function(jsonData) {
    console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
  };
}

// Update DOM on a Received Event
function receivedEvent(id) {
  var parentElement = document.getElementById(id);
  var listeningElement = parentElement.querySelector(".listening");
  var receivedElement = parentElement.querySelector(".received");

  listeningElement.setAttribute("style", "display:none;");
  receivedElement.setAttribute("style", "display:block;");

  console.log("Received Event: " + id);
}

export default {
  name: "Main",
  data: function() {
    return {
      responseNews: {},
      
    };
  },
  beforeMount: function() {
      // If IsAuthorized = false then push to Auth page  
  },
  mounted: async function() {
    
    try {
      //newsUrl = 'http://10.255.255.88:5000/news';
      await axios
      //http://80.70.108.29:5000/news main method for getting news
        .get('http://80.70.108.29:5000/test_news_db')
        .then(response => (this.responseNews = response.data));
    } catch (error) {
      alert("Error: " + error);
    }

    //alert("TEST " + JSON.stringify(responseNews.news[0]));
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
