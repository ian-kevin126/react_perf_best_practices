import { UserProvider } from "./context";
import UserSettings from "./components/UserSettings";
import UserDataDisplay from "./components/UserDataDisplay";

function ContextModuleFunc() {
  return (
    <div
      style={{
        minHeight: 350,
        width: 300,
        backgroundColor: "#ddd",
        borderRadius: 4,
        padding: 10,
      }}
    >
      <UserProvider>
        <UserSettings />
        <UserDataDisplay />
      </UserProvider>
    </div>
  );
}

export default ContextModuleFunc;
