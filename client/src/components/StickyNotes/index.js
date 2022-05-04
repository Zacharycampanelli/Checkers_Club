import { Flex } from '@chakra-ui/react';
import React from 'react'

const StickyNotes = () => {
    const notesContainer = document.getElementById("notes");
    const addNoteButton = document.getElementsByClassName(".add-note");
    const noteElement = null;
    
    // if(addNoteButton) {
    //  addNoteButton.addEventListener("click", () => addNote());
    // } else {
    //   console.log("doesnt exist")
    // }
    getNotes().forEach((note) => {
      noteElement = createNoteElement(note.id, note.content);
      notesContainer.insertBefore(noteElement, addNoteButton);
    });
    
    
    
    function getNotes() {
      return JSON.parse(localStorage.getItem("stickynotes-notes") || "[]");
    }
    
    function saveNotes(notes) {
      localStorage.setItem("stickynotes-notes", JSON.stringify(notes));
    }
    
    function createNoteElement(id, content) {
      const element = document.createElement("textarea");
    
      element.classList.add("note");
      element.value = content;
      element.placeholder = "Empty Sticky Note";
    
      element.addEventListener("change", () => {
        updateNote(id, element.value);
      });
    
      element.addEventListener("dblclick", () => {
        // eslint-disable-next-line no-restricted-globals
        const doDelete = confirm(
          "Are you sure you wish to delete this sticky note?"
        );
    
        if (doDelete) {
          deleteNote(id, element);
        }
      });
    
      return element;
    }
    
    function addNote() {
      const notes = getNotes();
      const noteObject = {
        id: Math.floor(Math.random() * 100000),
        content: "",
      };
    
      const noteElement = createNoteElement(noteObject.id, noteObject.content);
      notesContainer.insertBefore(noteElement, addNoteButton);
    
      notes.push(noteObject);
      saveNotes(notes);
    }
    
    function updateNote(id, newContent) {
      const notes = getNotes();
      const targetNote = notes.filter((note) => note.id === id)[0];
    
      targetNote.content = newContent;
      saveNotes(notes);
    }
    
    function deleteNote(id, element) {
      const notes = getNotes().filter((note) => note.id !== id);
    
      saveNotes(notes);
      notesContainer.removeChild(element);
    }

  return (
    <div id="notes">
      
        <textarea className = "note">Some sample text</textarea>
        <button onClick={addNote} className = "add-note" type= "button">+</button>

    </div>
  )
}

export default StickyNotes