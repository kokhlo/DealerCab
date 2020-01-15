<template>
  <q-page class="flex flex-center">
      <h5>Список замеров</h5>  
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
 
  computed: {
    contentStyle() {
      return {
        backgroundColor: "rgba(0,0,0,0.02)",
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
