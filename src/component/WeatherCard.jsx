import React from "react";
import { useSelector } from "react-redux";

export default function WeatherCard() {
  const placeData = useSelector(state=>state.placeData);
  const theme = useSelector(state => state.theme);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 weather">
          <div className={theme ? "card dark" : "card"}>
            {placeData.location ? (
              <div>
                <img src={placeData.current.condition.icon} alt="" />
                <div className="temp">{placeData.current.temp_c}&deg;</div>
                <div className="condition">
                  {placeData.current.condition.text}
                </div>
                <div>
                  <h2>{placeData.location.name}</h2>
                </div>
                <div className="container">
                  <div className="row whp">
                    <div className="col-4">
                      <div className="title">Wind Now</div>
                      <div className="data">
                        {placeData.current.wind_kph}
                        <span className="unit">KM</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="title">Humidity</div>
                      <div className="data">
                        {placeData.current.humidity}
                        <span className="unit">%</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="title">Percipitation</div>
                      <div className="data">
                        {placeData.current.precip_in}
                        <span className="unit">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h2>Place not Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
