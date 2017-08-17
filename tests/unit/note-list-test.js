describe("NoteList can create and store a note",
  function () {
    var noteList = new NoteList(notemodelmock);
    var text = "Test note";
    noteList.create(text);
    assert.isTrue(noteList.all()[0].text() === text);
  }
);
