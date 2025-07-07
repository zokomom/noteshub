import React from 'react';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={note.id} className="note-card hover:bg-gray-300 ">
          <h3 className='font-semibold'>{note.subject}</h3>
          <p>{note.description}</p>
          <p><span className=" bg-gray-600 text-white px-1" >{note.course} sem {note.semester}</span></p>
         
          <button
            onClick={() => {
              if(note.filePath === undefined || note.filePath === null || note.filePath) {
                alert(`We do not have ${note.subject} note at the moment.`);
                return;
              }
              window.open(note.filePath, '_blank');
            }}
          >
            Open Document
          </button>
        </div> 
      ))}
    </div>
  );
};

export default NotesList;