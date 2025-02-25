import { motion } from "framer-motion"

interface PropertyCardProps {
  title: string
  location: string
  price: number
  returns: number
  image: string
  status: string
}

const PropertyCard = ({ title, location, price, returns, image, status }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
          {status}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="mt-4 flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-500">Price</p>
            <p className="font-semibold text-gray-900">AED {price.toLocaleString()}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Returns</p>
            <p className="font-semibold text-[#00E5BE]">{returns}%</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard

