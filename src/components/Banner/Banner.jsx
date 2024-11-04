
const Banner = () => {
    return (
        <div className="m-4 h-[470px] md:h-[550px] lg:h-[600px] mb-24 md:mb-56 lg:mb-[300px] bg-purple-700 rounded-xl">
            <div className="max-w-5xl mx-auto flex flex-col gap-6 pt-28">
                <div className="flex flex-col items-center md:w-10/12 mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className="text-gray-200 md:w-3/4 mx-auto pb-2 mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="bg-white text-xl rounded-full px-4 md:px-8 py-2 md:py-4 text-purple-700 font-bold">Shop Now</button>
                </div>
                <div className="border rounded-2xl border-base-200 p-4 w-11/12 md:w-10/12 mx-auto">
                    <img src={`https://i.postimg.cc/VvFhnGnj/banner.jpg`} alt="" className="rounded-2xl w-full max-h-[500px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Banner;