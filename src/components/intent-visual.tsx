import type { ImageVariant } from "@/content/images";

export function IntentVisual({
  variant,
  label,
  width,
  height,
  caption,
}: {
  variant: ImageVariant;
  label: string;
  width: number;
  height: number;
  caption?: string;
}) {
  return (
    <figure className="bg-sand">
      <div style={{ aspectRatio: `${width} / ${height}` }} className="relative">
        <svg
          viewBox="0 0 1200 800"
          role="img"
          aria-label={label}
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="1200" height="800" fill="#efe6d8" />
          <rect x="0" y="640" width="1200" height="160" fill="#e4d9c8" />
          {variant === "carport" ? <Carport /> : null}
          {variant === "parasol" ? <Parasol /> : null}
          {variant === "store" ? <Store /> : null}
          {variant === "zip" ? <Zip /> : null}
          {variant === "interior" ? <Interior /> : null}
          {variant === "pergola" ? <Pergola /> : null}
          {variant === "voile" ? <Voile /> : null}
          {variant === "coast" ? <Coast /> : null}
          {variant === "city" ? <City /> : null}
        </svg>
      </div>
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function Carport() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M180 640 H1040" />
      <path d="M260 640 V390" />
      <path d="M920 640 V360" />
      <path d="M220 390 H980 L940 360 H250 Z" fill="#f7f4ef" />
      <path d="M220 390 H980" stroke="#c45c26" strokeWidth="6" />
      <path d="M250 360 H940" />
      <path d="M700 430 H760 V500" stroke="#8a3c12" />
    </g>
  );
}

function Parasol() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M160 660 H1060" />
      <path d="M860 660 V300" />
      <path d="M860 300 H340" stroke="#c45c26" strokeWidth="6" />
      <path d="M300 300 H900 L860 250 H360 Z" fill="#f7f4ef" />
      <circle cx="520" cy="560" r="54" />
      <path d="M470 640 V520" />
      <path d="M570 640 V520" />
    </g>
  );
}

function Store() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M180 180 H520 V660 H180 Z" fill="#e7e0d4" />
      <path d="M240 280 H460 V520 H240 Z" />
      <path d="M500 250 H980 L900 390 H500 Z" fill="#f7f4ef" />
      <path d="M500 250 H980" stroke="#c45c26" strokeWidth="6" />
      <path d="M180 660 H1040" />
    </g>
  );
}

function Zip() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M220 140 H980 V680 H220 Z" />
      <path d="M470 140 V680" />
      <path d="M720 140 V680" />
      <path d="M240 170 H450 V520 H240 Z" fill="#e7d3c4" />
      <path d="M240 170 H450" stroke="#c45c26" strokeWidth="6" />
      <path d="M220 680 H980" />
    </g>
  );
}

function Interior() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M260 120 H940 V700 H260 Z" fill="#f7f4ef" />
      <path d="M300 180 H900 V250 H300 Z" fill="#e7d3c4" />
      <path d="M300 180 H900" stroke="#c45c26" strokeWidth="6" />
      <path d="M300 250 V620" />
      <path d="M900 250 V620" />
      <path d="M180 700 H1040" />
    </g>
  );
}

function Pergola() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M220 640 V280" />
      <path d="M980 640 V250" />
      <path d="M180 280 H1040 L990 230 H230 Z" fill="#f7f4ef" />
      <path d="M180 280 H1040" stroke="#c45c26" strokeWidth="6" />
      <path d="M320 250 V360" />
      <path d="M460 242 V360" />
      <path d="M600 242 V360" />
      <path d="M740 246 V360" />
      <path d="M880 250 V360" />
      <path d="M160 640 H1060" />
    </g>
  );
}

function Voile() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M220 660 V260" />
      <path d="M980 660 V220" />
      <path d="M600 660 V180" />
      <path d="M220 300 C420 180 760 180 980 280 C760 420 420 460 220 360 Z" fill="#f7f4ef" />
      <path d="M220 300 C420 180 760 180 980 280" stroke="#c45c26" strokeWidth="6" />
      <path d="M140 660 H1080" />
    </g>
  );
}

function Coast() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M80 430 H1120" stroke="#8a3c12" />
      <path d="M160 640 V390" />
      <path d="M860 640 V340" />
      <path d="M140 390 H940 L880 330 H190 Z" fill="#f7f4ef" />
      <path d="M140 390 H940" stroke="#c45c26" strokeWidth="6" />
      <path d="M120 640 H1100" />
    </g>
  );
}

function City() {
  return (
    <g fill="none" stroke="#1c1916" strokeWidth="3">
      <path d="M140 640 V220 H420 V640" fill="#e7e0d4" />
      <path d="M460 640 V300 H1040 V640" fill="#f7f4ef" />
      <path d="M500 340 H760" stroke="#c45c26" strokeWidth="6" />
      <path d="M500 340 L820 430 H500 Z" />
      <path d="M120 640 H1100" />
    </g>
  );
}
