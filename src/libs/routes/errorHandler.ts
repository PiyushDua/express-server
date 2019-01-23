export default function errorHandler(err, req, res, next) {
  console.log("Inside Error Handler function");
  const date: Date = new Date();
  res.json({
    error: "Not Found",
    message: "error",
    status: 500,
    timestamp: date
  });
}
