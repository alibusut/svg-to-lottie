const svgToLottie = require("path-to-svg-to-lottie-library");
const fs = require("fs");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const svgContent = req.body.svg; // محتوى ملف SVG يتم إرساله في الطلب
      const lottieJson = await svgToLottie.convertSVGToLottie(svgContent);

      res.status(200).json({ lottieJson });
    } catch (error) {
      console.error("Error during conversion:", error);
      res.status(500).json({ error: "Conversion failed", details: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}