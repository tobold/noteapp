(function(exports) {
  "use strict";

  function NoteListView(list) {
    this._list = list;
  }

  NoteListView.prototype.toHtml = function() {
    var noteArea = ['<div><form action="/notes/new" id="text" method="post" name="text">',
    '<textarea id="textarea" rows="4" cols="30" form="text"></textarea><br>',
    '<input type="submit" class="button" value="submit"></form></div>'].join("");
    var noteList = this._list.all().map(function(note) {
      if(note.text().length > 25) {
        return "<a href='#notes/" + note.id() + "'>" + note.text().substring(0,25) + "...</a>";
      } else {
        return "<a href='#notes/" + note.id() + "'>" + note.text() + "</a>";
      }
    });

    return noteArea + "<ul><li>" + noteList.join("</li><li>") + "</li></ul>";
  };

exports.NoteListView = NoteListView;
})(this);
