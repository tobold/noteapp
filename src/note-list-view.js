(function(exports) {
  "use strict";

  function NoteListView(list) {
    this._list = list;
  }

  NoteListView.prototype.toHtml = function() {
    var noteArea = ['<form action="/notes/new" id="text" method="post" name="text">',
    '<textarea id="textarea" rows="4" cols="50" form="text"></textarea><br>',
    '<input type="submit" value="submit"></form>'].join("");
    var noteList = this._list.all().map(function(note) {
      if(note.text().length > 20) {
        return "<a href='#notes/" + note.id() + "'>" + note.text().substring(0,20) + "...</a>";
      } else {
        return "<a href='#notes/" + note.id() + "'>" + note.text() + "</a>";
      }
    });

    return noteArea + "<ul><li>" + noteList.join("</li><li>") + "</li></ul>";
  };

exports.NoteListView = NoteListView;
})(this);
