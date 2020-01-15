import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      isAuthorized: localStorage.getItem('isAuthorized') == "true" ? true : false,
      currentUser: localStorage.getItem('currentUser'),
      showAuthForm: true,
      enteredAsAnon: false,
      ordersArray: [],
    },
    getters: {
      ENTEREDASANON: state => {
        return state.enteredAsAnon;
      },
      SHOWAUTHFORM: state => {
        return state.showAuthForm;
      },
      ISAUTHORIZED: state => {
  
        return localStorage.getItem("isAuthorized") == "true" ? true : false;
      },
      CURRENTUSER: state => {
        return state.currentUser;
      },
      ORDERSARRAY: state => {
        return state.ordersArray;
      },
    },
    mutations: {
      SET_ENTEREDASANON: (state, payload) => {
        state.enteredAsAnon = payload;
      },
      SET_ISAUTHORIZED: (state, payload) => {
        localStorage.setItem("isAuthorized", payload);
        let xyz = state;
  
        //state.isAuthorized = payload;
      },
      SET_CURRENTUSER: (state, payload) => {
        localStorage.setItem("currentUser", payload);
        //state.currentUser = payload;
      },
      SET_SHOWAUTHFORM: (state, payload) => {
        state.showAuthForm = payload;
      },
      SET_ORDERSARRAY: (state, payload) => {
        state.ordersArray = payload;
      },
    },
    actions: {
      SET_ENTEREDASANON: (context, payload) => {
        context.commit('SET_ENTEREDASANON', payload);
      },
      SET_ISAUTHORIZED: (context, payload) => {
        if (payload) {
          store.dispatch('SET_SHOWAUTHFORM', false);
          localStorage.setItem("isAuthorized", true);
          //context.commit('SET_ISAUTHORIZED', payload);
        } else if (!payload) {
          store.dispatch('SET_SHOWAUTHFORM', true);
          localStorage.setItem("isAuthorized", false);
  
          //context.commit('SET_ISAUTHORIZED', payload);
        }
  
      },
      SET_CURRENTUSER: (context, payload) => {
        localStorage.setItem("currentUser", payload);
        //context.commit('SET_CURRENTUSER', payload);
      },
      SET_SHOWAUTHFORM: (context, payload) => {
        context.commit('SET_SHOWAUTHFORM', payload);
      },
      SET_ORDERSARRAY: (context, payload) => {
        context.commit('SET_ORDERSARRAY', payload);
      },
    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
