import { redirect } from "next/navigation";

// The buy page is archived for now (no token sale yet). The implementation is
// kept in ComprarContent.jsx; to bring it back, restore the metadata + render
// below and re-add the nav links removed in Navbar.tsx / Card_Nav.tsx.
// A temporary (307) redirect is used on purpose so it is easy to revert and is
// not treated as permanent by search engines.
export default function ComprarPage({ params: { locale } }) {
  redirect(`/${locale}`);
}
