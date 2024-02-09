import React, { useState } from 'react';
import { server } from '../utilis/constant';
import axios from 'axios';
import toast from 'react-hot-toast';

const Home = () => {
    const [longUrl, setlongUrl] = useState("");
    const [shortCode,setshortCode] = useState("");
    const [shortendUrl,setShortendUrl] = useState("");


    const handleShorten = async () => {
        try {
            const  data  = await axios.post(`${server}/url/shorten`, {
                longUrl
            },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                
                //console.log(data.data.shortCode);

                setshortCode(data.data.shortCode);
                setShortendUrl(`${server}/url/${data.data.shortCode}`);

        } catch (error) {
            toast(error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">URL Shortener</h1>
            <input
                type="url"
                className="border p-2 mb-2 w-full"
                placeholder="Enter the long URL"
                value={longUrl}
                onChange={(e) => setlongUrl(e.target.value)}
            />
            <button
                onClick={handleShorten}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Shorten URL
            </button>
            {shortendUrl && (
                <div className="mt-4">
                    <p className="text-lg font-semibold">Shortend URL:</p>
                    <a
                        href={shortendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 break-all"
                    >
                        {shortendUrl}
                    </a>
                    <h1>Shortocode : {shortCode}</h1>
                </div>
            )}


        </div>
    )
}

export default Home;