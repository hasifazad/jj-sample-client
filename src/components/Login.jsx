import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    function getValue(e) {

        let { value, name } = e.target

        if (name == 'email') {
            setEmail(value)
        } else if (name == 'password') {
            setPassword(value)
        }
    }


    async function sendData() {

        let data = {
            email,
            password
        }




        try {
            let response = await axios.post('http://localhost:3000/user/login', data)
            console.log(response.data.token);

            localStorage.setItem('token', response.data.token)


            if (response.status === 200) {

                navigate('/')

            }

        } catch (error) {

            console.log(error.response);
            alert('login failed')
        }


    }


    return (
        <div className="pt-30 flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Welcome Back
                </h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            name="email"
                            onChange={getValue}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            onChange={getValue}
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={sendData}
                        className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Book Management System
                </p>
            </div>
        </div>
    )
}

export default Login