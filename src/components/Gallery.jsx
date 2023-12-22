//-------------- key: e9b4ccd8
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=e9b4ccd8

import { Component } from "react";
import { Alert, Col, Row } from "react-bootstrap";

class Gallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.filmFetch();
  }
  async filmFetch() {
    try {
      const url = `http://www.omdbapi.com/?s=${this.props.searchValue}&apikey=e9b4ccd8`;
      const pippo = await fetch(url);
      if (!pippo.ok) {
        throw new Error(`errore${pippo.status}`);
      }
      const dati = await pippo.json();
      const myFilm = dati.Search.slice(0, 6);
      this.setState({ movies: myFilm });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="dark-background">
        <h5 className="my-4 text-light text-start ms-2">Film con: {this.props.searchValue}</h5>
        <Row className="g-1 text-light">
          {movies.map((movie) => (
            <Col className="hover-zoom" lg="2" xs={6} md={4} key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-fluid"
                style={{ width: "400px", height: "200px", objectFit: "cover" }}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default Gallery;
