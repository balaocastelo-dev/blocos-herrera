import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #0b1220 0%, #111827 60%, #1f2937 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 25% 20%, rgba(234,88,12,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 35%, rgba(255,255,255,0.08) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#fdba74" }}>
            Fábrica de blocos em Campinas
          </div>
          <div style={{ fontSize: 26, fontWeight: 500, color: "#e5e7eb" }}>
            Atendimento rápido no WhatsApp • Entrega em Campinas e RMC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
