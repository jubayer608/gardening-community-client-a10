import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Loader = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/loading.json") 
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  if (!animationData) return null;

  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="w-32">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
