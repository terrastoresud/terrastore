export type IconName =
  | "carport"
  | "parasol"
  | "store"
  | "pergola"
  | "phone"
  | "chat"
  | "pin"
  | "measure"
  | "mail"
  | "arrow"
  | "check";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const sized = /(?:^|\s)(?:size-|w-|h-)/.test(className);
  return (
    <svg
      className={`icon-line shrink-0 ${sized ? "" : "size-5 "}${className}`.trim()}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      {name === "mail" ? <Mail /> : null}
      {name === "arrow" ? <Arrow /> : null}
      {name === "check" ? <Check /> : null}
    </svg>
  );
}

export function IconWell({ name, className }: { name: IconName; className?: string }) {
  return (
    <span className={className ? `icon-well ${className}` : "icon-well"}>
      <Icon name={name} />
    </span>
  );
}

function Carport() {
  return (
    <>
      <path d="M4 10.5 12 5l8 5.5" />
      <path d="M6 10.5V19" />
      <path d="M18 10.5V19" />
      <path d="M4 19h16" />
      <path d="M9 16.5h6" />
    </>
  );
}

function Parasol() {
  return (
    <>
      <path d="M4 11c2.2-4 13.8-4 16 0" />
      <path d="M12 11v7.5" />
      <path d="M9 18.5h6" />
    </>
  );
}

function Store() {
  return (
    <>
      <path d="M4 7h5" />
      <path d="M4 7v12" />
      <path d="M9 8.5 20 11.2 18.2 15.2 9 13z" />
      <path d="M9 13v2.5" />
    </>
  );
}

function Pergola() {
  return (
    <>
      <path d="M5 19V9" />
      <path d="M15 19V9" />
      <path d="M4 9h12" />
      <path d="M7 5h13" />
      <path d="M4 9 7 5" />
      <path d="M16 9 20 5" />
      <path d="M8.5 9 11 5" />
      <path d="M12 9 14.5 5" />
    </>
  );
}

function Phone() {
  return (
    <path d="M8 5.5h1.6c.6 0 1.1.4 1.2 1l.7 2.4-1.8.9a6.5 6.5 0 0 0 3.5 3.5l.9-1.8 2.4.7c.6.2 1 .6 1 1.2V15c0 .8-.7 1.5-1.5 1.5A9.5 9.5 0 0 1 6.5 7c0-.8.7-1.5 1.5-1.5z" />
  );
}

function Chat() {
  return <path d="M5 6.5h12.5v8H11l-3.2 2.8V14.5H5z" />;
}

function Pin() {
  return (
    <>
      <path d="M12 20s4.2-3.6 4.2-7a4.2 4.2 0 1 0-8.4 0c0 3.4 4.2 7 4.2 7z" />
      <circle cx="12" cy="13" r="1.2" />
    </>
  );
}

function Measure() {
  return (
    <>
      <path d="M6 18 18 6" />
      <path d="M6 18 8.2 17.2" />
      <path d="M6 18 6.8 15.8" />
      <path d="M18 6 15.8 6.8" />
      <path d="M18 6 17.2 8.2" />
      <path d="M9.2 14.8 10.6 16.2" />
      <path d="M12.4 11.6 13.8 13" />
    </>
  );
}

function Mail() {
  return (
    <>
      <rect x="4" y="6.5" width="16" height="11" rx="1" />
      <path d="M4.5 7.5 12 12.5 19.5 7.5" />
    </>
  );
}

function Arrow() {
  return (
    <>
      <path d="M5 12h14" />
      <path d="M13 6.5 19 12l-6 5.5" />
    </>
  );
}

function Check() {
  return <path d="M5.5 12.5 10 17l8.5-10" />;
}
