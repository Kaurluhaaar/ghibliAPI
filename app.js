const filmListDiv = document.querySelector("#film-list");

fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((film) => {
      console.log(film.title);
      console.log(film.image);
      const filmDiv = document.createElement("div");
      const filmImg = document.createElement("img");
      const filmDes = document.createElement("des");
      const filmDate = document.createElement("date");
      const filmCast = document.createElement("cast");
      const filmOriginal = document.createElement("original");

      filmDiv.innerHTML =
      '<a href="film.html?id=' + film.id + '">' + film.title + "</a><br>";
      filmImg.src = film.image;
        filmDes.innerText = film.description
        filmDate.innerText = film.release_date
        filmCast.innerText = film.running_time
        filmOriginal.innerText = film.original_title

      let cell = document.createElement("div");
      cell.appendChild(filmImg);
      let info = document.createElement("div");
      let time = document.createElement("div");
      time.appendChild(filmDate);
      time.appendChild(filmCast);
      time.appendChild(filmOriginal);
      info.appendChild(filmDiv);
      info.appendChild(time);
      info.appendChild(filmDes);
      cell.appendChild(info);
      filmListDiv.appendChild(cell).className = "grid-item";
      filmImg.classList.add("poster");
      filmDiv.classList.add("title");
      filmDes.classList.add("description");
      filmDate.classList.add("date");
      info.classList.add("info");
      time.classList.add("time");

    });
  });
