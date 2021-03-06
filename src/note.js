(function(exports) {
  "use strict";

  function Note(text, id) {
    this._text = text;
    this._id = id;
  }

  Note.prototype = {
    text: function() {
      return this._text;
    },
    id: function() {
      return this._id;
    }
  };
  
  exports.Note = Note;
})(this);
