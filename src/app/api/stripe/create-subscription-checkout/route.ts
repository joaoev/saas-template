import { NextRequest, NextResponse } from "next/server";
import stripe from "@/app/lib/stripe";

export async function POST(req: NextRequest) {
    const { testeId } = await req.json();

    const price = process.env.STRIPE_SUBSCRIPTION_PRICE_ID;

    if (!price) {
        return NextResponse.json({ error: "Price not found" }, { status: 500 });
    }

    const metadata = {
        testeId,
    };

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                { price, quantity: 1 }],
            mode: "subscription",
            payment_method_types: ["card"],
            success_url: `${req.headers.get("origin")}/sucess`,
            cancel_url: `${req.headers.get("origin")}/`,
            metadata
        });

        if (!session.url) {
            return NextResponse.json({ error: "Session URL not found" }, { status: 500 });
        }

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: "Error creating checkout session" }, { status: 500 });
    }
}