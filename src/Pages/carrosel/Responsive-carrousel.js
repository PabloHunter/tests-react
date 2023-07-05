import React from "react";
import { Carousel } from "react-responsive-carousel";
import '../../App.css'

const ResponsiveCarrosel = () => {
    return (
        <>
        <div>
        <Carousel 
        className="imageGato" 
        autoPlay={true} 
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        width={'75%'}
        >
            {/* <div className="imageGato"> */}
            <div className="container">
                <img className="gato" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800" alt="Imagem Qualquer"></img>
                {/* <p className="texto">LOrem Ipsum</p> */}
            </div>
            <div>
                <img className="gato" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800"alt="Imagem Qualquer"></img>
                {/* <p className="texto">LOrem Ipsum</p> */}
            </div>
            <div>
                <img className="gato" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800" alt="Imagem Qualquer"></img>
                {/* <p className="texto">LOrem Ipsum</p> */}
            </div>
            <div>
                <img className="gato" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800" alt="Imagem Qualquer"></img>
                {/* <p className="texto">LOrem Ipsum</p> */}
            </div>
            <div>
                <img className="gato" src="https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&resize=1200,800" alt="Imagem Qualquer"></img>
                {/* <p className="texto">LOrem Ipsum</p> */}
            </div>
            {/* </div> */}
        </Carousel>
        </div>
        </>
    )
} 

export default ResponsiveCarrosel