import "./newHotel.scss";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { hotelInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const NewHotel = () => {
  const [files, setFiles] = useState([]);
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);
  const { data: roomData, loading: roomLoading, error: roomError } = useFetch("/rooms");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const handleSelect = (e) => {
    const selectedRoomIds = Array.from(e.target.selectedOptions, (option) => option.value);
    setRooms(selectedRoomIds);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const uploadPromises = Array.from(files).map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dj9huwqgd/image/upload", formData);
        return uploadRes.data.url;
      });

      const photoUrls = await Promise.all(uploadPromises);

      const newHotel = { ...info, rooms, photos: photoUrls };
      await axios.post("/hotels", newHotel);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Product</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={files.length > 0 ? URL.createObjectURL(files[0]) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" multiple onChange={(e) => setFiles(e.target.files)} style={{ display: "none" }} />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {roomLoading ? "Loading..." : roomData && roomData.map((room) => <option key={room._id} value={room._id}>{room.title}</option>)}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
