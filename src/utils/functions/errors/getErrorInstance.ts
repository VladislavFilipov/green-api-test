export default function getErrorInstance(error: unknown) {
  return error instanceof Error ? error : new Error(String(error));
}
