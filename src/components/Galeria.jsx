import imgProduct1 from "../assets/image-product-1.jpg"

import imgProductSmall1 from "../assets/image-product-1-thumbnail.jpg"
import imgProductSmall2 from "../assets/image-product-2-thumbnail.jpg"
import imgProductSmall3 from "../assets/image-product-3-thumbnail.jpg"
import imgProductSmall4 from "../assets/image-product-4-thumbnail.jpg"

const Galeria = () => {

    return (
        <section className="grid grid-cols-4 gap-4 " >
            <div className=" col-span-4">
                <img src={imgProduct1} alt="" />

            </div>

            <img src={imgProductSmall1} alt="" />
            <img src={imgProductSmall2} alt="" />
            <img src={imgProductSmall3} alt="" />
            <img src={imgProductSmall4} alt="" />





        </section>


    )
}


export default Galeria