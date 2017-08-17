// Note Model
(function(exports) {
  function noteModelMock(text) {
    this._text = text;
  }

  noteModelMock.prototype = {
    text: function() {
      return this._text;
    }
  };

  exports.noteModelMock = noteModelMock;
})(this);

// Note List Model
(function(exports) {
  function noteListModelMock(noteModelMock) {
    this.noteModelMock = noteModelMock;
    this._notes = [];
  }

  noteListModelMock.prototype = {
    all: function() {
      return this._notes;
    },
    create: function(text) {
      this._notes.push(new this.noteModelMock(text));
    }
  };

  exports.noteListModelMock = noteListModelMock;
})(this);

// Note List View Model
(function(exports) {
  function noteListViewModelMock(noteListMock) {
    this._noteListMock = noteListMock;
  }

  noteListViewModelMock.prototype.toHtml = function() {
    var noteList = this._noteListMock.all().map(function(note) {
      //return "<a href='notes/" + note.id + "'>" + note.text().substring(0,20) + "</a>";
      return note.text();
    });

    return "<ul><li>" + noteList.join("</li><li>") + "</li></ul>";
  };
  exports.noteListViewModelMock = noteListViewModelMock;
})(this);
