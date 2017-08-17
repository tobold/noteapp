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

(function(exports) {
  function noteListModelMock(notemodelmock) {
    this.notemodelmock = notemodelmock;
    this._notes = [];
  }

  noteListModelMock.prototype = {
    all: function() {
      return this._notes;
    },
    create: function(text) {
      this._notes.push(new this.notemodelmock(text));
    }
  };

  exports.noteListModelMock = noteListModelMock;
})(this);
