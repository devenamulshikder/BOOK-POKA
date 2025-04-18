import { useLoaderData, useParams } from "react-router";
import { addToStoredLS } from "../../utilities/addToDB";
import { addToStoredWishListLS } from "../../utilities/addToWishListDB";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookIds = parseInt(id);
  const singleBook = data.find((book) => book.bookId === bookIds);
  const {
    bookName,
    author,
    bookId,
    image,
    totalPages,
    tags,
    category,
    publisher,
    rating,
    review,
    yearOfPublishing,
  } = singleBook;

  const handleReadList = (id) => {
    addToStoredLS(id);
  };

  const handeWishList = (id) => {
    addToStoredWishListLS(id);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex lg:flex-row flex-col lg:gap-20 mt-4 lg:mt-16 p-4 lg:p-0">
        <div className=" flex flex-1 justify-center items-center bg-base-200 p-10 rounded-xl">
          <img className="lg:w-7/12" src={image} alt="" />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="lg:text-3xl font-semibold">{bookName}</h1>
          <p className="work-sans">By: {author}</p>
          <hr />
          <p className="work-sans">{category}</p>
          <hr />
          <h2 className="work-sans">
            <span className="text-lg font-bold">Review:</span>
            {review}
          </h2>
          <div className="flex gap-5 items-center">
            <div className="text-lg font-bold work-sans">Tag</div>
            <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
              #{tags[0]}
            </div>
            <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
              #{tags[1]}
            </div>
          </div>
          <hr />
          <div className="flex gap-10 work-sans">
            <div className="opacity-80">
              <div>Number of Pages:</div>
              <div>Publisher:</div>
              <div>Year of Publishing:</div>
              <div>Rating:</div>
            </div>
            <div className=" font-semibold">
              <div>{totalPages}</div>
              <div>{publisher}</div>
              <div>{yearOfPublishing}</div>
              <div>{rating}</div>
            </div>
          </div>
          <div className="flex gap-6 work-sans text-lg">
            <button onClick={() => handleReadList(bookId)} className="btn">
              Mark as Read
            </button>
            <button
              onClick={() => handeWishList(bookId)}
              className="btn bg-[#59C6D2] text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
