import React, { Component } from "react";
import "./MovieResults.scss";
import giph from "../../assets/giphy.gif";

class MovieResults extends Component {
  render() {
    if (this.props.data.length === 0) {
      return (
        <div className="movie__error-container">
          <span>
            <img className="movie__error-img" src={giph} alt="sleepy Icon" />
          </span>
          <h2 className="movie__error-text">
            Nothing to display
            <br />
            Please search for a Movie <br/> And get Started!
          </h2>
        </div>
      );  
    }

    return (
      <section className="movie">
        <section>
          {this.props.data.map((item) => {
            return (
              <form
                className="movie__container animate__animated animate__fadeIn"
                onSubmit={(event) => this.props.clickHandler(event, item.Title)}
                key={item.imdbID}
              >
                <div className="movie__poster--container">
                  <img
                    src={item.Poster}
                    className="movie__poster"
                    alt={item.Title}
                  />
                </div>

                <div className="movie__blurb">
                  <h3 className="movie__blurb-text">Title : {item.Title}</h3>
                  <h4 className="movie__blurb-text">
                    Release Year: {item.Year}
                  </h4>
                </div>

                <button className="movie__btn" type="submit">
                  Nominate
                </button>
              </form>
            );
          })}
        </section>
      </section>
    );
  }
}

export default MovieResults;
