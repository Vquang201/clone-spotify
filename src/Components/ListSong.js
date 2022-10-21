import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import '../App.css';

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        setIdSong(song.id)
        // setTimeout(() => {
        //     song.scrollIntoView({
        //       behavior: 'smooth',
        //       block: 'nearest'
        //     })
        //   }, 200)
    }, [song])

    return (
        <div className="col-span-2 overflow-y-scroll hidden lg:block">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i class="fa fa-download" aria-hidden="true"></i></th>
                    </tr>
                </thead>
                <tbody className="bg-slate-800 text-gray-400">
                    {DataSongs.map((song, index) => (
                        <tr key={index}
                            className={`h-12 hover:bg-gray-300 hover:text-gray-800 hover:cursor-pointer class-hidden 
                            ${idSong === song.id ? 'text-cyan-400' : ''}`} onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{song.id + 1}</td>
                            <td className="text-center">{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}