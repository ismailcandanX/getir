
export default function categoryCall( {categoryCall: {id, title, image}} ) {
  return (
    <a href="#" className="flex flex-col group gap-y-2 text-center items-center p-2 hover:bg-purple-100" >
      <img src={image} className="w-12 h-12 m-2 border border-gray-200 rounded-lg" />
      <span className=" text-sm text-gray-700 font-semibold  group-hover:text-brand-color ">{title}</span>
    </a>
  )
}
