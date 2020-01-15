<template>
  <q-page class="flex flex-center">
      
       <div class="q-pa-md">
       <div class="q-gutter-y-md column">
   
      <!-- There will be logo  -->
      <q-img
          src="../statics/schtandart_logo.png"
          
        />
      <q-space />
      <h5 align="center">Добро пожаловать!</h5>
      
          <q-input outlined v-model="login" label="Введите логин или email" :dense="false" />
          <q-space />
          <q-input outlined v-model="password" label="Введите пароль" :dense="false" />
          <q-btn :loading="loading3" color="primary" align="center" @click="simulateProgress(3)" style="width: 299px">
              Войти
              <template v-slot:loading>
              <q-spinner-hourglass class="on-left" />
              Загрузка
              </template>
           </q-btn>
           
           <div align="center">
           <a href="ya.ru">Войти без регистрации</a><q-space />
                  
           <a href="ya.ru">Забыли пароль?</a><q-space />
           
           <a href="ya.ru">Зарегистрироваться</a>
           </div>

      <div>
      <!-- There will be three buttons: Forgot password? Sign Up; Log in w/o sign up  -->
      </div>

       </div>
       </div>
  </q-page>
</template>

<script>
export default {
  name: "Main",
  data: function() {
      return {
          dialogLists: ["firstEntity", "secondEntity", "thirdEntity", "fourthEntity"],
          loading3: false,
          password: null,
          login: null,
          isServerAvailable: null,
      }
      
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
  },
  methods: {
      simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    }
     
  },
};
</script>

<style>
</style>
