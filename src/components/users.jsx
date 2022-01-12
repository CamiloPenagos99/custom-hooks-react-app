import { useStore } from "../zustand/store";

export const Users = () => {
  const users = useStore((state) => state.users);
  return (
    <>
      <div>Usuarios</div>
      <div>{JSON.stringify(users)}</div>
    </>
  );
};
