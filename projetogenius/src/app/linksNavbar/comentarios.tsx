import "./InfinitScroll.css";

export default function Comentarios() {
  return (
    <div className=" text-black py-20">
        <div className="text-white flex justify-center text-4xl mb-10"><h2>comentarios</h2></div>
        <div className="container  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className=" bg-blue-200  border to-black p-5 cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
                <div className="flex items-center gap-5">
                    <p>Nayara Emilly</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sint blanditiis magnam ab fugiat commodi ducimus aliquam quisquam consectetur tenetur. Officiis voluptas omnis ipsa placeat repellat animi quasi qui harum!</p>
                </div>
            </div>
            {/* Card 2 */}
            <div className="bg-blue-200 border to-black p-5 cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
                <div className="flex items-center gap-5">
                    <p>Nayara Emilly</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sint blanditiis magnam ab fugiat commodi ducimus aliquam quisquam consectetur tenetur. Officiis voluptas omnis ipsa placeat repellat animi quasi qui harum!</p>
                </div>
            </div>
            {/* Card 3 */}
            <div className="bg-blue-200 border to-black p-5 cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
                <div className="flex items-center gap-5">
                    <p>Nayara Emilly</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sint blanditiis magnam ab fugiat commodi ducimus aliquam quisquam consectetur tenetur. Officiis voluptas omnis ipsa placeat repellat animi quasi qui harum!</p>
                </div>
            </div>
            {/* Card 4 */}
            <div className="bg-blue-200 border to-black p-5 cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-5">
                <div className="flex items-center gap-5">
                    <p>Nayara Emilly</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sint blanditiis magnam ab fugiat commodi ducimus aliquam quisquam consectetur tenetur. Officiis voluptas omnis ipsa placeat repellat animi quasi qui harum!</p>
                </div>
            </div>
        </div>

    </div>
  );
}
