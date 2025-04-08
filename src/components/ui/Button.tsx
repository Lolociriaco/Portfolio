

interface Props {
    children: string;
    className?: string;
}


export const Button = ( { children, className }:Props ) => {
  return (
    <button type="button" className={`${className} py-2 px-4 text-md font-medium  focus:outline-none rounded-lg border focus:z-10 focus:ring-4  focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 transition-all duration-200`}>
        { children }
    </button>
  )
}
