import React, { useContext } from "react";
import { Songs } from "../Context";


export default function DetailSong() {
    const { song } = useContext(Songs)
    return (
        <div className="col-span-1 p-3 ">
            <div className="p-3">
                <h2 className="text-cyan-500 font-bold">Now Playing</h2>
                <h1 className="text-zinc-400 text-2xl">{song.name}</h1>
            </div>
            <div className="w-[200px] m-auto mt-10">
                <img className="w-full rounded-[4px] ms:w-[16px] " src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-10">
                <span className="text-xl text-white">Singer : {song.author}</span>
            </div>
        </div>
    )
}