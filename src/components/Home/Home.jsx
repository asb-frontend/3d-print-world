// Home.js
import React, { useContext, useEffect } from "react";
import { GlobalStateContext } from "../../context/GlobalState";
import MosaicGallery from "../MosaicGallery/MosaicGallery"; // Adjust the import path as necessary
import ImageSlider from "../ImageSlider/ImageSlider";
import s from "./Home.module.css";
import { ImagesContext } from "../../context/ImagesContext";
import { Pages, ShopperLoginStates } from "../../constants/enums/enums";

const Home = () => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const images = useContext(ImagesContext);

  useEffect(() => {
    dispatch({ type: "CURRENT_PAGE", payload: Pages.HOME });
  }, [dispatch]);

  return (
    <div className={s.home}>
      <ImageSlider></ImageSlider>
      <div className={s.section}>
        <div className={s.leftSide}>
          <p className={s.subtitle}>
            Making your life easier, one print at a time.
          </p>
          <div className={s.companyMission}>
            <div className={s.banner}>
              <h1>Our Mission:</h1>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
              amet quam in purus consequat suscipit. Ut gravida diam nec urna
              faucibus, nec interdum purus dictum. Aenean sed lacus quis sem
              scelerisque fermentum. Nullam vel diam eu felis malesuada
              consequat.
            </div>
            <div>
              Vestibulum nec pharetra enim, sed consectetur purus. Nulla nec
              eros quis justo congue pretium. Donec vulputate erat at tellus
              eleifend, non aliquam libero suscipit. Cras a dolor ac elit
              maximus rutrum. Sed quis consectetur lorem.
            </div>
          </div>
        </div>
        <div className={s.rightSide}>
          <div className={`${s.imageContainer} ${s.stickyImages}`}>
            <div />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={2000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={3000}
            />
            <div />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={1000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={2000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={3000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={4000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={1000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={2000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={3000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={4000}
            />
            <div />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={2000}
            />
            <MosaicGallery
              className={s.mosaicImages}
              images={images}
              interval={5000}
              initialDelay={3000}
            />
            <div />
          </div>
        </div>
      </div>
      <div style={{ height: "8000px" }}>Some New Section</div>
    </div>
  );
};

export default Home;
