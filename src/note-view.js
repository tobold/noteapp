(function(exports){
  "use strict";

  function NoteView (note) {
    this._note = note;
  }

  NoteView.prototype = {
    toHtml: function() {
      return "<ul><li>" + this._note.text() + "</li></ul>";
    }
  };

  exports.NoteView = NoteView;
})(this);
