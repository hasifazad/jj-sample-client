import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateBook() {

    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState(0)

    let { id } = useParams()


    useEffect(() => {


        axios.get(`http://localhost:3000/book/${id}`).then((data) => {

            console.log(data.data.data);
            setTitle(data.data.data.title)
            setAuthor(data.data.data.author)
            setDescription(data.data.data.description)
            setPrice(data.data.data.price)


        }).catch((err) => {
            console.log(err);

        })

    }, [])


    function getValue(e) {

        let { value, name } = e.target

        if (name == 'title') {
            setTitle(value)
        } else if (name == 'author') {
            setAuthor(value)
        } else if (name == 'description') {
            setDescription(value)
        } else if (name == 'price') {
            setPrice(value)
        }

    }

    let navigate = useNavigate()
    function sendData() {

        let data = {
            title, author, description, price
        }

        console.log(data);

        axios.put(`http://localhost:3000/book/${id}`, data).then((data) => {

            console.log(data.data);
            navigate('/')


        }).catch((err) => {
            console.log(err);

        })


    }

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

            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        Update Book
                    </h1>

                    <div className="space-y-4">
                        <input
                            value={title}
                            type="text"
                            name="title"
                            placeholder="Book Title"
                            onChange={getValue}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            value={author}
                            type="text"
                            name="author"
                            placeholder="Author Name"
                            onChange={getValue}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            value={description}
                            name="description"
                            placeholder="Book Description"
                            onChange={getValue}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            value={price}
                            type="number"
                            name="price"
                            placeholder="Price"
                            onChange={getValue}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            onClick={sendData}
                            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                            Update Book
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

