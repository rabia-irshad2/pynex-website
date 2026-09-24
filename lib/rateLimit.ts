const requests = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const current = requests.get(key);

  if (!current || current.resetAt <= now) {
    requests.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > limit;
}
