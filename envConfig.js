import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Debugging to check if AWS is loading variables
console.log("✅ ENV Variables Loaded:");
console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY ? "✅ Loaded" : "❌ Not Found");
console.log("NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL || "❌ Not Found");
