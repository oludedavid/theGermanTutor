// Social Media Links Constants
export const SOCIAL_LINKS = {
  WHATSAPP: process.env.WHATSAPP_LINK || "https://wa.me/4915",
  INSTAGRAM:
    process.env.INSTAGRAM_LINK || "https://www.instagram.com/thegermantutor",
  TIKTOK: process.env.TIKTOK_LINK || "https://www.tiktok.com/@thegermantutor",
  LINKEDIN:
    process.env.LINKEDIN_LINK ||
    "https://www.linkedin.com/company/thegermantutor",
  FACEBOOK:
    process.env.FACEBOOK_LINK || "https://www.facebook.com/thegermantutor",
} as const;

// Alternative destructured export if you prefer individual constants
export const {
  WHATSAPP: WHATSAPP_LINK,
  INSTAGRAM: INSTAGRAM_LINK,
  TIKTOK: TIKTOK_LINK,
  LINKEDIN: LINKEDIN_LINK,
  FACEBOOK: FACEBOOK_LINK,
} = SOCIAL_LINKS;
