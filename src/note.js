"use strict";

(function(exports) {
  function Note(text) {
    this._text = text;
    //this._id = id;
  }
  Note.prototype = {
    text: function() {
      return this._text;
    }//,
    // id: function() {
    //   return this._id;
    // }
  };
  exports.Note = Note;
})(this);
