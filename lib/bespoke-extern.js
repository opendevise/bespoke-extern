module.exports = function(core) {
  return function(deck) {
    var g = window;
    if (core) {
      if (g.bespoke instanceof Object && Array.isArray(g.bespoke.decks)) core.decks = g.bespoke.decks;
      g.bespoke = core;
    }
    else if (g.bespoke instanceof Object) core = g.bespoke;
    else core = g.bespoke = {};
    (Array.isArray(core.decks) ? core.decks : (core.decks = [])).push(core.deck = deck);
    deck.on('destroy', function() {
      var idx = core.decks.indexOf(deck);
      if (idx >= 0) core.decks.splice(idx, 1);
      core.deck = undefined;
    });
  };
};
