import Book from "../book/Book";

const Books = ({ booksData }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Books</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {booksData.map((singleBook, idx) => (
          <Book key={idx} singleBook={singleBook} />
        ))}
      </div>
    </div>
  );
};

export default Books;
