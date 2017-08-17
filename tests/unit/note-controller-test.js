describe("NoteController returns html with the display function",
  function () {
    var noteListMock = new noteListModelMock(noteModelMock);
    noteListMock.create("test");
    var elementMock = {};
    var noteController = new NoteController(elementMock, noteListMock, noteListViewModelMock);
    noteController.display();
    assert.isTrue(elementMock.innerHTML === "<ul><li>test</li></ul>");
  }
);
