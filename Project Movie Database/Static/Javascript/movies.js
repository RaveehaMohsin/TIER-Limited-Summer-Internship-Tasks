const API_KEY = "ed83d5dd48cb9ff76ed3bf2806b8d8fb";
const BASE_URL = "https://api.themoviedb.org/3";
const moviesContainer = document.getElementById("moviesContainer");
const TOTAL_PAGES = 20;

// Store movies in a global array for access in event listeners
let movies = [];


async function fetchMovies() {
  try {
    for (let page = 1; page <= TOTAL_PAGES; page++) {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
      );
      const data = await response.json();
      movies = movies.concat(data.results); 
    }
    displayMovies(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}


function displayMovies(movies) {
  // Clear the container
  moviesContainer.innerHTML = "";

  // Get the email from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');     

  // Retrieve the user's watchlist from localStorage
  const userWatchList = JSON.parse(localStorage.getItem("UserWatchList")) || [];

  movies.forEach((movie, index) => {
    // Create movie element
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    // Check if the movie is already in the watchlist
    const isAdded = userWatchList.some(m => m.email === email && m.id === movie.id);

    // Set button text based on watchlist status
    const buttonText = isAdded ? "Already Added" : "Add to Watch List";

    movieElement.innerHTML = `                   
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
      <div class="overlay">
        <button class="addtowatchlist" type="button" data-id="${index}">
          <i class="fas fa-eye icon"></i> ${buttonText}
        </button>
      </div>
      <h2>${movie.title}</h2>
      <p>Arriving On ${movie.release_date}</p>
      <p>${movie.overview}</p>
    `;
    moviesContainer.appendChild(movieElement);
  });

  // Add event listeners to the buttons
  const addToWatchlistBtns = document.querySelectorAll(".addtowatchlist");
  addToWatchlistBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.id;
      const movieData = movies[index];
      const btnText = e.currentTarget.innerHTML;

      // Update the button text immediately
      if (btnText.includes("Added")) {
        return; // Do nothing if the movie is already added
      }

      // Check if the movie is already in the watchlist
      const movieExists = userWatchList.some(m => m.email === email && m.id === movieData.id);

      if (!movieExists) {
        // Add the movie to the watchlist
        const toWatchMovie = {
          email: email,
          id: movieData.id,
          title: movieData.title,
          overview: movieData.overview,
          poster: `https://image.tmdb.org/t/p/w200${movieData.poster_path}`,
          status: "unwatched"
        };
        userWatchList.push(toWatchMovie);
        localStorage.setItem("UserWatchList", JSON.stringify(userWatchList));

        // Update button text to "Added"
        e.currentTarget.innerHTML = '<i class="fas fa-eye icon"></i> Added';
      } else {
        // Update button text to "Already Added" if the movie exists
        e.currentTarget.innerHTML = '<i class="fas fa-eye icon"></i> Already Added';
      }
    });
  });
}

fetchMovies();
