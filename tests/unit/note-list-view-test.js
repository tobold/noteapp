describe("NoteListView can return html",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("Text");
    var noteListView = new NoteListView(noteListMock);
    assert.isTrue(noteListView.toHtml() === '<div><form action="/notes/new" id="text" method="post" name="text"><textarea id="textarea" rows="4" cols="30" form="text"></textarea><br><input type="submit" class="button" value="submit"></form></div><ul><li><a href=\'#notes/0\'>Text</a></li></ul>');
  }
);

describe("NoteListView only shows 25 characters of the note",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("this is a long note over 25 characters");
    var noteListView = new NoteListView(noteListMock);
    assert.isTrue(noteListView.toHtml() === '<div><form action="/notes/new" id="text" method="post" name="text"><textarea id="textarea" rows="4" cols="30" form="text"></textarea><br><input type="submit" class="button" value="submit"></form></div><ul><li><a href=\'#notes/0\'>this is a long note over ...</a></li></ul>');
  }
);
