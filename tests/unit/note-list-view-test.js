describe("NoteListView can return html",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("Text");
    var noteListView = new NoteListView(noteListMock);
    assert.isTrue(noteListView.toHtml() === "<ul><li><a href='#notes/0'>Text</a></li></ul>");
  }
);

describe("NoteListView only shows 20 characters of the note",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("this is a long note over 20 characters");
    var noteListView = new NoteListView(noteListMock);
    console.log(noteListView.toHtml())
    assert.isTrue(noteListView.toHtml() === "<ul><li><a href='#notes/0'>this is a long note </a></li></ul>");
  }
);
