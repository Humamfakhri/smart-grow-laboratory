import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight, Circle, CircleCheck, CircleGauge, Facebook, Hammer, Instagram, Linkedin, Newspaper, PanelsLeftBottom, UsersRound } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="py-20 container mx-auto min-h-screen flex items-center justify-center">
        <div>
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
                <h5 className="text-3xl font-bold text-white mb-2">20+</h5>
                <p className="font-medium text-white/90 text-sm leading-relaxed">Partner dan<br />Client Kami <br />Berkolaborasi</p>
              </div>
              <div className="col-span-4 bg-white p-8 rounded-2xl">
                <div className="bg-secondary inline-flex items-center justify-center p-2 rounded-md mb-4">
                  <PanelsLeftBottom className="size-5" />
                </div>
                <p className="text-sm leading-relaxed font-semibold text-secondary-foreground">Total proyek</p>
                <h5 className="text-3xl font-bold mt-1 mb-2">52+</h5>
                <p className="text-sm leading-relaxed text-muted-foreground">Meningkat <span className="text-green-500 font-bold">120</span> bulan ini</p>
              </div>
              <div className="flex flex-col justify-center col-span-3 bg-secondary text-center px-3 rounded-2xl h-60">
                <h5 className="text-3xl font-bold mb-2">6+</h5>
                <p className="text-sm font-medium leading-relaxed">Tahun pengabdian yang berdedikasi</p>
              </div>
            </div>
            <div className="col-span-2 bg-primary p-8 rounded-2xl flex flex-col gap-4 h-80 justify-end relative overflow-hidden">
              <Circle strokeWidth={4} width={200} height={200} className="text-white/10 absolute top-5 left-5 -translate-1/2" />
              <CircleGauge className="text-white" />
              <p className="text-white font-medium">Raih Efisiensi yang Optimal dan Dorong Produktifitas!</p>
            </div>
          </div>
        </div>
      </section>
      {/* END OF HERO */}

      {/* FITUR */}
      <section className="bg-primary">
        <div className="container mx-auto py-20 text-white">
          <h1 className="text-center text-4xl font-bold mb-4">Fitur Kami</h1>
          <p className="text-center text-white/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.</p>
          <div className="grid grid-cols-3 gap-6 mt-16">
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
            <div className="bg-[#2e686c] p-8 rounded-2xl">
              <CircleGauge width={32} height={32} />
              <h5 className="font-medium text-lg mb-2 mt-10">Teknologi dan Inovasi</h5>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, exercitationem.</p>
            </div>
          </div>
        </div>
      </section>
      {/* END OF FITUR */}

      {/* BERITA & KEGIATAN */}
      <section>
        <div className="container mx-auto pt-20">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <Newspaper className="size-10 text-white bg-primary rounded p-2 shadow-md shadow-primary/50" />
              <h1 className="text-4xl font-bold leading-relaxed">Berita & Kegiatan</h1>
            </div>
            <p className="font-medium text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white py-6 px-8">
              <h2 className="font-bold text-xl mb-4">Budidaya Aquaponik di Panyileukan</h2>
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                <Image src="/panyileukan.jpg" alt="" fill objectFit="cover" className="rounded-xl" />
              </div>
              <p className="text-foreground/60 font-medium text-justify mt-4 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus debitis a mollitia unde reprehenderit nulla voluptatem aliquam? Deserunt sint expedita voluptas adipisci sit cupiditate repellendus rerum. Iusto, ex impedit.</p>
              <small className="text-muted-foreground text-end mt-4 block">Oktober 2024</small>
            </div>
            <div className="rounded-2xl bg-white py-6 px-8">
              <h2 className="font-bold text-xl mb-4">Budidaya Hidroponik</h2>
              {/* <div className="w-full">
                <Image
                  src="/hidroponik2.jpg"
                  alt="Hidroponik"
                  layout="responsive"
                  width={720}  // Sesuaikan dengan ukuran asli atau estimasi
                  height={540} // Ini akan menentukan rasio aspek
                  className="rounded-xl"
                />
              </div> */}
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                <Image src="/hidroponik2.jpg" alt="" fill objectFit="cover" className="rounded-xl" />
              </div>
              <p className="text-foreground/60 font-medium text-justify mt-4 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus debitis a mollitia unde reprehenderit nulla voluptatem aliquam? Deserunt sint expedita voluptas adipisci sit cupiditate repellendus rerum. Iusto, ex impedit.</p>
              <small className="text-muted-foreground text-end mt-4 block">Oktober 2024</small>
            </div>
            <div className="rounded-2xl bg-white py-6 px-8">
              <h2 className="font-bold text-xl mb-4">Budidaya Aquaponik di Panyileukan</h2>
              <div className="relative w-full" style={{ paddingTop: "100%" }}>
                <Image src="/panyileukan.jpg" alt="" fill objectFit="cover" className="rounded-xl" />
              </div>
              <p className="text-foreground/60 font-medium text-justify mt-4 leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus debitis a mollitia unde reprehenderit nulla voluptatem aliquam? Deserunt sint expedita voluptas adipisci sit cupiditate repellendus rerum. Iusto, ex impedit.</p>
              <small className="text-muted-foreground text-end mt-4 block">Oktober 2024</small>
            </div>
          </div>
        </div>
      </section>
      {/* END OF BERITA & KEGIATAN */}

      {/* PROYEK */}
      <div className="leading-none -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <section className="pb-32 3xl:min-h-auto bg-white">
        {/* <h1 className="under-line text-4xl font-bold mb-4 text-center">Proyek Kami</h1> */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Hammer className="size-8 text-white bg-primary rounded p-1 shadow-lg shadow-primary/50" />
            <h1 className="uppercase text-primary tracking-widest font-bold text-2xl">Proyek</h1>
          </div>
          <div className="grid grid-cols-2 mt-16 gap-12">
            <div>
              <div className="flex items-center justify-center bg-background aspect-square rounded-2xl">
                <Image src="/logo_simona.png" alt="proyek" width={240} height={240} />
              </div>
              <div className="grid grid-cols-5 gap-3 mt-3">
                <div className="relative aspect-square">
                  <Image src="/logo_simona.png" alt="proyek" fill objectFit="cover" className="bg-background rounded ring-2 ring-primary" />
                </div>
                <div className="relative aspect-square">
                  <Image src="/simona_login.png" alt="proyek" fill objectFit="cover" className="rounded" />
                </div>
                <div className="relative aspect-square">
                  <Image src="/simona_dashboard.png" alt="proyek" fill objectFit="cover" className="rounded" />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-3xl font-bold tracking-wider">SiMonA</h2>
                {/* <p className="font-medium text-muted-foreground tracking-wide">(Sistem Monitoring Aquaponik)</p> */}
              </div>
              <p className="tracking-wide text-justify font-medium">Sistem monitoring aquaponik dengan menggunakan IoT dan web dashboard.</p>
              <ul className="mt-6 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CircleCheck className="shrink-0 text-primary" />
                  <div>
                    <p className="font-bold">Realtime</p>
                    <p className="text-justify text-foreground/60 text-sm font-medium leading-relaxed mt-1">Perubahan data dapat dilihat secara realtime atau di saat itu juga.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheck className="shrink-0 text-primary" />
                  <div>
                    <p className="font-bold">Analisis Data</p>
                    <p className="text-justify text-foreground/60 text-sm font-medium leading-relaxed mt-1">Data histori disimpan dan ditampilkan dalam visual berbentuk grafik.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CircleCheck className="shrink-0 text-primary" />
                  <div>
                    <p className="font-bold">Mobilitas</p>
                    <p className="text-justify text-foreground/60 text-sm font-medium leading-relaxed mt-1">Akses data dan pantau dari mana saja selama terhubung dengan internet.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mt-6">
              <div className="h-3 w-3 bg-primary rounded-full"></div>
              <div className="h-3 w-3 bg-sidebar-border rounded-full"></div>
              <div className="h-3 w-3 bg-sidebar-border rounded-full"></div>
              <div className="h-3 w-3 bg-sidebar-border rounded-full"></div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center justify-center bg-sidebar-border rounded-full p-1">
                <ChevronLeft className="text-white -translate-x-[1px]" />
              </div>
              <div className="flex items-center justify-center bg-primary rounded-full p-1">
                <ChevronRight className="text-white translate-x-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF PROYEK */}

      {/* TIM */}
      {/* <section className="bg-[#0b0f12] p-16"> */}
      <section className="bg-linear-to-t from-[#0b0f12] to-primary from-80%">
        <div className="container mx-auto pt-32 pb-16">
          <UsersRound className="text-white bg-primary rounded-lg p-2 size-10 mx-auto mb-4" />
          <h1 className="text-center text-3xl font-bold text-white">Tim Kami</h1>
          <hr className="w-10 mx-auto mt-4 border-t-2 border-primary rounded-full" />
          <div className="grid grid-cols-5 gap-12 py-16 mx-auto">
            <div className="col-span-5 relative h-[360px] aspect-[3/4] w-fit mx-auto bg-[#1f2326] rounded-2xl">
              <Image src="/tim/bu_idi.jpg" alt="Prof. Dr. Indrarini Dyah Irawati, S.T., M.T." fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Prof. Dr. Indrarini Dyah Irawati, S.T., M.T.</p>
                <p className="text-sm text-muted">Pembimbing</p>
              </div>
            </div>
            <div className="relative h-[276px] aspect-[3/4] bg-[#1f2326] rounded-2xl mx-auto">
              <Image src="/tim/ivosierra.jpg" alt="Ivosierra" fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Ivosierra</p>
                <p className="text-sm text-muted">Anggota</p>
              </div>
            </div>
            <div className="relative h-[276px] aspect-[3/4] bg-[#1f2326] rounded-2xl mx-auto">
              <Image src="/tim/elyasa.jpg" alt="Elyasa Reva" fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Elyasa Reva</p>
                <p className="text-sm text-muted">Anggota</p>
              </div>
            </div>
            <div className="relative h-[276px] aspect-[3/4] bg-[#1f2326] rounded-2xl mx-auto">
              <Image src="/humam.png" alt="Humam Ibadillah" fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Humam Ibadillah</p>
                <p className="text-sm text-muted">Anggota</p>
                {/* <p className="text-sm text-muted">IoT & Web Developer</p> */}
              </div>
            </div>
            <div className="relative h-[276px] aspect-[3/4] bg-[#1f2326] rounded-2xl mx-auto">
              <Image src="/tim/daffa.jpg" alt="Daffa Zyaa" fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Daffa Zyaa</p>
                <p className="text-sm text-muted">Anggota</p>
              </div>
            </div>
            <div className="relative h-[276px] aspect-[3/4] bg-[#1f2326] rounded-2xl mx-auto">
              <Image src="/tim/rafhan.jpg" alt="Rafhan" fill objectFit="cover" className="rounded-2xl" />
              <div className="absolute bottom-0 left-0 text-white p-3 w-full bg-linear-to-t from-black via-black/70 to-transparent rounded-b-2xl -mb-1">
                <p className="font-bold">Rafhan</p>
                <p className="text-sm text-muted">Pemain e-Sport</p>
              </div>
            </div>
          </div>
          <hr className="border-none bg-muted-foreground h-[1px] my-16" />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Dari Ide menjadi Solusi</h1>
            <p className="text-input">Bergabung bersama kami dan mulai membangun karya-karya selanjutnya!</p>
            <Button className="rounded-full px-10 py-6 font-semibold text-base mx-auto mt-8 shadow-lg shadow-primary/50">Bergabung</Button>
          </div>
          <hr className="border-none bg-muted-foreground h-[1px] mt-16" />
        </div>
      </section>
      {/* END OF TIM */}

      <footer className="bg-[#0b0f12] p-16">
        <div className="container mx-auto grid grid-cols-6 gap-16 items-center text-input">
          <div className="col-span-2">
            <Image src="/logo_white_footer.png" alt="proyek" width={320} height={320} className="mx-auto" />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3 items-start gap-8">
              <div>
                <p className="mb-4 text-white font-bold">Berita & Kegiatan</p>
                <ul className="flex flex-col gap-4 text-sm">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-white font-bold">Proyek</p>
                <ul className="flex flex-col gap-4 text-sm">
                  <li>Link 1</li>
                  <li>Link 2</li>
                  <li>Link 3</li>
                  <li>Link 4</li>
                </ul>
              </div>
              <div>
                <p className="mb-4 text-white font-bold">Hubungi Kami</p>
                <p className="mb-4 underline hover:text-secondary cursor-pointer">smartgrowlab@gmail.com</p>
                <ul className="flex gap-8 text-sm">
                  <Linkedin className="hover:text-secondary cursor-pointer" />
                  <Instagram className="hover:text-secondary cursor-pointer" />
                  <Facebook className="hover:text-secondary cursor-pointer" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
