import { askChatbot } from "./chatbot";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.message) {
      throw new Error("Message is required");
    }

    const response = await askChatbot(body.message);

    return new Response(JSON.stringify(response), {
      headers: {
        "content-type": "application/json",
      },
    });
  } catch (error: any) {
    if (error.message === "Message is required") {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      });
    } else if (error.message === "Unexpected end of JSON input") {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }
}
