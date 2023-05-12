import React from 'react'

export default function About() {
    return <>
        <h3 className=" mt-5 pt-5 text-xl font-semibold text-heading text-center md:text-2xl"> I would like to hear from you !</h3>
        <section className="mt-3 md:mt-5 d-flex align-items-center justify-content-center   text-center ">
            <form className="mt-12 md:mt-16" action="mailto:Mahmoudalsarag974@gmail.com">
                <section>
                    <section className="mt-5 d-flex justify-center">
                        <label className>Name:</label>
                        <input className="ms-1  form-control text-black rounded-lg ml-4 pl-2 w-64 col-span-2" type="text" />
                    </section>
                    <section className="mt-5 d-flex justify-center">
                        <label className>Email:</label>
                        <input className="ms-1 form-control text-black rounded-lg ml-4 pl-2 w-64" type="email" />
                    </section>
                    <section className="mt-5 d-flex justify-center">
                        <label className="block">Message:</label>
                        <textarea className="ms-1 form-control text-black rounded-lg ml-2 pl-2 w-64 h-60" rows={10} cols={40} defaultValue={""} />
                    </section>
                    <section className=" d-flex justify-center">
                        <input className="btn btn-primary mb-3 m-auto p-5 cursor-pointer w-64 bg-white  mt-5 rounded-full py-2 text-black relative left-10 hover:bg-heading transition ease-out duration-300" type="submit" />
                    </section>
                </section>
            </form>
        </section>



    </>
}
