import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../Layout/Footer";
import TopBar from "../Layout/TopBar";
import Spinner from "../Loader/Spinner";
import MicrosoftStoreButton from "./MicrosoftStoreButton";

const UpdateScreen = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate("/store");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-white">
      <TopBar />

      <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <h1 className="text-4xl font-semibold leading-tight text-[#2D8CFF] sm:text-5xl lg:text-[56px]">
          Your Zoom Client is Out of Date
        </h1>

        <p className="mt-8 text-lg text-[#A0A0A0]">
          Please wait while you're redirected to Microsoft Store...
        </p>

        <p className="mt-4 text-lg font-medium text-[#2D8CFF]">
          Please wait while you're redirected to Microsoft Store...
        </p>

        <p className="mt-7 text-base">
          Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}
        </p>

        <div className="mt-7">
          <Spinner size="sm" />
        </div>

        <p className="mt-9 text-sm text-[#A0A0A0]">
          If you are not redirected automatically, click below:
        </p>

        <div className="mt-6">
          <MicrosoftStoreButton />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default UpdateScreen;