import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../testing";

function SearchBar() {
  const [image, setImage] = useState("https");
  const [content, setContent] = useState("");
  const [selectedOption, setSelectedOption] = useState("choseOne");
  const navigate = useNavigate();
  console.log(content);

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (image === "" || content === "") {
      throw new Error("Fill the area");
    } else {
      navigate("/CreatePage", { state: { image, content } });
    }
    if (selectedOption === "choseOne") {
      console.error("Please choose an option");
      return;
    }
  };

  const submitHandleSelect = (e) => {
    e.preventDefault();
    navigate("/FromSelect", { state: { image: selectedOption } });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-3xl my-6 space-x-2 text-gray-900">
          Here you can add your own
        </h1>
        <form
          action="/search"
          className="flex flex-col gap-3 m-2 items-center justify-center"
        >
          <div className="flex items-center justify-center gap-2">
            <label
              htmlFor="searchQuery"
              className="text-xl text-slate-600 font-medium"
            >
              Image:
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-800 px-6 py-3"
              type="text"
              id="searchQuery"
              name="searchQuery"
              placeholder="Image for your ads"
              onChange={handleImage}
            />
          </div>{" "}
          <p className="text-slate-400">
            You should copy the address from an online img
          </p>
          <div className="flex items-center justify-center gap-2">
            <label
              htmlFor="searchQuery"
              className="text-xl text-slate-600 font-medium"
            >
              Content:
            </label>
            <input
              className="rounded-md border-solid border-2 border-gray-800 px-6 py-3"
              type="text"
              id="searchQuery"
              name="searchQuery"
              placeholder="Image for your ads"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </form>
        <button
          className="cursor-pointer bg-blue-300 rounded-full px-10 py-2.5"
          onClick={submitHandle}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <h1 className="text-3xl my-6 space-x-2 text-gray-900">
          Here is our stock
        </h1>
        <form
          action="/search"
          className="flex flex-col gap-3 m-2 items-center justify-center"
        >
          <div className="flex items-center justify-center gap-2">
            <label
              htmlFor="searchQuery"
              className="text-xl text-slate-600 font-medium"
            >
              Image:
            </label>
            <select
              className="rounded-md border-solid border-2 border-gray-800 px-6 py-3"
              type="text"
              id="searchQuery"
              name="searchQuery"
              placeholder="Image for your ads"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="choseOne" disabled>
                Choose one
              </option>
              {data.map((item, i) => (
                <option value={i} key={i}>
                  {item.nameImg}
                </option>
              ))}
            </select>
          </div>
        </form>
        <button
          className={`cursor-pointer bg-blue-300 rounded-full px-10 py-2.5 ${
            selectedOption === "choseOne"
              ? "bg-gray-400 text-slate-200 cursor-not-allowed"
              : ""
          }`}
          onClick={submitHandleSelect}
          disabled={selectedOption === "choseOne"}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default SearchBar;
