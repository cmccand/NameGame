var templates = {};

templates.peepsData = [

'<div class="peeps">',
  '<h4 class="tplName"><%= name %></h4>',
  '<h5 class="tplHint"><%= hint %></h5>',
  '<img class="tplURL" src=<%= url %> />',
'</div>'

].join('');
