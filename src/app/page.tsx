import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-second-veryLightGray p-6">
      <section className="flex max-sm:flex-col sm:h-3/5 rounded-lg">
        <Card1 />
        <Card2 />
        <Card3 />
      </section>
    </main>
  );
}
