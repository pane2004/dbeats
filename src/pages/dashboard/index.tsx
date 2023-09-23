import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  if (!session) {
    return <>Access Denied. Please log in.</>;
  }
  return <>this is the dashboard</>;
}
