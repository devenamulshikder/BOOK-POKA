import { Star } from "lucide-react";
import { Link } from "react-router";
const Book = ({ singleBook }) => {
  return (
    <div>
      <Link to={`/bookDetails/${singleBook.bookId}`}>
        <div className="flex my-5 ">
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={singleBook?.image}
                alt="Shoes"
                className="rounded-xl lg:h-[500px]"
              />
            </figure>
            <div className="flex gap-10 ml-2 mt-4">
              {singleBook?.tags.map((tag,idx) => (
                <button key={idx} className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full work-sans">
                  {tag}
                </button>
              ))}
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl">{singleBook?.bookName}</h2>
              <p className="work-sans opacity-70 font-medium">
                By: {singleBook?.author}
              </p>
              <div className="divider"></div>
              <div className="flex justify-between text-xl work-sans">
                <p>{singleBook?.category}</p>
                <span className="flex items-center gap-2">
                  {singleBook?.rating}
                  <Star size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Book;
