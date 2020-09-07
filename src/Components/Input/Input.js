import React from "react";
import "./Input.scss";

const Input = (props) => {
  return (
    <section className="search">
      <div className="search__head-container">
        <h1 className="search__head">The Shoppies</h1>
        <h2 className="search__subhead">Nominate Your Favorite Movie</h2>
      </div>
      <form onSubmit={props.searchKey} className="search__input-form">
        <input
          type="text"
          name="search"
          placeholder="Please Enter Movie Title"
          required
          minLength="3"
          className="search__input-field"
        />
        <button type="submit" className="search__input-btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default Input;
