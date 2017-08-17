describe("Note can add text",
function () {
    var text = "My favourite language is JavaScript";
    var note = new Note(text);
    assert.isTrue(note.text() === text);
  }
);

describe("Note has an id",
function () {
    var text = "My favourite language is JavaScript";
    var id = 1;
    var note = new Note(text, id);
    assert.isTrue(note.id() === 1);
  }
);
