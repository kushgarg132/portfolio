import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #0a0f1a 0%, #0d1526 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1.5px solid #007A87",
        }}
      >
        <span
          style={{
            color: "#007A87",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.5px",
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
