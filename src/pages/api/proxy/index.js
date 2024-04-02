import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://weddingplanningdashboard.vercel.app/api/checkToken",
        req.body,
        { headers: { "Content-Type": "application/json" } }
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(error.response.status || 500).json(error.response.data);
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
