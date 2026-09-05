import { Outlet } from "react-router";
import Navbar from "../components/Personal/Navbar";

type Props = {};

const HomeLayout = ({}: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* removed the extra padding here so our layouts don't look squished like a clown car */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
