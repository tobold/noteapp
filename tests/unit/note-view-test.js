describe("NoteView can return html",
  function () {
    var noteMock = new noteModelMock("Text");
    var noteView = new NoteView(noteMock);
    assert.isTrue(noteView.toHtml() === "<b>Text</b>");
  }
);
