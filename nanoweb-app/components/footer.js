import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
    <footer className="footer footer-center p-10 bg-secondary text-black">
    <aside>
        <Image
            src="/nanowebicon.png"
            width={100}
            height={100}
            alt="Nanoweb Logo" 
        />
        <p className="font-bold">
        NanoWeb Team <br/>Sebuah kelompok tugas demi menyelesaikan pendidikan di SMKN 4 Pekanbaru
        </p>
    </aside> 
    <nav>
        <div className="grid grid-flow-col gap-4">
        <a href="https://instagram.com/nanowebteam"><FontAwesomeIcon icon={faInstagram} size="2xl" /></a> 
        <a href="https://github.com/lacrisun"><FontAwesomeIcon icon={faGithub} size="2xl" /></a> 
        </div>
    </nav>
    </footer>
    )
}