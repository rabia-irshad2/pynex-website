// lib/googleReviews.ts
// Fetches PYNEX's live Google rating/review count via the Places API (Place Details).
// Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local — see .env.local.example.
// Returns null (never throws) when not configured or the request fails, so the UI can
// fall back to the static "View Google reviews" link instead of showing stale/fake numbers.

export type GoogleReviewsData = {
  rating: number;
  reviewCount: number;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=rating,user_ratings_total&key=${apiKey}`;

    // Revalidate hourly so the figure stays current without a rebuild/deploy.
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;

    const data = await res.json();
    const rating = data?.result?.rating;
    const reviewCount = data?.result?.user_ratings_total;

    if (typeof rating !== 'number' || typeof reviewCount !== 'number') return null;

    return { rating, reviewCount };
  } catch {
    return null;
  }
}