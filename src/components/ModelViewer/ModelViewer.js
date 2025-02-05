import React, { useRef, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import QRCode from "qrcode.react";

const ModelViewer = ({ item }) => {
  const [ARSupported, setARSupported] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const model = useRef();

  let modelViewer1 = {
    backgroundColor: "#ecf0f3",
    overflowX: "hidden",
    posterColor: "#eee",
    width: "100%",
    height: ARSupported ? "85%" : "75%",
    borderRadius: 15,
  };

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      setARSupported(true);
    }
  }, []);

  const handleGenerateQRCode = () => {
    setShowQRCode(true);
  };

  return (
    <div className="model-view">
      <model-viewer
        key={item.id}
        ref={model}
        style={modelViewer1}
        src={item.modelSrc}
        ios-src={item.iOSSrc}
        alt="A 3D model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
      >
        {ARSupported && (
          <button slot="ar-button" className="arbutton">
            View in your space
          </button>
        )}
      </model-viewer>

      <LazyLoad>
        <div className="qr-sec">
          {!ARSupported && (
            <>
              <button className="generate-qr-btn" onClick={handleGenerateQRCode}>
                Generate QR Code
              </button>
              {showQRCode && (
                <QRCode
                  id={item.name}
                  value={window.location.href}
                  size={110}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin
                />
              )}
            </>
          )}

          <div className="product-details">
            <div className="pname">{item.name}</div>
            {!ARSupported && <h5>Scan the QR code for AR View on mobile</h5>}
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ModelViewer;
