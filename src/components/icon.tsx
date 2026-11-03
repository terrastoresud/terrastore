export type IconName =
  | "carport"
  | "parasol"
  | "store"
  | "pergola"
  | "sail"
  | "phone"
  | "chat"
  | "pin"
  | "measure"
  | "mail"
  | "arrow"
  | "check"
  | "sun"
  | "architecture"
  | "fabric"
  | "fixing"
  | "tools"
  | "rain";

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
      {name === "sail" ? <Sail /> : null}
      {name === "phone" ? <Phone /> : null}
      {name === "chat" ? <Chat /> : null}
      {name === "pin" ? <Pin /> : null}
      {name === "measure" ? <Measure /> : null}
      {name === "mail" ? <Mail /> : null}
      {name === "arrow" ? <Arrow /> : null}
      {name === "check" ? <Check /> : null}
      {name === "sun" ? <Sun /> : null}
      {name === "architecture" ? <Architecture /> : null}
      {name === "fabric" ? <Fabric /> : null}
      {name === "fixing" ? <Fixing /> : null}
      {name === "tools" ? <Tools /> : null}
      {name === "rain" ? <Rain /> : null}
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

function Sail() {
  return (
    <>
      <path d="M5 19 12 5l7 14" />
      <path d="M7.2 14.5h9.6" />
      <path d="M12 5v14" />
    </>
  );
}

function Sun() {
  return (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 4.5v2" />
      <path d="M12 17.5v2" />
      <path d="M4.5 12h2" />
      <path d="M17.5 12h2" />
      <path d="M6.6 6.6 8 8" />
      <path d="M16 16l1.4 1.4" />
      <path d="M17.4 6.6 16 8" />
      <path d="M8 16l-1.4 1.4" />
    </>
  );
}

function Architecture() {
  return (
    <>
      <path d="M4 18.5h16" />
      <path d="M6 18.5V9.5L12 5l6 4.5v9" />
      <path d="M10 18.5v-5h4v5" />
    </>
  );
}

function Fabric() {
  return (
    <>
      <path d="M4 8.5c3.5-3 12.5-3 16 0" />
      <path d="M4.5 8.8 7 18.5" />
      <path d="M19.5 8.8 17 18.5" />
      <path d="M8.5 11.5c2.3-1.2 4.7-1.2 7 0" />
    </>
  );
}

function Fixing() {
  return (
    <>
      <path d="M7 17.5 17 7.5" />
      <path d="M8.2 8.2 6 6" />
      <path d="M18 18l-2.2-2.2" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="7.5" r="1.6" />
    </>
  );
}

function Tools() {
  return (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.7 4.7L5.5 14.5 9.5 18.5l4.3-4.3a3.5 3.5 0 0 0 4.7-4.7L16 12l-2.5-2.5 1-4z" />
    </>
  );
}

function Rain() {
  return (
    <>
      <path d="M6.5 10.5c0-3.2 2.5-5.5 5.5-5.5s5.5 2.3 5.5 5.5c1.4.2 2.5 1.4 2.5 2.9 0 1.6-1.3 2.9-2.9 2.9H7.2C5.7 16.3 4.5 15 4.5 13.4c0-1.5 1.1-2.7 2.5-2.9z" />
      <path d="M9 17.5 8 20" />
      <path d="M12 17.5v2.8" />
      <path d="M15 17.5 16 20" />
    </>
  );
}
