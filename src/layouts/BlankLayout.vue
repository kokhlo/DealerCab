<template>
  
  <q-layout view="lHh lpr lFf" class="shadow-2 rounded-borders">
      <div v-if="false">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar>
        <q-avatar color="primary" text-color="white" @click="leftDrawerOpen = !leftDrawerOpen">КХ</q-avatar>
        <q-toolbar-title class="text-left">Schtandart.Дилеры</q-toolbar-title>
        <q-btn flat round dense icon="apps" class="q-mr-xs" />
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
        <q-route-tab icon="shopping_cart" to="/orders" name="orders" exact />
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
          <span  class="text-subtitle1">    Константин Хлопков</span> <span  class="text-subtitle2">  <br>  Шуя ИП Чекалов В.А.</span> <br>
        
        </q-item-label>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      tab: null,
      leftDrawerOpen: false
    };
  }
};
</script>