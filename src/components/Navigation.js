import '../styles/nav.css'


const Navigator = () => {
    return (
        <div class="navbar" id="navbar">
            <div class="wrapper">
                <nav>
                    <div class="navTag">
                        <h3>Salsabila Apri Intania</h3>
                    </div>
                    <ul id="nav-items" class="nav-items">
                        <li><a href="/">HOME</a></li>
                        <li><a href="#profiledesc">PROFIL</a></li>
                        <li><a href="#jadwaldesc">JADWAL KULIAH</a></li>
                        <li><a href="#act_desc">AKTIVITAS</a></li>
                        <li><a href="#porto-desc">PORTOFOLIO</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigator;