import { connect } from "react-redux";

const SongList = (props) => {
  const { songs } = props;
  const renderComponent = () => {
    return (
      <div className="mx-4 my-4 py-4 px-4 border rounded-md shadow-md">
        {songs?.map((song, i) => (
          <div
            key={song.title}
            className={`flex items-center justify-between px-4 py-3 ${
              songs.length - 1 === i ? "border-none" : "border-b"
            }`}
          >
            <div className="text-md font-medium uppercase">{song.title}</div>
            <div className="border bg-blue-500 rounded-md hover:scale-110 transition ease-out delay-75  shadow-sm">
              <button className="px-4 py-2 text-white">Select</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <div>{renderComponent()}</div>;
};

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
