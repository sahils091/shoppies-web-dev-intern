import React, { Component } from "react";
import "./NominatedMovie.scss";
import Axios from "axios";

class NominatedMovie extends Component {
  handleHover = () => {
    Axios.get(
      "http://www.omdbapi.com/?apikey=2e171a45&s=&t=" +
        this.props.nomination.Title
    ).then((res) => {
      return <div>{res.data}</div>;
    });
  };
  render() {
    return (
      <section className="nominated">
        {this.props.nomination.map((data) => {
          return (
            <form
              className="nominated__container  animate__animated animate__fadeIn  "
              onSubmit={this.props.deleteHandler}
              key={data.Title}
            >
              <div className="nominated__poster--container">
                <img
                  src={data.Poster}
                  className="nominated__poster"
                  alt={data.Title}
                />
              </div>

              <div className="nominated__blurb">
                <h3 className="nominated__blurb-text">Title : {data.Title}</h3>
                <h4 className="nominated__blurb-text">
                  Release Year: {data.Year}
                </h4>
              </div>
              <button className="nominated__btn" type="submit">
                Delete
              </button>
            </form>
          );
        })}
      </section>
    );
  }
}

export default NominatedMovie;
