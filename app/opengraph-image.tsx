import { ImageResponse } from "next/og";
import { SITE_BRAND } from "@/lib/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "linear-gradient(135deg, rgba(255,247,237,1) 0%, rgba(255,255,255,1) 40%, rgba(249,250,251,1) 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 15%, rgba(234,88,12,0.18) 0%, transparent 50%), radial-gradient(circle at 85% 40%, rgba(17,24,39,0.12) 0%, transparent 55%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#111827",
              lineHeight: 1.1,
            }}
          >
            {SITE_BRAND}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#9a3412",
            }}
          >
            Blocos estruturais • Areia • Pedra • Pedrisco • Entrega em Campinas e RMC
          </div>
        </div>
      </div>
    ),
    size,
  );
}
