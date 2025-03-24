import Stripe from "stripe";
import "../../../../envConfig.js";

// ✅ Check if STRIPE_SECRET_KEY is loaded
const API_KEY = process.env.STRIPE_SECRET_KEY;
console.log("🚀 Stripe API Key Loaded:", API_KEY ? "Yes" : "❌ No");

if (!API_KEY) {
    console.error("❌ ERROR: STRIPE_SECRET_KEY is missing in AWS!");
    return new Response(JSON.stringify({ error: "Missing Stripe Secret Key in AWS" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
    });
}

const stripe = new Stripe(API_KEY, { apiVersion: "2023-10-16" });

export async function GET() {
    try {
        console.log("📩 Fetching Stripe Products...");
        const productsResponse = await stripe.products.list({ active: true });
        console.log("✅ Products Response:", productsResponse);

        console.log("💰 Fetching Stripe Prices...");
        const pricesResponse = await stripe.prices.list({ active: true });
        console.log("✅ Prices Response:", pricesResponse);

        if (!productsResponse.data.length) {
            console.warn("⚠️ WARNING: No products found in Stripe!");
        }
        if (!pricesResponse.data.length) {
            console.warn("⚠️ WARNING: No prices found in Stripe!");
        }

        // Combine products with their associated prices
        const combinedData = productsResponse.data.map((product) => {
            const productPrices = pricesResponse.data.filter((price) => price.product === product.id);

            return {
                ...product,
                prices: productPrices.map((price) => ({
                    id: price.id,
                    unit_amount: price.unit_amount,
                    currency: price.currency,
                    recurring: price.recurring,
                })),
            };
        });

        console.log("🛒 Final Combined Products & Prices:", combinedData);

        return new Response(JSON.stringify(combinedData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (err) {
        console.error("❌ Error fetching data from Stripe:", err);

        return new Response(JSON.stringify({
            error: "Failed to fetch data from Stripe",
            details: err.message,
            stack: err.stack,
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
