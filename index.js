(function() {
  var noteListViewModel = NoteListView;
  var notemodel = Note;
  var noteList = new NoteList(notemodel);
  noteList.create("first test note");
  noteList.create("second test note");
  var element = document.getElementById("app");
  var notecontroller = new NoteController(element, noteList, noteListViewModel);
  notecontroller.display();
})();
