import React, { useEffect, useState } from "react";

const CurrentTemperature = () => {
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Insert your API key here

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await res.json();
          setTemp(data.main.temp);
          setCity(data.name);
        } catch (err) {
          setError("Failed to fetch temperature.");
        }
      },
      () => {
        setError("Location permission denied.");
      }
    );
  }, []);

  if (error) return <p>{error}</p>;
  if (temp === null) return <p>Loading temperature...</p>;

  return (
    <div className="p-4 bg-yellow-100 rounded-xl w-64 text-center">
      <h2 className="text-lg font-semibold">Current Temperature</h2>
      <p className="text-2xl mt-2">{Math.round(temp)}°C</p>
      <p className="text-sm text-gray-600">in {city}</p>
    </div>
  );
};

export default CurrentTemperature;
