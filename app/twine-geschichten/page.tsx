'use client';

import { Button } from '@/components/ui/button';

export default function TwineGeschichten() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Twine Geschichten</h1>
      <p className="text-foreground/70 mb-6">
        Willkommen zum Abschnitt Twine Geschichten. Fügen Sie hier Ihre interaktiven Fiktionsprojekte ein.
      </p>
      <Button>Neue Geschichte erstellen</Button>
    </div>
  );
}
