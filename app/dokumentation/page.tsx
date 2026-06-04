'use client';

import { Button } from '@/components/ui/button';

export default function Dokumentation() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Dokumentation</h1>
      <p className="text-foreground/70 mb-6">
        Erkunden Sie detaillierte Dokumentationstexte und Leitfäden.
      </p>
      <Button>Neue Dokumentation hinzufügen</Button>
    </div>
  );
}
