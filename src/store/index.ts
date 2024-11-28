import { createStore } from "vuex";

interface State {
    token: string | null;
    user: Record<string, any> | null;
}

export default createStore<State>({
    state: {
        token: localStorage.getItem('token'),
        user: JSON.parse(localStorage.getItem('user') || 'null'),
    },
    mutations: {
        setToken(state, token: string | null) {
          state.token = token;
          if (token) {
            localStorage.setItem('token', token);
          } else {
            localStorage.removeItem('token');
          }
        },
        setUser(state, user: Record<string, any> | null) {
            state.user = user;
            if (user) {
              localStorage.setItem('user', JSON.stringify(user));
            } else {
              localStorage.removeItem('user');
            }
          },
    },
    actions: {
        login({ commit }, payload: { token: string; user: Record<string, any> }) {
          commit('setToken', payload.token);
          commit('setUser', payload.user);
        },
        logout({ commit }) {
          commit('setToken', null);
          commit('setUser', null);
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user,
    },
})