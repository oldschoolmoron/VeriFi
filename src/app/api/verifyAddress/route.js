// src/app/api/verifyAddress/route.js
export async function POST(req) {
  try {
    const { address } = await req.json();

    if (!address) {
      return new Response(JSON.stringify({ message: "Address is required" }), {
        status: 400,
      });
    }

    const apiKey = process.env.ETHERSCAN_API_KEY;

    //V2 API endpoint
    const url = `https://api.etherscan.io/v2/api?chainid=1&module=account&action=balance&address=${address}&apikey=${apiKey}`;

    console.log("Fetching:", url);

    const response = await fetch(url);
    const data = await response.json();

    // If Etherscan returns an error message
    if (data.status === "0" && data.message !== "OK") {
      return new Response(
        JSON.stringify({ message: "Invalid address or API error", data }),
        { status: 400 }
      );
    }

    return new Response(JSON.stringify({ balance: data.result }), {
      status: 200,
    });
  } catch (err) {
    console.error("Server Error:", err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
