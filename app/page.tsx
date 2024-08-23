import Image from "next/image";
import {ModeToggle} from "@/components/mode-toggle";
import {FloatingDock} from "@/components/ui/floating-dock";
import React from "react";
import {IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2} from "@tabler/icons-react";
import {BackgroundBeams} from "@/components/ui/background-beams";

export default function Home() {

  const links = [
    {
      title: "Home",
      icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
          <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
          <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
          <Image
              src="https://assets.aceternity.com/logo-dark.png"
              width={20}
              height={20}
              alt="Aceternity Logo"
          />
      ),
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
          <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
          <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <main className="md:relative flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundBeams className={'absolute z-10 w-full h-full'}/>
      <div className={'absolute z-20 items-center bottom-6'}>
        <FloatingDock items={links}/>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className=" font-bold">app/page.tsx</code>
        </p>
        <div
            className="fixed gap-8 bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
          >
            By{" "}
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width="0"
                height="0"
                style={{ width: 'auto', height: 'auto' }}
                className="dark:invert"
                priority
            />
          </a>
          <ModeToggle/>
        </div>
      </div>
    </main>
  );
}
