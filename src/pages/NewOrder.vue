<template>
  <q-page class="flex-center">
    <q-space style="height: 15px;" />
    <!-- Client Info -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px; margin-left: 5px; margin-right: 5px;"
      icon="assignment"
      label="Сведения о клиенте: "
      @show="1+1"
      @hide="1+1"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <q-input v-model="city" label="Город*:" stack-label :dense="dense" />
          <q-input v-model="address" label="Адрес*:" stack-label :dense="dense" />
          <q-input v-model="nameSurname" label="ФИО*:" stack-label :dense="dense" />
          <q-input v-model="phoneNumber" label="Номер телефона*:" stack-label :dense="dense" />
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-space style="height: 9px;" />
    <!-- Info about building/appartment/house -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px; margin-left: 5px; margin-right: 5px;"
      icon="account_balance"
      label="Информация о доме: "
      @show="2+2"
      @hide="2+2"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <q-select v-model="buildingType" :options="buildingTypes" label="Тип дома">
            <template v-slot:prepend>
              <q-icon name="business" />
            </template>
          </q-select>
          <q-toggle
            :label="pinkModel"
            false-value="Нежилое (в стадии ремонта)"
            true-value="Жилое"
            left-label
            v-model="pinkModel"
          />
          <br />
          
          <q-list>
            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Монтаж</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="notifications" val="battery" />
              </q-item-section>
            </q-item>  

            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Демонтаж</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="notifications" val="battery" />
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Доставка</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="notifications" val="battery" />
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Разгрузка</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="notifications" val="battery" />
              </q-item-section>
            </q-item>

            <q-item tag="label" v-ripple>
              <q-item-section>
                <q-item-label>Вывоз мусора</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-toggle color="blue" v-model="notifications" val="battery" />
              </q-item-section>
            </q-item>

          </q-list>
          <br />
          
          <q-select v-model="lift" :options="options" label="Лифт">
            <template v-slot:prepend>
              <q-icon name="swap_vertical_circle" />
            </template>
          </q-select>
          
          <q-input v-model="comment" label="Комментарии:" stack-label :dense="dense" autogrow/>
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-space style="height: 9px;" />

    <!-- Client Info -->
    <q-expansion-item
      class="shadow-1 overflow-hidden"
      style="border-radius: 30px; margin-left: 5px; margin-right: 5px;"
      icon="web"
      label="Изделие №1:"
      @show="3+3"
      @hide="3+3"
      header-class="bg-primary text-white"
      expand-icon-class="text-white"
    >
      <q-card>
        <q-card-section>
          <q-btn flat color="primary" label="Добавить изделие "  icon="add" class="full-width" v-on:click="openSchtandartCAD"/> 
          <q-btn flat color="primary" label="Добавить фото " icon="insert_photo" class="full-width" v-on:click="getOrderPhoto"/> 
          <q-select v-model="profileType" :options="profileTypes" label="Тип профиля">
            <template v-slot:prepend>
              <q-icon name="forward" />
            </template>
          </q-select>
          <q-input v-model="address" label="Подоконник: " stack-label :dense="dense" />
          <q-input v-model="nameSurname" label="Порог: " stack-label :dense="dense" />
          <q-input v-model="phoneNumber" label="Отлив:" stack-label :dense="dense" />
        </q-card-section>
      </q-card>
    </q-expansion-item>

    <q-space style="height: 9px;" />
    <q-dialog v-model="alertCad">
      <q-card>
        <q-card-section>
          <div class="text-h6">Построитель</div>
        </q-card-section>

        <q-card-section>
            Начало работы построителя
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="alertPhoto">
      <q-card>
        <q-card-section>
          <div class="text-h6">Камера</div>
        </q-card-section>

        <q-card-section>
            Открывается камера
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import makerjs from "makerjs";
//import WindowArch from './window-arch';

Vue.use(axios);

export default {
  name: "NewOrder",
  data: function() {
    return {
      responseNews: {},
      displayValueSanitize: true,
      pinkModel: "Нежилое (в стадии ремонта)",
      dense: false,
      lift: null,
      buildingType: null,
      city: null,
      address: null,
      phoneNumber: null,
      nameSurname: null,
      options: [
        "Отсутствует",
        "Грузовой лифт",
        "Пассажирский лифт",
        "Подъём с лесов",
        "Подъём на верёвках"
      ],
      buildingTypes: [
        "Кирпич",
        "Панель",
        "Сталинка",
        "Бревно",
        "Каркас",
        "Керамоблок",
        "Арболит",
        "Многослой. стена"
      ],
      profileTypes: [
          "Blitz New",
          "Euro",
          "Ultima",
          "Terma",
          "Grazio",
          "Optima",
          "Deca",
          "Extra",
          "X60",
          "X70",
          "X80",
      ],
      alertCad: false,
      alertPhoto: false,
      profileType: null,
    };
  },
  created: function() {
    //alert("TEST " + JSON.stringify(responseNews.news[0]));
  },
  methods: {
      
    getOrderPhoto: function() {
        this.alertPhoto = true;
    },
    openSchtandartCAD: function() {
        this.alertCad = true; 
    },
    createTestSVG: function() {
      //var makerjs = require("makerjs");

      var line = {
        type: "line",
        origin: [0, 0],
        end: [50, 150]
      };

      var svg = makerjs.exporter.toSVG(line);
      alert(svg);
      document.append(svg);
    }
  },
  computed: {}
};
</script>
