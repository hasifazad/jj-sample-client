import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateBook() {

    let [title, setTitle] = useState('')
    let [author, setAuthor] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState(0)


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

        axios.post('http://localhost:3000/book', data).then((data) => {

            console.log(data.data);
            navigate('/')


        }).catch((err) => {
            console.log(err.response);

            if(err.response.status===401){
                alert("invalid token. Please Login again")

            }

        })


    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Create New Book
                </h1>

                <div className="space-y-4">
                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="title"
                        placeholder="Book Title"
                        onChange={getValue}
                    />

                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        name="author"
                        placeholder="Author Name"
                        onChange={getValue}
                    />

                    <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        name="description"
                        placeholder="Book Description"
                        rows={4}
                        onChange={getValue}
                    />

                    <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={getValue}
                    />

                    <button
                        onClick={sendData}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                        Create Book
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateBook