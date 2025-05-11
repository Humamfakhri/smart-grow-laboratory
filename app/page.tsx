import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Circle, CircleGauge, PanelsLeftBottom } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="p-16">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-extrabold leading-relaxed">Mendorong Kemajuan Pertanian<br />Melalui <span className="text-primary">Inovasi Teknologi</span></h1>
          <p className="mt-3 text-lg text-muted-foreground font-semibold">Wujudkan pertanian yang lebih cerdas, efisien, dan berkelanjutan.</p>
          <Button className="rounded-full px-8 py-6 mt-8 mb-4 text-base">Lihat selengkapnya</Button>
          <ChevronDown className="mx-auto animate-bounce" />
        </div>
        <div className="grid grid-cols-9 gap-8 items-end">
          <div className="col-span-2 bg-white h-80 relative">
            <Image
              src="/hidroponik.jpg"
              alt="hero"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-10 col-span-5 gap-8 items-end">
            <div className="flex flex-col justify-center col-span-3 bg-primary text-center px-3 rounded-2xl h-60">
              <h5 className="text-3xl font-bold text-white mb-2">100+</h5>
              <p className="font-medium text-white/90 text-sm leading-relaxed">Partner dan<br />Client Kami <br />Berkolaborasi</p>
            </div>
            <div className="col-span-4 bg-white p-8 rounded-2xl">
              <div className="bg-secondary inline-flex items-center justify-center p-2 rounded-md mb-4">
                <PanelsLeftBottom className="size-5" />
              </div>
              <p className="text-sm leading-relaxed font-semibold text-secondary-foreground">Total proyek</p>
              <h5 className="text-3xl font-bold mt-1 mb-2">1951+</h5>
              <p className="text-sm leading-relaxed text-muted-foreground">Meningkat <span className="text-green-500 font-bold">120</span> bulan ini</p>
            </div>
            <div className="flex flex-col justify-center col-span-3 bg-secondary text-center px-3 rounded-2xl h-60">
              <h5 className="text-3xl font-bold mb-2">6+</h5>
              <p className="text-sm font-medium leading-relaxed">Tahun pengabdian yang berdedikasi</p>
            </div>
          </div>
          <div className="col-span-2 bg-primary p-8 rounded-2xl flex flex-col gap-4 h-80 justify-end relative overflow-hidden">
            <Circle strokeWidth={4} width={200} height={200} className="text-white/10 absolute top-5 left-5 -translate-1/2"/>
            <CircleGauge className="text-white" />
            <p className="text-white font-medium">Raih Efisiensi yang Optimal dan Dorong Produktifitas!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
