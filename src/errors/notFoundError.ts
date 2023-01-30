export default function notFoundError(message: string) {
  return {
    name: "NotFoundError",
    message,
  };
}
