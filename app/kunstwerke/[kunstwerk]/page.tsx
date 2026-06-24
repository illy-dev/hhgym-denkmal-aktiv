import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { kunstwerkeData, getKunstwerk } from "@/lib/kunstwerke-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const dynamicParams = true;

interface PageProps {
  params: Promise<{
    kunstwerk: string;
  }>;
}

export default async function KunstwerkPage({ params }: PageProps) {
  const { kunstwerk } = await params;
  const werk = getKunstwerk(kunstwerk);

  if (!werk) {
    notFound();
  }

  const paragraphs = werk.body
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white pt-36 pb-4">
      <div className="max-w-4xl mx-auto px-4">

          <h1 className="text-4xl font-bold mb-2">{werk.titel}</h1>
          <h2 className="text-xl mb-4">{werk.artist}</h2>

          <Tabs defaultValue="new" className="relative mb-8">
            <TabsList className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 rounded-full bg-white/90 p-1 shadow-md backdrop-blur">
              <TabsTrigger value="new" className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">
                Neue Version
              </TabsTrigger>
              <TabsTrigger value="old" className="rounded-full px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-white">
                Alte Version
              </TabsTrigger>
            </TabsList>
            <TabsContent value="new" className="relative">
              <div className="relative w-full min-h-[60vh] rounded-lg overflow-hidden">
                <Image
                  src={werk.src}
                  alt={werk.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </TabsContent>
            <TabsContent value="old">
              <div className="relative w-full min-h-[60vh] rounded-lg overflow-hidden">
                <Image
                  src={werk.original_src}
                  alt={werk.original_alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-sm">{werk.original_source}</p>
            </TabsContent>
          </Tabs>


        <div className="space-y-4 text-justify leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8">
            <Link href="/kunstwerke" className="text-blue-600 hover:text-blue-800">
            ← Zurück zu Kunstwerke
            </Link>

    </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return kunstwerkeData.map((werk) => ({
    kunstwerk: werk.id,
  }));
}