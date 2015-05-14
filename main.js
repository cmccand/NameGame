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
        var img = people[0].url;
        var name = people[0].name;
        var template = _.template($('#PeopleTmpl').html());
        var url = template({url: img});
        $('section').html(url);
      }
    });
  }
};
