function SearchBar() {
  return (
    <div className="flex-grow-1 px-4">
      <div className="position-relative" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          className="form-control ps-5"
          placeholder="Search for study table, kettle, iPhone"
          style={{ borderRadius: "8px" }}
        />
        <i
          className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
          style={{ fontSize: "16px" }}
        ></i>
      </div>
    </div>
  );
}

export default SearchBar;
