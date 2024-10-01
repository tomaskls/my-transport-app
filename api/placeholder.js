export default function handler(req, res) {
    const { width, height } = req.query;
    res.status(200).json({ message: `Placeholder image with width ${width} and height ${height}` });
  }
  