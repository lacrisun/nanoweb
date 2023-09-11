import Image from "next/image"
import Link from "next/link"
export default function Body() {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/guycoding.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Desain dengan mudah.</h1>
                    <p className="mb-5">Kami hadir untuk membantu bisnis Anda dalam mencapai kesuksesan online. Hubungi kami dan mulailah perjalanan bisnis digital Anda.</p>
                    <button className="btn btn-primary">Hubungi Kami</button>
                </div>
            </div>
        </div>
    )
}