'use client';

import { Button } from '@/components/ui/button';

export default function Kunstwerke() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Kunstwerke</h1>
      <p className="text-foreground/70 mb-6">
        Entdecken Sie Kunstwerke mit detaillierten Erklärungen und Kontext.
      </p>
      <Button>Kunstwerk hinzufügen</Button>
    </div>
  );
}
