import Image from "next/image";

function CartModel() {
  const cartItems = true;

  return (
    <div
      className={`w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20  font-poppins`}
    >
      {!cartItems ? (
        <div className="text-gray-500">Cart is Empty</div>
      ) : (
        <>
        <div className="flex flex-col gap-8">
            {/*Item */}
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          {/*top */}
          <div className="flex flex-col justify-between w-full">
           {/* Title */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold text-lg">Product Name</h3>
              <div className="text-gray-600 p-1 bg-gray-50 rounded-sm ">$49</div>
              
            </div>
            {/*DESC */}
            <div className="text-green-600 text-sm">Available</div>
           {/*BOTTTOM */}
            <div className="text-gray-700 flex justify-between text-sm ">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          {/*top */}
          <div className="flex flex-col justify-between w-full">
           {/* Title */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold text-lg">Product Name</h3>
              <div className="text-gray-600 p-1 bg-gray-50 rounded-sm ">$49</div>
              
            </div>
            {/*DESC */}
            <div className="text-green-600 text-sm">Available</div>
           {/*BOTTTOM */}
            <div className="text-gray-700 flex justify-between text-sm ">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-blue-500">Remove</span>
            </div>
          </div>
        </div>
        </div>
        {/*Bottom */}
        <div className="">
           <div className="flex items-center justify-between font-semibold">
            <span className="" >Subtotal</span>
            <span className="">$49</span>
            </div> 
            <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes claculated at checkout </p>
            <div className="flex justify-between text-sm">
             <button className="rounded-md y-3 px-4 ring-1 ring-gray-300">View Cart</button>
             <button className="rounded-md y-3 px-4 bg-black text-white ">Checkout</button>
            </div>
        </div>
        </>
      )}
    </div>
  );
}

export default CartModel;
