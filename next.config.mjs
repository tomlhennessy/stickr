/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
    },
    eslint: {
        ignoreDuringBuilds: true, // Skip ESLint during the build process
    },
  };

  export default nextConfig;
