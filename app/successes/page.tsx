import Image from "next/image";

export default function Successes() {
  const logos = [
    { name: "UP", file: "UP.png" },
    { name: "BP", file: "bp.png" },
    { name: "Cast", file: "cast.png" },
    { name: "iRise", file: "irise.png" },
    { name: "Prove", file: "prove.png" },
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-12 relative">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

        <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider mb-10 text-[var(--black)] uppercase text-center">
          Client Successes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center p-4">
              <Image
                src={`/images/${logo.file}`}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                style={{ width: 'auto', height: 'auto', maxWidth: '120px', maxHeight: '60px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
