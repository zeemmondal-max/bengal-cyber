import Image from "next/image";

export default function Brands() {
  const brands = [
    { name: "TIANAS", logo: "/brands/brand1.png" },
    { name: "National", logo: "/brands/brand2.png" },
    { name: "Labaid", logo: "/brands/brand3.jpg" },
    { name: "SK Agro", logo: "/brands/brand4.jpg" },
    { name: "BD Engineering", logo: "/brands/brand5.jpg" },
    { name: "Bengal Glory Ltd", logo: "/brands/brand6.jpg" },
    { name: "Athenas Furniture", logo: "/brands/brand7.png" },
    { name: "Anawaras Fashion", logo: "/brands/brand8.jpg" },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-primary tracking-widest uppercase mb-2">Trusted By</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight">Brands we work with</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="aspect-square bg-white/70 backdrop-blur-md rounded-3xl shadow-sm border border-white flex items-center justify-center p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/20 transition-all duration-300 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={brand.logo} 
                  alt={`${brand.name} Logo`} 
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 scale-95 group-hover:scale-100 mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
