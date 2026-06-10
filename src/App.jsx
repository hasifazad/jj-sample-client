import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/updateBook";
import Navbar from "./components/Navbar";
import React from "react";
import Login from "./components/Login";



function Test({ num, children }) {
  console.log(num);
  console.log(children);


  return (
    <>
      <h1>TEST {num}</h1>
      {children}
    </>
  )
}

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
          <Route path={"/login"} element={<Login />} />



        </Routes>

      </BrowserRouter>

    </>
  )

}

