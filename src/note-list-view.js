(function(exports) {
  "use strict";

  function NoteListView(list) {
    this._list = list;
  }

  NoteListView.prototype.toHtml = function() {
    var noteList = this._list.all().map(function(note) {
      return "<a href='#notes/" + note.id() + "'>" + note.text().substring(0,20) + "</a>";
    });

    return "<ul><li>" + noteList.join("</li><li>") + "</li></ul><br>";
  };

exports.NoteListView = NoteListView;
})(this);
