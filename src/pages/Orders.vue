<template>
  <q-page class="flex flex-center">
    <q-table
      style="min-height: 34em;"
      title="Заказы"
      :data="data"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
      rows-per-page-label="Заказов на одной странице"
    >
      <template v-slot:top="props">
        <div class="col-2 q-table__title">Ваши заказы:</div>

        <q-space />

        <div v-if="false" class="col"> <!-- $q.screen.gt.xs -->
          <q-toggle v-model="visibleColumns" val="idorder" label="Id order" />
          <q-toggle v-model="visibleColumns" val="oname" label="№ Заказа" />
          <q-toggle v-model="visibleColumns" val="price" label="Цена" />
          <q-toggle v-model="visibleColumns" val="customer" label="Контрагент" />
          <q-toggle v-model="visibleColumns" val="state" label="Статус" />
          <q-toggle v-model="visibleColumns" val="plandatedost" label="Плановая дата доставки" />
          <q-toggle v-model="visibleColumns" val="perenos" label="Дата переноса" />
          <q-toggle v-model="visibleColumns" val="oplata" label="Оплата" />
          <q-toggle v-model="visibleColumns" val="dtdog" label="Дата договора" />
          <q-toggle v-model="visibleColumns" val="otgdate" label="Дата отгрузки" />
        </div>
        <q-select
          
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          display-value="Выбранные колонки:"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
    </q-table>
  </q-page>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import makerjs from "makerjs";

Vue.use(axios);

export default {
  name: "Main",
  data: function() {
    return {
      responseNews: {},
      visibleColumns: [
        "idorder",
        "oname",
        "price",
        "customer",
        "state",
        "oplata",
        "dtdog",
        "otgdate"
      ],
      columns: [
        {
          name: "idorder",
          required: true,
          label: "Id order",
          align: "left",
          field: "idorder",
          format: val => `${val}`,
          sortable: true
        },
        { name: "oname", label: "№ заказа", field: "oname", sortable: true },
        { name: "price", label: "Цена", field: "price" },
        { name: "customer", label: "Контрагент", field: "customer" },
        { name: "state", label: "Статус", field: "state" },
        {
          name: "plandatedost",
          label: "Плановая дата",
          field: "plandatedost",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "perenos",
          label: "Перенос даты",
          field: "perenos",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        { name: "oplata", label: "Оплата", field: "oplata" },
        { name: "dtdog", label: "Дата договора", field: "dtdog" },
        { name: "otgdate", label: "Отгружено", field: "otgdate" }
      ],
      data: []
    };
  },
  mounted: async function() {
    try {
      var data = JSON.stringify({
        contractorName: "Чекалов В.А. ИП"
      });
      var that = this;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
          that.data = this.response;
          console.log(typeof this.response[0]);
          //vueApp.$store.dispatch('SET_ORDERSARRAY', this.response);
          //console.log(this.response[0]);
          //console.log(this.response[1].idorder);
          that.$forceUpdate;
        }
      });

      xhr.open("POST", "http://80.70.108.29:5000/getordersbyorg");
      xhr.setRequestHeader("Content-Type", "application/json");
      //xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.19.0");
      xhr.setRequestHeader("Accept", "*/*");
      xhr.setRequestHeader("Cache-Control", "no-cache");
      //xhr.setRequestHeader("Postman-Token", "51d3c028-8150-4a8b-8cb7-75cb402e8007,12f8bedd-c222-4d39-8d73-4efdb3f39040");
      xhr.setRequestHeader("Host", "80.70.108.29:5000");
      xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
      xhr.setRequestHeader("Content-Length", "48");
      xhr.setRequestHeader("Connection", "keep-alive");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.responseType = "json";
      xhr.send(data);
    } catch (err) {
      alert(err);
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
