import { Flex, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

const StickyNotes = () => {
  const notesContainer = document.getElementById('notes');
  // const addNoteButton = document.getElementsByClassName(".add-note");

  // Allows for the changing of the vertical size of the text area
  const [resize, setResize] = useState('vertical');

  function saveNotes(newContent) {
    console.log('saved' + JSON.stringify(newContent));
    localStorage.setItem('stickynotes-notes', JSON.stringify(newContent));
  }

  function updateNote(newContent) {
    console.log('here');
    saveNotes(newContent);
  }

  return (
    <div>
      <Textarea
        id="noteContainer"
        defaultValue={localStorage.getItem('stickynotes-notes')}
        onBlur={(e) => updateNote(e.target.value)}
        w="30vw"
        variant="filled"
        resize={resize}
        ml={5}
        p={2}
      ></Textarea>
    </div>
  );
};

export default StickyNotes;
