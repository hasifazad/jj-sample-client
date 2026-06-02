import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BookDetails() {

    let { id } = useParams()

    let [book, setBook] = useState({})

    useEffect(() => {


        axios.get(`http://localhost:3000/book/${id}`).then((data) => {

            console.log(data.data.data);
            setBook(data.data.data)


        }).catch((err) => {
            console.log(err);

        })

    }, [])


    return (
        <>
            <Link to={'/'}>
                <button

                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
                >
                    <span>←</span>
                    <span>Back</span>
                </button>
            </Link>

            <div className="max-w-2xl mx-auto mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {book.title}
                </h1>

                <p className="text-gray-600 mb-4">
                    By <span className="font-medium">{book.author}</span>
                </p>

                <div className="border-t border-gray-100 pt-4">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Description
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        {book.description}
                    </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-gray-500">Price</span>
                    <span className="text-2xl font-bold text-blue-600">
                        ₹{book.price}
                    </span>
                </div>
            </div>
        </>
    )
}

export default BookDetails