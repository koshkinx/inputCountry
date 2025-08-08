const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const countriesData = [];

// Генерируем тестовые данные
letters.forEach((letter) => {
  for (let i = 1; i <= 10; i++) {
    countriesData.push({ letter: letter, name: `${letter}land` });
  }
});

function renderCountries(filter = "") {
  const container = $("#countryList");
  container.empty();

  letters.forEach((letter) => {
    let filtered = countriesData.filter(
      (c) =>
        c.letter === letter &&
        c.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length > 0) {
      let col = $("<div>").addClass("country-column");
      col.append($("<div>").addClass("letter").text(letter));
      filtered.forEach((c) => {
        col.append($("<div>").addClass("country-item").text(c.name));
      });
      container.append(col);
    }
  });
}

// Обработчик поиска
$("#search").on("input", function () {
  renderCountries($(this).val());
});

// Первичный рендер
renderCountries();
