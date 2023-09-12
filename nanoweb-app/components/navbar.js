import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"

export default function Navbar() {
    return (
        <div className="drawer z-40">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-secondary">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div> 
            <div className="flex-1 px-2 mx-2 justify-end lg:justify-start">
                <Link href="/"><Image 
                    src="/nanoweb.png"
                    width={200}
                    height={100}
                    alt='nanoweb logo'
                /></Link>
            </div>
            <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal space-x-1">
                {/* Navbar menu content here */}
                <li><Link href="/" className="text-black hover:text-primary">Tentang</Link></li>
                <li><Link href="/" className="text-black hover:text-primary">Layanan</Link></li>
                <li><Link href="/hubungi" className="text-black hover:text-primary">Hubungi</Link></li>
                </ul>
            </div>
            </div>
            {/* Page content here */}
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-primary">
            {/* Sidebar content here */}
            <li><Link href="/" className="hover:bg-neutral"><i><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></i>Tentang</Link></li>
            <li><Link href="/" className="hover:bg-neutral"><i><FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon></i>Layanan</Link></li>
            <li><Link href="/hubungi" className="hover:bg-neutral"><i><FontAwesomeIcon icon={faPhone} /></i>Hubungi</Link></li>
            </ul>
            
        </div>
        </div>
    )
}
