import Image, { StaticImageData } from "next/image"

import React from "react"
import style from '../Conscientizar/Conscientizar.module.css'

interface Props {
    children: React.ReactNode
    titulo: string
    img: StaticImageData
}

const Conscientizar = ({ titulo, children, img}: Props) => {
    return(
        <>
        <section className={style.sectionContainer}>
            <div>
                <Image src={img} width={600} alt="plasticos e lixos na agua" priority={true} className={style.imgBanner}/>
            </div>
            <div>
                <h1 className={style.title}>{titulo}</h1>
                <p className={style.paragraph}>{children}</p>
             </div>
        </section>
        </>
    )
}

export default Conscientizar