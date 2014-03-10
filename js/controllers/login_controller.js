Todos.LoginController = Ember.Controller.extend({
  username: null,
  password: null,
  loggedIn: false,
  loginMessage: null,
  reset: function(){
    this.setProperties({
      username: "",
      password: "",
      loginMessage: ""
    });
  },
  actions: {
    login: function(){
      var controller = this;
      DS.ParseUserModel.login(this.get('username'), this.get('password')).then(
        function(user){
          controller.set('loggedIn', true);
          controller.set('loginMessage', "Welcome!");
        },
        function(error){
          controller.set('loggedIn', false);
          controller.set('loginMessage', error.error);
        }
      );
    }
  }
});


