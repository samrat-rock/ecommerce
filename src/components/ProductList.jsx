import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absloute object-contain rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500"
          />

          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className=" object-contain rounded-md z-10 hover:opacity-0 translate-opacity easy duration-500"
          />
        </div>
      </Link>
    </div>
  );
}

export default ProductList;
