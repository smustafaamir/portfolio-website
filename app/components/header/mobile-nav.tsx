"use client";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { NavLink } from "./nav-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      close();
      menuButtonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();
  }, [open]);

  const handleLinkClick = () => {
    close();
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <Button
        ref={menuButtonRef}
        type="button"
        variant="ghost"
        size="icon-lg"
        className="size-11 shrink-0 text-ink hover:bg-transparent hover:text-ink-navy"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </Button>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 flex min-h-[calc(100dvh-var(--site-header-height))] flex-col bg-paper text-ink",
            "top-[var(--site-header-height)]"
          )}
          onClick={close}
        >
          <nav
            aria-label="Primary"
            className="flex flex-1 flex-col items-center justify-center px-6"
            onClick={(event) => event.stopPropagation()}
          >
            <ul className="w-full max-w-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink
                    href={href}
                    className="block py-5 text-center text-sm sm:text-base"
                    onClick={handleLinkClick}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  );
}
