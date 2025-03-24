const fs = require("fs");

console.log("🚀 DEBUG: Printing environment variables before writing to .env.local");
console.log("🔑 STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY ? "EXISTS" : "MISSING");
console.log("🌎 NEXT_PUBLIC_BASE_URL:", process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : "MISSING");

const envContent = `
STRIPE_SECRET_KEY=${process.env.STRIPE_SECRET_KEY}
NEXT_PUBLIC_BASE_URL=${process.env.NEXT_PUBLIC_BASE_URL}
`;

fs.writeFileSync(".env.local", envContent);
console.log("✅ .env.local file created successfully.");
