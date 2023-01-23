import Image from "next/image";


export default function author() {
    return (
        <div className="author flex py-5 ">
            <Image src={"/images/author.jpg"} alt="" width={40} height={30} className="rounded-full"></Image>

            <div className="flex flex-col justify-center px-4">
                <a href={"/"} className=" text-md font-bold text-gray-800 hover:text-gray-600">
                    Buffy Hridoy
                </a>
                <span className="text-sm text-gray-500">
                Lorem, ipsum dolor
                </span>
            </div>
        </div>
    );
}