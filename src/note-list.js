(function(exports) {
  "use strict";

  function NoteList(notemodel) {
    this._notes = [];
    this._notemodel = notemodel;
    this._idincrementor = 0;
  }

  NoteList.prototype = {
    all: function() {
      return this._notes;
    },
    create: function(text) {
      var id = this._idincrementor;
      this._notes.push(new this._notemodel(text, id));
      this._idincrementor ++;
    }
  };

  exports.NoteList = NoteList;
})(this);
