//------ Header component -------
const headerComponent = (logo) => {
  return `
        <header>
            <h1 class="logo">${logo}</h1>
            <span class="material-icons-outlined">menu</span>
        </header>
    `;
};

//------ Card Container component -------
const cardContainerComponent = (bookCards) => {
  return `
        <div class="container">${bookCards}</div>
    `;
};

//------ Book Card component -------
const bookCardComponent = (id, sub, title, text, button) => {
  return `
        <div class="card">
            <div class="details">
                <div class="book-id">${id}</div>
                <h3>${sub}</h3>
                <h2>${title}</h2>
                <p class="text">${text}</p>   
            </div>
            <button><span class="button-text">${button}</span><span class="material-icons-outlined">arrow_forward</span></button></button>
        </div>
    `;
};

//------ create function that fills the book cards -------
const fillCards = (bookData, bookCardComponent) => {
  let result = "";
  bookData.forEach(
    (book) =>
      (result += bookCardComponent(
        book.id,
        book.sub,
        book.title,
        book.text,
        book.button
      ))
  );

  return result;
};

//------ LOAD EVENT -------
const loadEvent = function () {
    const rootElement = document.getElementById("root");
  
    const booksWithIds = books.cards.map(
      (card, index) =>
        (card = {
          id: index + 1,
          sub: card.sub,
          title: card.title,
          text: card.text,
          button: books.button,
        })
    );
  
    rootElement.insertAdjacentHTML("beforeend", headerComponent(books.logo));
    rootElement.insertAdjacentHTML("beforeend", cardContainerComponent(fillCards(booksWithIds, bookCardComponent)))
  };
  
  window.addEventListener("load", loadEvent);
  
