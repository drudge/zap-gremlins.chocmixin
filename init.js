/*!
 * Zap Gremlins mixin for Chocolat
 * Copyright(c) 2012 Nicholas Penree <nick@penree.com>
 * MIT Licensed
 */

/**
 * Hook up menu items.
 */

Hooks.addMenuItem('Text/Lines/Zap Gremlins', 'command-control-shift-z', function() {
  Recipe.run(function(recipe) {
    var sel = (!recipe.selection.length)? new Range(0, recipe.length) : recipe.selection;
    recipe.eachLine(sel, function(marker) {
      return marker.text.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    });
  });
});