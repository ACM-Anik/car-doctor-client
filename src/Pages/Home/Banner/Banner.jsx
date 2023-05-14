import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
import img5 from '../../../assets/images/banner/3.jpg'
import img6 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl object-cover" />
                <div className="absolute flex items-center h-full left-0 top-0 rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='md:space-x-4 space-y-4 lg:space-y-0'>
                            <button className='btn  border-0 bg-[#FF3811] hover:bg-[#d12907]'>Discover More</button>
                            <button className='btn  btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#ffffff33] border-0 hover:bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;