"use client";

// Hooks react
import { useState } from "react";
import { useQrCard } from "./hooks/useQrCard";

// Image
import Image from "next/image";
import ardeva1 from "./img/ardeva1.jpeg";

// Components
import Nav from "@/components/Nav";
import EditorPanel from "./components/EditorPanel";
import QRPreview from "./components/QRPreview";
import Footer from "@/components/Footer";
import Note from "@/components/Note";

// icons
import { FaGithub, FaHome, FaBlogger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const qr = useQrCard();

  const [isSideOpen, setIsSideOpen] = useState(false);

  function side() {
    setIsSideOpen(!isSideOpen);
  }

  return (
    <main className="container">
      <Nav klikSide={side} />
      <aside className={`side1 ${isSideOpen ? "side2" : ""}`}>
        <div className="side1Container">
          <Image
            className="imgSide"
            src={ardeva1}
            alt="Ardeva"
            loading="eager"
          />
          <div className="side1Container2">
            <h2>
              Ardeva <span>Alghifari</span>.
            </h2>
            <button className="button1">klik disini</button>

            <button className="button2">
              <FaGithub className="button2Icon" />
            </button>
          </div>
        </div>

        <a href="">
          <FaHome /> Home
        </a>
        <a href="">
          <FaBlogger /> Blog
        </a>
        <a href="">
          <MdEmail /> Email
        </a>
      </aside>
      {isSideOpen && <div className="overlay" onClick={side}></div>}

      <div className="workspace">
        <EditorPanel
          text={qr.text}
          setText={qr.setText}
          background={qr.background}
          setBackground={qr.setBackground}
          logo={qr.logo}
          setLogo={qr.setLogo}
          orientation={qr.orientation}
          setOrientation={qr.setOrientation}
          qrSize={qr.qrSize}
          setQrSize={qr.setQrSize}
          qrOnly={qr.qrOnly}
          setQrOnly={qr.setQrOnly}
          onDownload={qr.downloadImage}
        />

        <QRPreview
          canvasRef={qr.canvasRef}
          orientation={qr.orientation}
          qrOnly={qr.qrOnly}
          onPointerDown={qr.handlePointerDown}
          onPointerMove={qr.handlePointerMove}
          onPointerUp={qr.handlePointerUp}
          onPointerCancel={qr.handlePointerUp}
        />
      </div>

      <Note />
      <Footer />
    </main>
  );
}
