import React, { useState } from "react";
import {Form, Container } from "react-bootstrap";
import ReactCrop, {Crop} from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';

export default function ImageCrop() {
  const aspect = 1; // 正円
  const [srcImg, setSrcImg] = useState(null);
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    x: 0,
    y: 0,
    aspect: aspect,
    width: 0,
    height: 0,
  });
  const [result, setResult] = useState(null);
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => { event.preventDefault(); }
  const handleImage = async (event:React.ChangeEvent<HTMLInputElement>) => {
      setSrcImg(URL.createObjectURL(event.currentTarget.files[0]));
  };
  const getCroppedImg = async () => {
      try {
          const canvas = document.createElement("canvas");
          const scaleX = image.naturalWidth / image.width;
          const scaleY = image.naturalHeight / image.height;
          canvas.width = crop.width;
          canvas.height = crop.height;
          const ctx = canvas.getContext("2d");
          ctx.imageSmoothingQuality = "high";
          ctx.imageSmoothingEnabled = true;
          ctx.beginPath();
          // 選択範囲を円にして
          ctx.arc(
            crop.width / 2,
            crop.height / 2,
            crop.width / 2,
            0,
            Math.PI*2,
            false
          );
          // 切り抜き
          ctx.clip();
          // 描画
          ctx.drawImage(
              image,
              crop.x * scaleX,
              crop.y * scaleY,
              crop.width * scaleX,
              crop.height * scaleY,
              0,
              0,
              crop.width,
              crop.height
          );
          const base64Image = canvas.toDataURL();
          setResult(base64Image);
          console.log(result);
      } catch (e) {
          console.log("crop the image");
      }
  };
  return (
    <Container className="container" fluid="md">
      <Alert severity="info" sx={{my:"2%"}}>
        選択した画像は、お使いの端末上(ブラウザ上)で加工されます。<br />
        選択した画像が、サーバーに記録されることはありません。<br />
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          { srcImg 
            && <Form.Label>切り抜く範囲を選択してください。 ※円の直径：{crop.width}px</Form.Label>
            || <Form.Label>画像を選択してください。</Form.Label>
          }
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
            <div>
              { srcImg && (
                  <ReactCrop
                    style={{maxWidth: "98%", minWidth: "98%", width:"98%"}}
                    src={srcImg}
                    onImageLoaded={setImage}
                    crop={crop}
                    onChange={setCrop}
                    circularCrop={true}
                  />
              )}
            </div>
          </Form.Group>
      </Form>
      { srcImg &&
        <Box sx={{width:"100%", textAlign:"right"}}>
          <Button classes="cropButton" onClick={getCroppedImg} sx={{mr:"2%", px:"10%"}} variant="outlined">切り抜き！</Button>
        </Box>
      }
      { result === "data:," && <Alert severity="error" sx={{my:"4%"}}>切り抜く範囲を選択してください！</Alert> }
      { result && result !== "data:," && <Alert severity="success" sx={{my:"2%"}}>画像を保存してください。<br />・PC : 右クリックで、名前をつけて画像を保存<br />・スマホ ： 画像を長押し</Alert> }
      { result && result !== "data:," && <Box sx={{mb:"10%", textAlign:"center"}}><img src={result} /></Box> }
  </Container>
  )
};
