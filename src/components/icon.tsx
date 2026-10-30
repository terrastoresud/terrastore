type IconName = "carport" | "parasol" | "store" | "pergola" | "phone" | "chat" | "pin" | "measure";

export function Icon({ name }: { name: IconName }) {
  return (
    <svg className="h-[1.35rem] w-[1.35rem] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "carport" ? (
        <>
          <path d="M3 11 12 5l9 6" />
          <path d="M6 11v8M18 11v8M4 19h16" />
        </>
      ) : null}
      {name === "parasol" ? (
        <>
          <path d="M12 10c-5.5 0-8 3.2-8 3.2S8 12 12 12s8 1.2 8 1.2S17.5 10 12 10z" />
          <path d="M12 12v7M9 19h6" />
        </>
      ) : null}
      {name === "store" ? (
        <>
          <path d="M4 13h16v6H4z" />
          <path d="M4 13 7 7h10l3 6" />
        </>
      ) : null}
      {name === "pergola" ? (
        <>
          <path d="M4 8h16M7 8v11M17 8v11M4 19h16" />
          <path d="M10 8v5M14 8v5" />
        </>
      ) : null}
      {name === "phone" ? (
        <path d="M8 4h2l1 4-2 1a12 12 0 0 0 6 6l1-2 4 1v2a2 2 0 0 1-2 2A14 14 0 0 1 6 6a2 2 0 0 1 2-2z" />
      ) : null}
      {name === "chat" ? <path d="M5 6h14v9H8l-3 3z" /> : null}
      {name === "pin" ? (
        <>
          <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="1.6" />
        </>
      ) : null}
      {name === "measure" ? (
        <>
          <path d="M5 19 19 5" />
          <path d="M9 7h2M13 11h2M7 15h2" />
        </>
      ) : null}
    </svg>
  );
}
