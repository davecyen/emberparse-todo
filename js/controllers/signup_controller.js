Todos.SignupController = Ember.Controller.extend({
    username: null,
    password: null,
    email: null,
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
      signup: function(){
        var controller = this;
        Todos.User.signup(this.get('username'), this.get('password'), this.get('email')).then(
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