import { ImageResponse } from "next/og";

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
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 6 }}>TERRASTORE</div>
      <div style={{ display: "flex", width: 84, height: 6, background: "#c45c26", marginTop: 28 }} />
      <div style={{ display: "flex", marginTop: 40, fontSize: 26, color: "#8a3c12" }}>{kicker}</div>
      <div style={{ display: "flex", marginTop: 18, fontSize: 52, lineHeight: 1.08, maxWidth: 1000 }}>{title}</div>
    </div>,
    { ...ogSize },
  );
}
