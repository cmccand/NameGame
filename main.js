
var game = {

  init: function () {
    game.initStyling();
    // ToDo.initEvents();
  },
  initStyling: function () {
    game.renderAllBlakes(blake);
    game.renderAllCharlie(charlie);
    game.renderAllJason(jason);
    game.renderAllJossay(jossay);
    game.renderAllTyler(tyler);
  },

  renderBlake: function (blake, index, array) {
    blake.idx = index;
    var compiledBlake = _.template(templates.peepsData);
    $('#blake').append(compiledBlake(blake));
  },

  renderAllBlakes: function (blakeInfo) {
    blakeInfo.forEach(game.renderBlake);
  },

  renderCharlie: function (charlie, index, array) {
    charlie.idx = index;
    var compiledCharlie = _.template(templates.peepsData);
    $('#charlie').append(compiledCharlie(charlie));
  },

  renderAllCharlie: function (charlieInfo) {
    charlieInfo.forEach(game.renderCharlie);
  },

  renderJason: function (jason, index, array) {
    jason.idx = index;
    var compiledJason = _.template(templates.peepsData);
    $('#jason').append(compiledJason(jason));
  },

  renderAllJason: function (jasonInfo) {
    jasonInfo.forEach(game.renderJason);
  },

  renderJossay: function (jossay, index, array) {
    jossay.idx = index;
    var compiledJossay = _.template(templates.peepsData);
    $('#jossay').append(compiledJossay(jossay));
  },

  renderAllJossay: function (jossayInfo) {
    jossayInfo.forEach(game.renderJossay);
  },

  renderTyler: function (tyler, index, array) {
    tyler.idx = index;
    var compiledTyler = _.template(templates.peepsData);
    $('#tyler').append(compiledTyler(tyler));
  },

  renderAllTyler: function (tylerInfo) {
    tylerInfo.forEach(game.renderTyler);
  },

  // pluckPeeps: function (peeps, index, array) {
  //   peeps.idx = index;
  //   var pluckedPeeps = _.pluck(peeps, 'name');
  //   var compiledPeeps = _.template(templates.peepsNames);
  //   $('section').append(compiledPeeps(pluckedPeeps));
  // }

};


$(document).ready(function () {
  game.init();

  $('#normal').on('click', function(event){
    event.preventDefault();
    $('.peeps').delay('800').fadeIn('slow');
    $('#blake').siblings('div').hide();
    $('.nextbuttons').delay('800').fadeIn('slow');
    $('#next1').siblings('button').hide();
    $('.buttons').fadeOut('slow');

  //Next Button Events
    $('#next1').on('click', function(event){
      event.preventDefault();
      $('#blake').fadeOut('fast');
      $('#charlie').delay('800').fadeIn('slow');
      $('#next1').hide();
      $('#next2').show();
    });
    $('#next2').on('click', function(event){
      event.preventDefault();
      $('#charlie').fadeOut('fast');
      $('#jason').delay('800').fadeIn('slow');
      $('#next2').hide();
      $('#next3').show();
    });
    $('#next3').on('click', function(event){
      event.preventDefault();
      $('#jason').fadeOut('fast');
      $('#jossay').delay('800').fadeIn('slow');
      $('#next3').hide();
      $('#next4').show();
    });
    $('#next4').on('click', function(event){
      event.preventDefault();
      $('#jossay').fadeOut('fast');
      $('#tyler').delay('800').fadeIn('slow');
      $('#next4').hide();
      $('#start').show();
    });
    $('#start').on('click', function(event) {
      event.preventDefault();
      $('.who').fadeIn('slow');
      // $('#tyler').fadeOut('fast');
      $('section').fadeIn('slow');
      $('section').children('div').css({
        'display': 'inline-block',
        'width': '18%'
      });
      $('section').find('.peeps').css({
        'display': 'inline-block',
      })
      $('img').css('width', '98%').addClass('.multiplechoice');
      $('.tplName, .tplHint').hide();
      $('#charlieWho').siblings('h4').hide();
    });

  });

});



// config: {
//   url: 'http://namegame.willowtreemobile.com:2000',
//
// },

// renderNames: function () {
//
//   $.ajax({
//
//     type: 'GET',
//     url: Game.config.url,
//     success: function(people) {
//       // var img = people[0].url;
//       // var name = people[0].name;
//       var compiledPeeps = _.template(templates.peeps);
//       $('section').append(compiledPeeps(people));
//       // var url = template({url: img});
//       // $('section').html(url);
//     }
//   });
// }

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
