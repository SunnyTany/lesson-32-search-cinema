const HEAD_STYLE = `
  * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

  html {
  font-size: 16px;
  overflow-y: scroll;
  }

  body {
  font-family: Arial, Helvetica, sans-serif;
  }

  .container {
  max-width: 77rem;
  margin: 0 auto;
  padding: 1rem;
  }

  .title {
  margin-bottom: 2rem;

  font-size: 2.4rem;
  }

  .search {
  margin-bottom: 2rem;
  }
  .search__group--input {
  margin-bottom: 0.4375rem;
  }
  .search__group--checkbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -ms-flex-align: center;

  gap: 0.3125rem;
  }
  .search__label-input {
  display: block;

  margin-bottom: 0.5rem;
  }
  .search__input {
  display: block;

  width: 100%;
  max-width: 25rem;
  margin-bottom: 0.625rem;
  padding: 0.625rem 0.9375rem;

  border: 0.0625rem solid lighsteelblue;
  border-radius: 0.25rem;
  }
  .search__label-checkbox {
  font-size: 0.8rem;
  user-select: none;
  padding: 0.8rem 0.3rem;  }
  .search__error-search {
    color: rgb(80, 17, 17);
    font-size: 2rem;
    border: 0.0625rem solid rgb(80, 17, 17);
    text-align: center;
    padding: 3rem;
  }

  .movies {
  display: grid;

  margin-bottom: 3rem;

  gap: 1.2rem;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));
  }
  .movies__movie {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
      flex-direction: column;
  }
  .movies__image {
  width: 100%;
  height: 20rem;
  margin-bottom: 1rem;

  border-radius: 0.5rem;

  -o-object-fit: cover;   
  object-fit: cover;
  }
  .movies__info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
      flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  }
  .movies__title {
  margin-bottom: 1.5rem;

  color: #0d235e;
  }
  .movies__year {
  font-size: 1.4rem;
  }
`;

export default HEAD_STYLE;