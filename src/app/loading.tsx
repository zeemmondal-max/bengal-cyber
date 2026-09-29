import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center min-h-screen">
      <div className="relative animate-pulse flex flex-col items-center">
        <Image 
          src="/logo.png" 
          alt="Bengal Cyber Loading" 
          width={80} 
          height={80} 
          className="object-contain animate-bounce"
        />

        <h2 className="text-xl font-bold text-brand-dark mt-4 tracking-wider">Loading...</h2>
      </div>
    </div>
  );
}
