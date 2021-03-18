function Header({ togglePreview, preview }) {
  return (
    <header>
      <h1>Fast CV.</h1>

      <nav>
        <button onClick={togglePreview}>
          {preview ? "Edit CV" : "Live Preview" }
        </button>
      </nav>
    </header>
  );
}

export default Header;
