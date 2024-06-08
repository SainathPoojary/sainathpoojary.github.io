"use client";
import Icon from "@/assets/icons";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const navigate = useRouter();

  return (
    <button
      onClick={() => {
        navigate.back();
      }}
      className="absolute top-8 left-8 "
    >
      <Icon.back className="w-8 h-8" />
    </button>
  );
};

export default BackButton;
