<template>
  <!-- <q-layout view="lHh Lpr lFf">
   <q-footer bordered class="bg-white text-primary">
        
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-3"
          align="justify"
          narrow-indicator
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>
        
      </q-footer>  
    <!--
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Schtandart.Дилеры
        </q-toolbar-title>

        <div> v 0.11 beta</div>
      </q-toolbar>
    </q-header>
  -->
  <!-- 
    
  -->
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-avatar color="primary" text-color="white" @click="leftDrawerOpen = !leftDrawerOpen">КХ</q-avatar>
        <q-toolbar-title class="text-left">Schtandart.Дилеры</q-toolbar-title>
        <q-btn flat round dense icon="apps" class="q-mr-xs">
            <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Настройки</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
            

          

            <div class="text-subtitle1 q-mt-md q-mb-xs">Test text</div>

            <q-btn
              color="primary"
              label="Выйти"
              push
              size="sm"
              v-close-popup
            />
          </div>
        </div>
      </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-black"
        v-model="tab"
      >
        <q-route-tab icon="explore" to="/" name="main" exact />
        <q-route-tab icon="shopping_cart" :disable="disabled" to="/orders" name="orders" exact />
        <q-route-tab
          icon="format_list_bulleted"
          to="/measurements"
          name="measurements"
          exact
        />
        <q-route-tab icon="email" to="/chat" name="chat" exact />
        
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header><q-avatar color="primary" size="xl" text-color="white" @click="leftDrawerOpen = !leftDrawerOpen">КХ</q-avatar> </q-item-label>
        
        <q-item>
        <q-item-label>
          <span  class="text-subtitle1"> Константин Хлопков</span> <span  class="text-subtitle2">  <br>  Шуя ИП Чекалов В.А.</span> <br>
        
        </q-item-label>
        
        </q-item>
        <q-item>
        <q-separator />
        </q-item>
        
        <q-item clickable to="/newOrder" exact>
          <q-item-section avatar>
            
            <q-icon name="add">  </q-icon>
               
          </q-item-section>
          <q-item-section>
            <q-item-label>Новый заказ</q-item-label>
            <q-item-label caption>Создать заказ</q-item-label>
          </q-item-section>
        </q-item> 

        <q-item clickable exact to="/lastOrder">
          <q-item-section avatar>
            <q-icon name="history" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Последний заказ</q-item-label>
            <q-item-label caption>Открыть последний заказ</q-item-label>
          </q-item-section>
        </q-item>

        <q-item v-show="!disabled" clickable exact to="/orders">
          <q-item-section avatar>
            <q-icon name="shopping_cart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Заказы</q-item-label>
            <q-item-label caption>Ваши заказы</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable exact to="/price">
          <q-item-section avatar>
            <q-icon name="show_chart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Прайсы</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable exact to="/managementPage">
          <q-item-section avatar>
            <q-icon name="vpn_key" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Управление</q-item-label>
            <q-item-label caption>Портал администратора</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable exact to="/companySettings">
          <q-item-section avatar>
            <q-icon name="card_travel" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Компания</q-item-label>
            <q-item-label caption>Настройки компании</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  name: "MyLayout",

  data() {
    return {
      tab: null,
      leftDrawerOpen: false,
      disabled: this.$store.getters.ENTEREDASANON,
    };
  },
};
</script>
