(function() {
  var noteListViewModel = NoteListView;
  var noteModel = Note;
  var noteViewModel = NoteView;
  var noteList = new NoteList(noteModel);
  noteList.create("first test note");
  noteList.create("second test note");
  var element = document.getElementById("app");
  var notecontroller = new NoteController(element, noteList, noteViewModel, noteListViewModel);
  notecontroller.display();
})();
