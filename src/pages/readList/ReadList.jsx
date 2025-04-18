import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utilities/addToDB";
import {  BookOpen, MapPinned, User } from "lucide-react";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, [data]);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-5xl text-center bg-gray-200 p-4 font-bold my-15">
        Books
      </h1>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List Books</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 mt-5">
            {readList.map((read) => (
         <div
         key={read.bookId}
         className="flex flex-col items-start gap-5 lg:gap-16 lg:flex-row border rounded-xl p-5 h-fit shadow-md mb-4 lg:mb-8"
       >
         <div className="px-5 lg:px-10 py-3 lg:py-10 bg-[#F3F3F3]">
           <img className="w-[150px] h-[200px]" src={read.image} />
         </div>
         <div>
           <h1 className="text-2xl lg:text-3xl font-bold my-3 lg:my-5">
             {read.bookName}
           </h1>
           <p className="font-semibold text-sm lg:text-lg work-sans opacity-80">
             By: {read.author}
           </p>

           {/* tag */}
           <div className="flex flex-col lg:flex-row gap-5 items-center mt-4">
             <div className="text-lg font-bold work-sans">Tag</div>
             <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
               #{read.tags[0]}
             </div>
             <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
               #{read.tags[1]}
             </div>
             <div className="flex gap-2 items-center work-sans font-medium opacity-80    ">
               <div>
               <MapPinned />
               </div>
               <div>Year of Publishing: {read.yearOfPublishing}</div>
             </div>
           </div>

           {/* page, and publisher */}

           <div className="flex  gap-3 items-center mt-4 work-sans font-medium opacity-80">
             <div>
             <User/>
             </div>
             <div>Publisher: {read.publisher}</div>
             <div>
             <BookOpen />
             </div>
             <div>Page: {read.totalPages}</div>
           </div>
           <div className="divider"></div>
           <div className="flex flex-col lg:flex-row gap-4">
             <div>
               <Link className="bg-blue-100 text-blue-500 rounded-full px-4 work-sans">
                 Category: {read.category}
               </Link>
             </div>
             <div>
               <Link className="bg-orange-100 rounded-full px-4 work-sans text-orange-400">
                 Ratings: {read.rating}
               </Link>
             </div>
             <div>
               <Link
                 to={`/bookDetails/${read.bookId}`}
                 className="bg-[#23BE0A] rounded-full px-4 py-2 text-white work-sans"
               >
                 View Details
               </Link>
             </div>
           </div>
         </div>
       </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>)
            (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendo's mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
