import { useLoaderData } from "react-router";
import Banner from "../../components/banner/Banner";
import Books from "../../components/books/Books";


const Home = () => {
    const booksData = useLoaderData()
    
    return (
        <div className="max-w-7xl mx-auto">
            <Banner/>
            <Books booksData={booksData}/>
        </div>
    );
};

export default Home;