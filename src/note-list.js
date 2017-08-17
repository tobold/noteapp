(function(exports) {
  "use strict";

  function NoteList(notemodel) {
    this._notes = [];
    this._notemodel = notemodel;
  }

  NoteList.prototype = {
    all: function() {
      return this._notes;
    },
    create: function(text) {
      this._notes.push(new this._notemodel(text));
    }
  };

  exports.NoteList = NoteList;
})(this);
