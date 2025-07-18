function SearchBar() {
  return (
    <div className="px-md-4 w-100">
      <div className="position-relative" style={{ maxWidth: "80%" }}>
        <input
          type="text"
          className="form-control ps-5 w-100"
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
