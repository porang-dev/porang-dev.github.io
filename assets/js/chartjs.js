const inflationDatasetStyles = {
    "Umum": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },
    "Makanan, Minuman, dan Tembakau": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Makanan": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Beras": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Cabai Rawit": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Telur Ayam Ras": { borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.1)' }
};

// Food Security Dataset Styles
const fsDatasetStyles = {
    "Medan": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Gunungsitoli": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Padangsidimpuan": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Pematangsiantar": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Sibolga": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },

    "Medan Amplas": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Medan Area": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Medan Barat": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Medan Baru": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Medan Belawan": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },
    "Medan Deli": { borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.1)' },
    "Medan Denai": { borderColor: 'rgb(0, 204, 102)', backgroundColor: 'rgba(0, 204, 102, 0.1)' },
    "Medan Helvetia": { borderColor: 'rgb(255, 51, 153)', backgroundColor: 'rgba(255, 51, 153, 0.1)' },
    "Medan Johor": { borderColor: 'rgb(102, 204, 255)', backgroundColor: 'rgba(102, 204, 255, 0.1)' },
    "Medan Kota": { borderColor: 'rgb(204, 153, 0)', backgroundColor: 'rgba(204, 153, 0, 0.1)' },
    "Medan Labuhan": { borderColor: 'rgb(0, 153, 204)', backgroundColor: 'rgba(0, 153, 204, 0.1)' },
    "Medan Maimun": { borderColor: 'rgb(255, 102, 0)', backgroundColor: 'rgba(255, 102, 0, 0.1)' },
    "Medan Marelan": { borderColor: 'rgb(102, 255, 178)', backgroundColor: 'rgba(102, 255, 178, 0.1)' },
    "Medan Perjuangan": { borderColor: 'rgb(178, 102, 255)', backgroundColor: 'rgba(178, 102, 255, 0.1)' },
    "Medan Petisah": { borderColor: 'rgb(255, 204, 204)', backgroundColor: 'rgba(255, 204, 204, 0.1)' },
    "Medan Polonia": { borderColor: 'rgb(0, 128, 255)', backgroundColor: 'rgba(0, 128, 255, 0.1)' },
    "Medan Selayang": { borderColor: 'rgb(255, 153, 204)', backgroundColor: 'rgba(255, 153, 204, 0.1)' },
    "Medan Sunggal": { borderColor: 'rgb(153, 255, 102)', backgroundColor: 'rgba(153, 255, 102, 0.1)' },
    "Medan Tembung": { borderColor: 'rgb(255, 102, 102)', backgroundColor: 'rgba(255, 102, 102, 0.1)' },
    "Medan Timur": { borderColor: 'rgb(102, 178, 255)', backgroundColor: 'rgba(102, 178, 255, 0.1)' },
    "Medan Tuntungan": { borderColor: 'rgb(34, 139, 34)', backgroundColor: 'rgba(34, 139, 34, 0.1)' },

    "Gunungsitoli Alo'Oa": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Gunungsitoli Barat": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Gunungsitoli Idanoi": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Gunungsitoli Selatan": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },
    "Gunungsitoli Utara": { borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.1)' },

    "Padangsidimpuan Angkola Julu": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Padangsidimpuan Batunadua": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Padangsidimpuan Hutaimbaru": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Padangsidimpuan Selatan": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Padangsidimpuan Tenggara": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },
    "Padangsidimpuan Utara": { borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.1)' },

    "Siantar Barat": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Siantar Marihat": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Siantar Marimbun": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Siantar Martoba": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Siantar Selatan": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },
    "Siantar Sitalasari": { borderColor: 'rgb(255, 159, 64)', backgroundColor: 'rgba(255, 159, 64, 0.1)' },
    "Siantar Timur": { borderColor: 'rgb(0, 204, 102)', backgroundColor: 'rgba(0, 204, 102, 0.1)' },
    "Siantar Utara": { borderColor: 'rgb(255, 51, 153)', backgroundColor: 'rgba(255, 51, 153, 0.1)' },

    "Sibolga Kota": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Sibolga Sambas": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Sibolga Selatan": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Sibolga Utara": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },

    "Harjosari I": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Sitirejo III": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Timbang Deli": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Amplas": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Harjosari II": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },

    "Sukaramai I": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Tegal Sari III": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Kota Matsum II": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Tegal Sari I": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Tegal Sari II": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },

    "Karang Berombak": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Sei Agul": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Pulo Berayan Kota": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Glugur Kota": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Kesawan": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },

    "Babura": { borderColor: 'rgb(255, 99, 132)', backgroundColor: 'rgba(255, 99, 132, 0.1)' },
    "Petisah Hulu": { borderColor: 'rgb(54, 162, 235)', backgroundColor: 'rgba(54, 162, 235, 0.1)' },
    "Merdeka": { borderColor: 'rgb(255, 205, 86)', backgroundColor: 'rgba(255, 205, 86, 0.1)' },
    "Titi Rante": { borderColor: 'rgb(75, 192, 192)', backgroundColor: 'rgba(75, 192, 192, 0.1)' },
    "Darat": { borderColor: 'rgb(153, 102, 255)', backgroundColor: 'rgba(153, 102, 255, 0.1)' },

    "Belawan II": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Belawan Bahagia": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Belawan Bahari": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Belawan I": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Belawan Sicanang": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Mabar": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Tanjung Mulya": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Titipapan": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Kota Bangun": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Mabar Hilir": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Tegal S Mandala I": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Tegal S Mandala III": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tegal S Mandala II": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Binjai": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Denai": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Helvetia": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Tanjung Gusta": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Sei Sikambing C Ii": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Cinta Damai": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Dwi Kora": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Kedai Durian": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Pangkalan Mansur": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Titi Kuning": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Suka Maju": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Gedung Johor": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Teladan Timur": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sudirejo 1": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Sitirejo I": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sudirejo II": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Kotamatsum III": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Martubung": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Besar": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tangkahan": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Pekan Labuhan": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sei Mati": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Aur": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Kampung Baru": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Hamdan": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sei Mati": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sukaraja": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Labuhan Deli": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Paya Pasir": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Rengas Pulau": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Tanah Enam Ratus": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Terjun": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Pahlawan": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sidorame Timur": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tegalrejo": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sei Kera Hilir I": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sei Kera Hulu": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Sei Putih Tengah": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sei Sikambing D": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Sei Putih Barat": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sei Putih Timur II": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sei Putih Timur I": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Anggrung": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Madras Hulu": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Polonia": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sari Rejo": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Suka Damai": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "P Bulan Selayang I": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Beringin": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tanjungsari": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sempakata": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "P Bulan Selayang II": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Simpang Tanjung": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Tanjung Rejo": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Babura Sunggal": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Lalang": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sunggal": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Bantan": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sidorejo": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Bandar Selamat": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Bantan Timur": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sidorejo Hilir": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Durian": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Glugur Darat II": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "P Berayan Darat I": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "P Berayan Darat II": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Glugur Darat I": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Namo Gajah": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Ladang Bambu": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Mangga": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Laucih": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Simalingkar B": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Sihare'O Ii Tabaloho": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Madolaoli": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Onowaembo": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Onozitoli Olora": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Bawodesolo": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Iraonolase": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Lololawa": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tarakhaini": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Nazalou Alo'Oa": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Nazalou Lolowua": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Orahili Tumori": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sihare'O Siwahili": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tumori": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Hilinakhe": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Lolomoyo Tuhemberua": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Tuhegeo I": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Bawodesolo": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Helefanikha": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Simanaere": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Hilimbawodesolo": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Mazingo Tabaloho": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Ononamolo I Lot": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Lolofaoso Tabaloho": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Lolomboli": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Ombolata Simenari": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Gawu-Gawu Bo'Uso": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Hilimbowo Olora": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Hiligodu Ulu": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Afia": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Lasara Sowu": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Batu Layan": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Joring Lombang": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Mompang": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Simatohir": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Joring Natobang": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Gunung Hasahatan": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Simirik": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Aek Najaji": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Bargottopong": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Aek Bayur": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Huta Padang": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Lubuk Raya": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Sabungan Sipabangun": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Singali": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Lembah Lubuk Manik": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Sitamiang Baru": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Losung": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Hanopan": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sidangkal": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Sitamiang": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Tarutung Baru": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Labuhan Labo": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Labuhan Rasoki": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sihitang": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Huta Koje": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Kayu Ombun": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Batang Ayumi Julu": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Bonan Dolok": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Losung Batu": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Panyanggar": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Dwikora": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Proklamasi": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Teladan": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Timbang Galung": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Banjar": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Parhorasan Nauli": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Pardamean": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Mekar Nauli": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sukaraja": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Baringin Pancur Nauli": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Tong Marimbun": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Naga Huta": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Naga Huta Timur": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Pematang Marihat": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Simarimbun": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Pondok Sayur": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Sumber Jaya": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Tanjung Tongah": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Naga Pitu": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Tanjung Pinggir": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Karo": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Simalungun": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Toba": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Kristen": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Martimbang": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Bah Kapul": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Bah Sorma": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Bukit Sofa": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Gurilla": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Setia Negara": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Pahlawan": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Pardomuan": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    // "Merdeka": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Kebun Sayur": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Asuhan": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Baru": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Melayu": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Sukadame": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Kahean": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Martoba": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" },

    "Kota Baringin": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Pancuran Gerobak": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Pasar Baru": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Pasar Belakang": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },

    "Pancuran Bambu": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Pancuran Dewa": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Pancuran Kerambil": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Pancuran Pinang": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },

    "Aek Habil": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Aek Manis": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Aek Muara Pinang": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Aek Parombunan": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },

    "Angin Nauli": { borderColor: "rgb(153, 102, 255)", backgroundColor: "rgba(153, 102, 255, 0.1)" },
    "Huta Barangan": { borderColor: "rgb(255, 99, 132)", backgroundColor: "rgba(255, 99, 132, 0.1)" },
    "Huta Tonga-Tonga": { borderColor: "rgb(54, 162, 235)", backgroundColor: "rgba(54, 162, 235, 0.1)" },
    "Sibolga Ilir": { borderColor: "rgb(255, 205, 86)", backgroundColor: "rgba(255, 205, 86, 0.1)" },
    "Simare-Mare": { borderColor: "rgb(75, 192, 192)", backgroundColor: "rgba(75, 192, 192, 0.1)" }
};

function makeDataset(label, data = [], styles = inflationDatasetStyles) {
    return { label, data, ...styles[label], tension: 0.4 };
}

// Data untuk berbagai kota dan tahun
const inflationDataByCityYear = {
    medan: {
        2022: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [97.97, 97.69, 98.38, 98.59, 99.24, 100.66, 100.9, 100.62, 101.6, 101.07, 100.9, 102.37]),
                makeDataset("Makanan, Minuman, dan Tembakau", [98.24, 97.23, 98.83, 98.41, 99.82, 103.94, 103.68, 101.78, 100.23, 98.19, 97.53, 102.1]),
                makeDataset("Makanan", [98.44, 97.21, 98.98, 98.26, 99.87, 104.64, 104.28, 102.01, 100.07, 97.61, 96.66, 101.97]),
                makeDataset("Beras", [97.99, 98.24, 99.38, 98.55, 98.55, 98.56, 98.56, 99.16, 101.48, 102.54, 102.68, 104.28]),
                makeDataset("Cabai Rawit", [124.58, 94.9, 87.67, 77.33, 79.57, 123.46, 169.61, 96.1, 100.56, 76.29, 66.72, 103.21]),
                makeDataset("Telur Ayam Ras", [109.3, 91.64, 87.58, 87.45, 97.82, 104.18, 102.75, 103.25, 105.24, 96.75, 101.12, 113.17])
            ]
        },
        2023: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [103.24, 102.9, 102.53, 102.23, 102.59, 102.95, 103.21, 103.16, 103.49, 103.46, 103.95, 104.55]),
                makeDataset("Makanan, Minuman, dan Tembakau", [104.72, 103.7, 102.24, 100.76, 101.88, 103.28, 103.55, 103.33, 103.76, 103.29, 104.71, 106.3]),
                makeDataset("Makanan", [104.81, 103.37, 101.57, 99.62, 100.85, 102.45, 102.72, 102.48, 102.97, 102.41, 103.99, 105.86]),
                makeDataset("Beras", [106.31, 109.1, 108.77, 110.02, 109.99, 109.97, 110.48, 112.85, 117.06, 119.21, 119.56, 122.78]),
                makeDataset("Cabai Rawit", [121.25, 91.97, 73.7, 55.89, 49.42, 54.46, 59.41, 80.31, 88.31, 103.13, 159.31, 122.55]),
                makeDataset("Telur Ayam Ras", [113.68, 108.68, 102.22, 104.66, 105.69, 111.17, 113.03, 113.74, 107.19, 104.15, 104.09, 107.7])
            ]
        },
        2024: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [105.09, 105.47, 106.24, 106.21, 106.84, 106.36, 105.68, 105.47, 105.29, 105.4, 105.92, 106.77]),
                makeDataset("Makanan, Minuman, dan Tembakau", [107.86, 109.38, 111.68, 110.63, 113.01, 111.3, 108.85, 107.81, 106.81, 107.38, 108.64, 110.9]),
                makeDataset("Makanan", [107.51, 109.26, 111.77, 110.53, 113.2, 111.13, 108.17, 106.81, 105.56, 106.22, 107.53, 110.17]),
                makeDataset("Beras", [123.62, 125.23, 125.29, 125.2, 124.62, 124.61, 124.92, 124.96, 124.98, 124.97, 124.61, 125.06]),
                makeDataset("Cabai Rawit", [98.55, 108.79, 124.13, 89.9, 81.8, 98.25, 102.18, 114.98, 116.26, 78.84, 64.41, 104.91]),
                makeDataset("Telur Ayam Ras", [105.19, 105.59, 114.78, 110.3, 111.97, 110.61, 110.18, 109.87, 110.61, 109.22, 110.23, 117.66])
            ]
        }
    },
    gunungsitoli: {
        2022: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [98.18, 98.01, 98.13, 98.4, 98.65, 100.8, 102.04, 100.65, 101.69, 100.62, 100.46, 102.36]),
                makeDataset("Makanan, Minuman, dan Tembakau", [99.29, 98.14, 98.41, 97.83, 98.17, 102.69, 104.05, 100.68, 101.36, 98.77, 98.02, 102.6]),
                makeDataset("Makanan", [99.38, 97.86, 98.17, 97.48, 97.87, 103.08, 104.66, 100.75, 101.54, 98.55, 97.68, 102.98]),
                makeDataset("Beras", [98.54, 98.43, 98.25, 98.13, 98.13, 98.13, 98.13, 98.68, 102.15, 102.65, 102.65, 106.16]),
                makeDataset("Cabai Rawit", [124.87, 95.24, 85.44, 76.11, 81.7, 122.95, 171.78, 108.74, 103.79, 72.79, 60.24, 96.34]),
                makeDataset("Telur Ayam Ras", [103.95, 90.8, 90.8, 90.8, 93.92, 103.95, 103.95, 103.95, 103.95, 103.95, 103.95, 105.93])
            ]
        },
        2023: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [104.0, 102.82, 102.02, 101.78, 102.3, 102.44, 103.72, 103.79, 103.99, 103.66, 104.1, 104.35]),
                makeDataset("Makanan, Minuman, dan Tembakau", [105.45, 103.64, 101.81, 100.77, 101.36, 101.2, 102.66, 102.55, 102.9, 102.2, 103.47, 104.42]),
                makeDataset("Makanan", [106.27, 103.31, 101.18, 99.82, 100.51, 100.46, 102.12, 101.95, 102.33, 101.52, 102.98, 104.08]),
                makeDataset("Beras", [114.93, 115.96, 113.21, 113.64, 113.24, 113.52, 113.68, 115.2, 119.19, 122.33, 122.9, 126.72]),
                makeDataset("Cabai Rawit", [113.32, 87.34, 71.34, 57.85, 49.96, 56.64, 67.43, 83.76, 93.65, 88.05, 133.44, 119.84]),
                makeDataset("Telur Ayam Ras", [110.74, 107.28, 107.28, 107.28, 105.59, 103.93, 103.93, 103.93, 103.93, 103.93, 103.93, 103.93])
            ]
        },
        2024: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [105.14, 105.61, 106.0, 105.78, 105.89, 106.0, 105.65, 106.11, 106.33, 106.04, 106.02, 107.58]),
                makeDataset("Makanan, Minuman, dan Tembakau", [105.74, 107.09, 107.76, 106.67, 106.76, 106.9, 105.37, 106.34, 106.12, 105.2, 105.0, 108.33]),
                makeDataset("Makanan", [105.59, 107.15, 107.82, 106.49, 106.6, 106.76, 104.98, 106.11, 105.86, 104.79, 104.5, 108.35]),
                makeDataset("Beras", [128.72, 131.38, 128.91, 128.54, 128.38, 128.63, 129.73, 130.14, 130.14, 129.44, 128.09, 127.71]),
                makeDataset("Cabai Rawit", [103.94, 111.32, 117.87, 95.57, 80.97, 93.19, 96.89, 99.67, 101.7, 71.32, 67.55, 96.23]),
                makeDataset("Telur Ayam Ras", [111.95, 107.06, 116.57, 115.01, 115.02, 116.47, 116.47, 117.22, 118.11, 109.76, 110.65, 120.11])
            ]
        }
    },
    padangsidimpuan: {
        2022: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [96.44, 96.98, 98.19, 98.58, 99.05, 101.09, 101.8, 101.24, 102.42, 101.45, 101.05, 101.72]),
                makeDataset("Makanan, Minuman, dan Tembakau", [95.33, 95.36, 98.11, 98.27, 99.17, 104.52, 105.91, 103.77, 102.24, 99.41, 98.16, 99.74]),
                makeDataset("Makanan", [95.35, 95.23, 98.31, 97.83, 98.95, 105.41, 107.15, 104.46, 102.35, 98.8, 97.16, 98.99]),
                makeDataset("Beras", [98.05, 98.55, 98.53, 98.37, 97.62, 97.59, 97.33, 97.67, 102.33, 104.15, 104.5, 105.3]),
                makeDataset("Cabai Rawit", [105.04, 87.78, 80.07, 73.2, 87.38, 116.0, 177.21, 122.63, 108.86, 85.7, 62.98, 93.14]),
                makeDataset("Telur Ayam Ras", [109.07, 86.13, 88.77, 88.5, 99.48, 107.18, 104.24, 104.2, 106.8, 96.97, 98.06, 110.6])
            ]
        },
        2023: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [102.89, 103.48, 103.17, 102.88, 103.14, 103.51, 104.16, 104.31, 104.95, 104.74, 105.02, 105.06]),
                makeDataset("Makanan, Minuman, dan Tembakau", [102.66, 104.01, 102.96, 101.13, 101.71, 102.96, 104.69, 104.58, 106.27, 105.72, 106.4, 106.27]),
                makeDataset("Makanan", [102.52, 104.0, 102.65, 100.23, 100.84, 101.72, 103.67, 103.51, 105.58, 104.88, 105.7, 105.53]),
                makeDataset("Beras", [108.77, 116.15, 116.3, 112.85, 112.88, 112.89, 112.64, 113.56, 122.41, 123.68, 123.13, 122.78]),
                makeDataset("Cabai Rawit", [102.8, 81.41, 70.94, 55.16, 46.82, 49.9, 70.96, 87.5, 87.09, 87.51, 129.17, 115.41]),
                makeDataset("Telur Ayam Ras", [111.01, 102.8, 99.88, 103.87, 106.46, 110.44, 110.81, 110.42, 104.59, 104.02, 100.12, 102.88])
            ]
        },
        2024: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [105.55, 106.37, 107.4, 107.75, 107.66, 107.78, 107.08, 106.87, 106.37, 106.7, 107.2, 107.64]),
                makeDataset("Makanan, Minuman, dan Tembakau", [107.53, 109.74, 112.08, 111.39, 112.04, 111.9, 109.61, 108.47, 106.93, 107.72, 108.9, 110.15]),
                makeDataset("Makanan", [107.02, 109.27, 112.2, 111.11, 111.71, 111.34, 108.3, 106.86, 104.92, 105.87, 107.2, 108.75]),
                makeDataset("Beras", [126.52, 129.36, 128.17, 127.79, 126.34, 126.08, 125.46, 126.44, 126.18, 125.11, 124.95, 125.57]),
                makeDataset("Cabai Rawit", [101.45, 126.65, 134.93, 108.77, 90.17, 95.87, 98.6, 105.24, 108.62, 77.95, 65.56, 90.01]),
                makeDataset("Telur Ayam Ras", [101.85, 103.16, 112.87, 108.58, 111.19, 108.37, 106.68, 105.69, 105.91, 104.59, 104.59, 110.14])
            ]
        }
    },
    pematangsiantar: {
        2022: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [97.86, 97.94, 98.63, 99.0, 99.6, 100.72, 100.81, 100.11, 101.25, 100.77, 100.82, 102.49]),
                makeDataset("Makanan, Minuman, dan Tembakau", [98.01, 97.4, 98.41, 98.95, 100.46, 103.56, 103.45, 101.1, 100.13, 98.05, 97.91, 102.58]),
                makeDataset("Makanan", [98.36, 97.4, 98.4, 98.92, 100.74, 104.37, 103.98, 101.12, 99.85, 97.21, 97.0, 102.64]),
                makeDataset("Beras", [99.07, 97.87, 98.28, 98.39, 98.05, 98.79, 99.95, 100.0, 101.04, 101.44, 101.51, 105.62]),
                makeDataset("Cabai Rawit", [126.31, 100.59, 80.31, 63.26, 77.45, 127.76, 166.79, 104.78, 95.79, 75.42, 62.53, 119.0]),
                makeDataset("Telur Ayam Ras", [101.96, 94.62, 94.02, 95.32, 98.8, 102.12, 99.84, 100.16, 104.84, 100.71, 100.49, 107.12])
            ]
        },
        2023: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [103.48, 103.39, 103.16, 102.89, 103.41, 103.95, 104.15, 104.09, 104.28, 104.1, 104.49, 105.18]),
                makeDataset("Makanan, Minuman, dan Tembakau", [104.77, 103.67, 102.82, 101.61, 102.92, 104.57, 104.83, 103.64, 104.1, 103.44, 104.34, 105.52]),
                makeDataset("Makanan", [105.21, 103.63, 102.23, 100.57, 101.93, 103.94, 104.16, 102.71, 103.23, 102.37, 103.47, 104.87]),
                makeDataset("Beras", [109.2, 110.71, 108.92, 108.98, 109.78, 110.18, 111.88, 112.61, 114.88, 116.19, 118.59, 121.5]),
                makeDataset("Cabai Rawit", [128.73, 93.67, 63.37, 44.8, 38.29, 51.83, 63.3, 84.59, 103.17, 101.65, 157.79, 118.8]),
                makeDataset("Telur Ayam Ras", [109.45, 104.74, 104.92, 106.25, 109.08, 111.83, 114.05, 114.48, 104.25, 101.54, 101.51, 104.16])
            ]
        },
        2024: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [106.11, 106.47, 107.12, 106.92, 107.54, 106.95, 106.62, 106.73, 106.83, 107.25, 107.69, 108.19]),
                makeDataset("Makanan, Minuman, dan Tembakau", [108.4, 109.28, 110.94, 109.79, 111.35, 109.28, 107.49, 107.48, 107.47, 108.52, 109.45, 110.89]),
                makeDataset("Makanan", [108.0, 108.96, 110.93, 109.49, 111.08, 108.55, 105.74, 105.44, 105.33, 106.18, 107.28, 108.92]),
                makeDataset("Beras", [124.07, 127.1, 126.99, 126.19, 125.11, 125.5, 127.19, 127.57, 127.56, 127.29, 125.75, 124.73]),
                makeDataset("Cabai Rawit", [95.91, 108.84, 107.05, 82.77, 62.37, 75.84, 94.4, 101.4, 113.71, 69.55, 67.64, 106.91]),
                makeDataset("Telur Ayam Ras", [103.79, 103.42, 111.05, 107.85, 108.63, 108.53, 106.91, 106.18, 105.79, 104.52, 106.89, 109.11])
            ]
        }
    },
    sibolga: {
        2022: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [97.59, 97.46, 98.16, 98.71, 99.56, 100.28, 101.01, 100.85, 101.69, 101.05, 101.22, 102.42]),
                makeDataset("Makanan, Minuman, dan Tembakau", [98.33, 97.7, 98.93, 97.89, 99.65, 101.89, 103.25, 102.06, 101.12, 98.84, 98.71, 101.63]),
                makeDataset("Makanan", [98.95, 98.14, 99.67, 97.12, 99.32, 102.14, 103.86, 102.35, 101.1, 98.22, 98.02, 101.1]),
                makeDataset("Beras", [97.8, 98.18, 98.18, 98.18, 98.18, 98.88, 98.8, 99.19, 102.27, 103.02, 103.22, 104.07]),
                makeDataset("Cabai Rawit", [117.7, 93.82, 79.82, 71.47, 79.61, 121.95, 164.99, 119.05, 109.2, 80.25, 62.61, 99.51]),
                makeDataset("Telur Ayam Ras", [109.29, 82.55, 85.61, 89.23, 94.8, 103.51, 103.37, 102.96, 108.47, 101.96, 104.27, 114.15])
            ]
        },
        2023: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [103.85, 104.07, 103.59, 103.75, 103.98, 104.5, 104.71, 104.98, 105.47, 105.38, 105.13, 105.43]),
                makeDataset("Makanan, Minuman, dan Tembakau", [104.41, 104.94, 103.1, 102.16, 102.84, 104.27, 104.81, 105.13, 106.41, 106.07, 105.14, 105.56]),
                makeDataset("Makanan", [104.61, 104.12, 101.61, 100.43, 101.18, 102.95, 103.63, 103.6, 105.21, 104.74, 103.56, 103.99]),
                makeDataset("Beras", [108.9, 112.75, 111.32, 110.95, 111.38, 111.37, 111.32, 114.69, 121.32, 122.96, 122.6, 122.25]),
                makeDataset("Cabai Rawit", [115.67, 85.54, 65.5, 52.22, 44.2, 52.22, 67.59, 85.49, 94.42, 90.71, 127.75, 125.58]),
                makeDataset("Telur Ayam Ras", [114.53, 105.63, 104.01, 105.37, 108.4, 112.54, 114.23, 114.83, 110.36, 107.46, 107.24, 107.26])
            ]
        },
        2024: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [
                makeDataset("Umum", [106.37, 107.25, 108.02, 107.93, 108.29, 108.42, 107.54, 107.3, 106.94, 107.16, 107.59, 108.53]),
                makeDataset("Makanan, Minuman, dan Tembakau", [108.06, 110.39, 112.15, 111.3, 112.15, 112.51, 109.62, 108.5, 107.56, 108.03, 109.18, 111.36]),
                makeDataset("Makanan", [106.6, 109.53, 111.74, 110.37, 111.27, 111.11, 107.48, 106.02, 104.79, 105.38, 106.76, 109.23]),
                makeDataset("Beras", [123.4, 127.78, 127.98, 127.57, 126.65, 127.25, 127.42, 127.21, 126.79, 126.62, 126.48, 126.54]),
                makeDataset("Cabai Rawit", [113.82, 119.93, 126.03, 102.29, 83.94, 99.85, 108.97, 107.8, 124.35, 103.4, 85.37, 110.81]),
                makeDataset("Telur Ayam Ras", [106.77, 108.61, 119.99, 119.01, 119.6, 119.6, 117.47, 114.31, 113.53, 113.73, 114.02, 116.38])
            ]
        }
    }
};

// === Data Ketahanan Pangan ===
const foodSecurityData = {
    kota: {
        labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
        datasets: [
            makeDataset("Medan", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
            makeDataset("Gunungsitoli", [0.50, 0.47, 0.49, 0.48, 0.49, 0.52, 0.50, 0.51, 0.53, 0.47, 0.47, 0.51], fsDatasetStyles),
            makeDataset("Padangsidimpuan", [0.52, 0.50, 0.49, 0.49, 0.47, 0.52, 0.51, 0.48, 0.52, 0.50, 0.46, 0.52], fsDatasetStyles),
            makeDataset("Pematangsiantar", [0.50, 0.48, 0.50, 0.52, 0.51, 0.50, 0.52, 0.51, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
            makeDataset("Sibolga", [0.49, 0.48, 0.50, 0.49, 0.50, 0.52, 0.54, 0.50, 0.54, 0.50, 0.49, 0.52], fsDatasetStyles)
        ]
    },
    kecamatan: {
        medan: {
            labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
            datasets: [
                makeDataset("Medan Amplas", [0.47, 0.47, 0.48, 0.49, 0.47, 0.47, 0.50, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Area", [0.47, 0.48, 0.48, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Barat", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Baru", [0.47, 0.47, 0.46, 0.49, 0.46, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Belawan", [0.43, 0.46, 0.43, 0.44, 0.40, 0.42, 0.42, 0.46, 0.46, 0.44, 0.46, 0.45], fsDatasetStyles),
                makeDataset("Medan Deli", [0.47, 0.47, 0.46, 0.47, 0.46, 0.47, 0.48, 0.48, 0.45, 0.47, 0.47, 0.47], fsDatasetStyles),
                makeDataset("Medan Denai", [0.48, 0.47, 0.48, 0.49, 0.46, 0.47, 0.50, 0.48, 0.47, 0.48, 0.46, 0.48], fsDatasetStyles),
                makeDataset("Medan Helvetia", [0.47, 0.46, 0.46, 0.48, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Johor", [0.47, 0.47, 0.47, 0.49, 0.47, 0.46, 0.50, 0.48, 0.47, 0.49, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Kota", [0.47, 0.47, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Labuhan", [0.46, 0.46, 0.45, 0.46, 0.45, 0.46, 0.46, 0.47, 0.45, 0.47, 0.46, 0.47], fsDatasetStyles),
                makeDataset("Medan Maimun", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.46, 0.48], fsDatasetStyles),
                makeDataset("Medan Marelan", [0.46, 0.46, 0.45, 0.46, 0.45, 0.46, 0.46, 0.47, 0.45, 0.47, 0.46, 0.47], fsDatasetStyles),
                makeDataset("Medan Perjuangan", [0.47, 0.48, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Petisah", [0.47, 0.47, 0.47, 0.48, 0.47, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Polonia", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Selayang", [0.48, 0.47, 0.46, 0.49, 0.47, 0.47, 0.49, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Sunggal", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Medan Tembung", [0.48, 0.48, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Timur", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                makeDataset("Medan Tuntungan", [0.46, 0.46, 0.47, 0.51, 0.48, 0.46, 0.49, 0.49, 0.48, 0.50, 0.49, 0.51], fsDatasetStyles)
            ]
        },
        gunungsitoli: {
            labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
            datasets: [
                makeDataset("Gunungsitoli Alo'Oa", [0.49, 0.44, 0.46, 0.48, 0.47, 0.51, 0.49, 0.49, 0.53, 0.46, 0.47, 0.49], fsDatasetStyles),
                makeDataset("Gunungsitoli", [0.49, 0.48, 0.49, 0.48, 0.51, 0.51, 0.53, 0.50, 0.53, 0.47, 0.48, 0.53], fsDatasetStyles),
                makeDataset("Gunungsitoli Barat", [0.49, 0.46, 0.48, 0.48, 0.48, 0.53, 0.50, 0.51, 0.54, 0.46, 0.47, 0.50], fsDatasetStyles),
                makeDataset("Gunungsitoli Idanoi", [0.51, 0.48, 0.50, 0.48, 0.49, 0.50, 0.49, 0.49, 0.51, 0.48, 0.48, 0.52], fsDatasetStyles),
                makeDataset("Gunungsitoli Selatan", [0.51, 0.47, 0.49, 0.48, 0.50, 0.52, 0.49, 0.52, 0.53, 0.47, 0.47, 0.52], fsDatasetStyles),
                makeDataset("Gunungsitoli Utara", [0.51, 0.49, 0.50, 0.48, 0.52, 0.53, 0.52, 0.52, 0.54, 0.46, 0.49, 0.53], fsDatasetStyles)
            ]
        },
        padangsidimpuan: {
            labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
            datasets: [
                makeDataset("Padangsidimpuan Angkola Julu", [0.52, 0.50, 0.51, 0.49, 0.47, 0.55, 0.53, 0.49, 0.51, 0.52, 0.46, 0.53], fsDatasetStyles),
                makeDataset("Padangsidimpuan Batunadua", [0.52, 0.51, 0.50, 0.49, 0.47, 0.53, 0.52, 0.48, 0.53, 0.51, 0.45, 0.53], fsDatasetStyles),
                makeDataset("Padangsidimpuan Hutaimbaru", [0.54, 0.51, 0.50, 0.48, 0.47, 0.54, 0.53, 0.49, 0.52, 0.50, 0.46, 0.53], fsDatasetStyles),
                makeDataset("Padangsidimpuan Selatan", [0.51, 0.50, 0.48, 0.50, 0.47, 0.50, 0.50, 0.49, 0.53, 0.48, 0.46, 0.52], fsDatasetStyles),
                makeDataset("Padangsidimpuan Tenggara", [0.52, 0.50, 0.49, 0.48, 0.46, 0.52, 0.52, 0.47, 0.52, 0.51, 0.45, 0.53], fsDatasetStyles),
                makeDataset("Padangsidimpuan Utara", [0.50, 0.48, 0.47, 0.50, 0.48, 0.50, 0.49, 0.50, 0.52, 0.48, 0.47, 0.50], fsDatasetStyles)
            ]
        },
        pematangsiantar: {
            labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
            datasets: [
                makeDataset("Siantar Barat", [0.50, 0.49, 0.49, 0.52, 0.51, 0.50, 0.51, 0.52, 0.51, 0.50, 0.51, 0.51], fsDatasetStyles),
                makeDataset("Siantar Marihat", [0.51, 0.48, 0.50, 0.52, 0.52, 0.51, 0.52, 0.51, 0.51, 0.51, 0.50, 0.53], fsDatasetStyles),
                makeDataset("Siantar Marimbun", [0.52, 0.47, 0.51, 0.50, 0.50, 0.50, 0.53, 0.51, 0.52, 0.54, 0.52, 0.53], fsDatasetStyles),
                makeDataset("Siantar Martoba", [0.50, 0.47, 0.50, 0.51, 0.51, 0.50, 0.52, 0.51, 0.50, 0.51, 0.51, 0.52], fsDatasetStyles),
                makeDataset("Siantar Selatan", [0.50, 0.49, 0.49, 0.52, 0.51, 0.50, 0.51, 0.52, 0.51, 0.50, 0.51, 0.52], fsDatasetStyles),
                makeDataset("Siantar Sitalasari", [0.49, 0.47, 0.51, 0.51, 0.52, 0.49, 0.53, 0.50, 0.50, 0.52, 0.52, 0.53], fsDatasetStyles),
                makeDataset("Siantar Timur", [0.49, 0.48, 0.49, 0.52, 0.51, 0.50, 0.50, 0.51, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                makeDataset("Siantar Utara", [0.49, 0.48, 0.49, 0.52, 0.51, 0.50, 0.51, 0.52, 0.50, 0.50, 0.50, 0.51], fsDatasetStyles)
            ]
        },
        sibolga: {
            labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
            datasets: [
                makeDataset("Sibolga Kota", [0.48, 0.47, 0.49, 0.50, 0.50, 0.51, 0.53, 0.52, 0.53, 0.50, 0.50, 0.51], fsDatasetStyles),
                makeDataset("Sibolga Sambas", [0.49, 0.48, 0.50, 0.50, 0.50, 0.51, 0.53, 0.51, 0.53, 0.50, 0.49, 0.51], fsDatasetStyles),
                makeDataset("Sibolga Selatan", [0.47, 0.48, 0.50, 0.49, 0.50, 0.51, 0.54, 0.48, 0.54, 0.48, 0.49, 0.52], fsDatasetStyles),
                makeDataset("Sibolga Utara", [0.51, 0.49, 0.51, 0.49, 0.50, 0.53, 0.55, 0.50, 0.55, 0.51, 0.49, 0.53], fsDatasetStyles)
            ]
        }
    },
    desa: {
        medan: {
            "medan-amplas": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Harjosari I", [0.48, 0.48, 0.48, 0.49, 0.47, 0.48, 0.50, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sitirejo III", [0.47, 0.48, 0.48, 0.49, 0.47, 0.48, 0.50, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Timbang Deli", [0.48, 0.47, 0.48, 0.49, 0.47, 0.48, 0.50, 0.48, 0.48, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Amplas", [0.48, 0.48, 0.48, 0.49, 0.47, 0.48, 0.50, 0.47, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Harjosari II", [0.47, 0.47, 0.47, 0.49, 0.47, 0.48, 0.50, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "medan-area": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Sukaramai I", [0.48, 0.48, 0.48, 0.49, 0.47, 0.47, 0.50, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Tegal Sari III", [0.48, 0.48, 0.48, 0.50, 0.47, 0.48, 0.50, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Kota Matsum II", [0.48, 0.48, 0.48, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Tegal Sari I", [0.48, 0.48, 0.48, 0.49, 0.47, 0.48, 0.50, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Tegal Sari II", [0.48, 0.48, 0.48, 0.49, 0.47, 0.47, 0.49, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "medan-barat": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Karang Berombak", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Agul", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.49, 0.46, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Pulo Berayan Kota", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Glugur Kota", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Kesawan", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-baru": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Babura", [0.47, 0.47, 0.46, 0.48, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Petisah Hulu", [0.47, 0.47, 0.47, 0.48, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Merdeka", [0.47, 0.47, 0.46, 0.49, 0.46, 0.47, 0.48, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Titi Rante", [0.47, 0.47, 0.47, 0.49, 0.46, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Darat", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-belawan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Belawan II", [0.43, 0.47, 0.43, 0.42, 0.39, 0.4, 0.41, 0.45, 0.48, 0.44, 0.47, 0.45], fsDatasetStyles),
                    makeDataset("Belawan Bahagia", [0.45, 0.45, 0.44, 0.45, 0.44, 0.44, 0.43, 0.46, 0.45, 0.45, 0.44, 0.46], fsDatasetStyles),
                    makeDataset("Belawan Bahari", [0.44, 0.48, 0.42, 0.42, 0.4, 0.42, 0.39, 0.47, 0.47, 0.43, 0.47, 0.45], fsDatasetStyles),
                    makeDataset("Belawan I", [0.39, 0.45, 0.44, 0.45, 0.38, 0.41, 0.44, 0.43, 0.47, 0.42, 0.44, 0.45], fsDatasetStyles),
                    makeDataset("Belawan Sicanang", [0.47, 0.44, 0.46, 0.47, 0.44, 0.44, 0.47, 0.5, 0.43, 0.49, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-deli": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Mabar", [0.47, 0.47, 0.46, 0.47, 0.46, 0.47, 0.48, 0.48, 0.44, 0.47, 0.47, 0.47], fsDatasetStyles),
                    makeDataset("Tanjung Mulya", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Titipapan", [0.47, 0.46, 0.46, 0.47, 0.46, 0.47, 0.48, 0.47, 0.45, 0.48, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Kota Bangun", [0.46, 0.46, 0.46, 0.47, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.47], fsDatasetStyles),
                    makeDataset("Mabar Hilir", [0.47, 0.47, 0.46, 0.48, 0.46, 0.46, 0.48, 0.48, 0.44, 0.47, 0.47, 0.47], fsDatasetStyles)
                ]
            },
            "medan-denai": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Tegal S Mandala I", [0.48, 0.48, 0.48, 0.49, 0.47, 0.47, 0.5, 0.48, 0.47, 0.48, 0.46, 0.49], fsDatasetStyles),
                    makeDataset("Tegal S Mandala III", [0.48, 0.47, 0.48, 0.5, 0.47, 0.47, 0.5, 0.48, 0.48, 0.48, 0.46, 0.49], fsDatasetStyles),
                    makeDataset("Tegal S Mandala II", [0.48, 0.48, 0.48, 0.49, 0.47, 0.47, 0.5, 0.48, 0.47, 0.48, 0.46, 0.49], fsDatasetStyles),
                    makeDataset("Binjai", [0.47, 0.47, 0.47, 0.49, 0.47, 0.48, 0.5, 0.48, 0.47, 0.47, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Denai", [0.48, 0.45, 0.48, 0.49, 0.44, 0.48, 0.5, 0.48, 0.47, 0.47, 0.46, 0.48], fsDatasetStyles)
                ]
            },
            "medan-helvetia": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Helvetia", [0.48, 0.45, 0.47, 0.48, 0.47, 0.48, 0.48, 0.49, 0.47, 0.48, 0.48, 0.49], fsDatasetStyles),
                    makeDataset("Tanjung Gusta", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.47, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sei Sikambing C Ii", [0.47, 0.47, 0.46, 0.48, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Cinta Damai", [0.48, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.47, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Dwi Kora", [0.47, 0.47, 0.46, 0.48, 0.47, 0.47, 0.48, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-johor": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Kedai Durian", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.5, 0.48, 0.48, 0.49, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Pangkalan Mansur", [0.47, 0.47, 0.47, 0.49, 0.47, 0.46, 0.5, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Titi Kuning", [0.47, 0.47, 0.47, 0.49, 0.47, 0.48, 0.5, 0.49, 0.47, 0.49, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Suka Maju", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Gedung Johor", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.49, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "medan-kota": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Teladan Timur", [0.47, 0.48, 0.48, 0.49, 0.47, 0.47, 0.5, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sudirejo 1", [0.47, 0.47, 0.48, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sitirejo I", [0.47, 0.47, 0.48, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sudirejo II", [0.47, 0.48, 0.48, 0.49, 0.47, 0.47, 0.5, 0.48, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Kotamatsum III", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.49, 0.49, 0.47, 0.48, 0.46, 0.49], fsDatasetStyles)
                ]
            },
            "medan-labuhan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Martubung", [0.47, 0.46, 0.46, 0.47, 0.46, 0.47, 0.47, 0.45, 0.47, 0.47, 0.47, 0.47], fsDatasetStyles),
                    makeDataset("Besar", [0.47, 0.46, 0.46, 0.47, 0.46, 0.47, 0.47, 0.44, 0.46, 0.47, 0.46, 0.47], fsDatasetStyles),
                    makeDataset("Tangkahan", [0.48, 0.47, 0.47, 0.49, 0.47, 0.47, 0.48, 0.49, 0.43, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Pekan Labuhan", [0.46, 0.45, 0.44, 0.45, 0.44, 0.45, 0.45, 0.47, 0.43, 0.46, 0.45, 0.46], fsDatasetStyles),
                    makeDataset("Sei Mati", [0.45, 0.45, 0.45, 0.46, 0.44, 0.46, 0.46, 0.48, 0.46, 0.46, 0.46, 0.46], fsDatasetStyles)
                ]
            },
            "medan-maimun": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Aur", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Kampung Baru", [0.47, 0.47, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Hamdan", [0.46, 0.46, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Sei Mati", [0.47, 0.46, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.46, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sukaraja", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.49, 0.46, 0.48, 0.46, 0.49], fsDatasetStyles)
                ]
            },
            "medan-marelan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Labuhan Deli", [0.46, 0.45, 0.44, 0.45, 0.44, 0.46, 0.46, 0.49, 0.44, 0.47, 0.46, 0.46], fsDatasetStyles),
                    makeDataset("Paya Pasir", [0.46, 0.45, 0.45, 0.45, 0.44, 0.46, 0.46, 0.5, 0.45, 0.47, 0.46, 0.46], fsDatasetStyles),
                    makeDataset("Rengas Pulau", [0.46, 0.46, 0.46, 0.47, 0.45, 0.46, 0.47, 0.39, 0.46, 0.47, 0.46, 0.47], fsDatasetStyles),
                    makeDataset("Tanah Enam Ratus", [0.46, 0.46, 0.46, 0.47, 0.45, 0.46, 0.47, 0.48, 0.46, 0.47, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Terjun", [0.46, 0.46, 0.46, 0.46, 0.44, 0.46, 0.46, 0.48, 0.46, 0.47, 0.46, 0.47], fsDatasetStyles)
                ]
            },
            "medan-perjuangan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Pahlawan", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.49, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sidorame Timur", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Tegalrejo", [0.47, 0.48, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Kera Hilir I", [0.47, 0.48, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Kera Hulu", [0.47, 0.48, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-petisah": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Sei Putih Tengah", [0.47, 0.47, 0.47, 0.48, 0.47, 0.48, 0.48, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Sikambing D", [0.47, 0.47, 0.47, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Putih Barat", [0.47, 0.47, 0.46, 0.49, 0.47, 0.48, 0.48, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Putih Timur II", [0.48, 0.47, 0.47, 0.48, 0.46, 0.48, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sei Putih Timur I", [0.47, 0.48, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-polonia": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Anggrung", [0.46, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Madras Hulu", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Polonia", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sari Rejo", [0.47, 0.46, 0.47, 0.49, 0.46, 0.47, 0.49, 0.49, 0.47, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Suka Damai", [0.48, 0.47, 0.48, 0.49, 0.47, 0.47, 0.49, 0.48, 0.47, 0.47, 0.48, 0.49], fsDatasetStyles)
                ]
            },
            "medan-selayang": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("P Bulan Selayang I", [0.48, 0.48, 0.46, 0.5, 0.47, 0.48, 0.49, 0.49, 0.47, 0.48, 0.48, 0.49], fsDatasetStyles),
                    makeDataset("Beringin", [0.47, 0.47, 0.47, 0.49, 0.46, 0.46, 0.49, 0.49, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Tanjungsari", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.47, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sempakata", [0.47, 0.47, 0.47, 0.5, 0.47, 0.46, 0.49, 0.48, 0.48, 0.48, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("P Bulan Selayang II", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.49, 0.48, 0.48, 0.47, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "medan-sunggal": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Simpang Tanjung", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Tanjung Rejo", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Babura Sunggal", [0.47, 0.47, 0.46, 0.49, 0.47, 0.47, 0.48, 0.49, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Lalang", [0.48, 0.47, 0.46, 0.49, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Sunggal", [0.48, 0.46, 0.46, 0.49, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "medan-tembung": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Bantan", [0.48, 0.48, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.47, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sidorejo", [0.48, 0.48, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.46, 0.48, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Bandar Selamat", [0.47, 0.47, 0.47, 0.49, 0.46, 0.47, 0.49, 0.48, 0.46, 0.48, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Bantan Timur", [0.47, 0.48, 0.47, 0.48, 0.46, 0.47, 0.49, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Sidorejo Hilir", [0.48, 0.48, 0.46, 0.48, 0.46, 0.48, 0.48, 0.48, 0.46, 0.48, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-timur": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Durian", [0.47, 0.47, 0.47, 0.48, 0.46, 0.47, 0.47, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Glugur Darat II", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("P Berayan Darat I", [0.47, 0.48, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("P Berayan Darat II", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.46, 0.47, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Glugur Darat I", [0.47, 0.47, 0.46, 0.48, 0.46, 0.47, 0.48, 0.48, 0.47, 0.47, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "medan-tuntungan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Namo Gajah", [0.45, 0.46, 0.48, 0.51, 0.49, 0.47, 0.5, 0.5, 0.48, 0.5, 0.49, 0.52], fsDatasetStyles),
                    makeDataset("Ladang Bambu", [0.45, 0.44, 0.47, 0.52, 0.49, 0.49, 0.49, 0.5, 0.51, 0.51, 0.5, 0.52], fsDatasetStyles),
                    makeDataset("Mangga", [0.47, 0.47, 0.47, 0.51, 0.49, 0.42, 0.5, 0.5, 0.48, 0.5, 0.49, 0.51], fsDatasetStyles),
                    makeDataset("Laucih", [0.45, 0.45, 0.47, 0.52, 0.49, 0.47, 0.5, 0.5, 0.47, 0.5, 0.5, 0.52], fsDatasetStyles),
                    makeDataset("Simalingkar B", [0.46, 0.45, 0.46, 0.51, 0.47, 0.45, 0.5, 0.49, 0.48, 0.5, 0.48, 0.51], fsDatasetStyles),
                ]
            }
        },
        gunungsitoli: {
            "gunungsitoli": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Sihare'O Ii Tabaloho", [0.52, 0.51, 0.52, 0.47, 0.53, 0.54, 0.56, 0.54, 0.55, 0.53, 0.47, 0.56], fsDatasetStyles),
                    makeDataset("Madolaoli", [0.52, 0.49, 0.52, 0.48, 0.54, 0.54, 0.55, 0.54, 0.55, 0.47, 0.46, 0.51], fsDatasetStyles),
                    makeDataset("Onowaembo", [0.52, 0.46, 0.5, 0.49, 0.53, 0.54, 0.55, 0.53, 0.55, 0.46, 0.47, 0.49], fsDatasetStyles),
                    makeDataset("Onozitoli Olora", [0.51, 0.5, 0.52, 0.48, 0.53, 0.53, 0.55, 0.54, 0.55, 0.45, 0.46, 0.56], fsDatasetStyles),
                    makeDataset("Bawodesolo", [0.51, 0.5, 0.52, 0.48, 0.53, 0.53, 0.54, 0.54, 0.55, 0.48, 0.49, 0.54], fsDatasetStyles)
                ]
            },
            "gunungsitoli-alo'oa": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Iraonolase", [0.52, 0.45, 0.51, 0.49, 0.52, 0.54, 0.55, 0.54, 0.55, 0.46, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Lololawa", [0.52, 0.44, 0.47, 0.48, 0.5, 0.54, 0.49, 0.5, 0.56, 0.46, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Tarakhaini", [0.51, 0.44, 0.46, 0.49, 0.47, 0.54, 0.5, 0.5, 0.54, 0.46, 0.46, 0.48], fsDatasetStyles),
                    makeDataset("Nazalou Alo'Oa", [0.47, 0.44, 0.45, 0.48, 0.46, 0.47, 0.5, 0.47, 0.51, 0.46, 0.47, 0.5], fsDatasetStyles),
                    makeDataset("Nazalou Lolowua", [0.47, 0.44, 0.44, 0.48, 0.46, 0.48, 0.47, 0.48, 0.52, 0.46, 0.48, 0.51], fsDatasetStyles)
                ]
            },
            "gunungsitoli-barat": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Orahili Tumori", [0.52, 0.47, 0.52, 0.49, 0.5, 0.54, 0.5, 0.53, 0.56, 0.46, 0.47, 0.51], fsDatasetStyles),
                    makeDataset("Sihare'O Siwahili", [0.51, 0.48, 0.51, 0.49, 0.52, 0.52, 0.54, 0.52, 0.53, 0.46, 0.47, 0.52], fsDatasetStyles),
                    makeDataset("Tumori", [0.51, 0.5, 0.51, 0.48, 0.52, 0.53, 0.54, 0.51, 0.55, 0.46, 0.47, 0.55], fsDatasetStyles),
                    makeDataset("Hilinakhe", [0.48, 0.46, 0.47, 0.49, 0.46, 0.54, 0.5, 0.55, 0.56, 0.46, 0.47, 0.48], fsDatasetStyles),
                    makeDataset("Lolomoyo Tuhemberua", [0.48, 0.44, 0.47, 0.49, 0.47, 0.54, 0.49, 0.53, 0.55, 0.46, 0.47, 0.48], fsDatasetStyles)
                ]
            },
            "gunungsitoli-idanoi": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Tuhegeo I", [0.52, 0.51, 0.52, 0.48, 0.53, 0.54, 0.53, 0.54, 0.55, 0.53, 0.52, 0.55], fsDatasetStyles),
                    makeDataset("Bawodesolo", [0.52, 0.51, 0.51, 0.48, 0.53, 0.53, 0.53, 0.54, 0.55, 0.53, 0.49, 0.55], fsDatasetStyles),
                    makeDataset("Helefanikha", [0.52, 0.51, 0.51, 0.48, 0.53, 0.53, 0.48, 0.53, 0.54, 0.47, 0.49, 0.55], fsDatasetStyles),
                    makeDataset("Simanaere", [0.51, 0.5, 0.51, 0.48, 0.52, 0.53, 0.52, 0.53, 0.54, 0.51, 0.47, 0.54], fsDatasetStyles),
                    makeDataset("Hilimbawodesolo", [0.51, 0.5, 0.5, 0.48, 0.52, 0.52, 0.52, 0.53, 0.54, 0.52, 0.5, 0.54], fsDatasetStyles)
                ]
            },
            "gunungsitoli-selatan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Mazingo Tabaloho", [0.52, 0.51, 0.52, 0.48, 0.53, 0.54, 0.48, 0.54, 0.55, 0.48, 0.47, 0.55], fsDatasetStyles),
                    makeDataset("Ononamolo I Lot", [0.51, 0.5, 0.51, 0.47, 0.52, 0.53, 0.52, 0.53, 0.54, 0.52, 0.47, 0.55], fsDatasetStyles),
                    makeDataset("Lolofaoso Tabaloho", [0.52, 0.48, 0.51, 0.47, 0.53, 0.53, 0.5, 0.53, 0.54, 0.46, 0.47, 0.53], fsDatasetStyles),
                    makeDataset("Lolomboli", [0.51, 0.5, 0.51, 0.47, 0.52, 0.54, 0.49, 0.53, 0.55, 0.47, 0.47, 0.55], fsDatasetStyles),
                    makeDataset("Ombolata Simenari", [0.52, 0.46, 0.5, 0.47, 0.53, 0.54, 0.48, 0.54, 0.51, 0.48, 0.46, 0.54], fsDatasetStyles)
                ]
            },
            "gunungsitoli-utara": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Gawu-Gawu Bo'Uso", [0.52, 0.51, 0.51, 0.48, 0.54, 0.54, 0.55, 0.54, 0.55, 0.46, 0.52, 0.54], fsDatasetStyles),
                    makeDataset("Hilimbowo Olora", [0.52, 0.51, 0.52, 0.49, 0.54, 0.54, 0.55, 0.54, 0.55, 0.45, 0.46, 0.56], fsDatasetStyles),
                    makeDataset("Hiligodu Ulu", [0.52, 0.51, 0.52, 0.48, 0.54, 0.54, 0.55, 0.54, 0.55, 0.45, 0.46, 0.56], fsDatasetStyles),
                    makeDataset("Afia", [0.5, 0.5, 0.51, 0.48, 0.53, 0.53, 0.53, 0.54, 0.54, 0.5, 0.52, 0.55], fsDatasetStyles),
                    makeDataset("Lasara Sowu", [0.52, 0.5, 0.47, 0.49, 0.47, 0.54, 0.48, 0.5, 0.55, 0.46, 0.48, 0.48], fsDatasetStyles)
                ]
            }
        },
        padangsidimpuan: {
            "padangsidimpuan-angkola-julu": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Batu Layan", [0.55, 0.51, 0.52, 0.49, 0.47, 0.55, 0.54, 0.49, 0.51, 0.54, 0.46, 0.55], fsDatasetStyles),
                    makeDataset("Joring Lombang", [0.54, 0.49, 0.51, 0.49, 0.47, 0.55, 0.53, 0.49, 0.51, 0.53, 0.46, 0.55], fsDatasetStyles),
                    makeDataset("Mompang", [0.53, 0.53, 0.52, 0.49, 0.47, 0.55, 0.54, 0.49, 0.51, 0.51, 0.46, 0.53], fsDatasetStyles),
                    makeDataset("Simatohir", [0.54, 0.53, 0.51, 0.48, 0.47, 0.55, 0.54, 0.49, 0.52, 0.54, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Joring Natobang", [0.5, 0.49, 0.51, 0.49, 0.47, 0.54, 0.51, 0.49, 0.51, 0.52, 0.46, 0.53], fsDatasetStyles)
                ]
            },
            "padangsidimpuan-batunadua": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Gunung Hasahatan", [0.54, 0.52, 0.51, 0.48, 0.47, 0.55, 0.53, 0.49, 0.56, 0.54, 0.45, 0.54], fsDatasetStyles),
                    makeDataset("Simirik", [0.55, 0.52, 0.51, 0.48, 0.47, 0.55, 0.54, 0.48, 0.52, 0.54, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Aek Najaji", [0.54, 0.52, 0.51, 0.48, 0.47, 0.55, 0.54, 0.47, 0.57, 0.53, 0.45, 0.54], fsDatasetStyles),
                    makeDataset("Bargottopong", [0.55, 0.52, 0.51, 0.48, 0.46, 0.55, 0.53, 0.48, 0.55, 0.53, 0.45, 0.53], fsDatasetStyles),
                    makeDataset("Aek Bayur", [0.51, 0.48, 0.46, 0.5, 0.48, 0.49, 0.48, 0.49, 0.51, 0.5, 0.46, 0.5], fsDatasetStyles)
                ]
            },
            "padangsidimpuan-hutaimbaru": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Huta Padang", [0.55, 0.5, 0.52, 0.49, 0.47, 0.55, 0.54, 0.49, 0.5, 0.54, 0.47, 0.55], fsDatasetStyles),
                    makeDataset("Lubuk Raya", [0.56, 0.5, 0.52, 0.48, 0.47, 0.55, 0.53, 0.49, 0.5, 0.54, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Sabungan Sipabangun", [0.55, 0.52, 0.5, 0.48, 0.47, 0.54, 0.53, 0.49, 0.53, 0.52, 0.46, 0.52], fsDatasetStyles),
                    makeDataset("Singali", [0.55, 0.52, 0.5, 0.49, 0.47, 0.54, 0.53, 0.49, 0.54, 0.46, 0.46, 0.52], fsDatasetStyles),
                    makeDataset("Lembah Lubuk Manik", [0.54, 0.52, 0.5, 0.48, 0.46, 0.54, 0.53, 0.49, 0.53, 0.51, 0.46, 0.54], fsDatasetStyles)
                ]
            },
            "padangsidimpuan-selatan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Sitamiang Baru", [0.54, 0.52, 0.51, 0.5, 0.48, 0.51, 0.53, 0.49, 0.54, 0.48, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Losung", [0.53, 0.51, 0.49, 0.51, 0.48, 0.5, 0.52, 0.49, 0.54, 0.48, 0.47, 0.52], fsDatasetStyles),
                    makeDataset("Hanopan", [0.53, 0.52, 0.5, 0.48, 0.46, 0.54, 0.53, 0.48, 0.56, 0.47, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Sidangkal", [0.53, 0.51, 0.5, 0.48, 0.47, 0.53, 0.51, 0.48, 0.55, 0.48, 0.46, 0.53], fsDatasetStyles),
                    makeDataset("Sitamiang", [0.5, 0.47, 0.46, 0.52, 0.49, 0.49, 0.48, 0.5, 0.52, 0.49, 0.47, 0.49], fsDatasetStyles)
                ]
            },
            "padangsidimpuan-tenggara": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Tarutung Baru", [0.5, 0.47, 0.5, 0.48, 0.46, 0.54, 0.54, 0.47, 0.49, 0.54, 0.45, 0.54], fsDatasetStyles),
                    makeDataset("Labuhan Labo", [0.48, 0.51, 0.5, 0.48, 0.46, 0.54, 0.53, 0.47, 0.5, 0.53, 0.45, 0.53], fsDatasetStyles),
                    makeDataset("Labuhan Rasoki", [0.48, 0.48, 0.5, 0.48, 0.46, 0.54, 0.53, 0.47, 0.5, 0.53, 0.45, 0.54], fsDatasetStyles),
                    makeDataset("Sihitang", [0.53, 0.51, 0.49, 0.48, 0.44, 0.53, 0.5, 0.48, 0.55, 0.51, 0.45, 0.51], fsDatasetStyles),
                    makeDataset("Huta Koje", [0.53, 0.51, 0.49, 0.48, 0.47, 0.51, 0.52, 0.48, 0.49, 0.48, 0.45, 0.52], fsDatasetStyles)
                ]
            },
            "padangsidimpuan-utara": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Kayu Ombun", [0.5, 0.49, 0.47, 0.49, 0.47, 0.5, 0.49, 0.49, 0.52, 0.49, 0.47, 0.51], fsDatasetStyles),
                    makeDataset("Batang Ayumi Julu", [0.53, 0.52, 0.5, 0.49, 0.47, 0.53, 0.52, 0.49, 0.53, 0.48, 0.46, 0.54], fsDatasetStyles),
                    makeDataset("Bonan Dolok", [0.52, 0.5, 0.49, 0.5, 0.48, 0.53, 0.51, 0.49, 0.54, 0.47, 0.47, 0.53], fsDatasetStyles),
                    makeDataset("Losung Batu", [0.52, 0.5, 0.49, 0.49, 0.47, 0.53, 0.51, 0.49, 0.52, 0.46, 0.46, 0.52], fsDatasetStyles),
                    makeDataset("Panyanggar", [0.53, 0.51, 0.5, 0.48, 0.46, 0.54, 0.52, 0.48, 0.55, 0.47, 0.46, 0.54], fsDatasetStyles)
                ]
            }
        },
        pematangsiantar: {
            "siantar-barat": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Dwikora", [0.51, 0.49, 0.5, 0.53, 0.52, 0.51, 0.52, 0.53, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Proklamasi", [0.5, 0.49, 0.49, 0.53, 0.51, 0.5, 0.52, 0.53, 0.51, 0.51, 0.51, 0.51], fsDatasetStyles),
                    makeDataset("Teladan", [0.5, 0.49, 0.49, 0.52, 0.51, 0.5, 0.51, 0.52, 0.51, 0.51, 0.51, 0.51], fsDatasetStyles),
                    makeDataset("Timbang Galung", [0.5, 0.49, 0.49, 0.52, 0.51, 0.5, 0.51, 0.52, 0.51, 0.5, 0.51, 0.51], fsDatasetStyles),
                    makeDataset("Banjar", [0.51, 0.48, 0.49, 0.52, 0.52, 0.5, 0.52, 0.52, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles)
                ]
            },
            "siantar-marihat": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Parhorasan Nauli", [0.49, 0.49, 0.49, 0.53, 0.52, 0.51, 0.52, 0.52, 0.51, 0.5, 0.5, 0.52], fsDatasetStyles),
                    makeDataset("Pardamean", [0.49, 0.49, 0.49, 0.53, 0.52, 0.51, 0.52, 0.53, 0.5, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Mekar Nauli", [0.51, 0.48, 0.5, 0.51, 0.52, 0.53, 0.51, 0.48, 0.5, 0.52, 0.49, 0.54], fsDatasetStyles),
                    makeDataset("Sukaraja", [0.51, 0.46, 0.52, 0.51, 0.54, 0.49, 0.54, 0.51, 0.54, 0.53, 0.49, 0.55], fsDatasetStyles),
                    makeDataset("Baringin Pancur Nauli", [0.54, 0.47, 0.53, 0.51, 0.52, 0.52, 0.53, 0.5, 0.51, 0.54, 0.49, 0.55], fsDatasetStyles)
                ]
            },
            "siantar-marimbun": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Tong Marimbun", [0.53, 0.48, 0.53, 0.5, 0.5, 0.51, 0.55, 0.54, 0.51, 0.54, 0.5, 0.55], fsDatasetStyles),
                    makeDataset("Naga Huta", [0.52, 0.46, 0.5, 0.51, 0.5, 0.5, 0.53, 0.5, 0.51, 0.52, 0.52, 0.53], fsDatasetStyles),
                    makeDataset("Naga Huta Timur", [0.52, 0.46, 0.5, 0.51, 0.51, 0.49, 0.53, 0.51, 0.53, 0.54, 0.54, 0.53], fsDatasetStyles),
                    makeDataset("Pematang Marihat", [0.53, 0.47, 0.51, 0.5, 0.51, 0.53, 0.53, 0.49, 0.53, 0.54, 0.49, 0.54], fsDatasetStyles),
                    makeDataset("Simarimbun", [0.52, 0.47, 0.52, 0.48, 0.5, 0.49, 0.54, 0.52, 0.52, 0.55, 0.54, 0.54], fsDatasetStyles)
                ]
            },
            "siantar-martoba": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Pondok Sayur", [0.5, 0.47, 0.51, 0.51, 0.52, 0.5, 0.53, 0.53, 0.51, 0.52, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Sumber Jaya", [0.5, 0.47, 0.49, 0.51, 0.51, 0.51, 0.52, 0.52, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Tanjung Tongah", [0.5, 0.47, 0.51, 0.51, 0.51, 0.49, 0.54, 0.49, 0.53, 0.52, 0.52, 0.53], fsDatasetStyles),
                    makeDataset("Naga Pitu", [0.5, 0.49, 0.49, 0.52, 0.51, 0.51, 0.51, 0.52, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Tanjung Pinggir", [0.52, 0.47, 0.51, 0.5, 0.53, 0.49, 0.54, 0.52, 0.51, 0.53, 0.52, 0.54], fsDatasetStyles)
                ]
            },
            "siantar-selatan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Karo", [0.5, 0.49, 0.49, 0.53, 0.51, 0.51, 0.51, 0.53, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Simalungun", [0.5, 0.49, 0.49, 0.53, 0.51, 0.51, 0.51, 0.53, 0.51, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Toba", [0.5, 0.49, 0.49, 0.53, 0.51, 0.5, 0.51, 0.52, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Kristen", [0.49, 0.48, 0.49, 0.53, 0.52, 0.49, 0.51, 0.52, 0.51, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Martimbang", [0.5, 0.48, 0.49, 0.52, 0.51, 0.49, 0.51, 0.52, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles)
                ]
            },
            "siantar-sitalasari": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Bah Kapul", [0.46, 0.45, 0.5, 0.51, 0.52, 0.5, 0.52, 0.5, 0.5, 0.51, 0.51, 0.51], fsDatasetStyles),
                    makeDataset("Bah Sorma", [0.5, 0.47, 0.53, 0.5, 0.54, 0.49, 0.56, 0.49, 0.51, 0.53, 0.54, 0.55], fsDatasetStyles),
                    makeDataset("Bukit Sofa", [0.48, 0.47, 0.49, 0.52, 0.51, 0.49, 0.51, 0.51, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Gurilla", [0.51, 0.47, 0.53, 0.5, 0.53, 0.49, 0.55, 0.5, 0.5, 0.53, 0.54, 0.54], fsDatasetStyles),
                    makeDataset("Setia Negara", [0.51, 0.46, 0.49, 0.51, 0.5, 0.5, 0.52, 0.51, 0.51, 0.52, 0.52, 0.53], fsDatasetStyles)

                ]
            },
            "siantar-timur": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Pahlawan", [0.5, 0.48, 0.5, 0.53, 0.52, 0.5, 0.51, 0.52, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Pardomuan", [0.5, 0.49, 0.49, 0.52, 0.51, 0.5, 0.51, 0.52, 0.5, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Merdeka", [0.5, 0.49, 0.49, 0.53, 0.51, 0.51, 0.51, 0.52, 0.51, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Kebun Sayur", [0.49, 0.48, 0.49, 0.52, 0.51, 0.5, 0.51, 0.52, 0.5, 0.5, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Asuhan", [0.49, 0.49, 0.49, 0.52, 0.51, 0.51, 0.51, 0.52, 0.51, 0.5, 0.51, 0.51], fsDatasetStyles)
                ]
            },
            "siantar-utara": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Baru", [0.5, 0.49, 0.49, 0.53, 0.51, 0.51, 0.51, 0.53, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Melayu", [0.5, 0.49, 0.49, 0.52, 0.51, 0.5, 0.51, 0.53, 0.51, 0.51, 0.51, 0.52], fsDatasetStyles),
                    makeDataset("Sukadame", [0.5, 0.49, 0.5, 0.51, 0.51, 0.51, 0.51, 0.53, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Kahean", [0.49, 0.49, 0.49, 0.52, 0.5, 0.5, 0.51, 0.52, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Martoba", [0.49, 0.48, 0.49, 0.52, 0.51, 0.5, 0.51, 0.52, 0.5, 0.5, 0.5, 0.51], fsDatasetStyles)
                ]
            }
        },
        sibolga: {
            "sibolga-kota": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Kota Baringin", [0.47, 0.46, 0.48, 0.5, 0.49, 0.5, 0.53, 0.51, 0.52, 0.5, 0.5, 0.5], fsDatasetStyles),
                    makeDataset("Pancuran Gerobak", [0.5, 0.49, 0.51, 0.49, 0.51, 0.52, 0.54, 0.51, 0.54, 0.5, 0.49, 0.52], fsDatasetStyles),
                    makeDataset("Pasar Baru", [0.48, 0.48, 0.49, 0.5, 0.5, 0.51, 0.54, 0.52, 0.53, 0.51, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Pasar Belakang", [0.47, 0.47, 0.48, 0.5, 0.49, 0.5, 0.52, 0.52, 0.52, 0.5, 0.49, 0.5], fsDatasetStyles)
                ]
            },
            "sibolga-sambas": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Pancuran Bambu", [0.49, 0.48, 0.49, 0.5, 0.49, 0.51, 0.53, 0.51, 0.53, 0.5, 0.49, 0.51], fsDatasetStyles),
                    makeDataset("Pancuran Dewa", [0.49, 0.48, 0.49, 0.5, 0.5, 0.51, 0.53, 0.51, 0.53, 0.49, 0.49, 0.51], fsDatasetStyles),
                    makeDataset("Pancuran Kerambil", [0.5, 0.49, 0.5, 0.5, 0.51, 0.52, 0.54, 0.51, 0.54, 0.49, 0.49, 0.52], fsDatasetStyles),
                    makeDataset("Pancuran Pinang", [0.48, 0.47, 0.49, 0.5, 0.5, 0.51, 0.53, 0.51, 0.53, 0.51, 0.5, 0.51], fsDatasetStyles)
                ]
            },
            "sibolga-selatan": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Aek Habil", [0.46, 0.47, 0.48, 0.49, 0.49, 0.5, 0.52, 0.5, 0.52, 0.49, 0.5, 0.51], fsDatasetStyles),
                    makeDataset("Aek Manis", [0.5, 0.5, 0.51, 0.49, 0.52, 0.53, 0.55, 0.49, 0.56, 0.49, 0.49, 0.54], fsDatasetStyles),
                    makeDataset("Aek Muara Pinang", [0.47, 0.47, 0.48, 0.5, 0.49, 0.5, 0.52, 0.5, 0.52, 0.49, 0.49, 0.5], fsDatasetStyles),
                    makeDataset("Aek Parombunan", [0.45, 0.47, 0.52, 0.47, 0.5, 0.52, 0.56, 0.44, 0.56, 0.45, 0.49, 0.54], fsDatasetStyles)
                ]
            },
            "sibolga-utara": {
                labels: ['2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1', '2024-Q2', '2024-Q3', '2024-Q4'],
                datasets: [
                    makeDataset("Angin Nauli", [0.52, 0.5, 0.52, 0.48, 0.48, 0.55, 0.57, 0.5, 0.57, 0.51, 0.48, 0.55], fsDatasetStyles),
                    makeDataset("Huta Barangan", [0.54, 0.49, 0.51, 0.48, 0.51, 0.56, 0.56, 0.5, 0.58, 0.48, 0.48, 0.55], fsDatasetStyles),
                    makeDataset("Huta Tonga-Tonga", [0.5, 0.49, 0.51, 0.49, 0.52, 0.53, 0.54, 0.51, 0.54, 0.53, 0.49, 0.53], fsDatasetStyles),
                    makeDataset("Sibolga Ilir", [0.5, 0.49, 0.51, 0.49, 0.51, 0.52, 0.56, 0.51, 0.55, 0.52, 0.49, 0.53], fsDatasetStyles),
                    makeDataset("Simare-Mare", [0.48, 0.47, 0.49, 0.49, 0.5, 0.51, 0.54, 0.51, 0.53, 0.51, 0.49, 0.51], fsDatasetStyles)
                ]
            }
        }
    }
};

// Mapping kecamatan
const districtMapping = {
    medan: [
        { value: "medan-area", label: "Medan Area" },
        { value: "medan-barat", label: "Medan Barat" },
        { value: "medan-baru", label: "Medan Baru" },
        { value: "medan-belawan", label: "Medan Belawan" },
        { value: "medan-deli", label: "Medan Deli" },
        { value: "medan-denai", label: "Medan Denai" },
        { value: "medan-helvetia", label: "Medan Helvetia" },
        { value: "medan-johor", label: "Medan Johor" },
        { value: "medan-kota", label: "Medan Kota" },
        { value: "medan-labuhan", label: "Medan Labuhan" },
        { value: "medan-maimun", label: "Medan Maimun" },
        { value: "medan-marelan", label: "Medan Marelan" },
        { value: "medan-perjuangan", label: "Medan Perjuangan" },
        { value: "medan-petisah", label: "Medan Petisah" },
        { value: "medan-polonia", label: "Medan Polonia" },
        { value: "medan-selayang", label: "Medan Selayang" },
        { value: "medan-sunggal", label: "Medan Sunggal" },
        { value: "medan-tembung", label: "Medan Tembung" },
        { value: "medan-timur", label: "Medan Timur" },
        { value: "medan-tuntungan", label: "Medan Tuntungan" }
    ],
    gunungsitoli: [
        { value: "gunungsitoli-alooa", label: "Gunungsitoli Alo'Oa" },
        { value: "gunungsitoli-barat", label: "Gunungsitoli Barat" },
        { value: "gunungsitoli-idanoi", label: "Gunungsitoli Idanoi" },
        { value: "gunungsitoli-selatan", label: "Gunungsitoli Selatan" },
        { value: "gunungsitoli-utara", label: "Gunungsitoli Utara" }
    ],
    padangsidimpuan: [
        { value: "padangsidimpuan-angkola-julu", label: "Padangsidimpuan Angkola Julu" },
        { value: "padangsidimpuan-batunadua", label: "Padangsidimpuan Batunadua" },
        { value: "padangsidimpuan-hutaimbaru", label: "Padangsidimpuan Hutaimbaru" },
        { value: "padangsidimpuan-selatan", label: "Padangsidimpuan Selatan" },
        { value: "padangsidimpuan-tenggara", label: "Padangsidimpuan Tenggara" },
        { value: "padangsidimpuan-utara", label: "Padangsidimpuan Utara" }
    ],
    pematangsiantar: [
        { value: "siantar-marihat", label: "Siantar Marihat" },
        { value: "siantar-marimbun", label: "Siantar Marimbun" },
        { value: "siantar-martoba", label: "Siantar Martoba" },
        { value: "siantar-selatan", label: "Siantar Selatan" },
        { value: "siantar-sitalasari", label: "Siantar Sitalasari" },
        { value: "siantar-timur", label: "Siantar Timur" },
        { value: "siantar-utara", label: "Siantar Utara" }
    ],
    sibolga: [
        { value: "sibolga-kota", label: "Sibolga Kota" },
        { value: "sibolga-sambas", label: "Sibolga Sambas" },
        { value: "sibolga-selatan", label: "Sibolga Selatan" },
        { value: "sibolga-utara", label: "Sibolga Utara" }
    ]
};

// Chart configuration
const chartConfig = {
    type: 'line',
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0,0,0,0.1)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(0,0,0,0.1)'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    }
};

// === Variabel Global Chart ===
let inflationChart;
let foodSecurityChart;

// === Helper Bulan ===
const monthNames = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des'];

// === Quarter Helper Functions ===
function parseQuarter(quarterStr) {
    const [year, quarter] = quarterStr.split('-');
    const quarterNum = parseInt(quarter.replace('Q', ''));
    return { year: parseInt(year), quarter: quarterNum };
}

function compareQuarters(q1, q2) {
    const p1 = parseQuarter(q1);
    const p2 = parseQuarter(q2);
    if (p1.year !== p2.year) return p1.year - p2.year;
    return p1.quarter - p2.quarter;
}

// === Update Functions ===
function updateDistrictOptions() {
    const selectedCity = document.getElementById('fsCitySelect').value;
    const districtSelect = document.getElementById('districtSelect');
      
    // Clear existing options
    districtSelect.innerHTML = '';
      
    // Add new options based on selected city
    districtMapping[selectedCity].forEach(district => {
        const option = document.createElement('option');
        option.value = district.value;
        option.textContent = district.label;
        districtSelect.appendChild(option);
    });
}

function toggleFoodSecurityControls() {
    const level = document.getElementById('levelSelect').value;
    const cityContainer = document.getElementById('citySelectContainer');
    const districtContainer = document.getElementById('districtSelectContainer');

    // Hide all conditional controls first
    cityContainer.style.display = 'none';
    districtContainer.style.display = 'none';

    // Show controls based on level selection
    if (level === 'kecamatan' || level === 'desa') {
        cityContainer.style.display = 'block';
    }
      
    if (level === 'desa') {
        districtContainer.style.display = 'block';
        updateDistrictOptions();
    }
}

function updateFoodSecurityChart() {
    const level = document.getElementById('levelSelect').value;
    const startQuarter = document.getElementById('fsStartQuarterSelect').value;
    const endQuarter = document.getElementById('fsEndQuarterSelect').value;

    // Validate quarter range
    if (compareQuarters(endQuarter, startQuarter) < 0) {
        alert('Kuartal akhir harus lebih besar dari kuartal awal');
        return;
    }

    let chartData;
    let filteredLabels = [];
    let filteredDatasets = [];

    // Get data based on level
    if (level === 'kota') {
        chartData = foodSecurityData.kota;
    } else if (level === 'kecamatan') {
        const selectedCity = document.getElementById('fsCitySelect').value;
        chartData = foodSecurityData.kecamatan[selectedCity];
    } else if (level === 'desa') {
        const selectedCity = document.getElementById('fsCitySelect').value;
        const selectedDistrict = document.getElementById('districtSelect').value;
        chartData = foodSecurityData.desa[selectedCity][selectedDistrict];
    }

    if (!chartData) return;

    // Filter data based on quarter range
    const startIndex = chartData.labels.findIndex(label => label === startQuarter);
    const endIndex = chartData.labels.findIndex(label => label === endQuarter);

    if (startIndex === -1 || endIndex === -1) return;

    filteredLabels = chartData.labels.slice(startIndex, endIndex + 1);
    filteredDatasets = chartData.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.slice(startIndex, endIndex + 1)
    }));

    // Update chart
    foodSecurityChart.data = {
        labels: filteredLabels,
        datasets: filteredDatasets
    };
    foodSecurityChart.update();
}

function updateFoodSecurityEndQuarterOptions() {
    const startQuarter = document.getElementById('fsStartQuarterSelect').value;
    const endQuarterSelect = document.getElementById('fsEndQuarterSelect');

    let validEndQuarter = false;
    for (const option of endQuarterSelect.options) {
        const isValid = compareQuarters(option.value, startQuarter) >= 0;
        option.disabled = !isValid;
        
        if (option.value === endQuarterSelect.value && isValid) {
            validEndQuarter = true;
        }
    }

    if (!validEndQuarter) {
        endQuarterSelect.value = startQuarter;
    }
}

// === Update Chart Inflasi ===
function updateInflationChart() {
    const selectedCity = document.getElementById('citySelect').value;
    const startDate = document.getElementById('startDateSelect').value;
    const endDate = document.getElementById('endDateSelect').value;

    const [startYear, startMonth] = startDate.split('-').map(Number);
    const [endYear, endMonth] = endDate.split('-').map(Number);

    if (new Date(endYear, endMonth - 1) < new Date(startYear, startMonth - 1)) {
        alert('Tanggal akhir harus lebih besar dari tanggal awal');
        return;
    }

    const labels = [];
    const datasets = Object.keys(inflationDatasetStyles).map(label => makeDataset(label, []));

    for (let year = startYear; year <= endYear; year++) {
        const cityYearData = inflationDataByCityYear[selectedCity][year];
        if (!cityYearData) continue;

        const startM = (year === startYear) ? startMonth : 1;
        const endM = (year === endYear) ? endMonth : 12;

        for (let month = startM; month <= endM; month++) {
            labels.push(`${monthNames[month - 1]} ${year}`);
            datasets.forEach((ds, i) => ds.data.push(cityYearData.datasets[i].data[month - 1]));
        }
    }

    inflationChart.data = { labels, datasets };
    inflationChart.update();
  }

// === Update Pilihan End Date ===
function updateEndDateOptions() {
    const startDate = document.getElementById('startDateSelect').value;
    const endDateSelect = document.getElementById('endDateSelect');
    const [startYear, startMonth] = startDate.split('-').map(Number);

    let valid = false;
    for (const option of endDateSelect.options) {
        const [optYear, optMonth] = option.value.split('-').map(Number);
        const isValid = new Date(optYear, optMonth - 1) >= new Date(startYear, startMonth - 1);
        option.disabled = !isValid;
        if (option.value === endDateSelect.value && isValid) valid = true;
    }
    if (!valid) endDateSelect.value = startDate;
  }

// === Inisialisasi Chart Saat DOM Loaded ===
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Inflation Chart
    const inflationCtx = document.getElementById('inflationChart').getContext('2d');
    inflationChart = new Chart(inflationCtx, { ...chartConfig, data: { labels: [], datasets: [] } });

    // Initialize Food Security Chart
    const foodSecurityCtx = document.getElementById('foodSecurityChart').getContext('2d');
    foodSecurityChart = new Chart(foodSecurityCtx, { ...chartConfig, data: { labels: [], datasets: [] } });

    // Inflation Chart Event Listeners
    document.getElementById('citySelect').addEventListener('change', updateInflationChart);
    document.getElementById('startDateSelect').addEventListener('change', () => {
        updateEndDateOptions();
        updateInflationChart();
    });
    document.getElementById('endDateSelect').addEventListener('change', updateInflationChart);

    // Food Security Chart Event Listeners
    document.getElementById('levelSelect').addEventListener('change', () => {
        toggleFoodSecurityControls();
        updateFoodSecurityChart();
    });
      
    document.getElementById('fsCitySelect').addEventListener('change', () => {
        if (document.getElementById('levelSelect').value === 'desa') {
            updateDistrictOptions();
        }
        updateFoodSecurityChart();
    });
      
    document.getElementById('districtSelect').addEventListener('change', updateFoodSecurityChart);
      
    document.getElementById('fsStartQuarterSelect').addEventListener('change', () => {
        updateFoodSecurityEndQuarterOptions();
        updateFoodSecurityChart();
    });
      
    document.getElementById('fsEndQuarterSelect').addEventListener('change', updateFoodSecurityChart);

    // Initialize charts
    updateInflationChart();
    toggleFoodSecurityControls();
    updateFoodSecurityChart();
});