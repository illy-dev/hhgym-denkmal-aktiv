import Image from "next/image";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export function SiteHeader() {
  return (
    <>
    <div className="fixed inset-x-0 top-4 z-50 mx-auto w-[90%] max-w-6xl border border-primary bg-background rounded-full px-6">
        <div className="flex h-16 items-center md:justify-between sm:justify-center px-2 lg:my-4">
          <div className="flex items-center gap-4">
            <Link href="/" scroll={true}>
            <div className="relative sm:h-16 sm:w-32 md:h-20 md:w-80 lg:h-24 lg:w-96">
                <Image
                    src="/hhgym/logo-mit-schriftzug.png"
                    alt="HHGYM Logo"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, (min-width: 640px) 16rem, 12rem"
                    className="object-contain hidden md:block lg:block"
                />
                <Image
                    src="/hhgym/siegel-transparent.png"
                    alt="HHGYM Logo"
                    width={48}
                    height={48}
                    loading="eager"
                    sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, (min-width: 640px) 16rem, 12rem"
                    className="object-contain md:hidden lg:hidden"
                />
            </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <NavMenu />
          </div>
        </div>
    </div>
    </>
  )
}
