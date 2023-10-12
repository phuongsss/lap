class Product {
   constructor(id, name, lastprice, saleprice = 0, info, img, img1, img2, img3, img4) {
      this.id = id;
      this.name = name;
      this.lastprice = lastprice;
      this.saleprice = saleprice;
      this.info = info;
      this.img = img;
      this.img1 = img1;
      this.img2 = img2;
      this.img3 = img3;
      this.img4 = img4;
   }
}
class Info {
   constructor(cpu, gpu, ds = "Unknown", rs, str, os) {
      this.cpu = cpu;
      this.gpu = gpu;
      this.ds = ds;
      this.rs = rs;
      this.str = str;
      this.os = os;
   }
}
export let prd = {
   asus: [
      new Product(
         Math.random(),
         "ROG Flow Z13-ACRNM RMT02 GZ301VIC-RMT02",
         2499.99,
         undefined,
         new Info(
            "13th Gen Intel® Core™ i9-13900H",
            "NVIDIA® GeForce RTX™ 4070 Laptop GPU",
            "ROG Nebula Display",
            "13.4 inch, QHD+ 16:10 (2560 x 1600",
            "1TB PCIe® 4.0 NVMe™ M.2 SSD (2230)",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/0.png",
         "./img/sanpham/asus/0-1.png",
         "./img/sanpham/asus/0-2.png",
         "./img/sanpham/asus/0-3.png",
         "./img/sanpham/asus/0-4.png"
      ),
      new Product(
         Math.random(),
         "ROG Flow Z13 (2023) GZ301VV-MU013X",
         1749.99,
         undefined,
         new Info(
            "13th Gen Intel® Core™ i9-13900H",
            "NVIDIA® GeForce RTX™ 4060 Laptop GPU",
            "ROG Nebula Display",
            "13.4 inch, QHD+ 16:10 (2560 x 1600",
            "1TB PCIe® 4.0 NVMe™ M.2 SSD (2230)",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/1.png",
         "./img/sanpham/asus/1-1.png",
         "./img/sanpham/asus/1-2.png",
         "./img/sanpham/asus/1-3.png",
         "./img/sanpham/asus/1-4.png"
      ),
      new Product(
         Math.random(),
         "ROG Zephyrus G14 (2023) GA402XZ-0007",
         1599.99,
         32,
         new Info(
            "AMD Ryzen™ 9 7940HS",
            "NVIDIA® GeForce RTX™ 4080 Laptop GPU",
            "ROG Nebula Display",
            "13.4 inch, QHD+ 16:10 (2560 x 1600",
            "1TB PCIe® 4.0 NVMe™ M.2 SSD (2230)",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/2.png",
         "./img/sanpham/asus/2-1.png",
         "./img/sanpham/asus/2-2.png",
         "./img/sanpham/asus/2-3.png",
         "./img/sanpham/asus/2-4.png"
      ),
      new Product(
         Math.random(),
         "ROG Zephyrus Duo 16 (2023) GX650PZ-NM055X",
         3499.99,
         11,
         new Info(
            "AMD Ryzen™ 9 7945HX",
            "NVIDIA® GeForce RTX™ 4080 Laptop GPU",
            "16 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz",
            "14 3840 x 1100(4K) IPS-level Panel",
            "2TB + 2TB PCIe® 4.0 NVMe™ M.2 Performance SSD (RAID 0)",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/3.png",
         "./img/sanpham/asus/3-1.png",
         "./img/sanpham/asus/3-2.png",
         "./img/sanpham/asus/3-3.png",
         "./img/sanpham/asus/3-4.png"
      ),
      new Product(
         Math.random(),
         "ROG Strix SCAR 17 X3D (2023) G733PYV-LL061X",
         2899.99,
         10,
         new Info(
            "AMD Ryzen™ 9 7945HX",
            "NVIDIA® GeForce RTX™ 4090 Laptop GPU",
            undefined,
            "17.3 inch, WQHD (2560 x 1440) 16:9, Refresh Rate:240Hz",
            "2TB PCIe® 4.0 NVMe™ M.2 Performance SSD",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/4.png",
         "./img/sanpham/asus/4-1.png",
         "./img/sanpham/asus/4-2.png",
         "./img/sanpham/asus/4-3.png",
         "./img/sanpham/asus/4-4.png"
      ),
      new Product(
         Math.random(),
         "ROG Strix SCAR 18 (2023) G834JZ-N6027X",
         3899.0,
         undefined,
         new Info(
            "13th Gen Intel® Core™ i9-13980HX",
            "NVIDIA® GeForce RTX™ 4080 Laptop GPU",
            "ROG Nebula Display",
            "18 inch, QHD+ 16:10 (2560 x 1600, WQXGA), Refresh Rate:240Hz",
            "2TB + 2TB PCIe® 4.0 NVMe™ M.2 Performance SSD (RAID 0)",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/5.png",
         "./img/sanpham/asus/5-1.png",
         "./img/sanpham/asus/5-2.png",
         "./img/sanpham/asus/5-3.png",
         "./img/sanpham/asus/5-4.png"
      ),
      new Product(
         Math.random(),
         "ASUS TUF Gaming A16 Advantage Edition (2023)",
         949.99,
         8,
         new Info(
            "Up to AMD Ryzen™ 7040 Series Processor",
            "Up to AMD Radeon™ RX7700S Mobile Graphics",
            undefined,
            "Up to QHD 240Hz 16-inch display",
            "Up to 2TB PCIe Gen4x4 SSD, DDR5 RAM",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/6.png",
         "./img/sanpham/asus/6-1.png",
         "./img/sanpham/asus/6-2.png",
         "./img/sanpham/asus/6-3.png",
         "./img/sanpham/asus/6-4.png"
      ),
      new Product(
         Math.random(),
         "ASUS TUF Gaming A17 (2022)",
         1499.99,
         undefined,
         new Info(
            "AMD Ryzen™ 7 6800H Processor",
            "Up to GeForce RTX™ 3070 Laptop GPU",
            undefined,
            "17.3” FHD 144Hz Display",
            "MIL-STD-810H Standards",
            "Windows 11 Pro"
         ),

         "./img/sanpham/asus/7.png",
         "./img/sanpham/asus/7-1.png",
         "./img/sanpham/asus/7-2.png",
         "./img/sanpham/asus/7-3.png",
         "./img/sanpham/asus/7-4.png"
      ),
      new Product(
         Math.random(),
         "ExpertBook B9 OLED (B9403, 13th Gen Intel)",
         2439.99,
         20,
         new Info(
            "Up to 13th gen Intel® Core™ processor with vPro® support",
            "Intel Iris Xe Graphics",
            undefined,
            "16:10 WQXGA+ OLED display",
            "Ultralight sustainable design",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/8.png",
         "./img/sanpham/asus/8-1.png",
         "./img/sanpham/asus/8-2.png",
         "./img/sanpham/asus/8-3.png",
         "./img/sanpham/asus/8-4.png"
      ),
      new Product(
         Math.random(),
         "ExpertBook B5 (B5602, 13th Gen Intel)",
         1699.99,
         23,
         new Info(
            "Up to 13th gen Intel® Core™ i7 vPro processor",
            "Intel Iris Xe Graphics",
            undefined,
            "World’s lightest 16” business laptop from 1.4kg",
            "Dual-SSD RAID support up to 2 TB capacity",
            "Windows 11 Pro"
         ),
         "./img/sanpham/asus/9.png",
         "./img/sanpham/asus/9-1.png",
         "./img/sanpham/asus/9-2.png",
         "./img/sanpham/asus/9-3.png",
         "./img/sanpham/asus/9-4.png"
      ),
   ],
   msi: [
      new Product(
         Math.random(),
         "Titan GT77 HX 13V",
         3199.0,
         19,
         new Info(
            "Intel® Core™ i9-13980HX processor",
            "GEFORCE RTX 40 SERIES LAPTOPS",
            undefined,
            "Mini LED 4K 144Hz Display",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/1.png",
         "./img/sanpham/msi/1-1.png",
         "./img/sanpham/msi/1-2.png",
         "./img/sanpham/msi/1-3.png",
         "./img/sanpham/msi/1-4.png"
      ),
      new Product(
         Math.random(),
         "Stealth 16 Mercedes-AMG Motorsport A13V",
         2899.0,
         undefined,
         new Info(
            " Performance compared to previous gen i9-12900H. Specs varies by model",
            "Up to latest GeForce RTX™ 4070 Laptop GPU 8GB GDDR6",
            "Magnesium-Aluminum Alloy Chassis",
            "16 UHD+ (3840 x 2400), 16:10, 100% DCI-P3 (Typ.), OLED panel",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/1.png",
         "./img/sanpham/msi/1-1.png",
         "./img/sanpham/msi/1-2.png",
         "./img/sanpham/msi/1-3.png",
         "./img/sanpham/msi/1-4.png"
      ),
      new Product(
         Math.random(),
         "Stealth 17 Studio A13V",
         2793.89,
         undefined,
         new Info(
            "Up to latest 13th Gen. Intel® Core™ i9 processor",
            "Up to latest GeForce RTX™ 4090 Laptop GPU 16GB GDDR6",
            "17.3 miniLED 4k 144Hz 100% sRGB (Typical), IPS-Level panel (Optional)",
            "17.3 QHD (2560x1440), 240 Hz Refresh Rate, 100% DCI-P3(Typical), IPS-Level panel (Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/2.png",
         "./img/sanpham/msi/2-1.png",
         "./img/sanpham/msi/2-2.png",
         "./img/sanpham/msi/2-3.png",
         "./img/sanpham/msi/2-4.png"
      ),
      new Product(
         Math.random(),
         "STEALTH 17M",
         2793.89,
         undefined,
         new Info(
            "Latest 12th Gen Intel® Core™ i7 processor",
            "Latest GeForce RTX™ 3060 Laptop GPU 6GB GDDR6",
            "Ultra-light 2.2kg, Ultra-slim 21.55mm",
            "17.3 FHD(1920x1080), 144Hz Refresh Rate, IPS-Level panel(Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/3.png",
         "./img/sanpham/msi/3-1.png",
         "./img/sanpham/msi/3-2.png",
         "./img/sanpham/msi/3-3.png",
         "./img/sanpham/msi/3-4.png"
      ),
      new Product(
         Math.random(),
         "Raider GE78 HX Smart Touchpad 13V",
         2599.0,
         undefined,
         new Info(
            "Latest Intel® Core™ i9-13980HX processor",
            "Latest GeForce RTX™ 4070 Laptop GPU 8GB GDDR6",
            undefined,
            "17 QHD+ (2560x1600), 240 Hz Refresh Rate, 100% DCI-P3(Typical), IPS-Level panel (Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/4.png",
         "./img/sanpham/msi/4-1.png",
         "./img/sanpham/msi/4-2.png",
         "./img/sanpham/msi/4-3.png",
         "./img/sanpham/msi/4-4.png"
      ),
      new Product(
         Math.random(),
         "Latest 12th Gen. Intel® Core™ i9 processor",
         1859.0,
         undefined,
         new Info(
            "Latest Intel® Core™ i9-13980HX processor",
            "Up to latest GeForce RTX™ 3080 Ti Laptop GPU 16GB GDDR6",
            "17. UHD (3840x2160), 120 Hz Refresh Rate, 100% DCI-P3, IPS-Level panel (Optional)",
            "17.3 QHD (2560x1440), 240 Hz Refresh Rate, 100% DCI-P3(Typical), IPS-Level panel (Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/5.png",
         "./img/sanpham/msi/5-1.png",
         "./img/sanpham/msi/5-2.png",
         "./img/sanpham/msi/5-3.png",
         "./img/sanpham/msi/5-4.png"
      ),
      new Product(
         Math.random(),
         "Vector GP78 HX 13V",
         4499.0,
         undefined,
         new Info(
            "Up to the 13th Gen. Intel® Core™ i9-13980HX processor",
            "Up to the latest GeForce RTX™ 4090 Laptop GPU 16GB GDDR6",
            "Powered by NVIDIA® DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
            "17 QHD+ (2560x1600), 240Hz Refresh Rate, 100% DCI-P3 (Typical)(Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/6.png",
         "./img/sanpham/msi/6-1.png",
         "./img/sanpham/msi/6-2.png",
         "./img/sanpham/msi/6-3.png",
         "./img/sanpham/msi/6-4.png"
      ),
      new Product(
         Math.random(),
         "Vector GP78 HX 13V",
         2399.0,
         undefined,
         new Info(
            "Up to latest 12th Gen. Intel® Core™ i9 processor",
            "Up to latest GeForce RTX™ 3080 Laptop GPU 8GB GDDR6",
            "17.3 QHD(2560x1440), 240Hz Refresh Rate, 100% DCI-P3 (Typical), IPS-Level panel(Optional)",
            "17.3 FHD(1920x1080), 360Hz Refresh Rate, IPS-Level panel(Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/7.png",
         "./img/sanpham/msi/7-1.png",
         "./img/sanpham/msi/7-2.png",
         "./img/sanpham/msi/7-3.png",
         "./img/sanpham/msi/7-4.png"
      ),
      new Product(
         Math.random(),
         "Vector GP78 HX 13V",
         2399.0,
         undefined,
         new Info(
            "Up to latest 12th Gen. Intel® Core™ i9 processor",
            "Up to latest GeForce RTX™ 3080 Laptop GPU 8GB GDDR6",
            "17.3 QHD(2560x1440), 240Hz Refresh Rate, 100% DCI-P3 (Typical), IPS-Level panel(Optional)",
            "17.3 FHD(1920x1080), 360Hz Refresh Rate, IPS-Level panel(Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/8.png",
         "./img/sanpham/msi/8-1.png",
         "./img/sanpham/msi/8-2.png",
         "./img/sanpham/msi/8-3.png",
         "./img/sanpham/msi/8-4.png"
      ),
      new Product(
         Math.random(),
         "Pulse 15 B13V",
         1769.0,
         undefined,
         new Info(
            "Up to Intel® Core™ i7-13700H processor",
            "Up to latest GeForce RTX™ 4070 Laptop GPU 8GB GDDR6",
            "15.6 QHD (2560x1440), 240Hz Refresh Rate, 100% DCI-P3 (Typical) (Optional)",
            "15.6 Full HD (1920x1080), 360 Hz Refresh Rate, IPS-Level panel (Optional)",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/msi/9.png",
         "./img/sanpham/msi/9-1.png",
         "./img/sanpham/msi/9-2.png",
         "./img/sanpham/msi/9-3.png",
         "./img/sanpham/msi/9-4.png"
      ),
   ],
   gigabyte: [
      new Product(
         Math.random(),
         "G6 (2023)",
         1099.0,
         20,
         new Info(
            "The G6 gaming laptop is equipped with the Intel® Core™ i7 / i5 processor",
            "NVIDIA® GeForce RTX™ 40 Series Laptop GPUs power the world’s fastest laptops for gamers and creators",
            undefined,
            "The 165Hz high refresh rate display",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/0.png",
         "./img/sanpham/gigabyte/0-1.png",
         "./img/sanpham/gigabyte/0-2.png",
         "./img/sanpham/gigabyte/0-3.png",
         "./img/sanpham/gigabyte/0-4.png"
      ),
      new Product(
         Math.random(),
         "A5 (AMD Ryzen™ 5000 Series)",
         1749.0,
         undefined,
         new Info(
            "AMD Ryzen™ 5000 HX-Series Mobile Processors",
            "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs",
            undefined,
            "15.6 Thin Bezel FHD IPS-Level 240Hz/144Hz display",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/1.png",
         "./img/sanpham/gigabyte/1-1.png",
         "./img/sanpham/gigabyte/1-2.png",
         "./img/sanpham/gigabyte/1-3.png",
         "./img/sanpham/gigabyte/1-4.png"
      ),
      new Product(
         Math.random(),
         "AERO 16 OLED (2023)",
         2299.0,
         9,
         new Info(
            "13th Gen Intel® Core™ i9/i7 Processor H-Series",
            "NVIDIA® GeForce RTX™ 40 Series Laptop GPUs",
            undefined,
            "The AERO 16 OLED creator laptop is equipped with a 4K+ OLED HDR bezel-less screen",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/2.png",
         "./img/sanpham/gigabyte/2-1.png",
         "./img/sanpham/gigabyte/2-2.png",
         "./img/sanpham/gigabyte/2-3.png",
         "./img/sanpham/gigabyte/2-4.png"
      ),
      new Product(
         Math.random(),
         "AERO 17 HDR (RTX 30 Series)",
         2999.0,
         undefined,
         new Info(
            "10th Gen Intel® Core™ i9 / i7 Processor H-Series",
            "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs",
            "AERO 17 HDR Creator Laptop: The 17” 4K HDR thin bezel not only looks good, but is suitable for media editing such as video post-production",
            "4K HDR Display with ADOBE RGB 100% Color Gamut",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/3.png",
         "./img/sanpham/gigabyte/3-1.png",
         "./img/sanpham/gigabyte/3-2.png",
         "./img/sanpham/gigabyte/3-3.png",
         "./img/sanpham/gigabyte/3-4.png"
      ),
      new Product(
         Math.random(),
         "AORUS 16 (2023)",
         1499.0,
         undefined,
         new Info(
            "13th gen Intel® Core™ i7-13700H",
            "NVIDIA® GeForce RTX™ 4070 laptop GPU",
            undefined,
            "New 16 Horizons",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/4.png",
         "./img/sanpham/gigabyte/4-1.png",
         "./img/sanpham/gigabyte/4-2.png",
         "./img/sanpham/gigabyte/4-3.png",
         "./img/sanpham/gigabyte/4-4.png"
      ),
      new Product(
         Math.random(),
         "AORUS 7 (2023)",
         1149.0,
         undefined,
         new Info(
            "12th Gen Intel® Core™ i5 H-Series Processor",
            "NVIDIA® GeForce RTX™ 40 Series Laptop GPUs, powered by NVIDIA DLSS 3, ultra-efficient Ada Lovelace arch, and Max-Q Technologies.",
            undefined,
            "Up to 17.3 16:9 FHD(1920 x 1080) 360Hz Panel",
            "More Storage. More Memory. More Expansion",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/5.png",
         "./img/sanpham/gigabyte/5-1.png",
         "./img/sanpham/gigabyte/5-2.png",
         "./img/sanpham/gigabyte/5-3.png",
         "./img/sanpham/gigabyte/5-4.png"
      ),
      new Product(
         Math.random(),
         "AORUS 17X (2023)",
         2699.0,
         7,
         new Info(
            "Up to 13th Gen Intel® Core™ i9 HX-Series 24 Cores Processor",
            "NVIDIA® GeForce RTX™ 40 Series Laptop GPUs, powered by NVIDIA DLSS 3",
            undefined,
            "Up to 17.3 16:9 QHD(2560 x 1440) 240Hz Panel",
            "Supports DDR5-5600 Memory",
            "Windows 11 Pro"
         ),
         "./img/sanpham/gigabyte/6.png",
         "./img/sanpham/gigabyte/6-1.png",
         "./img/sanpham/gigabyte/6-2.png",
         "./img/sanpham/gigabyte/6-3.png",
         "./img/sanpham/gigabyte/6-4.png"
      ),
   ],
   acer: [
      new Product(
         Math.random(),
         "Nitro 16 Gaming Laptop - AN16-41-R6HK",
         1199.99,
         33,
         new Info(
            "AMD Ryzen 5 7535HS Hexa-Core Processor (Up to 4.55GHz)",
            "NVIDIA® GeForce RTX 4050 Laptop GPU",
            undefined,
            "16.0 WUXGA (1920 x 1200) IPS display with NVIDIA G-SYNC™ & NVIDIA Advanced Optimus",
            "512GB solid state drive",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/0.png",
         "./img/sanpham/acer/0-1.png",
         "./img/sanpham/acer/0-2.png",
         "./img/sanpham/acer/0-3.png",
         "./img/sanpham/acer/0-4.png"
      ),
      new Product(
         Math.random(),
         "Nitro 5 Gaming Laptop - AN515-58-552Y",
         999.99,
         undefined,
         new Info(
            "Intel® Core™ i5-12450H processor Octa-core 3.30 GHz",
            "NVIDIA® GeForce RTX™ 4050 with 6 GB dedicated memory",
            undefined,
            "15.6 Full HD (1920 x 1080) 16:9 144 Hz",
            "512 GB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/1.png",
         "./img/sanpham/acer/1-1.png",
         "./img/sanpham/acer/1-2.png",
         "./img/sanpham/acer/1-3.png",
         "./img/sanpham/acer/1-4.png"
      ),
      new Product(
         Math.random(),
         "Nitro 5 Gaming Laptop - AN517-42-R5KZ",
         1799.99,
         44,

         new Info(
            "AMD Ryzen™ 7 6800H processor Octa-core 3.20 GHz",
            "NVIDIA® GeForce RTX™ 3070 with 8 GB dedicated memory",
            undefined,
            "17.3 QHD (2560 x 1440) 16:9 165 Hz",
            "1 TB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/2.png",
         "./img/sanpham/acer/2-1.png",
         "./img/sanpham/acer/2-2.png",
         "./img/sanpham/acer/2-3.png",
         "./img/sanpham/acer/2-4.png"
      ),
      new Product(
         Math.random(),
         "Predator Helios 16",
         1649.99,
         undefined,

         new Info(
            "Intel® Core™ i7-13700HX processor Hexadeca-core 2.10 GHz",
            "NVIDIA® GeForce RTX™ 4060 with 8 GB dedicated memory",
            undefined,
            "16 WQXGA (2560 x 1600) 16:10 165 Hz",
            "1 TB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/3.png",
         "./img/sanpham/acer/3-1.png",
         "./img/sanpham/acer/3-2.png",
         "./img/sanpham/acer/3-3.png",
         "./img/sanpham/acer/3-4.png"
      ),
      new Product(
         Math.random(),
         "Predator Helios 18",
         1649.99,
         undefined,

         new Info(
            "Intel® Core™ i7-13700HX processor Hexadeca-core 2.10 GHz",
            "NVIDIA® GeForce RTX™ 4060 with 8 GB dedicated memory",
            undefined,
            "18 WUXGA (1920 x 1200) 16:10 165 Hz",
            "1 TB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/4.png",
         "./img/sanpham/acer/4-1.png",
         "./img/sanpham/acer/4-2.png",
         "./img/sanpham/acer/4-3.png",
         "./img/sanpham/acer/4-4.png"
      ),
      new Product(
         Math.random(),
         "Predator Helios 18",
         1749.99,
         undefined,

         new Info(
            "Intel® Core™ i7-12700H processor Tetradeca-core 2.30 GHz",
            "NVIDIA® GeForce RTX™ 3060 with 6 GB dedicated memory",
            undefined,
            "17.3 Full HD (1920 x 1080) 16:9 144 Hz",
            "512 GB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/5.png",
         "./img/sanpham/acer/5-1.png",
         "./img/sanpham/acer/5-2.png",
         "./img/sanpham/acer/5-3.png",
         "./img/sanpham/acer/5-4.png"
      ),
      new Product(
         Math.random(),
         "Predator Triton 300 SE",
         1599.99,
         undefined,

         new Info(
            "Intel® Core™ i7-12700H processor Tetradeca-core 2.30 GHz",
            "NVIDIA® GeForce RTX™ 3060 graphics",
            undefined,
            "14 WUXGA (1920 x 1200) IPS display",
            "512 GB solid state drive",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/6.png",
         "./img/sanpham/acer/6-1.png",
         "./img/sanpham/acer/6-2.png",
         "./img/sanpham/acer/6-3.png",
         "./img/sanpham/acer/6-4.png"
      ),
      new Product(
         Math.random(),
         "Predator Triton 500 SE",
         2399.99,
         undefined,

         new Info(
            "Intel® Core™ i7-11800H processor Octa-core 2.40 GHz",
            "NVIDIA® GeForce RTX™ 3080 with 8 GB dedicated memory",
            undefined,
            "16 WQXGA (2560 x 1600) 16:10 165 Hz",
            "1 TB SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/acer/7.png",
         "./img/sanpham/acer/7-1.png",
         "./img/sanpham/acer/7-2.png",
         "./img/sanpham/acer/7-3.png",
         "./img/sanpham/acer/7-4.png"
      ),
      new Product(
         Math.random(),
         "ConceptD 3 Laptop",
         999.99,
         undefined,

         new Info(
            "Intel® Core™ i5-10300H processor Quad-core 2.50 GHz",
            "Intel® UHD Graphics shared memory",
            undefined,
            "14 Full HD (1920 x 1080) 16:9",
            "256 GB SSD",
            "Windows 10 Home"
         ),
         "./img/sanpham/acer/8.png",
         "./img/sanpham/acer/8-1.png",
         "./img/sanpham/acer/8-2.png",
         "./img/sanpham/acer/8-3.png",
         "./img/sanpham/acer/8-4.png"
      ),
      new Product(
         Math.random(),
         "Aspire 1 Laptop",
         299.99,
         40,

         new Info(
            "Intel® Celeron® N4500 processor Dual-core 1.10 GHz",
            "Intel® UHD Graphics shared memory",
            undefined,
            "15.6 Full HD (1920 x 1080) 16:9",
            "64 GB Flash Memory",
            "Windows 11 Home in S Mode"
         ),
         "./img/sanpham/acer/9.png",
         "./img/sanpham/acer/9-1.png",
         "./img/sanpham/acer/9-2.png",
         "./img/sanpham/acer/9-3.png",
         "./img/sanpham/acer/9-4.png"
      ),
      new Product(
         Math.random(),
         "Swift X Laptop - SFX16-52G-73U6",
         1249.99,
         36,

         new Info(
            "Intel® Core™ i7-1260P processor Dodeca-core 2.10 GHz",
            "Intel® Arc A370M with 4 GB dedicated memory",
            undefined,
            "16 WUXGA (1920 x 1200) 16:10",
            "512 GB SSD",
            "Windows 11 Home in S Mode"
         ),
         "./img/sanpham/acer/10.png",
         "./img/sanpham/acer/10-1.png",
         "./img/sanpham/acer/10-2.png",
         "./img/sanpham/acer/10-3.png",
         "./img/sanpham/acer/10-4.png"
      ),
   ],
   ios: [
      new Product(
         Math.random(),
         "MacBook Air M1",
         1178.0,
         21,

         new Info(
            "System on Chip (SoC) Apple M1 chip",
            "Up to Apple 8-core GPU",
            undefined,
            "13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors",
            "256GB to 2TB storage20",
            "IOS"
         ),
         "./img/sanpham/ios/0.png",
         "./img/sanpham/ios/0-1.png",
         "./img/sanpham/ios/0-2.png",
         "./img/sanpham/ios/0-3.png",
         "./img/sanpham/ios/0-4.png"
      ),
      new Product(
         Math.random(),
         "MacBook Air M2",
         1272.5,
         undefined,

         new Info(
            "System on Chip (SoC), Apple M2 chip",
            "Apple 10-core GPU",
            undefined,
            "15.3-inch (diagonal) LED-backlit display with IPS technology; 2880-by-1864 native resolution at 224 pixels per inch with support for 1 billion colors, 500 nits brightness, Wide color (P3), True Tone technology",
            "256GB to 2TB storage20",
            "macOS"
         ),
         "./img/sanpham/ios/1.png",
         "./img/sanpham/ios/1-1.png",
         "./img/sanpham/ios/1-2.png",
         "./img/sanpham/ios/1-3.png",
         "./img/sanpham/ios/1-4.png"
      ),
      new Product(
         Math.random(),
         "MacBook Pro M2",
         2434.99,
         undefined,

         new Info(
            "System on Chip (SoC), Apple M2 Pro or M2 Max chip, Up to 12-core CPU with 8 performance cores and 4 efficiency cores",
            "Apple 16-core GPU or Apple 19-core GPU or Apple 30-core GPU",
            undefined,
            "System on Chip (SoC), Apple M2 Pro or M2 Max chip, Up to 12-core CPU with 8 performance cores and 4 efficiency cores",
            "256GB to 2TB storage20",
            "macOS"
         ),
         "./img/sanpham/ios/2.png",
         "./img/sanpham/ios/2-1.png",
         "./img/sanpham/ios/2-2.png",
         "./img/sanpham/ios/2-3.png",
         "./img/sanpham/ios/2-4.png"
      ),
      new Product(
         Math.random(),
         "MacBook Pro",
         5299.0,
         undefined,

         new Info(
            "M2 Max Chip with 12-Core CPU",
            "M2 Max Chip with 38-Core GPU",
            undefined,
            "Apple MacBook Pro 16.2 with Liquid Retina XDR Display",
            "256GB to 2TB storage20",
            "macOS 10.14 Mojave"
         ),
         "./img/sanpham/ios/3.png",
         "./img/sanpham/ios/3-1.png",
         "./img/sanpham/ios/3-2.png",
         "./img/sanpham/ios/3-3.png",
         "./img/sanpham/ios/3-4.png"
      ),
   ],
   hp: [
      new Product(
         Math.random(),
         "Victus by HP Gaming Laptop16t-r000, 16.1",
         1149.99,
         undefined,

         new Info(
            "Intel® Core™ i5-13500H (up to 4.7 GHz, 18 MB L3 cache, 12 cores, 16 threads)",
            " NVIDIA® GeForce RTX™ 3050 Laptop GPU (6 GB)",
            undefined,
            "16.1 diagonal, FHD (1920 x 1080), 144 Hz, IPS, micro-edge, anti-glare, 250 nits",
            "512 GB PCIe® NVMe™ TLC M.2 SSD (4x4 SSD)",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/0.png",
         "./img/sanpham/hp/0-1.png",
         "./img/sanpham/hp/0-2.png",
         "./img/sanpham/hp/0-3.png",
         "./img/sanpham/hp/0-4.png"
      ),
      new Product(
         Math.random(),
         "OMEN Laptop",
         1299.99,
         undefined,

         new Info(
            "Intel® Core™ i7-13700HX (up to 5.0 GHz, 30 MB L3 cache, 16 cores, 24 threads) ",
            "NVIDIA® GeForce RTX™ 4060 Laptop GPU (8 GB)",
            undefined,
            "17.3 diagonal, FHD (1920 x 1080), 144 Hz, 7 ms response time, IPS, micro-edge, anti-glare, Low Blue Light, 300 nits",
            "512 GB PCIe® NVMe™ TLC M.2 SSD (4x4 SSD)",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/1.png",
         "./img/sanpham/hp/1-1.png",
         "./img/sanpham/hp/1-2.png",
         "./img/sanpham/hp/1-3.png",
         "./img/sanpham/hp/1-4.png"
      ),
      new Product(
         Math.random(),
         "Victus by HP Gaming Laptop 15z-fb100, 15.6",
         699.99,
         undefined,

         new Info(
            "AMD Ryzen™ 5 7535HS (up to 4.55 GHz, 16 MB L3 cache, 6 cores, 12 threads)",
            "NVIDIA® GeForce RTX™ 2050 Laptop GPU (4 GB)",
            undefined,
            "15.6 diagonal, FHD (1920 x 1080), IPS, micro-edge, anti-glare, 250 nits",
            "512 GB PCIe® NVMe™ TLC M.2 SSD (4x4 SSD)",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/2.png",
         "./img/sanpham/hp/2-1.png",
         "./img/sanpham/hp/2-2.png",
         "./img/sanpham/hp/2-3.png",
         "./img/sanpham/hp/2-4.png"
      ),
      new Product(
         Math.random(),
         "OMEN by HP Gaming Laptop 16t-wf000, 16.1",
         1149.99,
         undefined,

         new Info(
            "Intel® Core™ i5-13500H (up to 4.7 GHz, 18 MB L3 cache, 12 cores, 16 threads) ",
            "NVIDIA® GeForce RTX™ 3050 Laptop GPU (6 GB)",
            undefined,
            "16.1 diagonal, FHD (1920 x 1080), 144 Hz, IPS, micro-edge, anti-glare, 250 nits",
            "512 GB PCIe® NVMe™ TLC M.2 SSD (4x4 SSD)",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/3.png",
         "./img/sanpham/hp/3-1.png",
         "./img/sanpham/hp/3-2.png",
         "./img/sanpham/hp/3-3.png",
         "./img/sanpham/hp/3-4.png"
      ),
      new Product(
         Math.random(),
         "HP Envy Laptop 16-h1047nr",
         1149.99,
         undefined,

         new Info(
            "13th Generation Intel® Core™ i7 processor",
            "Intel® Arc™ A370M Graphics (4 GB GDDR6 dedicated)",
            undefined,
            "16 diagonal, WQXGA (2560 x 1600), multitouch-enabled, 120 Hz, IPS, edge-to-edge glass, micro-edge, Low Blue Light, 400 nits, 100% sRGB[17,35]",
            "1 TB PCIe® Gen4 NVMe™ TLC M.2 SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/4.png",
         "./img/sanpham/hp/4-1.png",
         "./img/sanpham/hp/4-2.png",
         "./img/sanpham/hp/4-3.png",
         "./img/sanpham/hp/4-4.png"
      ),
      new Product(
         Math.random(),
         "HP Pavilion x360",
         969.99,
         undefined,

         new Info(
            "12th Generation Intel® Core™ i5 processor",
            "Intel® Iris® Xᵉ Graphics",
            undefined,
            "15.6 diagonal, FHD (1920 x 1080), multitouch-enabled, IPS, edge-to-edge glass, micro-edge, 250 nits, 45% NTSC",
            "256 GB PCIe® NVMe™ M.2 SSD",
            "Windows 11 Home"
         ),
         "./img/sanpham/hp/5.png",
         "./img/sanpham/hp/5-1.png",
         "./img/sanpham/hp/5-2.png",
         "./img/sanpham/hp/5-3.png",
         "./img/sanpham/hp/5-4.png"
      ),
   ],
};
