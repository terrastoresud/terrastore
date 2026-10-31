import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

const logoSrc = `data:image/png;base64,${readFileSync(path.join(process.cwd(), "public/brand/logo-header.png")).toString("base64")}`;

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderBrandCard(title: string, kicker: string) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#f3f0ea",
        color: "#1c1916",
        padding: "68px",
      }}
    >
      <img src={logoSrc} alt="" width={210} height={86} />
      <div style={{ display: "flex", marginTop: 40, fontSize: 26, color: "#8a3c12" }}>{kicker}</div>
      <div style={{ display: "flex", marginTop: 18, fontSize: 52, lineHeight: 1.08, maxWidth: 1000 }}>{title}</div>
    </div>,
    { ...ogSize },
  );
}
