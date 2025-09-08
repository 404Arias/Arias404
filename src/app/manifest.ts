import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Arias404 - Portfolio",
    short_name: "Portfolio",
    description: "Portfolio profesional de desarrollador full-stack",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
