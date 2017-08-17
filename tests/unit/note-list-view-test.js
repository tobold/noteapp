describe("NoteListView can return html",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("Text");
    var noteListView = new NoteListView(noteListMock);
    assert.isTrue(noteListView.toHtml() === "<ul><li>Text</li></ul>");
  }
);
