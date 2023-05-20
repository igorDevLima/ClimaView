const TodayWeather: React.FC = () => {
  return (
    <>
      <div className="img-variable">
        <img id="icon" src="/script/public/img/clear-sky 1.svg" alt="Céu limpo" />
      </div>
      <div className="temperature-climate">
        <p id="temperature">
          24 <span id="temp-unit">°C</span>
        </p>
        <p id="description">Nublado</p>
      </div>
      <div className="climate-info">
        <div className="max-mindesktop">
          <div>
            <img src="/script/public/img/max.svg" />
            <span id="max"></span>
            <span id="span-max">max</span>
          </div>
          <div>
            <img src="/script/public/img/min.svg" />
            <span id="min"></span>
            <span id="span-min">min</span>
          </div>
        </div>
        <div className="max-min">
          <img src="/script/public/img/temperature.svg" />
          <span id="span-max-mobile">max</span>
          <span> /</span>
          <span id="span-min-mobile"></span>
        </div>
        <div className="rain-weather">
          <div className="pluviometer">
            <img src="/script/public/img/pluviometer.svg" />
            <span id="span-pluviometer"></span>
            <span id="rain-pluv">mm</span>
          </div>
          <div className="rain-percentage">
            <img id="umbrella" src="/script/public/img/umbrella.svg" />
            <span id="span-percent"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayWeather;
