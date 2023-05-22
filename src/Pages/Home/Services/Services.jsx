import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://car-doctor-server-two-lake.vercel.app/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [services, asc, search]);

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value);
    }

    return (
        <div className="my-6">
            <div className="text-center space-y-3 my-5">
                <h3 className='text-3xl font-bold text-orange-600'>Our Services</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="font-semibold w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
            </div>

            <div className="flex justify-between container mx-auto my-6">
                <button className="btn border-0 bg-[#FF3811] hover:bg-[#d12907]" onClick={() => setAsc(!asc)}>{asc ? 'Price High To Low' : 'Low To High'}</button>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;