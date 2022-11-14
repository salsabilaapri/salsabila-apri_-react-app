import { Image } from "react-bootstrap"
import "../styles/portofolio.css"
import img1 from "../img/bees.jpg"
import img2 from "../img/fls2n.jpg"
import img3 from "../img/ytb.png"

const Portofolio = () => {
    return (
        <div>
            <div class="porto-container">
                <div class="wrapper1">
                    <div class="porto-content">
                        <div class="content-title">
                            <h1 id="porto-desc">PORTOFOLIO</h1>
                            <br></br>
                        </div>
                    </div>
                    <div className="portos">
                        <div className="porto-title" align="center">
                            <br></br>
                            <div className="img-desc1">
                                <Image src={img1}></Image>
                            </div>
                            <div class="ytb-content">
                                <Image src={img3}></Image>
                                <a href="https://www.youtube.com/channel/UCdg41Q6A5q4wNT7STfzvZZg">Click Here for Other Portofolio</a>
                            </div>
                            <div className="img-desc2">
                                <Image src={img2}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Portofolio;