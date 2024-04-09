import React, {useId} from 'react'

const Input = React.forwardRef(
    function Input({
        label, type ="text", className="", ...props
    } , ref){
        const id = useId();
        return(

            

            <div className='w-full'>
                {label &&(
                    <label htmlFor={id}
                    className='inline-block mb-1 pl-1'>
                        {label}
                    </label>
                )}
                <input 
                  className={` ${className} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  type={type}
                ref={ref}
                {...props}
                id={id}
                />
                
            </div>
        )
    }
)



export default Input