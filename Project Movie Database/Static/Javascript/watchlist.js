var movies = JSON.parse(localStorage.getItem("UserWatchList"));

function addtablerowwithdata(poster, title, overview, status, index) {
    var table = document.getElementById("table").getElementsByTagName('tbody')[0];
    var tablerow = document.createElement('tr');
    tablerow.dataset.index = index; 

    var postercell = document.createElement('td');
    var posterImage = document.createElement('img');
    posterImage.src = poster;
    postercell.appendChild(posterImage);

    var titlecell = document.createElement("td");
    titlecell.innerHTML = title;

    var overviewcell = document.createElement("td");
    overviewcell.innerHTML = overview;

    var buttonCell1 = document.createElement('td');
    var button1 = document.createElement('button');
    button1.className = 'btn btn-danger';
    button1.type = 'button';
    button1.innerHTML = '<i class="fa fa-remove"></i>';
    button1.dataset.index = index; // Add data-index attribute for delete button
    buttonCell1.appendChild(button1);

    var buttonCell2 = document.createElement('td');
    var button2 = document.createElement('button');
    button2.type = 'button';
    if (status === "unwatched") {
        button2.className = 'btn btn-warning';
        button2.innerHTML = '<i class="fa fa-eye"></i>';
    } else {
        button2.className = 'btn btn-success';
        button2.innerHTML = '<i class="fa fa-check"></i>';
    }
    button2.dataset.index = index; // Add data-index attribute for status button
    buttonCell2.appendChild(button2);

    tablerow.appendChild(postercell);
    tablerow.appendChild(titlecell);
    tablerow.appendChild(overviewcell);
    tablerow.appendChild(buttonCell1);
    tablerow.appendChild(buttonCell2);

    table.append(tablerow);
}

function datafromlocalstorage() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (movies) {
        movies.forEach((element, index) => {
            if (element.email === email) {
                addtablerowwithdata(element.poster, element.title, element.overview, element.status, index);
            }
        });

        document.querySelectorAll("tbody").forEach(tbody => {
            tbody.addEventListener("click", (e) => {
                if (e.target.closest('.btn-warning') || e.target.closest('.btn-success')) {
                    const btn = e.target.closest('button');
                    const index = btn.dataset.index;
                    const movie = movies[index];

                    if (movie.status === "unwatched") {
                        movie.status = "watched";
                        btn.className = "btn btn-success";
                        btn.innerHTML = '<i class="fa fa-check"></i>';
                    } else {
                        movie.status = "unwatched";
                        btn.className = "btn btn-warning";
                        btn.innerHTML = '<i class="fa fa-eye"></i>';
                    }
                    localStorage.setItem("UserWatchList", JSON.stringify(movies));
                } else if (e.target.closest('.btn-danger')) {
                    const btn = e.target.closest('button');
                    const index = btn.dataset.index;
                    movies.splice(index, 1); // Remove the movie from the array

                    // Remove the corresponding row from the table
                    const row = btn.closest('tr');
                    row.remove();

                    // Update the local storage
                    localStorage.setItem("UserWatchList", JSON.stringify(movies));

                    // Update indices of remaining rows and buttons
                    document.querySelectorAll('tbody tr').forEach((row, newIndex) => {
                        row.dataset.index = newIndex;
                        row.querySelector('.btn-danger').dataset.index = newIndex;
                        row.querySelector('.btn-warning, .btn-success').dataset.index = newIndex;
                    });
                }
            });
        });
    }
}
datafromlocalstorage();

