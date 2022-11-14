import '../styles/Jadwal.css'

const Jadwal = () => {
    return (
        <div class="jadwal-container" id="jadwalkuliah">
            <div class="wrapper1">
                <div class="jadwal-content">
                    <div class="content-title" >
                        <h1>JADWAL KULIAH</h1>
                        <br></br>
                    </div>
                </div>
                <div className="jadwals">
                    <div className="jadwal-title">
                        <br></br>
                        <div align='center'>
                            <table border="1" className='borderJadwal'>
                                <thead>
                                    <tr>
                                        <th>Nama Mata Kuliah</th>
                                        <th>Kelas</th>
                                        <th>Hari</th>
                                        <th>Jam</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="left">Sistem Multimedia</td>
                                        <td>A</td>
                                        <td>Senin</td>
                                        <td>08.00-09.10</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Basis Data</td>
                                        <td>A</td>
                                        <td>Senin</td>
                                        <td>10.00-12.30</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Struktur Data</td>
                                        <td>A</td>
                                        <td>Selasa</td>
                                        <td>08.00-09.10</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Pemrosesan Data Terdistribusi</td>
                                        <td>A</td>
                                        <td>Selasa</td>
                                        <td>10.00-11.40</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Komunikasi Data</td>
                                        <td>A</td>
                                        <td>Rabu</td>
                                        <td>08.00-09.10</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Teknik Digital</td>
                                        <td>A</td>
                                        <td>Rabu</td>
                                        <td>11.00 - 12.40</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Sistem Operasi</td>
                                        <td>A</td>
                                        <td>Rabu</td>
                                        <td>15.30-17.00</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Expert System</td>
                                        <td>D</td>
                                        <td>Kamis</td>
                                        <td>10.00-11.40</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Pemrograman Objek</td>
                                        <td>A</td>
                                        <td>Kamis</td>
                                        <td>13.00-14.40</td>
                                    </tr>
                                    <tr id="act_desc">
                                        <td align="left">Pemrograman Web</td>
                                        <td>A</td>
                                        <td>Jumat</td>
                                        <td>13.00-16.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jadwal;