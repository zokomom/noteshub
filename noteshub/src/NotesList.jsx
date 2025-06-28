import React from 'react';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-container">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.subject}</h3>
          <p>{note.description}</p>
          <p  ><span className=" bg-gray-200">{note.course} sem {note.semester}</span></p>
         
          <button
            onClick={() => {
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