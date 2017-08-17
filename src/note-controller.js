(function(exports) {
  "use strict";

  function NoteController(element, noteList, noteListViewModel) {
    this._element = element;
    this._noteList = noteList;
    this._noteListViewModel = noteListViewModel;
    this._noteListView = new this._noteListViewModel(this._noteList);
  }

  NoteController.prototype = {
    display: function() {
      this._element.innerHTML = this._noteListView.toHtml();
    }
  };

  exports.NoteController = NoteController;
})(this);
