import React from "react";
import SongList from "./components/SongList";

const App = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3">
        <SongList />
      </div>
    </div>
  );
};

export default App;
