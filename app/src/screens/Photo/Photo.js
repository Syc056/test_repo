import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import "../../css/Photo.css";
import countdownImg from '../../assets/Photo/Snap/countdown.png';
import photocountImg from '../../assets/Photo/Snap/photocount.png';
import axios from 'axios';
import background_en from '../../assets/Photo/Snap/BG.png';
import background_kr from '../../assets/Photo/Snap/kr/BG.png';
import background_vn from '../../assets/Photo/Snap/vn/BG.png';
import { getPhotos, sendCaptureReq } from '../../api/config';

function Photo() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(8);
    const [photoCount, setPhotoCount] = useState(0);
    const [flash, setFlash] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(background_en);
    const [capturing, setCapturing] = useState(false);
    const timerRef = useRef(null);

    const soundTakePhoto='./take_photo.wav'
useEffect(()=>{
    if (flash) {
           const audio = new Audio(soundTakePhoto); 
    audio.muted=true
    audio.play()
    audio.muted=false   
    }

},[flash])
const sound='./look_up_smile.wav'
        const audioRef = useRef(null);
      
        useEffect(() => {
          //음성 재생
          const audio = new Audio(sound); 
          audio.muted=true
          audio.play()
          audio.muted=false
      
        }, []);
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    const startLiveView = async () => {
        try {
            await axios.get('http://172.22.247.48:5000/start_live_view');
        } catch (error) {
            console.error('Failed to start live view:', error);
        }
    };

    const takeSnapshot = async () => {
        setFlash(true);
        await sleep(100); // 서버가 stop_live_view를 호출하고 안정화될 시간을 줌
        setCapturing(true);
        try {
            const response = await sendCaptureReq();
            console.log("response result>>>", response);
            setPhotoCount((prevCount) => prevCount + 1);
        } catch (error) {
            console.error('Failed to capture image:', error);
        }
        setFlash(false);
        setCapturing(false);
    };

    const startTimer = () => {
        timerRef.current = setInterval(async () => {
            setCountdown((prevCountdown) => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(timerRef.current); // 타이머를 멈추고 스냅샷을 찍음
                    takeSnapshot().then(() => {
                        setCountdown(8);
                        if (photoCount < 7) { // 사진이 7장 미만일 때만 타이머 다시 시작
                            startTimer();
                        }
                    });
                    return 8;
                }
            });
        }, 1000);
    };

    useEffect(() => {
        const initializeLiveView = async () => {
            await startLiveView();
        };

        initializeLiveView();
        startTimer();

        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (photoCount === 8) {
            const getPhotosAndNavigate = async () => {
                const photos = await getPhotos();
                console.log("axios photos", photos);
                const formattedImages = photos.images.map(img => {
                    const imageName = img.url.split('/').pop();
                    return {
                        ...img,
                        // url: `${process.env.REACT_APP_BACKEND}/get_photo/uploads/${imageName}`
                        url: `${process.env.REACT_APP_BACKEND}/serve_photo/${imageName}`
                    };
                });
                console.log("포맷", formattedImages);
                sessionStorage.setItem('photos', JSON.stringify(formattedImages));
                navigate('/photo-choose');
            };
            console.log("사진 8장 다 찍음. photo-choose로 이동 준비.");
            getPhotosAndNavigate();
        }
    }, [photoCount, navigate]);

    useEffect(() => {
        const language = sessionStorage.getItem('language');
        if (language === 'en') {
            setBackgroundImage(background_en);
        } else if (language === 'ko') {
            setBackgroundImage(background_kr);
        } else if (language === 'vi') {
            setBackgroundImage(background_vn);
        }
    }, []);

    return (
        <div className={`photo-container ${flash ? 'animate' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="left-photo-div" style={{ backgroundImage: `url(${countdownImg})` }}>
                <div className="photo-countdown">{countdown}</div>
            </div>
            <div className="right-photo-div" style={{ backgroundImage: `url(${photocountImg})` }}>
                <div className="photo-count">{photoCount}/8</div>
            </div>
            <div className="middle-photo-div">
                {!capturing && (
                    <img
                        src={`http://172.22.247.48:5000/video_feed`}
                        alt="Live View"
                        className='photo-webcam'
                    />
                )}
            </div>
        </div>
    );
}

export default Photo;
