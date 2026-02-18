import { redirect } from "next/navigation";

export default async function PostRedirect() {
  redirect(`/`);
}
