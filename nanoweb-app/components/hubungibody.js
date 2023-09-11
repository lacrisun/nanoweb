
export default function HubungiBody() {

    return (
        <div className="hero min-h-screen bg-neutral">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-primary">
                    <form action="mailto:divadevanidee@gmail.com" method="post" encType="text/plain" className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nama Lengkap</span>
                            </label>
                            <input type="text" name="Nama " placeholder="contoh : 'John Doe' " className="bg-secondary placeholder-slate-400 text-slate-950 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="Email " placeholder="contoh@lembaga.com" className="bg-secondary placeholder-slate-400 text-slate-950 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subjek</span>
                            </label> 
                            <input type="text" name="Subjek " placeholder=" Lorem ipsum dolores et ..." className="bg-secondary placeholder-slate-400 text-slate-950 textarea textarea-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pesan</span>
                            </label> 
                            <input type="text" name="Pesan " placeholder=" Lorem ipsum dolores et ..." className="bg-secondary placeholder-slate-400 text-slate-950 textarea textarea-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <input type="submit" value='Kirim' className="btn btn-secondary"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}