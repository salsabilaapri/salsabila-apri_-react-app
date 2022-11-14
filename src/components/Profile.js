import { Image } from "react-bootstrap";
import img2 from "../img/pic2.JPG"
import img4 from "../img/view.jpg"
import '../styles/profile.css'

const Profile = () => {
    return (
        <div id="profilnavigation">
            <div class="header-image-container">
                <Image src={img4} alt=""></Image>
                <div class="header-image-desc">
                    <Image src={img2} alt=""></Image>
                </div>
            </div>
            <div class="content-container" id="profile-d1">
                <div class="wrapper1">
                    <div class="main-content">
                        <div class="content-title" >
                            <h1 id="profiledesc">SALSABILA APRI INTANIA</h1>
                        </div>
                        <div class="profiles">
                            <div class="profile">
                                <div class="profile-desc1">
                                    <h2>Hi Perkenalkan Saya Salsabila Apri Intania</h2>
                                    <p>
                                        Gotong Royong 10 April 2003, 19 Tahun, Perempuan,
                                        Asal Lampung, Alamat Rumah Lingkungan Iv Panggungan Rt02/Rw04 Lampung Tengah Gunung Sugih, Anak Kedua Dari 3 Bersaudara, Anak Dari Pak Bambang Dan Ibu Nurlayla,Beragama Islam, No Hp 0895609629088 Salsabilaapriii12@gmail.Com, Hobi Nyanyi Terus Jalan-Jalan Sama Jajan Hehehe, Bb Terakhir 50kg Tb Terakhir 166cm.
                                    </p>
                                </div>
                            </div>
                            <div class="profile" id="profile-d2">
                                <div class="profile-desc2">
                                    <table border={1} class="profile-border">
                                        <thead class="profile-b1">
                                            <tr>
                                                <th><h3>PENDIDIKAN</h3></th>
                                                <th><h3>RIWAYAT ORGANISASI</h3></th>
                                            </tr>
                                        </thead>
                                        <tbody class="profile-b2">
                                            <tr>
                                                <td>
                                                    <ul>
                                                        <li>2009-2015 : SDN 02 GUNUNG SUGIH PASAR</li>
                                                        <li>2016-2018 : SMP NEGERI 1 GUNUNG SUGIH</li>
                                                        <li>2019-2021 : MAN 1 LAMPUNG TENGAH</li>
                                                        <li>2021-SEKARANG : INSTITUT TEKNOLOGI PLN</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <ul>
                                                        <li>2019-2020: KETUA VOKAL DIORGANISASI KESENIAN DI MAN 1 LAMPUNG TENGAH</li>
                                                        <li id="jadwaldesc">2020: ANGGOTA SATGAS ANTI NARKOBA MAN 1 LAMPUNG TENGAH</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;