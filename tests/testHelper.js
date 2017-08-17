(function(exports) {
  function notemodelmock(text) {
    this._text = text;
  }

  notemodelmock.prototype = {
    text: function() {
      return this._text;
    }
  };

  exports.notemodelmock = notemodelmock;
})(this);
