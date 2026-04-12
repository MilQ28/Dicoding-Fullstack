import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // [Basic] kelola nilai title & body
      title: '',
      body: '',
      // [Advanced] untuk pesan error
      errorMessage: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const input = event.target.value;

    // [Skilled] batasi maksimal 50 karakter
    if (input.length <= 50) {
      this.setState({ title: input });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    // [Advanced] tolak submit jika body < 10 karakter
    if (body.trim().length < 10) {
      this.setState({
        errorMessage: 'Catatan harus memiliki minimal 10 karakter.',
      });
      return;
    }

    // [Basic] panggil props.addNote
    this.props.addNote({ title, body });

    // reset form
    this.setState({
      title: '',
      body: '',
      errorMessage: '',
    });
  }

  render() {
    const { title, body, errorMessage } = this.state;

    // [Skilled] hitung sisa karakter
    const remainingChars = 100 - title.length;

    return (
      <div className="note-input" data-testid="note-input">
        <h2>Buat catatan</h2>

        {/* [Advanced] tampilkan pesan error */}
        {errorMessage && (
          <p
            className="note-input__feedback--error"
            data-testid="note-input-error"
          >
            {errorMessage}
          </p>
        )}

        <form
          onSubmit={this.onSubmitEventHandler}
          data-testid="note-input-form"
        >
          {/* [Skilled] tampilkan sisa karakter */}
          <p
            className="note-input__title__char-limit"
            data-testid="note-input-title-remaining"
            style={{ color: remainingChars < 10 ? 'red' : 'inherit' }}
          >
            Sisa karakter: {remainingChars}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={title}
            onChange={this.onTitleChangeEventHandler}
            required
            data-testid="note-input-title-field"
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={body}
            onChange={this.onBodyChangeEventHandler}
            required
            data-testid="note-input-body-field"
          />
          <button type="submit" data-testid="note-input-submit-button">
            Buat
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;