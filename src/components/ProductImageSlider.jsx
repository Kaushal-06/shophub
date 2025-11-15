import { useEffect, useState } from "react"

const ProductImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // change image every 3 seconds (300ms)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
        },3000)

        return () => clearInterval(intervalId)

    },[images.length])

    return(
         <div className="flex items-center justify-center w-full">
          <img
            src={images[currentIndex]}
            // alt={prd.title}
            className="w-full aspect-square object-cover rounded-t-xl transition-opacity duration-500"
          />
        </div>
    )
}

export default ProductImageSlider;