// Note Model
(function(exports) {
  function noteModelMock(text, id) {
    this._text = text;
    this._id = id;
  }

  noteModelMock.prototype = {
    text: function() {
      return this._text;
    },
    id: function() {
      return this._id;
    }
  };

  exports.noteModelMock = noteModelMock;
})(this);

// Note List Model
(function(exports) {
  function noteListModelMock(noteModelMock) {
    this.noteModelMock = noteModelMock;
    this._notes = [];
    this._idincrementor = 0;
  }

  noteListModelMock.prototype = {
    all: function() {
      return this._notes;
    },
    create: function(text) {
      id = this._idincrementor;
      this._notes.push(new this.noteModelMock(text, id));
      this._idincrementor ++;
    }
  };

  exports.noteListModelMock = noteListModelMock;
})(this);

// Note View Model
(function(exports) {
  function noteViewModelMock(noteMock) {
    this._noteMock = noteMock;
  }
  noteViewModelMock.prototype.toHtml = function() {
    return "<ul><li>" + this._note.text() + "</li></ul>";
  };
  exports.noteViewModelMock = noteViewModelMock;
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
