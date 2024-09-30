import React, { useState } from 'react';
import imageTotal from '../assets/imageTotal.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

function Hero() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [alertBMI, setAlertBMI] = useState('');
  const [colorAlert, setColorAlert] = useState('');

  function imageChanger(newBmi) {
    if (newBmi < 18.5) {
      setCurrentImage(image1);
      setAlertBMI('نقص في الوزن');
      setColorAlert('alert-warning');
    } else if (newBmi < 24.9 && newBmi >= 18.5) {
      setCurrentImage(image2);
      setAlertBMI('وزن طبيعي');
      setColorAlert('alert-success');
    } else if (newBmi < 29.9 && newBmi >= 24.9) {
      setCurrentImage(image3);
      setAlertBMI('زيادة في الوزن');
      setColorAlert('alert-warning');
    } else if (newBmi < 34.9 && newBmi >= 29.9) {
      setCurrentImage(image4);
      setAlertBMI('بدانة');
      setColorAlert('alert-error');
    } else if (newBmi >= 35) {
      setCurrentImage(image5);
      setAlertBMI('بدانة مفرطة');
      setColorAlert('alert-error');
    }
  }

  function calculateBMI() {
    const result = weight / (((height / 100) * height) / 100);
    setBmi(result);
    imageChanger(result);
  }

  return (
    <div className="hero min-h-screen bg-base-200 p-6 flex flex-col items-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="text-center text-white mb-4 text-4xl font-bold">حاسبة BMI</p>
         <p className="text-center text-gray-600 mb-4">
            أدخل الوزن والطول لحساب مؤشر كتلة الجسم
          </p>
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="number"
              placeholder="الطول (سم)"
              className="input input-bordered w-full"
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
            <input
              type="number"
              placeholder="الوزن (كجم)"
              className="input input-bordered w-full"
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <button
              onClick={calculateBMI}
              className="btn btn-primary w-full"
            >
              حساب الكتلة
            </button>
          </div>
          {currentImage && weight !== 0 && height !== 0 && (
            <figure className="mt-4">
              <img
                src={currentImage}
                alt="BMI status"
                className="rounded-lg max-h-40 mx-auto"
              />
            </figure>
          )}

          {bmi !== null && weight !== 0 && height !== 0 && (
            <div className={`alert ${colorAlert} shadow-lg mt-6`}>
              <div className="flex flex-col items-center w-full">
                <p className="text-xl font-bold">
                  BMI: {bmi.toFixed(2)}
                </p>
                <p className="text-lg">{alertBMI}</p>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

export default Hero;
