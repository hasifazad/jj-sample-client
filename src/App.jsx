import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import CreateBook from "./components/CreateBook";
import UpdateBook from "./components/updateBook";
import Navbar from "./components/Navbar";
import React, { createContext, useState } from "react";
import Login from "./components/Login";



export let UserContext = createContext()

export default function App() {


  let [userInfo, setUserInfo] = useState()


  return (
    <>


      <UserContext.Provider value={{ userInfo, setUserInfo }}>

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

      </UserContext.Provider>
    </>
  )

}

