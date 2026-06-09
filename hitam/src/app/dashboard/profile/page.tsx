import { getUserAndProfile } from "@/lib/auth";
import ProfileForm from "@/components/dashboard/ProfileForm";

export const metadata = { title: "Profil" };

export default async function ProfilePage() {
  const { user, profile } = await getUserAndProfile();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold">Profil</h1>
      <p className="mt-1 text-white/55">
        Data ini kami pakai buat koordinasi project & follow-up.
      </p>
      <div className="mt-6">
        <ProfileForm profile={profile} email={user?.email ?? ""} />
      </div>
    </div>
  );
}
