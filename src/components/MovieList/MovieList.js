import React, { Component } from "react";
import { Link } from "react-router-dom";

import ReactTooltip from "react-tooltip";

import watched from "../../img/hidden.png";
import trash from "../../img/trash.png";

import "./MovieList.scss";

function MovieList({
  toWatchData,
  deleteMovie,
  moveToWatched,
  showMovieDetails,
  hideSearchList,
  onClickedGenre,
  header
}) {
  return (
    <div
      id="toWatchList"
      onClick={() => {
        hideSearchList();
      }}
    >
      <div className="main-wrapper">
        <div className="title-selector">
          <h1>{header}</h1>
        </div>

        {toWatchData.map(movie => {
          const genres = movie.data.Genre.split(", ");

          return (
            <div key={movie.id} className="toWatchMovie">
              {/* left */}
              <div className="content">
                <span className="rating">{movie.data.imdbRating}</span>

                <div className="movieInfo">
                  <Link to={`/${movie.data.imdbID}`}>
                    <h2 onClick={() => showMovieDetails(movie.data.imdbID)}>
                      {movie.data.Title}{" "}
                    </h2>
                  </Link>
                  <p>
                    {genres.map(genre => {
                      return (
                        <span
                          className="genre"
                          key={genre}
                          onClick={() => {
                            onClickedGenre(genre);
                          }}
                        >
                          {genre}&nbsp;
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
              {/* right */}
              <div className="icons">
                {header == "To Watch" && (
                  <img
                    data-tip
                    data-for="watched"
                    src={watched}
                    alt=""
                    onClick={() => moveToWatched(movie)}
                  />
                )}
                <ReactTooltip
                  id="watched"
                  place="top"
                  effect="solid"
                  type="info"
                  backgroundColor="rgb(148, 31, 227)"
                >
                  <span> Watched Movie </span>
                </ReactTooltip>

                <ReactTooltip
                  id="delete"
                  place="top"
                  effect="solid"
                  type="error"
                  backgroundColor="rgb(148, 31, 227)"
                >
                  <span> Delete Movie </span>
                </ReactTooltip>
                <img
                  data-tip
                  data-for="delete"
                  src={trash}
                  alt=""
                  onClick={() => deleteMovie(movie.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { MovieList };
