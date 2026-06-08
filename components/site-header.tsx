import { ModeToggle } from "@/components/mode-toggle";
import { SearchForm } from "./search-form";
import Image from "next/image";

export function SiteHeader() {
  return (
    <>
    <div className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-2 lg:my-2">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-48 sm:h-16 sm:w-64 md:h-20 md:w-80 lg:h-24 lg:w-96">
                <Image
                    src="/hhgym/logo-mit-schriftzug-sw.png"
                    alt="HHGYM Logo"
                    fill
                    className="object-contain dark:hidden"
                />
                <Image
                    src="/hhgym/logo-mit-schriftzug-white.png"
                    alt="HHGYM Logo"
                    fill
                    className="object-contain hidden dark:block"
                />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SearchForm />
            <ModeToggle />
          </div>
        </div>
    </div>
    </>
  )
}
