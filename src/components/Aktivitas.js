import { Image } from "react-bootstrap";
import img1 from "../img/karisma.jpg"
import img2 from "../img/donor.jpg"
import img3 from "../img/gemas.jpg"
import "../styles/aktivitas.css"

const Aktivitas = () => {
    return (
        <div>
            <div class="act-container" id="activitas_desc">
                <div class="wrapper1">
                    <div class="act-content" >
                        <div class="content-title" >
                            <h1>AKTIVITAS</h1>
                        </div>
                        <div class="activities">
                            <div class="activity">
                                <div class="activity-desc2">
                                    <h3>KEGIATAN KARISMA 2021</h3>
                                </div>
                                <Image src={img1} alt=""></Image>
                            </div>
                            <div class="activity">
                                <Image src={img2} alt=""></Image>
                                <div class="activity-desc1">
                                    <h3>KEGIATAN PANITIA DONOR DARAH 2 AKSOS DIVISI PDD</h3>
                                </div>
                            </div>
                            <div class="activity">
                                <div class="activity-desc2">
                                    <h3>PARADE BUDAYA KARISMA KAIZEN 2022 PERWAKILAN HIMALA</h3>
                                </div>
                                <Image src={img3} alt=""></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Aktivitas;