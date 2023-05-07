import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsApi = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyDXrguuZ5NXIsT06n82vOaw3VaeZ0xby5s",
        version: "weekly",
      });
      await loader.load();
      return loader;
    };

    loadGoogleMapsApi().then((loader) => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 7.2906, lng: 80.6337 },
        zoom: 10,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 7.2906, lng: 80.6337 },
        map: map,
        title: "Kandy, Sri Lanka",
      });
    });
  }, []);

  return (
    <div className="container">
        <div ref={mapRef} style={{ height: "500px", width: "100%", marginBottom: "80px" }} ></div>
    </div>
  );
};

export default Map;
