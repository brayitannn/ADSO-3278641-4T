import Image from "next/image";
import { UsersPage } from "@/components/users/UsersPage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col w-full max-w-3xl items-center justify-between py-16 px-8 bg-white dark:bg-zinc-950 shadow-sm rounded-xl sm:items-start">
        
        {/* Header con Logo */}
        <div className="mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>

        {/* Contenido Dinámico: Aquí insertamos tu componente de Usuarios */}
        <div className="w-full">
          <UsersPage />
        </div>

        {/* Footer con Enlaces (Opcional, movido al final) */}
        <div className="mt-12 flex flex-col gap-4 text-sm font-medium sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full bg-black text-white px-5 transition-colors hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentación
          </a>
        </div>
      </main>
    </div>
  );
}