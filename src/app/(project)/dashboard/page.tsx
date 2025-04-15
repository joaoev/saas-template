import { handleAuth } from "@/app/actions/handle-auth";
import{ auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }
    return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-4xl font-bold">Protected Dashboard</div>
      <p>{session?.user?.email ? session?.user?.email : "Usuário não está logado!!!"}</p>

      {
        session?.user?.email && (
            <form action={handleAuth}>
                <button type="submit" className="border rounded-md px-2 py-1">Logout</button>
            </form>

      )}
    </div>
    );
}
  