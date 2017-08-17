(function(exports) {
  "use strict";

  function NoteController(element, noteList, noteViewModel, noteListViewModel) {
    this._element = element;
    this._noteList = noteList;
    this._noteViewModel = noteViewModel;
    this._noteListViewModel = noteListViewModel;
    this._noteListView = new this._noteListViewModel(this._noteList);
    this.eventListener();
  }

  NoteController.prototype = {
    display: function() {
      this._element.innerHTML = this._noteListView.toHtml();
    },
    displayNote: function() {
      var id = window.location.hash.split('/')[1];
      var note = this._noteList.all()[id];
      var noteView = new this._noteViewModel(note);
      this._element.innerHTML = noteView.toHtml();
    },
    eventListener: function() {
      var self = this;
      window.addEventListener("hashchange", function(){
        self.displayNote();
      });
    }
  };

  exports.NoteController = NoteController;
})(this);
