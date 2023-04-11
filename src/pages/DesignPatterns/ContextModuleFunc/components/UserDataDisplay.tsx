import { useUser } from "../context";

export default function UserDataDisplay() {
  const user = useUser();
  return <pre>{JSON.stringify(user[0].user, null, 2)}</pre>;
}
