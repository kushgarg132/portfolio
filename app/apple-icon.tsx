import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #0a0f1a 0%, #0d1526 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "6px solid #007A87",
        }}
      >
        <span
          style={{
            color: "#007A87",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
            fontFamily: "sans-serif",
          }}
        >
          KG
        </span>
      </div>
    ),
    { ...size }
  );
}
