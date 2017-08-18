(function() {
  var noteListViewModel = NoteListView;
  var noteModel = Note;
  var noteViewModel = NoteView;
  var noteList = new NoteList(noteModel);
  var element = document.getElementById("app");
  var notecontroller = new NoteController(element, noteList, noteViewModel, noteListViewModel);
  notecontroller.display();
})();
