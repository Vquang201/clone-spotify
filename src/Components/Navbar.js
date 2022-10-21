import { useContext, useEffect, useState } from "react"
import { Songs } from "../Context";
import DataSongs from '../data/songs.json'
import '../App.css';

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [valueInput, setValueInput] = useState('')
    const { song } = useContext(Songs)
    const handleSearch = () => {
        if (showSearch) {
            setShowSearch(false)
        }
        else {
            setShowSearch(true)
        }
    }
    const filterInput = (keySearch) => {
        const searchTerm = keySearch.toLowerCase().trim()
        // console.log(searchTerm)
        DataSongs.map(data => {
            if (data.name.toLowerCase().includes(searchTerm)) {
                // data.classList.remove('hidden')
            } else {
                // data.classList.add('hidden')     
            }
        })
    }

    return (
        <div className='bg-slate-900 text-white text-center leading-[6rem] text-3xl relative'>
            <i className='fa fa-spotify mr-4'></i>
            Spotify
            {/* <div className='text-xl absolute right-0 top-8 mr-[50px]'>
                <i class="fa fa-search text-white" onClick={handleSearch} aria-hidden="true"></i>
                <div className="text-[12px] absolute right-0 top-1 mr-[30px] ">
                    <input onChange={e => setValueInput(e.target.value)} className={` select-none text-black pl-3 rounded-[3px] ${showSearch ? 'visible' : 'hidden'}`} placeholder=" Nhập Tên Bài Hát" />
                    {filterInput(valueInput)}
                </div>
            </div> */}
        </div>
    )
}