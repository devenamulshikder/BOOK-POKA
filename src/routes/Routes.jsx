import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../components/bookDetails/BookDetails";
import ReadList from "../pages/readList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/readList",
        Component: ReadList,
      },
    ],
  },
]);
