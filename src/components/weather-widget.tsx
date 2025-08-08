
"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Cloud, CloudRain, CloudSnow, Loader2, AlertTriangle, MapPin } from 'lucide-react';

type WeatherData = {
  temp: number;
  weather: string;
};

const weatherIcons: { [key: string]: React.ReactNode } = {
  clearday: <Sun className="h-6 w-6 text-yellow-400" />,
  clearnight: <Sun className="h-6 w-6 text-yellow-400" />,
  pcloudyday: <Cloud className="h-6 w-6 text-gray-400" />,
  pcloudynight: <Cloud className="h-6 w-6 text-gray-400" />,
  mcloudyday: <Cloud className="h-6 w-6 text-gray-500" />,
  mcloudynight: <Cloud className="h-6 w-6 text-gray-500" />,
  cloudyday: <Cloud className="h-6 w-6 text-gray-600" />,
  cloudynight: <Cloud className="h-6 w-6 text-gray-600" />,
  lightrainday: <CloudRain className="h-6 w-6 text-blue-400" />,
  lightrainnight: <CloudRain className="h-6 w-6 text-blue-400" />,
  rain: <CloudRain className="h-6 w-6 text-blue-500" />,
  snow: <CloudSnow className="h-6 w-6 text-white" />,
  rainsnow: <CloudSnow className="h-6 w-6 text-blue-300" />,
  ts: <Cloud className="h-6 w-6 text-yellow-500" />,
  tsrain: <CloudRain className="h-6 w-6 text-yellow-500" />,
};

const getWeatherDescription = (weatherKey: string) => {
    const descriptions: { [key: string]: string } = {
        clearday: "Clear Day",
        pcloudyday: "Partly Cloudy",
        mcloudyday: "Cloudy",
        cloudyday: "Very Cloudy",
        lightrainday: "Light Rain",
        rain: "Rain",
        snow: "Snow",
        rainsnow: "Rain & Snow",
        ts: "Thunderstorm",
        tsrain: "Thunderstorm & Rain"
    };
    // Use a simplified key for lookup
    const simplifiedKey = weatherKey.replace(/night$/, 'day');
    return descriptions[simplifiedKey] || "Clear";
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(`https://www.7timer.info/bin/api.pl?lon=${longitude.toFixed(2)}&lat=${latitude.toFixed(2)}&product=civil&output=json`);
          const data = await response.json();
          
          if (data && data.dataseries && data.dataseries.length > 0) {
            const current_weather = data.dataseries[0];
            setWeather({
              temp: current_weather.temp2m,
              weather: current_weather.weather,
            });
          } else {
             setError('Could not fetch weather data.');
          }
        } catch (err) {
          setError('Failed to fetch weather data.');
        } finally {
            setLoading(false);
        }
      },
      () => {
        setError('Location permission denied.');
        setLoading(false);
      }
    );
  }, []);
  
  if (loading) {
      return (
        <Card className="mb-8">
            <CardContent className="p-4 flex items-center justify-center gap-4">
                <Loader2 className="h-5 w-5 animate-spin" />
                <p className="text-muted-foreground">Fetching weather...</p>
            </CardContent>
        </Card>
      )
  }

  if (error) {
    return (
        <Card className="mb-8 border-destructive/50">
            <CardContent className="p-4 flex items-center justify-center gap-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <p className="text-destructive">{error}</p>
            </CardContent>
        </Card>
    );
  }

  if (!weather) {
      return null;
  }

  const weatherDescription = getWeatherDescription(weather.weather);
  const weatherIcon = weatherIcons[weather.weather] || <Sun className="h-6 w-6 text-yellow-400" />;

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Your Local Weather
        </CardTitle>
        {weatherIcon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{weather.temp}°C</div>
        <p className="text-xs text-muted-foreground">
          {weatherDescription}
        </p>
      </CardContent>
    </Card>
  );
}
