/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sadakatcdn.cyparta.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};
//"https://sadakatcdn.cyparta.com/Cyparta_System/DefaultPhotos/default.jpg"

export default nextConfig;
