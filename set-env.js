const fs = require("fs");

const envContent = `
STRIPE_SECRET_KEY=${process.env.STRIPE_SECRET_KEY}
NEXT_PUBLIC_BASE_URL=${process.env.NEXT_PUBLIC_BASE_URL}
`;

fs.writeFileSync(".env.local", envContent);
console.log("✅ .env.local file created with environment variables.");
