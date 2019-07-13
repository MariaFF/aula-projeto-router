let isAuthenticated = false;

export default {
  setAuthenticated(isAuth) {
    isAuthenticated = true;
  },

  getAuthenticated() {
    return isAuthenticated;
  }
};
