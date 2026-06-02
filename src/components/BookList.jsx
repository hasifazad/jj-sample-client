import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function BookList() {

    let [books, setBooks] = useState([])
    let [del, setDel] = useState(false)

    useEffect(() => {


        axios.get('http://localhost:3000/book').then((data) => {

            console.log(data.data.data);
            setBooks(data.data.data)


        }).catch((err) => {
            console.log(err);

        })

    }, [del])

    function deleteBook(id) {

        axios.delete(`http://localhost:3000/book/${id}`).then((data) => {

            console.log(data.data);
            setDel(!del)


        }).catch((err) => {
            console.log(err);

        })
    }

    if (books.length == 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                    📚
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    No Books Found
                </h2>

                <p className="text-gray-500 max-w-md mb-6">
                    It looks like there are no books available right now.
                    Start by adding your first book to the collection.
                </p>

                <Link to="/book/new">
                    <button className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        + Create First Book
                    </button>
                </Link>
            </div>
        )
    }


    return (
        <>
            <Link to="/book/new">
                <button className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg shadow-sm hover:bg-blue-600 hover:shadow-md transition-all duration-200 cursor-pointer">
                    + Create Book
                </button>
            </Link>
            {
                books.map((book, i) => {

                    return (

                        <div
                            key={i}
                            className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5"
                        >
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {book.title}
                                </h2>

                                <p className="text-gray-600">
                                    By <span className="font-medium">{book.author}</span>
                                </p>

                                <p className="text-lg font-bold text-blue-600">
                                    ₹{book.price}
                                </p>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <Link to={`/book/${book._id}`}>
                                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
                                        View
                                    </button>
                                </Link>

                                <Link to={`/book/update/${book._id}`}>
                                    <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                                        Update
                                    </button>
                                </Link>

                                <button
                                    onClick={() => deleteBook(book._id)}
                                    className="px-4 py-2 text-sm font-medium text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}