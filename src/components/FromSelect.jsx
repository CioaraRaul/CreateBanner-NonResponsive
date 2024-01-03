import { useLocation } from "react-router-dom";
import data from "../testing";

function CreatePage() {
  const location = useLocation();
  const { image } = location.state || {};

  console.log(image);
  console.log(data[image]);
  const obj = data[image];
  // rest of your component code

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl m-2">Instagram Post</h1>
        <div className="flex flex-col bg-slate-100 mx-2 rounded-xl items-center relative">
          <img
            src={obj.img}
            alt="instagram post"
            className="w-500 h-500 grow opacity-90 rounded-t-xl bg-cover bg-center bg-no-reapeat"
          />
          <div>
            <p className="flex text-md px-12 py-8 items-center justify-center text-lg w-500">
              {obj.context}
            </p>
            <div className="flex justify-center items-center gap-2 mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                alt=""
                className="w-8"
              />
              <p className="text-lg font-medium">+747428923</p>
            </div>

            <div className="flex gap-3 items-center justify-center py-3 px-4">
              <p>
                <span>
                  <a href="">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    {" "}
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl m-2">Twitter Post</h1>
        <div className="flex flex-col bg-slate-100 mx-2 rounded-xl items-center relative">
          <img
            src={obj.img}
            alt="instagram post"
            className="w-1500 h-500 grow opacity-90 rounded-t-xl bg-cover bg-center bg-no-reapeat"
          />
          <div>
            <p className="flex text-md px-12 py-8 items-center justify-center text-lg w-1500">
              {obj.context}
            </p>
            <div className="flex justify-center items-center gap-2 mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                alt=""
                className="w-8"
              />
              <p className="text-lg font-medium">+747428923</p>
            </div>

            <div className="flex gap-3 items-center justify-center py-3 px-4">
              <p>
                <span>
                  <a href="">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    {" "}
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl m-2">Story</h1>
        <div className="flex flex-col bg-slate-100 mx-2 rounded-xl items-center relative">
          <img
            src={obj.img}
            alt="instagram post"
            className="w-1080 h-1920 grow opacity-90 rounded-t-xl bg-cover bg-center bg-no-reapeat"
          />
          <div>
            <p className="flex text-md px-12 py-8 items-center justify-center text-lg w-1080">
              {obj.context}
            </p>
            <div className="flex justify-center items-center gap-2 mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                alt=""
                className="w-8"
              />
              <p className="text-lg font-medium">+747428923</p>
            </div>

            <div className="flex gap-3 items-center justify-center py-3 px-4">
              <p>
                <span>
                  <a href="">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-512.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
              <p>
                <span>
                  {" "}
                  <a href="">
                    {" "}
                    <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                      alt=""
                      className="w-8"
                    />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
