import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } else {
    try {
      const response = await axios.patch(
        "https://weddingplanningdashboard.vercel.app/api/guestConfirmation",
        req.body
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while processing your request." });
    }
  }
}
