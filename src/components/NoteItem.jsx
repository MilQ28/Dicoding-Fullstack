import React from 'react';
import { showFormattedDate } from '../utils';

// Komponen tombol aksi terpisah
function NoteActionButton({ variant, onClick, children }) {
  return (
    <button
      className={`note-item__${variant}-button`}
      type="button"
      onClick={onClick}
      data-testid={`note-item-${variant}-button`}
    >
      {children}
    </button>
  );
}

// Fungsi untuk menyorot keyword pencarian dalam teks
function highlightKeyword(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  );
}

function NoteItem({ note, onDelete, onArchive, searchKeyword }) {
  return (
    <div
      className="note-item"
      data-testid="note-item"
      data-note-id={note?.id}
    >
      <div className="note-item__content" data-testid="note-item-content">
        {/* [Basic] tampilkan judul catatan */}
        {/* [Advanced] sorot kata kunci pencarian */}
        <h3 className="note-item__title" data-testid="note-item-title">
          {highlightKeyword(note.title, searchKeyword)}
        </h3>

        {/* [Basic] tampilkan tanggal dengan util showFormattedDate */}
        <p className="note-item__date" data-testid="note-item-date">
          {showFormattedDate(note.createdAt)}
        </p>

        {/* [Basic] tampilkan isi catatan */}
        {/* [Advanced] sorot kata kunci pencarian */}
        <p className="note-item__body" data-testid="note-item-body">
          {highlightKeyword(note.body, searchKeyword)}
        </p>
      </div>

      <div className="note-item__action" data-testid="note-item-action">
        {/* [Skilled] gunakan NoteActionButton */}
        <NoteActionButton
          variant="delete"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </NoteActionButton>

        {/* [Advanced] tombol arsip */}
        <NoteActionButton
          variant="archive"
          onClick={() => onArchive(note.id)}
        >
          {note.archived ? 'Unarchive' : 'Archive'}
        </NoteActionButton>
      </div>
    </div>
  );
}

export default NoteItem;