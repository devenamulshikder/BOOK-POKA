import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../components/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        element: <Home />,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        element:<BookDetails/>
      },
    ],
  },
]);
