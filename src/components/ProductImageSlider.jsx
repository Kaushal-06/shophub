import { useEffect, useState } from "react"

const ProductImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // change image every 2 seconds (200ms)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
        },2000)

        return () => clearInterval(intervalId)

    },[images.length])

    return(
         <div className="flex items-center justify-center w-full mt-2">
          <img
            src={images[currentIndex]}
            // alt={prd.title}
            className="w-auto h-auto rounded-t-xl transition-opacity duration-500"
          />
        </div>
    )
}

export default ProductImageSlider;