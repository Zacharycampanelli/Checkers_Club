import { Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

const StickyNotes = () => {
  
  const [resize, setResize] = useState('vertical');

  function saveNotes(newContent) {
    localStorage.setItem('stickynotes-notes', (newContent));
  }

  function updateNote(newContent) {
    saveNotes(newContent);
  }

 
    

//  let content = retrieveNote();
  return (
    <div>
      <Textarea
        id="noteContainer"
        defaultValue={localStorage.getItem('stickynotes-notes') || "Type notes here"}
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
