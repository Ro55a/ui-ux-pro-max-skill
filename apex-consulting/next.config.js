/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows the site to be served from both a custom domain and localhost.
  // Set NEXT_PUBLIC_DOMAIN in .env.local to your production domain.
  async headers() {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    const origins = [
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      ...(domain ? [`https://${domain}`, `http://${domain}`] : []),
    ];
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Origin", value: origins.join(", ") },
          { key: "X-Frame-Options",             value: "SAMEORIGIN"       },
          { key: "X-Content-Type-Options",       value: "nosniff"          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
