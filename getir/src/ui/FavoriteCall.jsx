import { FiPlus } from "react-icons/fi"
export default function FavoriteCall({ favoritesApi: { id, image, price, title, size } }) {
  return (
    <div className="container" >
      <div className="bg-white text-center items-center flex flex-col relative p-3 ">

        <picture className="relative block">
          <button className="w-8 h-8 absolute flex right-2 bg-white border items-center justify-center rounded-lg text-brand-color shadow-md" >
            <FiPlus className="size={10} " />
          </button>
          <img src={image} alt={title} className="w-[120px] h-[120px] p-3" />

        </picture>

        <span className=" font-sans font-semibold text-brand-color text-opacity-80 leading-4 text-sm mb-2">{price}</span>
        <span className="font-semibold text-sm mb-1">{title}</span>
        <span className="text-sm text-brand-color text-opacity-70">{size}</span>
      </div>
    </div>
  )
}
