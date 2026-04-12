import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchive, dataTestId = 'notes-list', searchKeyword }) {
  // [Basic] validasi notes agar tidak kosong
  const hasNotes = notes && notes.length > 0;

  if (!hasNotes) {
    return (
      <div className="notes-list" data-testid={dataTestId}>
        {/* [Basic] tampilkan pesan kosong */}
        <p
          className="notes-list__empty-message"
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan.
        </p>
      </div>
    );
  }

  // [Advanced] kelompokkan catatan per bulan-tahun
  const groupedNotes = notes.reduce((groups, note) => {
    const date = new Date(note.createdAt);
    const monthYear = date.toLocaleString('id-ID', {
      month: 'long',
      year: 'numeric',
    });
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(note);
    return groups;
  }, {});

  return (
    <div className="notes-list" data-testid={dataTestId}>
      {Object.keys(groupedNotes).map((groupKey) => (
        <section className="notes-group" key={groupKey}>
          <h3 className="notes-group__title">{groupKey}</h3>
          {groupedNotes[groupKey].map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
              searchKeyword={searchKeyword}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

export default NotesList;