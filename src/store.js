import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    users: [],
    selectedUsers: [],
    userIndex: "",
    usersFav: []
  },

  actions: {
    loadUsers({ commit }) {
      axios.get("https://randomuser.me/api/?results=100").then(response => {
        const users = response.data.results;
        commit("SET_USERS", users);
      });
    },
    loadUserDetail({ commit }, email) {
      commit("SET_INDEX", email);
    },
    loadSelectedGender({ commit }, selectedGender) {
      commit("SET_GENDER", selectedGender);
    },
    loadFavUsers({ commit }, user) {
      commit("SET_FAVOURITE", user);
    },
    loadUsersFrom({ commit }, selectedCountry) {
      commit("SET_FROM", selectedCountry);
    }
  },

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_INDEX(state, userIndex) {
      state.userIndex = userIndex;
    },
    SET_GENDER(state, selectedGender) {
      state.selectedUsers = selectedGender;
    },
    SET_FAVOURITE(state, currentUser) {
      const mailUser = currentUser.email;
      const index = state.usersFav.findIndex(user => user.email === mailUser);
      if (currentUser.isFavouriteUser) {
        return state.usersFav.push(currentUser);
      }
      return state.usersFav.splice(index, 1);
    },
    SET_FROM(state, selectedCountry) {
      state.selectedUsers = selectedCountry;
    }
  }
});
