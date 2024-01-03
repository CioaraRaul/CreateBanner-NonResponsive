import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
function Main() {
  const navigate = useNavigate();
  const goToSearch = () => {
    navigate("/search");
  };
  return (
    <>
      <div className="bg-slate-200">
        <div className="flex flex-col items-center justify-start w-1080 mx-auto">
          <h1 className="text-center text-3xl mt-10 text-slate-900 mb-6">
            Welcome to Zipo - Your Banner Design Hub!
          </h1>
          <p className="text-md mt-2 tracking-wider mb-6">
            Are you ready to elevate your brand and captivate your audience with
            eye-catching banners? Look no further than Zipo, your go-to
            destination for seamless and stunning banner creation. Zipo is more
            than just a design platform; it's your creative partner, empowering
            you to craft visually compelling banners that leave a lasting
            impression.
          </p>
        </div>
        <div className=" desktop:flex flex-row my-6 items-center bg-slate-300 w-1080 mx-auto ">
          <p className="px-6 text-md">
            Zipo offers an intuitive and user-friendly design studio, ensuring
            that both beginners and experienced designers can effortlessly bring
            their banner ideas to life. The easy-to-use interface is equipped
            with drag-and-drop functionality, making the design process a
            breeze.
          </p>
          <img
            src="https://morningedit.files.wordpress.com/2012/05/studio-shot3.jpg"
            alt="studio"
            className="w-500"
          />
        </div>

        <div className="flex my-6 items-center w-1080 mx-auto">
          <img
            src="https://i0.wp.com/graphicsalon.com/wp-content/uploads/2021/04/Versatile-Brochure-Template-11.jpg?fit=2000%2C1400&ssl=1"
            alt="studio"
            className="w-500"
          />
          <p className="px-6 text-md">
            Explore a vast collection of professionally crafted templates
            catering to a myriad of industries and purposes. Whether you need
            banners for social media, advertising campaigns, or special events,
            Zipo has the perfect template to kickstart your creativity.
          </p>
        </div>
        <div className="flex my-6 items-center  bg-slate-300 w-1080 mx-auto">
          <p className="px-6 text-md">
            Zipo understands the importance of responsive design. Create banners
            optimized for different devices, ensuring your message looks
            impeccable on desktops, tablets, and mobile phones.
          </p>
          <img
            src="https://img.freepik.com/free-vector/gradient-responsive-website-design-set_23-2149538352.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais"
            alt="studio"
            className="w-500"
          />
        </div>
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-2xl">Choose your product</h1>
          <p className="text-lg">We have something for everyone</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <div>
              <div className="bg-slate-50 w-96 flex flex-col mb-10">
                <h1 className="bg-blue-400 text-center text-2xl py-2 uppercase">
                  Base
                </h1>
                <div className="flex flex-col justify-center items-center gap-4">
                  <p className="text-gray-500 mt-2 mb-1">
                    Free trial for optimating your bussiness
                  </p>
                  <div className="flex flex-col items-center ">
                    <p className="text-black">
                      $<span className="font-extrabold text-4xl">23</span>
                    </p>
                    <p
                      className="text-gray-500"
                      style={{
                        borderBottom: "2px solid #CBD5E0",
                        paddingBottom: "10px",
                      }}
                    >
                      per month
                    </p>
                  </div>
                  <p className="text-gray-800">
                    For start up bussiness individual and small team
                  </p>
                  <button className="p-3 mb-4 border-sky-600 border-2 rounded-full cursor-pointer px-10">
                    Start a trial
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 w-96 flex flex-col mb-10">
              <h1 className="bg-blue-400 text-center text-2xl py-2 uppercase">
                Premium
              </h1>
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-gray-500 mt-2 mb-1">
                  Free trial for optimating your bussiness
                </p>
                <div className="flex flex-col items-center ">
                  <p className="text-black">
                    $<span className="font-extrabold text-4xl">35 </span>
                  </p>
                  <p
                    className="text-gray-500"
                    style={{
                      borderBottom: "2px solid #CBD5E0",
                      paddingBottom: "10px",
                    }}
                  >
                    per month
                  </p>
                </div>
                <p className="text-gray-800">
                  For start up bussiness individual and small team
                </p>
                <button className="p-3 mb-4 border-sky-600 border-2 rounded-full cursor-pointer px-10">
                  Start a trial
                </button>
              </div>
            </div>
            <div className="bg-slate-50 w-96 flex flex-col mb-10">
              <h1 className="bg-blue-400 text-center text-2xl py-2 uppercase">
                Exclusive
              </h1>
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-gray-500 mt-2 mb-1">
                  Free trial for optimating your bussiness
                </p>
                <div className="flex flex-col items-center ">
                  <p className="text-black">
                    $<span className="font-extrabold text-4xl">58</span>
                  </p>
                  <p
                    className="text-gray-500"
                    style={{
                      borderBottom: "2px solid #CBD5E0",
                      paddingBottom: "10px",
                    }}
                  >
                    per month
                  </p>
                </div>
                <p className="text-gray-800">
                  For start up bussiness individual and small team
                </p>
                <button className="p-3 mb-4 border-sky-600 border-2 rounded-full cursor-pointer px-10">
                  Start a trial
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <div className="w-1080 mx-auto flex justify-center items-center gap-4 mb-4">
          <h1>Click here to check our products</h1>
          <button
            className=" border-sky-600 border-2 rounded-full px-10 py-5"
            onClick={goToSearch}
          >
            Click me
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Main;
