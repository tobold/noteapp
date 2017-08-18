(function(exports){
  "use strict";

  function NoteView (note) {
    this._note = note;
  }

  NoteView.prototype = {
    toHtml: function() {
      return "<b>" + this._note.text().substring(0,20) + "</b>" + this._note.text().substring(20);
    }
  };

  exports.NoteView = NoteView;
})(this);
