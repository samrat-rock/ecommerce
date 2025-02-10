function CartModel() {
    const cartItems = true;

    return (
        <div className={`w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 ${poppins.variable} font-poppins `}>
            {!cartItems ? (
                <div className='text-gray-500'>Cart is Empty</div>
            ) : (
                <div className='flex gap-4'>
                    <Image 
                        src="https://images.pexels.com/photos/28184434/pexels-photo-28184434/free-photo-of-a-close-up-of-a-blue-ocean-with-waves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                        alt='' 
                        width={72} 
                        height={96} 
                        className='object-cover rounded-md'
                    />
                    <div className='flex flex-col justify-between w-full'>
                        {/* Top */}
                        <div className=''></div>
                        {/* Title */}
                        <div className=''>
                            <h3 className='font-semibold text-lg'>Product Name</h3>
                            <div className='text-gray-600'>$49</div>
                        </div>
                        {/* Description */}
                        <div className='text-green-600 text-sm'>
                            Available
                        </div>
                        {/* Bottom */}
                        <div className='text-gray-700 font-medium'>
                            <span>Qty. 2</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartModel;