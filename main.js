$(document).ready(function () {
  Game.init();

});


var Game = {

  init: function () {
    Game.initStyling();
    // ToDo.initEvents();
  },
  initStyling: function () {
    Game.renderNames();
  },

  config: {
    url: 'http://namegame.willowtreemobile.com:2000',

  },

  renderNames: function () {

    $.ajax({

      type: 'GET',
      url: Game.config.url,
      success: function(people) {
        console.log(people[0].name);
        var template = _.template($('#PeopleTmpl').html());
        var name = people[0].name;
        return name;
      }
    });
  }
};
