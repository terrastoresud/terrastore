export type IconName = "carport" | "parasol" | "store" | "pergola" | "phone" | "chat" | "pin" | "measure";

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className ? `icon-line shrink-0 ${className}` : "icon-line size-[1.35rem] shrink-0"}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "carport" ? <Carport /> : null}
      {name === "parasol" ? <Parasol /> : null}
      {name === "store" ? <Store /> : null}
      {name === "pergola" ? <Pergola /> : null}
      {name === "phone" ? <Phone /> : null}
      {name === "chat" ? <Chat /> : null}
      {name === "pin" ? <Pin /> : null}
      {name === "measure" ? <Measure /> : null}
    </svg>
  );
}

function Carport() {
  return (
    <>
      <path d="M8 6.5h16.5" />
      <path d="M3 12.5h26" />
      <path d="M3 12.5 8 6.5" />
      <path d="M29 12.5 24.5 6.5" />
      <path d="M11.5 12.5 14.2 6.5" />
      <path d="M20 12.5 19.2 6.5" />
      <path d="M6.5 12.5V29.5" />
      <path d="M25.5 12.5V29.5" />
      <path d="M9 23.2h2.8l1.7-3h6.8l1.8 3H23.5V27H9z" />
      <circle cx="12.4" cy="27.2" r="1.7" />
      <circle cx="20.2" cy="27.2" r="1.7" />
    </>
  );
}

function Parasol() {
  return (
    <>
      <path d="M3.2 29.2h8.6" />
      <path d="M4.4 27.2h6.2" />
      <path d="M7.5 27.2V9" />
      <path d="M7.5 9c5-.2 8-2 11.8-.4" />
      <path d="M19.3 8.6v4" />
      <path d="M11 12.6h18.5L27 20H9.2z" />
      <path d="M19.3 12.6 9.2 20" />
      <path d="M19.3 12.6 27 20" />
    </>
  );
}

function Store() {
  return (
    <>
      <path d="M4 4v25" />
      <path d="M4 4h6.5" />
      <path d="M4 7.4h8.2v3.8H4z" />
      <path d="M12.2 8 28.6 13.2 26 18.4 12.2 13.6z" />
      <path d="M7.6 11.2 12 20.6 23.6 18.8" />
    </>
  );
}

function Pergola() {
  return (
    <>
      <path d="M5.5 29.5V16" />
      <path d="M22.5 29.5V16" />
      <path d="M3 16h22" />
      <path d="M8.5 7.5H30" />
      <path d="M3 16 8.5 7.5" />
      <path d="M25 16 30 7.5" />
      <path d="M8.2 16 13.2 7.5" />
      <path d="M13.6 16 18.6 7.5" />
      <path d="M19 16 24 7.5" />
    </>
  );
}

function Phone() {
  return (
    <path d="M10.2 6.2h2.8c1 0 1.8.7 2 1.7l1.4 4.4-3.2 1.6a11.5 11.5 0 0 0 5.8 5.8l1.6-3.2 4.4 1.4c1 .3 1.7 1 1.7 2v2.6c0 1.5-1.3 2.8-2.8 2.8-9.6 0-16.2-7.4-16.2-16.2v-.6c0-1.5 1.3-2.8 2.8-2.8z" />
  );
}

function Chat() {
  return <path d="M5 7.5h20.5v12.5H14.2L8.2 25.5V20H5z" />;
}

function Pin() {
  return (
    <>
      <path d="M16 27.5s6.2-5.3 6.2-10.4a6.2 6.2 0 0 0-12.4 0c0 5.1 6.2 10.4 6.2 10.4z" />
      <circle cx="16" cy="17" r="1.7" />
    </>
  );
}

function Measure() {
  return (
    <>
      <path d="M6 25.5 26 6" />
      <path d="M6 25.5 9.1 24.3" />
      <path d="M6 25.5 7.2 22.4" />
      <path d="M26 6 22.9 7.2" />
      <path d="M26 6 24.8 9.1" />
      <path d="M11.4 20.2 13.6 22.4" />
      <path d="M16.2 15.4 18.4 17.6" />
      <path d="M21 10.6 23.2 12.8" />
    </>
  );
}
