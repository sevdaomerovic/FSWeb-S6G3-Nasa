import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
import Footer from "./components/Footer";
import fakeData from "./sahte-veri";
import axios from "axios";

function App() {
  const dateNow = new Date();
  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(dateNow.toISOString().slice(0, 10));

  useEffect(() => {
    setData(null);
    axios
      .get(`https:/api.nasa.gov/planetary/apod?api_key=DEMO=KEY&date=${date}`)
      .then((res) => setData(res.data));
  }, [date]);
  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      {data ? <Main data={data} /> : <p>Loading...</p>}
      <Footer />
    </div>
  );
}

export default App;
