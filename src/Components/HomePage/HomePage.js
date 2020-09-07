import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../Header/Header";
import Input from "../Input/Input";
import MovieResults from "../MovieResults/MovieResults";
import NominatedMovie from "../NominatedMovie/NominatedMovie";

//movies is the movie list
//nominated movie is the single movie object.

const nominatedArr = [];

class HomePage extends Component {
  state = {
    movies: [],
    nomMov: [],
  };

  searchKey = (e) => {
    e.preventDefault();
    const keyWord = e.target.search.value;

    axios
      .get(" http://www.omdbapi.com/?apikey=2e171a45&s=" + keyWord)
      .then((res) => {
        const movieData = res.data.Search;
        this.setState({
          movies: movieData,
        });
      });
  };
  clickHandler = (e, movieTitle) => {
    e.preventDefault();
    if (!this.state.movies) return;
    nominatedArr.push(
      this.state.movies.find((movie) => {
        return movie.Title === movieTitle;
      })
    );
    this.setState({
      nomMov: nominatedArr,
    });
    const filteredList = this.state.movies.filter((item) => {
      return item.Title !== movieTitle;
    });
    this.setState({
      movies: filteredList,
    });
  };
  deleteHandler = (e, movieTitle) => {
    e.preventDefault();

    if (!this.state.nomMov) return;
    nominatedArr.splice(
      this.state.nomMov.find((movie) => {
        return movie.Title === movieTitle;
      }),
      1
    );
    console.log("after Splice", nominatedArr);
    this.setState({
      nomMov: nominatedArr,
    });
  };

  render() {
    const { movies, nomMov } = this.state;
    return (
      <div>
        <Header />
        <main className="main">
          <Input searchKey={this.searchKey} />

          <section className="main__movies">
            <div className="main__movie-results">
              <h2 className="main__movie-heading">Search Results</h2>
              <MovieResults clickHandler={this.clickHandler} data={movies} />
            </div>

            <div className="main__movie-nominated">
              <h2 className="main__movie-heading">Nominated Movies</h2>
              <NominatedMovie
                nomination={nomMov}
                deleteHandler={this.deleteHandler}
              />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default HomePage;
