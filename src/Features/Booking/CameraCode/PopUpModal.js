import React, { useState } from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import Webcam from "react-webcam";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { MdCamera, MdDownload } from "react-icons/md";
import "./popUpModal.css";
import Swal from "sweetalert2";
import styled from "styled-components";

const PopUpModal = (props) => {
  const { setOpenModal, setImage } = props;
  const [img, setImg] = useState("");
  const [imageTobeDownloaded, setImageTobeDownloaded] = useState("");
  const [cameraClicked, setCameraClicked] = useState(false);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = React.useRef(null);
  const cropperRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot(
      {
        width: 1080,
        height: 720,
      },
      setCameraClicked(true)
    );
    //console.log(imageSrc);
    setImg(imageSrc);

    //alert("Captured successfully u can download");
  }, [webcamRef]);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setImageTobeDownloaded(cropper.getCroppedCanvas().toDataURL());
  };

  async function downloadImage() {
    console.log(imageTobeDownloaded);
    //  props.imageProgressPercent(null)
    Swal.fire({
      title:
        '<p style="text-align: center;font-size: 14pt;color: #610329"><span style="font-size: 20pt"></span></p>',
      width: 620,
      imageUrl: imageTobeDownloaded,
      imageWidth: 580,
      imageHeight: 580,
      imageAlt: "Custom image",
      cancelButtonText: "CANCEL",
      cancelButtonColor: "#d1213c",
      confirmButtonText: "UPLOAD",
      confirmButtonColor: "#3e9641",
      allowOutsideClick: false,
      showCancelButton: true,
      backdrop: `
        rgba(69, 164, 247,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        finallySureSubmit();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }

  function finallySureSubmit() {
    setImage(imageTobeDownloaded);
    setOpenModal(false); //upload a click korley modal ta close hoye jabey
  }
  //

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <BsFillXCircleFill style={{ color: "red" }} />
            </button>
          </div>
          <Webcam
            audio={false}
            height={400}
            width={500}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
            screenshotQuality={1}
            imageSmoothing={true}
          />
          {/* <div>
            <Button onClick={capture}>Capture photo</Button>
          </div> */}
          <div className="footer">
            <button onClick={capture}>
              <MdCamera />
            </button>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="modalContainer">
          <Cropper
            src={img}
            style={{ height: "300px", width: "100%", marginTop: "80px" }}
            // Cropper.js options
            initialAspectRatio={12 / 9}
            guides={false}
            crop={onCrop}
            ref={cropperRef}
          />
          <div className="downloadBtn">
            {cameraClicked && (
              <button
                onClick={(e) => {
                  downloadImage(imageTobeDownloaded);
                }}
              >
                <MdDownload style={{ width: "35px", height: "22px" }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpModal;

//TODO: Styled component a niye jabo
