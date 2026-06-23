"use client";

import Link from "next/link";
import { ArtworkItem } from "@/components/artwork-item";
import { kunstwerkeData } from "@/lib/kunstwerke-data";

export default function Kunstwerke() {
  return (
    <>
      <div className="text-left p-6 pt-36">
        <h1 className="sm:text-3xl md:text-5xl font-bold max-w-[60%]">Kunstwerke von Schülern</h1>
        <p>Hier sind einige der Kunstwerke, die im Rahmen des Projekts an der East Side Gallery entstanden sind:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {kunstwerkeData.map((werk) => (
          <Link key={werk.id} href={`/kunstwerke/${werk.id}`} className="hover:opacity-80 transition-opacity">
            <ArtworkItem src={werk.src} alt={werk.alt} />
          </Link>
        ))}
      </div>
    </>
  );
}
