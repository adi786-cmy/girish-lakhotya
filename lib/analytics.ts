// Analytics Event Tracker for Girish Lakhotya & Bond Smart Platform

export type EventName =
  | "bond_smart_cta_click"
  | "video_open"
  | "video_play"
  | "article_open"
  | "podcast_open"
  | "contact_submit"
  | "media_open";

export interface EventPayload {
  eventName: EventName;
  location?: string;
  label?: string;
  metadata?: Record<string, unknown>;
}

export function trackEvent({ eventName, location, label, metadata }: EventPayload) {
  if (typeof window === "undefined") return;

  const payload = {
    eventName,
    location: location || window.location.pathname,
    label,
    timestamp: new Date().toISOString(),
    ...metadata,
  };

  // Log in development for audit
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event]: ${eventName}`, payload);
  }

  // Window custom event dispatcher for Google Tag Manager / Analytics integrations
  try {
    const customEvent = new CustomEvent("platform_analytics", { detail: payload });
    window.dispatchEvent(customEvent);

    // If dataLayer exists (GTM)
    if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: eventName,
        ...payload,
      });
    }
  } catch (err) {
    console.warn("Analytics tracking error:", err);
  }
}
