import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/updateBook";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<BookList />} />
          <Route path={"/book/:id"} element={<BookDetails />} />
          <Route path={"/book/new"} element={<CreateBook />} />
          <Route path={"/book/update/:id"} element={<UpdateBook />} />



        </Routes>

      </BrowserRouter>

    </>
  )

}

