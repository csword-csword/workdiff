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
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 64px', background: 'white' }} className="min-h-screen">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-12 relative">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

        <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider mb-10 text-[var(--black)] uppercase text-center">
          Client Successes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <Image
                src={`/images/${logo.file}`}
                alt={logo.name}
                width={140}
                height={70}
                className="object-contain"
                style={{ width: 'auto', height: 'auto', maxWidth: '140px', maxHeight: '70px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
