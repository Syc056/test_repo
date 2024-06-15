// // // // // import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
// // // // // import { useTranslation } from 'react-i18next';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import i18n from '../translations/i18n';
// // // // // import "../css/Sticker.css";
// // // // // import frame from '../assets/Sticker/frame.png';
// // // // // import sticker_frame from '../assets/Sticker/sticker_frame.png';
// // // // // import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// // // // // import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// // // // // import Konva from 'konva';
// // // // // import useImage from 'use-image';
// // // // // import { StickerItem } from '../screens/StickerItem';
// // // // // import axios from 'axios';
// // // // // // import { Resizable } from 're-resizable';
// // // // // // Sticker
// // // // // import { stickers } from './stickers.data';

// // // // // // Go Back
// // // // // import goback_en from '../assets/Common/goback.png';
// // // // // import goback_en_hover from '../assets/Common/gobackhover.png';
// // // // // import goback_kr from '../assets/Common/kr/goback.png';
// // // // // import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// // // // // import goback_vn from '../assets/Common/vn/goback.png';
// // // // // import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // // // // // Background
// // // // // import background_en from '../assets/Sticker/BG.png';
// // // // // import background_kr from '../assets/Sticker/kr/BG.png';
// // // // // import background_vn from '../assets/Sticker/vn/BG.png';

// // // // // // Sticker
// // // // // import mood_en from '../assets/Sticker/mood.png';
// // // // // import mood_en_click from '../assets/Sticker/mood-click.png';
// // // // // import mood_kr from '../assets/Sticker/kr/mood-default.png';
// // // // // import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// // // // // import mood_vn from '../assets/Sticker/vn/mood-default.png';
// // // // // import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// // // // // import lovely_en from '../assets/Sticker/lovely.png';
// // // // // import lovely_en_click from '../assets/Sticker/lovely-click.png';
// // // // // import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// // // // // import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// // // // // import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// // // // // import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// // // // // import cartoon_en from '../assets/Sticker/cartoon.png';
// // // // // import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// // // // // import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// // // // // import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// // // // // import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// // // // // import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// // // // // import y2k_en from '../assets/Sticker/y2k.png';
// // // // // import y2k_en_click from '../assets/Sticker/y2k-click.png';
// // // // // import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// // // // // import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// // // // // import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// // // // // import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// // // // // import print from '../assets/Sticker/print.png';
// // // // // import print_click from '../assets/Sticker/print_click.png';
// // // // // import print_kr from '../assets/Sticker/kr/print-default.png';
// // // // // import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// // // // // import print_vn from '../assets/Sticker/vn/print-default.png';
// // // // // import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// // // // // //frame나오는 공간
// // // // // import frame_box from '../assets/Sticker/frame_box.png';
// // // // // import CustomCarousel from '../components/CustomCarousel';
// // // // // import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// // // // // import { originAxiosInstance } from '../api/config';

// // // // // function Filter() {
// // // // //      const { t } = useTranslation();
// // // // //      const navigate = useNavigate();
// // // // //      const [src, setSrc] = useState(null)
// // // // //      const [hoveredImage, setHoveredImage] = useState(null);
// // // // //      const [selectedLayout, setSelectedLayout] = useState(null);
// // // // //      const [selectedPhotos, setSelectedPhotos] = useState([]);
// // // // //      const [filterEffect, setFilterEffect] = useState(null);
// // // // //      const [myBackgrounds, setMyBackgrounds] = useState([]);
// // // // //      const bgLength=myBackgrounds.length
// // // // //      const [selectedFrame, setSelectedFrame] = useState(null);
// // // // //      const [images, setImages] = useState([]);
// // // // //      const [selectedId, selectShape] = useState(null);
// // // // //      const [clickPrint, setClickPrint] = useState(false);
// // // // //      const [orderCode, setOrderCode] = useState(null);
// // // // //      const [language, setLanguage] = useState('en');

// // // // //      const [backgroundImage, setBackgroundImage] = useState(background_en);
// // // // //      //스크롤 인덱스
// // // // //      const [scrollIdx, setScrollIdx] = useState(0)
// // // // //      const [dragStartY, setDragStartY] = useState(0);
// // // // //      const [bgIdx,setBgIdx]=useState(0)
// // // // //      const [stickerImgs,setStickerImgs]=useState([])
// // // // //      // Sticker
// // // // //      const [isSel,setIsSel]=useState(false)
// // // // //      const [mood, setMood] = useState(null);
// // // // //      const [lovely, setLovely] = useState(null);
// // // // //      const [cartoon, setCartoon] = useState(null);
// // // // //      const [y2k, setY2k] = useState(null);
// // // // //      const [printButton, setPrintButton] = useState(null);

// // // // //      const [goBackButton, setGoBackButton] = useState(goback_en);
// // // // //      const [clickedButton, setClickedButton] = useState(false);
// // // // //      const [stickerDrag,setStickerDrag]=useState(false)
// // // // // const [photos,setPhotos]=useState([])
// // // // // const [selectedItems,setSelectedItems]=useState([])
// // // // // const [width,setWidth]=useState(0)
// // // // // const [height,setHeight]=useState(0)
// // // // //      const background = new Image();
// // // // //      background.crossOrigin = 'Anonymous';
// // // // //      background.src = sessionStorage.getItem('downloaded-image');
// // // // //      console.log("다운로드 백그라운드", sessionStorage.getItem('photos'))
// // // // //      const [selectedCategory, setSelectedCategory] = useState('MOOD');
// // // // //      const [backgroundList,setBackgroundList]=useState([])
// // // // //      const [tempImage,setTempImage]=useState()
// // // // //      // const stageRef = useRef(null);
// // // // //      const [stageRefs,setStageRefs]=useState([])
// // // // //      const chunkArray = (arr, size) => {
// // // // //           return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
// // // // //      };

// // // // // useEffect(()=>{
// // // // //      const photos = JSON.parse(sessionStorage.getItem('photos'));
// // // // // console.log("photos>>>",photos)
// // // // // if (photos===null)return;
// // // // //      setPhotos(photos)
// // // // // },[])
// // // // // useEffect(()=>{
// // // // //      if (!photos)return;
// // // // //      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));

// // // // //      setSelectedItems(selItems)
// // // // // },[photos])
// // // // //      useEffect(() => {  
// // // // //           //  console.log("백그라운드 프레임",backgroundList)
// // // // //           if (!backgroundList.length===0) {
// // // // //                backgroundList[0].src = sessionStorage.getItem('downloaded-image');
// // // // //                // const element = document.querySelector('.image');
// // // // //                // if (element) {
// // // // //                //     const width = element.offsetWidth; // 요소의 너비
// // // // //                //     const height = element.offsetHeight; // 요소의 높이 
// // // // //                //     setWidth(width);
// // // // //                //     setHeight(height);
// // // // //                //     const backgroundList = myBackgrounds.map((imageUrl) => {
// // // // //                //      const img = new Image();
// // // // //                //      img.crossOrigin = 'Anonymous';
// // // // //                //      img.src = imageUrl;
// // // // //                //      return img;
// // // // //                //  });
// // // // //                //  setBackgroundList(backgroundList)
// // // // //                // }
// // // // //                window.location.reload();
// // // // //           }
// // // // //      }, []);

// // // // //      useEffect(() => {
// // // // //           const storedLanguage = sessionStorage.getItem('language');
// // // // //           if (storedLanguage) {
// // // // //                setLanguage(storedLanguage);
// // // // //                if (storedLanguage === 'en') {
// // // // //                     setBackgroundImage(background_en);
// // // // //                     setMood(mood_en);
// // // // //                     setLovely(lovely_en);
// // // // //                     setCartoon(cartoon_en);
// // // // //                     setY2k(y2k_en);
// // // // //                     setPrintButton(print);
// // // // //                     setGoBackButton(goback_en);
// // // // //                } else if (storedLanguage === 'ko') {
// // // // //                     setBackgroundImage(background_kr);
// // // // //                     setMood(mood_kr);
// // // // //                     setLovely(lovely_kr);
// // // // //                     setCartoon(cartoon_kr);
// // // // //                     setY2k(y2k_kr);
// // // // //                     setPrintButton(print_kr);
// // // // //                     setGoBackButton(goback_kr);
// // // // //                } else if (storedLanguage === 'vi') {
// // // // //                     setBackgroundImage(background_vn);
// // // // //                     setMood(mood_vn);
// // // // //                     setLovely(lovely_vn);
// // // // //                     setCartoon(cartoon_vn);
// // // // //                     setY2k(y2k_vn);
// // // // //                     setPrintButton(print_vn);
// // // // //                     setGoBackButton(goback_vn);
// // // // //                }
// // // // //           }

// // // // //           // get session storage selectedLayout
// // // // //           const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
// // // // //           if (sessionSelectedLayout) {
// // // // //                const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

// // // // //                console.log("레이아웃을 찾아서>>>", parsedSelectedLayout.photo_full)
// // // // //                setSelectedLayout(parsedSelectedLayout.photo_cover);
// // // // //                // setMyBackground(parsedSelectedLayout.photo);
// // // // //                setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

// // // // //                const imgs=[]
// // // // //           for (let i = 0; i < parsedSelectedLayout.length; i++) {
// // // // //              imgs.push([])
               
// // // // //           }
// // // // //           setImages(imgs)
// // // // //           setStickerImgs(imgs)
// // // // //                // setStageRefs()
// // // // //                setImages(parsedSelectedLayout.map(b=>[]))
// // // // //                // background.src=parsedSelectedLayout.photo_full
// // // // //                // setSrc(parsedSelectedLayout.photo_full)
// // // // //           }

// // // // //           // Retrieve selected photos from session storage
// // // // //           const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// // // // //           if (storedSelectedPhotos) {

// // // // //                setSelectedPhotos(storedSelectedPhotos);
// // // // //           }

// // // // //           // Filter
// // // // //           const filterSession = sessionStorage.getItem('filter');
// // // // //           if (filterSession) {
// // // // //                setFilterEffect(filterSession);
// // // // //           }

// // // // //           // Retrieve selected frame from session storage
// // // // //           const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
// // // // //           if (storedSelectedFrame) {

// // // // //                setSelectedFrame(storedSelectedFrame.frame);
// // // // //           }
// // // // //      }, []);

// // // // //      const handleMouseEnter = (image) => {
// // // // //           setHoveredImage(image);
// // // // //      }

// // // // //      const handleMouseLeave = () => {
// // // // //           setHoveredImage(null);
// // // // //      }

// // // // //      const displayClassNameForBackground = () => {
// // // // //           if (selectedFrame == '2cut-x2') {
// // // // //                return 'left-choose-photos-2cut';
// // // // //           } else if (selectedFrame == '4-cutx2') {
// // // // //                return 'left-choose-photos-4cut';
// // // // //           } else if (selectedFrame == '5-cutx2') {
// // // // //                return 'left-choose-photos-5cut';
// // // // //           } else {
// // // // //                return 'left-choose-photos';
// // // // //           }
// // // // //      }

// // // // //      const getImageStyle = () => {
// // // // //           return filterEffect;
// // // // //      }

// // // // //      const displayClassNameForLayout = () => {
// // // // //           if (selectedFrame == '2cut-x2') {
// // // // //                return 'left-choose-container-2cut';
// // // // //           } else if (selectedFrame == '4-cutx2') {
// // // // //                return 'left-choose-container-4cut';
// // // // //           } else if (selectedFrame == '5-cutx2') {
// // // // //                return 'left-choose-container';
// // // // //           } else {
// // // // //                return 'left-choose-container';
// // // // //           }
// // // // //      }

// // // // //      const displayClassNameForPhoto = (rowIndex, photoIndex) => {
// // // // //           if (selectedFrame === 'Stripx2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-0-1';
// // // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-1-0';
// // // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-1-1';
// // // // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-2-0';
// // // // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-2-1';
// // // // //                } else if (rowIndex === 3 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-3-0';
// // // // //                } else if (rowIndex === 3 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-3-1';
// // // // //                }
// // // // //           } else if (selectedFrame === '6-cutx2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item6-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item6-0-1';
// // // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item6-1-0';
// // // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item6-1-1';
// // // // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item6-2-0';
// // // // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item6-2-1';
// // // // //                }
// // // // //           } else if (selectedFrame === '2cut-x2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-2cut-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-2cut-0-1';
// // // // //                }
// // // // //           } else if (selectedFrame === '3-cutx2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-3cut-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-3cut-0-1';
// // // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-3cut-0-1';
// // // // //                }
// // // // //           } else if (selectedFrame === '4-cutx2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-4cut-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-4cut-0-1';
// // // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-4cut-1-0';
// // // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-4cut-1-1';
// // // // //                }
// // // // //           } else if (selectedFrame === '5-cutx2') {
// // // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-5cut-0-0';
// // // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-5cut-0-1';
// // // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // // //                     return 'choose-photo-item-5cut-1-0';
// // // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // // //                     return 'choose-photo-item-5cut-1-1';
// // // // //                }
// // // // //           }
// // // // //           return 'choose-photo-item';
// // // // //      }

// // // // //      const showSelectedPhotos = () => {
// // // // //           if (selectedFrame == '3-cutx2' && selectedPhotos.length > 1) {
// // // // //                const firstPhotoTpl = (
// // // // //                     <div className="choose-photo-row">
// // // // //                          <div
// // // // //                               className="choose-photo-item-3cut-top-line"
// // // // //                               style={{ backgroundImage: `url(${photos[selectedPhotos[0]].url})` }}
// // // // //                          />
// // // // //                     </div>
// // // // //                )
// // // // //                const selectedPhotoRows = chunkArray(selectedPhotos.slice(1), 2);
// // // // //                return (
// // // // //                     [firstPhotoTpl, ...selectedPhotoRows.map((row, rowIndex) => (
// // // // //                          <div key={rowIndex} className="choose-photo-row">
// // // // //                               {row.map((selectedIndex, photoIndex) => (
// // // // //                                    <div
// // // // //                                         key={photoIndex}
// // // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})` }}
// // // // //                                    />
// // // // //                               ))}
// // // // //                          </div>
// // // // //                     ))]
// // // // //                );
// // // // //           } else if (selectedFrame == '5-cutx2' && selectedPhotos.length > 1) {
// // // // //                const lastPhotoTpl = (
// // // // //                     <div className="choose-photo-row">
// // // // //                          <div
// // // // //                               className="choose-photo-item-5cut-last-line"
// // // // //                               style={{ backgroundImage: `url(${photos[selectedPhotos[selectedPhotos.length - 1]].url})` }}
// // // // //                          />
// // // // //                     </div>
// // // // //                )
// // // // //                const selectedPhotoRows = chunkArray(selectedPhotos.slice(0, selectedPhotos.length - 1), 2);
// // // // //                return (
// // // // //                     [selectedPhotoRows.map((row, rowIndex) => (
// // // // //                          <div key={rowIndex} className="choose-photo-row">
// // // // //                               {row.map((selectedIndex, photoIndex) => (
// // // // //                                    <div
// // // // //                                         key={photoIndex}
// // // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})` }}
// // // // //                                    />
// // // // //                               ))}
// // // // //                          </div>
// // // // //                     )), lastPhotoTpl]
// // // // //                );
// // // // //           } else {
// // // // //                const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// // // // //                return (
// // // // //                     selectedPhotoRows.map((row, rowIndex) => (
// // // // //                          <div key={rowIndex} className="choose-photo-row">
// // // // //                               {row.map((selectedIndex, photoIndex) => (
// // // // //                                    <div
// // // // //                                         key={photoIndex}
// // // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})`, filter: getImageStyle() }}
// // // // //                                    />
// // // // //                               ))}
// // // // //                          </div>
// // // // //                     ))
// // // // //                );
// // // // //           }
// // // // //      }

// // // // //      const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
// // // // //           console.log("스티커 올라갈 프레임 인덱스", bgIdx, images);
      
// // // // //           const item = {
// // // // //               width,
// // // // //               x,
// // // // //               y,
// // // // //               src,
// // // // //               resetButtonRef: createRef()
// // // // //           };
      
// // // // //           setImages((currentImages) => {
// // // // //               const newImages = currentImages.map((subList, index) => {
// // // // //                   if (index === bgIdx) {
// // // // //                       return [...subList, item];
// // // // //                   }
// // // // //                   return subList;
// // // // //               });
      
// // // // //               return newImages;
// // // // //           });
// // // // //       };

// // // // //      const resetAllButtons = useCallback(() => {
// // // // //           images.forEach((subList) => {
// // // // //               subList.forEach((image) => {
// // // // //                   if (image.resetButtonRef.current) {
// // // // //                       image.resetButtonRef.current();
// // // // //                   }
// // // // //               });
// // // // //           });
// // // // //       }, [images]);
      
// // // // //       const handleCanvasClick = useCallback(
// // // // //           (event) => {
// // // // //               if (event.target.attrs.id === "backgroundImage") {
// // // // //                   resetAllButtons();
// // // // //               }
// // // // //           },
// // // // //           [resetAllButtons]
// // // // //       );

// // // // //      const checkDeselect = (e) => {
// // // // //           const clickedOnEmpty = e.target === e.target.getStage();
// // // // //           if (clickedOnEmpty) {
// // // // //                selectShape(null);
// // // // //           }
// // // // //      }

// // // // //      const filterStickerByCategory = (category) => {
// // // // //           setSelectedCategory(category);
// // // // //      }

// // // // //      const printFrameWithSticker = (event,) => {
// // // // //           // console.log("stage refs",stageRefs)
// // // // //           if (clickPrint == true) {
// // // // //                return;
// // // // //           }
// // // // //           setClickPrint(true);

// // // // //           callPrinter();
// // // // //           uploadCloud();

// // // // //           setTimeout(() => {
// // // // //                navigate("/print");
// // // // //           }, 3000);
// // // // //      }

// // // // //      const uploadCloud = () => {
// // // // //           try {
// // // // //                for (let i = 0; i < stageRefs.length; i++) {
// // // // //                     const stageRef = stageRefs[i];
// // // // //                       const formData = new FormData();
// // // // //                formData.append("photo", stageRef.current.toDataURL());
// // // // //                formData.append("order_code", sessionStorage.getItem('orderCodeNum'));

// // // // //                originAxiosInstance.post(
// // // // //                     `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
// // // // //                     formData,
// // // // //                     {
// // // // //                          headers: {
// // // // //                               'Content-Type': 'multipart/form-data'
// // // // //                          }
// // // // //                     })
// // // // //                     .then(response => {
// // // // //                          const data = response.data;
// // // // //                          if (data.photo_url) {
// // // // //                               sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
// // // // //                               console.log(data.photo_url);
// // // // //                          }
// // // // //                     })
// // // // //                     .catch(error => {
// // // // //                          console.log(error);
// // // // //                     });
// // // // //                }
             
// // // // //           } catch (error) {
// // // // //                console.log(error);
// // // // //           }
// // // // //      }

// // // // //      const callPrinter = () => {
// // // // //           alert("callPrinter");
// // // // // for (let i = 0; i < stageRefs.length; i++) {
// // // // //      const stageRef = stageRefs[i];
// // // // //       if (!stageRef.current) {
// // // // //                alert("stageRef.current is null");
// // // // //                return;
// // // // //           }

// // // // //           const formData = new FormData();
// // // // //           const dataURL = stageRef.current.toDataURL();
// // // // //           alert(dataURL);
// // // // //           alert(selectedFrame);
// // // // //           formData.append('photo', dataURL);
// // // // //           formData.append('frame', selectedFrame);

// // // // //           alert(formData);
// // // // //           originAxiosInstance.post(
// // // // //                `${process.env.REACT_APP_BACKEND}/frames/api/print`,
// // // // //                formData,
// // // // //                {
// // // // //                     headers: {
// // // // //                          'Content-Type': 'multipart/form-data'
// // // // //                     }
// // // // //                })
// // // // //                .then(response => {
// // // // //                     console.log(response);
// // // // //                })
// // // // //                .catch(error => {
// // // // //                     console.log(error);
// // // // //                });
// // // // // }
         
// // // // //      }

// // // // //      const hoverGoBackButton = () => {
// // // // //           if (language == 'en') {
// // // // //                setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
// // // // //           } else if (language == 'vi') {
// // // // //                setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
// // // // //           } else if (language == 'ko') {
// // // // //                setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
// // // // //           }
// // // // //      }

// // // // //      const hoverStickerButton = (stickerEffect) => {
// // // // //           if (stickerEffect == 'mood') {
// // // // //                if (language == 'en') {
// // // // //                     setMood(mood == mood_en_click ? mood_en : mood_en_click);
// // // // //                } else if (language == 'vi') {
// // // // //                     setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
// // // // //                } else if (language == 'ko') {
// // // // //                     setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
// // // // //                }
// // // // //           } else if (stickerEffect == 'lovely') {
// // // // //                if (language == 'en') {
// // // // //                     setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
// // // // //                } else if (language == 'vi') {
// // // // //                     setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
// // // // //                } else if (language == 'ko') {
// // // // //                     setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
// // // // //                }
// // // // //           } else if (stickerEffect == 'cartoon') {
// // // // //                if (language == 'en') {
// // // // //                     setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
// // // // //                } else if (language == 'vi') {
// // // // //                     setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
// // // // //                } else if (language == 'ko') {
// // // // //                     setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
// // // // //                }
// // // // //           } else if (stickerEffect == 'y2k') {
// // // // //                if (language == 'en') {
// // // // //                     setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
// // // // //                } else if (language == 'vi') {
// // // // //                     setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
// // // // //                } else if (language == 'ko') {
// // // // //                     setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
// // // // //                }
// // // // //           }
// // // // //      }

// // // // //      const hoverPrintButton = () => {
// // // // //           if (language == 'en') {
// // // // //                setPrintButton(printButton == print_click ? print : print_click);
// // // // //           } else if (language == 'vi') {
// // // // //                setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
// // // // //           } else if (language == 'ko') {
// // // // //                setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
// // // // //           }
// // // // //      }

// // // // //      // Chunk the selected photos array into arrays of 2 photos each
// // // // //      const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
// // // // //      const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// // // // //      //스크롤 하면 인덱스에 따라 스티커 타입 정하기
// // // // //      const myStickers = chunkArray(stickersData, 4);
// // // // //      // console.log("프레임 백그라운드",myBackground)
// // // // //      //크기 리사이징 예제코드
// // // // //      const [isDragging, setIsDragging] = useState(false);
// // // // //      const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
// // // // //      const [radius, setRadius] = useState(50); // 초기 반지름

// // // // //      const handleMouseDown = (e) => {
// // // // //           setIsDragging(true);
// // // // //      };

// // // // //      const handleMouseUp = () => {
// // // // //           setIsDragging(false);
// // // // //      };

// // // // //      const handleMouseMove = (e) => {
// // // // //           if (!isDragging) return;

// // // // //           const newPosition = {
// // // // //                x: e.clientX,
// // // // //                y: e.clientY
// // // // //           };
// // // // //           setPosition(newPosition);
// // // // //      };

// // // // //      const handleMouseLeave2 = () => {
// // // // //           setIsDragging(false);
// // // // //      };

// // // // //      const handleMouseWheel = (e) => {
// // // // //           if (e.deltaY > 0) {
// // // // //                setRadius(radius - 5);
// // // // //           } else {
// // // // //                setRadius(radius + 5);
// // // // //           }
// // // // //      };
// // // // //      console.log("my stickers", myStickers, stickers)
// // // // //      const onDragStart = (event) => {
// // // // //           setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
// // // // //       };

// // // // //      const onDragEnd = (event) => {
// // // // //           const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
// // // // //           if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
// // // // //               setScrollIdx(prevIdx => (prevIdx + 1) % 4);
// // // // //               const nextScrollIdx = (scrollIdx + 1) % 4;
// // // // //               console.log("스크롤 인덱스>>>", nextScrollIdx)
// // // // //               if (nextScrollIdx === 0) {
// // // // //                   setSelectedCategory("MOOD");
// // // // //               }
// // // // //               else if (nextScrollIdx === 1) {
// // // // //                   setSelectedCategory("LOVELY");
// // // // //               }
// // // // //               else if (nextScrollIdx === 2) {
// // // // //                   setSelectedCategory("CARTOON");
// // // // //               }
// // // // //               else if (nextScrollIdx === 3) {
// // // // //                   setSelectedCategory("Y2K");
// // // // //               }
// // // // //           }
// // // // //       };
// // // // //       const carouselRef = useRef(null);
// // // // //       const [isDown, setIsDown] = useState(false);
// // // // //       const [startY, setStartY] = useState(0);
// // // // //       const [scrollTop, setScrollTop] = useState(0);
  
// // // // //       useEffect(() => {
// // // // //           console.log("스티커 드래그 in useeffect",stickerDrag)
// // // // //           const carousel = carouselRef.current;
// // // // //   const dragging=stickerDrag
// // // // //           const handleMouseDown = (e) => {
// // // // //                // if (dragging)return
// // // // //                console.log(">>>마우스 다운",dragging)
// // // // //               setIsDown(true);
// // // // //               if (carousel) {
// // // // //                if (stickerDrag)return
// // // // //                   setStartY(e.pageY - carousel.offsetTop);
// // // // //                   setScrollTop(carousel.scrollTop);
// // // // //               }
// // // // //           };
  
// // // // //           const handleMouseLeave = () => {
// // // // //                // if (stickerDrag)return
// // // // //                console.log(">>>마우스 리브")
// // // // //               setIsDown(false);
// // // // //           };
  
// // // // //           const handleMouseUp = () => {
// // // // //                // if (stickerDrag)return
// // // // //                console.log(">>>마우스 업")
// // // // //               setIsDown(false);
// // // // //               snapToClosestItem();
// // // // //           };
  
// // // // //           const handleMouseMove = (e) => {
// // // // //                // return;
// // // // //                // if (stickerMoving)return;
// // // // //                if (dragging)return
              
// // // // //               if (!isDown) return;
// // // // //               e.preventDefault();
// // // // //               if (carousel) { 
       
// // // // //                   const y = e.pageY - carousel.offsetTop;
// // // // //                   const walk = (y - startY) * 3; // Scroll speed
// // // // //                   carousel.scrollTop = scrollTop - walk;
// // // // //               }
// // // // //           };
  
// // // // //           const snapToClosestItem = () => {
// // // // //               if (!carousel) return;
// // // // //               const itemHeight = carousel.querySelector('.image').offsetHeight;
// // // // //               const scrollY = carousel.scrollTop;
// // // // //               const index = Math.round(scrollY / itemHeight);  
// // // // //                     console.log(">>>백그라운드 인덱스",index)
// // // // //                     setBgIdx(index)
// // // // //               carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
// // // // //           };
  
// // // // //           if (carousel) {
// // // // //               carousel.addEventListener('mousedown', handleMouseDown);
// // // // //               carousel.addEventListener('mouseleave', handleMouseLeave);
// // // // //               carousel.addEventListener('mouseup', handleMouseUp);
// // // // //               carousel.addEventListener('mousemove', handleMouseMove);
// // // // //           }
  
// // // // //           return () => {
// // // // //               if (carousel) {
// // // // //                   carousel.removeEventListener('mousedown', handleMouseDown);
// // // // //                   carousel.removeEventListener('mouseleave', handleMouseLeave);
// // // // //                   carousel.removeEventListener('mouseup', handleMouseUp);
// // // // //                   carousel.removeEventListener('mousemove', handleMouseMove);
// // // // //               }
// // // // //           };
// // // // //       }, [isDown, startY, scrollTop,stickerDrag]);
    
// // // // //      useEffect(() => {
// // // // //   // add or remove refs

// // // // //   setStageRefs((refs) =>
// // // // //     Array(bgLength)
// // // // //       .fill()
// // // // //       .map((_, i) => refs[i] || createRef()),
// // // // //   );


// // // // // }, [bgLength]);  

// // // // // // 선택된 아이템을 가지고 있는 리스트
// // // // // const tempPhotos=[{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},]
// // // // // console.log("choose img",selectedItems,selectedPhotos)
// // // // // // const backgroundList = myBackgrounds.map((imageUrl) => {
// // // // // //      const img = new Image();
// // // // // //      img.crossOrigin = 'Anonymous';
// // // // // //      img.src = imageUrl;
// // // // // //      return img;
// // // // // //  });
// // // // //  console.log("백그라운드 이미지 리스트 생성>>>",backgroundList)
 
// // // // //      const getImgListLayout=(selectedFrame,selectedItems)=>{
// // // // //         if (selectedItems.length===0) {
          
// // // // //           return <></>
// // // // //         }
// // // // //           if (selectedFrame==="Stripx2") { 
// // // // //                 console.log("sel frame in func",selectedFrame,selectedItems)
// // // // //                return <div
// // // // //                className='selected-photos-s2-list'
               
// // // // //                >
// // // // //                     {/* 1 row */}
// // // // //                      <div
// // // // //                  className='selected-photos-s2-row'
// // // // //                    ><img
// // // // // className='stripx2img'
// // // // //                    src={selectedItems[0].url}
// // // // //                    />
// // // // //                    <img
// // // // // className='stripx2img'
// // // // //                    src={selectedItems[1].url}
// // // // //                    /></div>
// // // // //                    {/* 2 row */}
// // // // //                    <div
// // // // //                   className='selected-photos-s2-row'
// // // // //                  ><img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[2].url}
// // // // //                  />
// // // // //                  <img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[3].url}
// // // // //                  /></div>
// // // // //                   {/* 3 row */}
// // // // //                   <div
// // // // //                   className='selected-photos-s2-row'
// // // // //                  ><img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[4].url}
// // // // //                  />
// // // // //                  <img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[5].url}
// // // // //                  /></div>
// // // // //                   {/* 4 row */}
// // // // //                   <div
// // // // //                   className='selected-photos-s2-row'
// // // // //                  ><img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[6].url}
// // // // //                  />
// // // // //                  <img
// // // // // className='stripx2img'
// // // // //                  src={selectedItems[7].url}
// // // // //                  /></div>
// // // // //                </div>
// // // // //           }
// // // // //           else if(selectedFrame==="2cut-x2"){
// // // // // return <div
// // // // // className='selected-photos-2-list'

// // // // // >
// // // // //     {selectedItems.map((it,idx)=>
// // // // //     idx===0?<div
// // // // //     className='selected-photo-2-container-first'
// // // // //     ><div
// // // // //      className='selected-photo-2'
// // // // //        style={{
          
// // // // //           backgroundImage: `url(${it.url})`
// // // // //       }}
// // // // //      /></div>:
// // // // //     <div
// // // // //     className='selected-photo-2-container'
// // // // //     ><div
// // // // //      className='selected-photo-2'
// // // // //        style={{
          
// // // // //           backgroundImage: `url(${it.url})`
// // // // //       }}
// // // // //      /></div>
// // // // //     )} 
// // // // // </div>

// // // // //           }
// // // // //           else if(selectedFrame==="4-cutx2"){
// // // // //                console.log("이건가")
// // // // //                return <div
// // // // //                className='cut4x2-container'
// // // // //                >
// // // // // <img
// // // // // className='cut4x2-0'
// // // // // src={selectedItems[0].url}
// // // // // />
// // // // // <img
// // // // // className='cut4x2-1'
// // // // // src={selectedItems[1].url}
// // // // // />
// // // // // <img
// // // // // className='cut4x2-2'
// // // // // src={selectedItems[2].url}
// // // // // />
// // // // // <img
// // // // // className='cut4x2-3'
// // // // // src={selectedItems[3].url}
// // // // // />

// // // // //                </div>
               
               
// // // // //           }
// // // // //           else if(selectedFrame==="6-cutx2"){
// // // // //                return <div
// // // // //                className='cut6x2-container'>
// // // // //                     {/* 1 row */}
// // // // //                     <div
// // // // //                     className='cut6x2-row'
// // // // //                     ><img
// // // // //                     className='cut6x2-img'
// // // // //                     src={selectedItems[0].url}
// // // // //                     />
// // // // //                          <img
// // // // //                          className='cut6x2-img'
// // // // //                     src={selectedItems[1].url}
// // // // //                     />
// // // // //                     </div>
// // // // //                      {/* 2 row */}
// // // // //                      <div
// // // // //                     className='cut6x2-row'
// // // // //                     ><img
// // // // //                     className='cut6x2-img'
// // // // //                     src={selectedItems[2].url}
// // // // //                     />
// // // // //                          <img
// // // // //                          className='cut6x2-img'
// // // // //                     src={selectedItems[3].url}
// // // // //                     />
// // // // //                     </div>
// // // // //                     {/* 3 row */}
// // // // //                     <div
// // // // //                     className='cut6x2-row'
// // // // //                     ><img
// // // // //                     className='cut6x2-img'
// // // // //                     src={selectedItems[4].url}
// // // // //                     />
// // // // //                          <img
// // // // //                          className='cut6x2-img'
// // // // //                     src={selectedItems[5].url}
// // // // //                     />
// // // // //                     </div>
// // // // //                </div>
// // // // //           }
// // // // //           else{

// // // // //           }
// // // // //      }
// // // // //      function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
// // // // //           const backgroundImageSize = {width:width,height:height}
// // // // //           const backgroundWidth = backgroundImageSize.width;
// // // // //           const backgroundHeight = backgroundImageSize.height;
      
// // // // //           // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
// // // // //           const backgroundAspectRatio = backgroundWidth / backgroundHeight;
// // // // //           const stickerAspectRatio = stickerWidth / stickerHeight;
      
// // // // //           let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
// // // // //           if (stickerAspectRatio > backgroundAspectRatio) {
// // // // //               newStickerWidth = backgroundWidth * (stickerWidth / 1200);
// // // // //               newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
// // // // //               newStickerX = stickerX * (backgroundWidth / 1200);
// // // // //               newStickerY = stickerY * (backgroundWidth / 1200);
// // // // //           } else { 
// // // // //               newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
// // // // //               newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
// // // // //               newStickerY = stickerY * (backgroundHeight / 1000);
// // // // //               newStickerX = stickerX * (backgroundHeight / 1000); 
// // // // //           }
      
         
// // // // //           return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
// // // // //       }
// // // // //       //rerendering
// // // // //       useEffect(() => {
// // // // //           const loadImages = () => {
// // // // //                const tempImg = new Image();
// // // // //                tempImg.crossOrigin = 'Anonymous';
// // // // //                tempImg.src = '/temp.jpg';
// // // // //                setTempImage(tempImg)
// // // // //                console.log("temp img",tempImg)
// // // // //               if (backgroundList.length===0||!backgroundList[0].src||backgroundList[0].src===undefined||backgroundList[0]===undefined) {
// // // // //                   const element = document.querySelector('.image');
// // // // //                   if (element) {
// // // // //                       const width = element.offsetWidth; // Get element width
// // // // //                       const height = element.offsetHeight; // Get element height
// // // // //                       setWidth(width);
// // // // //                       setHeight(height);
// // // // //                       const loadedImages = myBackgrounds.map((imageUrl) => {
// // // // //                           const img = new Image();
// // // // //                           img.crossOrigin = 'Anonymous';
// // // // //                           img.src = imageUrl;
// // // // //                           // Wait for the image to load before returning it
// // // // //                           return new Promise((resolve, reject) => {
// // // // //                               img.onload = () => resolve(img);
// // // // //                               img.onerror = (err) => reject(err);
// // // // //                           });
// // // // //                       });
// // // // //                       Promise.all(loadedImages)
// // // // //                           .then((images) => {
// // // // //                               // All images are loaded
// // // // //                               setBackgroundList(images);
// // // // //                           })
// // // // //                           .catch((error) => {
// // // // //                               console.error("Error loading images:", error);
// // // // //                           });
// // // // //                   }
// // // // //               }
// // // // //           };
      
// // // // //           loadImages();
// // // // //       }, [backgroundList, myBackgrounds]); //
// // // // //       const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
// // // // //           console.log("프레임 선택",selectedFrame)
// // // // //           if (selectedFrame==="6-cutx2") {
// // // // //                const calcedWidth=width/2 - 45
// // // // //                const calcedHeight=height/3 - 30
// // // // //                const x11=36
// // // // //                const x12=calcedWidth+x11+18
// // // // //                const y1=50+20 
// // // // //                //
// // // // //                const x21=36
// // // // //                const x22=x12
// // // // //                const y2=calcedHeight+y1+10 
// // // // //                 //
// // // // //                 const x31=36
// // // // //                 const x32=x22
// // // // //                 const y3=calcedHeight+y2+10 
// // // // //                return      <>
// // // // //                {/* 11 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x11}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 12 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x12}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //              {/* 21 */}
// // // // //              <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x21}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 22 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x22}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //                {/* 31 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x31}
// // // // //                y={y3}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 32 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x32}
// // // // //                y={y3}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //             </>  
// // // // //           }
// // // // //          else if (selectedFrame==="Stripx2") {
// // // // //                const calcedWidth=width/2 - 30
// // // // //                const calcedHeight=height/4 - 20
// // // // //                //1 row
// // // // //                const x11=15
// // // // //                const x12=calcedWidth+x11+30
// // // // //                const y1=50+20 
// // // // //                //2 row
// // // // //                const x21=x11
// // // // //                const x22=x12
// // // // //                const y2=calcedHeight+y1+6 
// // // // //                 //3 row
// // // // //                 const x31=x11
// // // // //                 const x32=x22
// // // // //                 const y3=calcedHeight+y2+6 
// // // // //                              //4 row
// // // // //                              const x41=x11
// // // // //                              const x42=x32
// // // // //                              const y4=calcedHeight+y3+6 
// // // // //                return      <>
// // // // //                {/* 11 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x11}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 12 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x12}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //              {/* 21 */}
// // // // //              <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x21}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 22 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x22}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //                {/* 31 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x31}
// // // // //                y={y3}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 32 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x32}
// // // // //                y={y3}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //               {/* 41 */}
// // // // //               <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x41}
// // // // //                y={y4}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 42 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x42}
// // // // //                y={y4}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //             </>  
// // // // //           }
// // // // //           else if(selectedFrame==="2cut-x2"){
// // // // //                const calcedWidth=width/2 - 25
// // // // //                const calcedHeight=height-116
// // // // //                const x11=18
// // // // //                const x12=calcedWidth+x11+14
// // // // //                const y1=108
// // // // //                //
// // // // //                const x21=36
// // // // //                const x22=x12
// // // // //                const y2=calcedHeight+y1+10 
// // // // //                 //
// // // // //                 const x31=36
// // // // //                 const x32=x22
// // // // //                 const y3=calcedHeight+y2+10 
// // // // //                return      <>
// // // // //                {/* 11 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x11}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 12 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x12}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             /></>
// // // // //           }
// // // // //           else if(selectedFrame==="4-cutx2"){
// // // // //                const calcedWidth=width/2 - 68
// // // // //                const calcedHeight=height/2 - 50
// // // // //                //1 row
// // // // //                const x11=60
// // // // //                const x12=calcedWidth+x11+14
// // // // //                const y1=90
// // // // //                //2 row
// // // // //                const x21=x11
// // // // //                const x22=x12
// // // // //                const y2=calcedHeight+y1+20 
// // // // //                 //
// // // // //                 const x31=36
// // // // //                 const x32=x22
// // // // //                 const y3=calcedHeight+y2+10 
// // // // //                return      <>
// // // // //                {/* 11 */}
// // // // //                <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x11}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 12 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x12}
// // // // //                y={y1}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //             {/* 21 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x21}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //           {/* 22 */}
// // // // //             <KonvaImage
// // // // //                width={calcedWidth}
// // // // //                height={calcedHeight}
// // // // //                x={x22}
// // // // //                y={y2}
// // // // //             image={imgTag}
            
// // // // //             />
// // // // //             </>
// // // // //           }
// // // // //           else {
// // // // //                 return        <></>
// // // // //           }
         
// // // // //       }
// // // // //      return (
// // // // // <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
// // // // // <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
// // // // // <div className="left-sticker">
// // // // // <div
// // // // //        className='frame-box'
                          
// // // // //                     style={{
// // // // //                          backgroundImage: `url(${frame_box})`
// // // // //                     }}
// // // // //                             />
// // // // //   <div className='v-carousel-container' ref={carouselRef}>
// // // // //             <div className='v-carousel-images'>
// // // // //             {myBackgrounds.map((src, index) => (
// // // // //                  <div
// // // // //                  className='image'
// // // // //                  ><Stage
// // // // //      width={1200}
// // // // //      height={1000}
// // // // //      // x={0}
// // // // //      // scale={0.1}
// // // // //      onClick={handleCanvasClick}
// // // // //      onTap={handleCanvasClick}
// // // // //      className="konva-image"
// // // // //      onMouseDown={checkDeselect}
// // // // //      onTouchStart={checkDeselect}
// // // // //      ref={stageRefs[index]}
// // // // // >
// // // // //      <Layer
     
// // // // //      >

// // // // //            <KonvaImage
// // // // //                image={backgroundList[bgIdx]}
// // // // //                width={width}
// // // // //                height={height}
               
// // // // //                x = {0}
// // // // //                y = {50}
// // // // //                id="backgroundImage"
               
// // // // //           /> 
// // // // //      {/* photo for print */}
// // // // //  {showKonvaImgLayout(selectedFrame,width,height,tempImage)}
// // // // //            {images[bgIdx]===undefined?<></>:images[bgIdx].map((image, i) => {
// // // // //                return (
// // // // //                     <StickerItem
// // // // //                     isStickerDrag={stickerDrag}
// // // // //                     isSelected={isSel}
// // // // //                     setStickerDrag={setStickerDrag}
// // // // //                     onTransform={()=>{
// // // // //                          console.log("이미지 리사이징 중")
// // // // //                     }}
// // // // //                     onSelect={()=>{
// // // // //                          setIsSel(p=>!p)
// // // // //                          console.log("스티커 클릭")}}

// // // // //                          onDelete={() => {
// // // // //                               const newImages = [...images];
// // // // //                               newImages.splice(i, 1);
// // // // //                               setImages(newImages);
// // // // //                          }}
// // // // //                          onDragEnd={(event) => {
// // // // //                               image.x = event.target.x();
// // // // //                               image.y = event.target.y();
// // // // //                          }}
// // // // //                          onChange={(x,y,width,height)=>{
// // // // //                               console.log("리사이즈 한 너비 / 높이",width,height)
// // // // //                          }}
// // // // //                          key={i}
// // // // //                          image={image}
// // // // //                          shapeProps={image}
// // // // //                     />
// // // // //                );
// // // // //           })}
// // // // //      </Layer>
// // // // // </Stage></div>
                      
                    
                   
                   
               
// // // // //                ))}
// // // // //        </div></div>
  
// // // // // </div>

// // // // // <div className="middle-sticker"
// // // // //                     draggable={true}
// // // // //                     onDragStart={onDragStart}
// // // // //                     onDrag={() => {
// // // // //                          console.log("드래그 스티커 배경")
// // // // //                     }}
// // // // //                     onDragEnd={onDragEnd}

// // // // //                     style={{
// // // // //                          backgroundImage: `url(${sticker_frame})`
// // // // //                     }}>


// // // // //                     {myStickers.map((group, index) => (
// // // // //                          <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
// // // // //                               {group.map((mySticker, photoIndex) => (
// // // // //                                    <div
// // // // //                                         key={photoIndex}
// // // // //                                         className="sticker"
// // // // //                                         onClick={() => {
// // // // //                                              const element = document.querySelector('.image');
// // // // //                                              const width = element.offsetWidth; // 요소의 너비
// // // // //                                              const height = element.offsetHeight; // 요소의 높이  
// // // // //                                              console.log("배경이미지의 원래크기",width,height)
// // // // //                                              addStickerToPanel({
// // // // //                                                   bgIdx: bgIdx,
// // // // //                                              src: mySticker.photo,
// // // // //                                              width: 100,
// // // // //                                              // x:0,
// // // // //                                              // y:0
// // // // //                                              ...adjustStickerToBackgroundSize(width,height,500, 500, 300, 300) // 스티커의 초기 위치와 크기를 지정
// // // // //                                              });
                                           
// // // // //                                         }}
// // // // //                                    >
// // // // //                                         <img className="sticker-image"
// // // // //                                              alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
// // // // //                                    </div>
// // // // //                               ))}
// // // // //                          </div>
// // // // //                     ))}
// // // // //                </div>
// // // // // <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
// // // // //                     <div className="sticker-category">
// // // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
// // // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
// // // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
// // // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
// // // // //                     </div>
// // // // //                     <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
// // // // //                </div>
// // // // // </div>
// // // // //      );
// // // // // }

// // // // // export default Filter;


// // // // import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
// // // // import { useTranslation } from 'react-i18next';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import i18n from '../translations/i18n';
// // // // import "../css/Sticker.css";
// // // // import frame from '../assets/Sticker/frame.png';
// // // // import sticker_frame from '../assets/Sticker/sticker_frame.png';
// // // // import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// // // // import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// // // // import Konva from 'konva';
// // // // import useImage from 'use-image';
// // // // import { StickerItem } from '../screens/StickerItem';
// // // // import axios from 'axios';
// // // // // import { Resizable } from 're-resizable';
// // // // // Sticker
// // // // import { stickers } from './stickers.data';

// // // // // Go Back
// // // // import goback_en from '../assets/Common/goback.png';
// // // // import goback_en_hover from '../assets/Common/gobackhover.png';
// // // // import goback_kr from '../assets/Common/kr/goback.png';
// // // // import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// // // // import goback_vn from '../assets/Common/vn/goback.png';
// // // // import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // // // // Background
// // // // import background_en from '../assets/Sticker/BG.png';
// // // // import background_kr from '../assets/Sticker/kr/BG.png';
// // // // import background_vn from '../assets/Sticker/vn/BG.png';

// // // // // Sticker
// // // // import mood_en from '../assets/Sticker/mood.png';
// // // // import mood_en_click from '../assets/Sticker/mood-click.png';
// // // // import mood_kr from '../assets/Sticker/kr/mood-default.png';
// // // // import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// // // // import mood_vn from '../assets/Sticker/vn/mood-default.png';
// // // // import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// // // // import lovely_en from '../assets/Sticker/lovely.png';
// // // // import lovely_en_click from '../assets/Sticker/lovely-click.png';
// // // // import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// // // // import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// // // // import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// // // // import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// // // // import cartoon_en from '../assets/Sticker/cartoon.png';
// // // // import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// // // // import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// // // // import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// // // // import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// // // // import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// // // // import y2k_en from '../assets/Sticker/y2k.png';
// // // // import y2k_en_click from '../assets/Sticker/y2k-click.png';
// // // // import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// // // // import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// // // // import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// // // // import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// // // // import print from '../assets/Sticker/print.png';
// // // // import print_click from '../assets/Sticker/print_click.png';
// // // // import print_kr from '../assets/Sticker/kr/print-default.png';
// // // // import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// // // // import print_vn from '../assets/Sticker/vn/print-default.png';
// // // // import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// // // // //frame나오는 공간
// // // // import frame_box from '../assets/Sticker/frame_box.png';
// // // // import CustomCarousel from '../components/CustomCarousel';
// // // // import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// // // // import { originAxiosInstance } from '../api/config';

// // // // function Filter() {
// // // //      const { t } = useTranslation();
// // // //      const navigate = useNavigate();
// // // //      const [src, setSrc] = useState(null)
// // // //      const [hoveredImage, setHoveredImage] = useState(null);
// // // //      const [selectedLayout, setSelectedLayout] = useState(null);
// // // //      const [selectedPhotos, setSelectedPhotos] = useState([]);
// // // //      const [filterEffect, setFilterEffect] = useState(null);
// // // //      const [myBackgrounds, setMyBackgrounds] = useState([]);
// // // //      const bgLength=myBackgrounds.length
// // // //      const [selectedFrame, setSelectedFrame] = useState(null);
// // // //      const [images, setImages] = useState([]);
// // // //      const [selectedId, selectShape] = useState(null);
// // // //      const [clickPrint, setClickPrint] = useState(false);
// // // //      const [orderCode, setOrderCode] = useState(null);
// // // //      const [language, setLanguage] = useState('en');

// // // //      const [backgroundImage, setBackgroundImage] = useState(background_en);
// // // //      //스크롤 인덱스
// // // //      const [scrollIdx, setScrollIdx] = useState(0)
// // // //      const [dragStartY, setDragStartY] = useState(0);
// // // //      const [bgIdx,setBgIdx]=useState(0)
// // // //      const [stickerImgs,setStickerImgs]=useState([])
// // // //      // Sticker
// // // //      const [isSel,setIsSel]=useState(false)
// // // //      const [mood, setMood] = useState(null);
// // // //      const [lovely, setLovely] = useState(null);
// // // //      const [cartoon, setCartoon] = useState(null);
// // // //      const [y2k, setY2k] = useState(null);
// // // //      const [printButton, setPrintButton] = useState(null);

// // // //      const [goBackButton, setGoBackButton] = useState(goback_en);
// // // //      const [clickedButton, setClickedButton] = useState(false);
// // // //      const [stickerDrag,setStickerDrag]=useState(false)
// // // // const [photos,setPhotos]=useState([])
// // // // const [selectedItems,setSelectedItems]=useState([])
// // // // const [width,setWidth]=useState(0)
// // // // const [height,setHeight]=useState(0)
// // // //      const background = new Image();
// // // //      background.crossOrigin = 'Anonymous';
// // // //      background.src = sessionStorage.getItem('downloaded-image');
// // // //      console.log("다운로드 백그라운드", sessionStorage.getItem('photos'))
// // // //      const [selectedCategory, setSelectedCategory] = useState('MOOD');
// // // //      const [backgroundList,setBackgroundList]=useState([])
// // // //      const [tempImage,setTempImage]=useState()
// // // //      // const stageRef = useRef(null);
// // // //      const [stageRefs,setStageRefs]=useState([])
// // // //      const chunkArray = (arr, size) => {
// // // //           return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
// // // //      };

// // // // useEffect(()=>{
// // // //      const photos = JSON.parse(sessionStorage.getItem('photos'));
// // // // console.log("photos>>>",photos)
// // // // if (photos===null)return;
// // // //      setPhotos(photos)
// // // // },[])
// // // // useEffect(()=>{
// // // //      if (!photos)return;
// // // //      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));

// // // //      setSelectedItems(selItems)
// // // // },[photos])
// // // //      useEffect(() => {  
// // // //           //  console.log("백그라운드 프레임",backgroundList)
// // // //           if (!backgroundList.length===0) {
// // // //                backgroundList[0].src = sessionStorage.getItem('downloaded-image');
// // // //                // const element = document.querySelector('.image');
// // // //                // if (element) {
// // // //                //     const width = element.offsetWidth; // 요소의 너비
// // // //                //     const height = element.offsetHeight; // 요소의 높이 
// // // //                //     setWidth(width);
// // // //                //     setHeight(height);
// // // //                //     const backgroundList = myBackgrounds.map((imageUrl) => {
// // // //                //      const img = new Image();
// // // //                //      img.crossOrigin = 'Anonymous';
// // // //                //      img.src = imageUrl;
// // // //                //      return img;
// // // //                //  });
// // // //                //  setBackgroundList(backgroundList)
// // // //                // }
// // // //                window.location.reload();
// // // //           }
// // // //      }, []);

// // // //      useEffect(() => {
// // // //           const storedLanguage = sessionStorage.getItem('language');
// // // //           if (storedLanguage) {
// // // //                setLanguage(storedLanguage);
// // // //                if (storedLanguage === 'en') {
// // // //                     setBackgroundImage(background_en);
// // // //                     setMood(mood_en);
// // // //                     setLovely(lovely_en);
// // // //                     setCartoon(cartoon_en);
// // // //                     setY2k(y2k_en);
// // // //                     setPrintButton(print);
// // // //                     setGoBackButton(goback_en);
// // // //                } else if (storedLanguage === 'ko') {
// // // //                     setBackgroundImage(background_kr);
// // // //                     setMood(mood_kr);
// // // //                     setLovely(lovely_kr);
// // // //                     setCartoon(cartoon_kr);
// // // //                     setY2k(y2k_kr);
// // // //                     setPrintButton(print_kr);
// // // //                     setGoBackButton(goback_kr);
// // // //                } else if (storedLanguage === 'vi') {
// // // //                     setBackgroundImage(background_vn);
// // // //                     setMood(mood_vn);
// // // //                     setLovely(lovely_vn);
// // // //                     setCartoon(cartoon_vn);
// // // //                     setY2k(y2k_vn);
// // // //                     setPrintButton(print_vn);
// // // //                     setGoBackButton(goback_vn);
// // // //                }
// // // //           }

// // // //           // get session storage selectedLayout
// // // //           const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
// // // //           if (sessionSelectedLayout) {
// // // //                const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

// // // //                console.log("레이아웃을 찾아서>>>", parsedSelectedLayout.photo_full)
// // // //                setSelectedLayout(parsedSelectedLayout.photo_cover);
// // // //                // setMyBackground(parsedSelectedLayout.photo);
// // // //                setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

// // // //                const imgs=[]
// // // //           for (let i = 0; i < parsedSelectedLayout.length; i++) {
// // // //              imgs.push([])
               
// // // //           }
// // // //           setImages(imgs)
// // // //           setStickerImgs(imgs)
// // // //                // setStageRefs()
// // // //                setImages(parsedSelectedLayout.map(b=>[]))
// // // //                // background.src=parsedSelectedLayout.photo_full
// // // //                // setSrc(parsedSelectedLayout.photo_full)
// // // //           }

// // // //           // Retrieve selected photos from session storage
// // // //           const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// // // //           if (storedSelectedPhotos) {

// // // //                setSelectedPhotos(storedSelectedPhotos);
// // // //           }

// // // //           // Filter
// // // //           const filterSession = sessionStorage.getItem('filter');
// // // //           if (filterSession) {
// // // //                setFilterEffect(filterSession);
// // // //           }

// // // //           // Retrieve selected frame from session storage
// // // //           const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
// // // //           if (storedSelectedFrame) {

// // // //                setSelectedFrame(storedSelectedFrame.frame);
// // // //           }
// // // //      }, []);

// // // //      const handleMouseEnter = (image) => {
// // // //           setHoveredImage(image);
// // // //      }

// // // //      const handleMouseLeave = () => {
// // // //           setHoveredImage(null);
// // // //      }

// // // //      const displayClassNameForBackground = () => {
// // // //           if (selectedFrame == '2cut-x2') {
// // // //                return 'left-choose-photos-2cut';
// // // //           } else if (selectedFrame == '4-cutx2') {
// // // //                return 'left-choose-photos-4cut';
// // // //           } else if (selectedFrame == '5-cutx2') {
// // // //                return 'left-choose-photos-5cut';
// // // //           } else {
// // // //                return 'left-choose-photos';
// // // //           }
// // // //      }

// // // //      const getImageStyle = () => {
// // // //           return filterEffect;
// // // //      }

// // // //      const displayClassNameForLayout = () => {
// // // //           if (selectedFrame == '2cut-x2') {
// // // //                return 'left-choose-container-2cut';
// // // //           } else if (selectedFrame == '4-cutx2') {
// // // //                return 'left-choose-container-4cut';
// // // //           } else if (selectedFrame == '5-cutx2') {
// // // //                return 'left-choose-container';
// // // //           } else {
// // // //                return 'left-choose-container';
// // // //           }
// // // //      }

// // // //      const displayClassNameForPhoto = (rowIndex, photoIndex) => {
// // // //           if (selectedFrame === 'Stripx2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-0-1';
// // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-1-0';
// // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-1-1';
// // // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-2-0';
// // // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-2-1';
// // // //                } else if (rowIndex === 3 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-3-0';
// // // //                } else if (rowIndex === 3 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-3-1';
// // // //                }
// // // //           } else if (selectedFrame === '6-cutx2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item6-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item6-0-1';
// // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // //                     return 'choose-photo-item6-1-0';
// // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // //                     return 'choose-photo-item6-1-1';
// // // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // // //                     return 'choose-photo-item6-2-0';
// // // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // // //                     return 'choose-photo-item6-2-1';
// // // //                }
// // // //           } else if (selectedFrame === '2cut-x2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-2cut-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-2cut-0-1';
// // // //                }
// // // //           } else if (selectedFrame === '3-cutx2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-3cut-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-3cut-0-1';
// // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-3cut-0-1';
// // // //                }
// // // //           } else if (selectedFrame === '4-cutx2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-4cut-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-4cut-0-1';
// // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-4cut-1-0';
// // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-4cut-1-1';
// // // //                }
// // // //           } else if (selectedFrame === '5-cutx2') {
// // // //                if (rowIndex === 0 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-5cut-0-0';
// // // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-5cut-0-1';
// // // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // // //                     return 'choose-photo-item-5cut-1-0';
// // // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // // //                     return 'choose-photo-item-5cut-1-1';
// // // //                }
// // // //           }
// // // //           return 'choose-photo-item';
// // // //      }

// // // //      const showSelectedPhotos = () => {
// // // //           if (selectedFrame == '3-cutx2' && selectedPhotos.length > 1) {
// // // //                const firstPhotoTpl = (
// // // //                     <div className="choose-photo-row">
// // // //                          <div
// // // //                               className="choose-photo-item-3cut-top-line"
// // // //                               style={{ backgroundImage: `url(${photos[selectedPhotos[0]].url})` }}
// // // //                          />
// // // //                     </div>
// // // //                )
// // // //                const selectedPhotoRows = chunkArray(selectedPhotos.slice(1), 2);
// // // //                return (
// // // //                     [firstPhotoTpl, ...selectedPhotoRows.map((row, rowIndex) => (
// // // //                          <div key={rowIndex} className="choose-photo-row">
// // // //                               {row.map((selectedIndex, photoIndex) => (
// // // //                                    <div
// // // //                                         key={photoIndex}
// // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})` }}
// // // //                                    />
// // // //                               ))}
// // // //                          </div>
// // // //                     ))]
// // // //                );
// // // //           } else if (selectedFrame == '5-cutx2' && selectedPhotos.length > 1) {
// // // //                const lastPhotoTpl = (
// // // //                     <div className="choose-photo-row">
// // // //                          <div
// // // //                               className="choose-photo-item-5cut-last-line"
// // // //                               style={{ backgroundImage: `url(${photos[selectedPhotos[selectedPhotos.length - 1]].url})` }}
// // // //                          />
// // // //                     </div>
// // // //                )
// // // //                const selectedPhotoRows = chunkArray(selectedPhotos.slice(0, selectedPhotos.length - 1), 2);
// // // //                return (
// // // //                     [selectedPhotoRows.map((row, rowIndex) => (
// // // //                          <div key={rowIndex} className="choose-photo-row">
// // // //                               {row.map((selectedIndex, photoIndex) => (
// // // //                                    <div
// // // //                                         key={photoIndex}
// // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})` }}
// // // //                                    />
// // // //                               ))}
// // // //                          </div>
// // // //                     )), lastPhotoTpl]
// // // //                );
// // // //           } else {
// // // //                const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// // // //                return (
// // // //                     selectedPhotoRows.map((row, rowIndex) => (
// // // //                          <div key={rowIndex} className="choose-photo-row">
// // // //                               {row.map((selectedIndex, photoIndex) => (
// // // //                                    <div
// // // //                                         key={photoIndex}
// // // //                                         className={displayClassNameForPhoto(rowIndex, photoIndex)}
// // // //                                         style={{ backgroundImage: `url(${photos[selectedIndex].url})`, filter: getImageStyle() }}
// // // //                                    />
// // // //                               ))}
// // // //                          </div>
// // // //                     ))
// // // //                );
// // // //           }
// // // //      }

// // // //      const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
// // // //           console.log("스티커 올라갈 프레임 인덱스", bgIdx, images);
      
// // // //           const item = {
// // // //               width,
// // // //               x,
// // // //               y,
// // // //               src,
// // // //               resetButtonRef: createRef()
// // // //           };
      
// // // //           setImages((currentImages) => {
// // // //               const newImages = currentImages.map((subList, index) => {
// // // //                   if (index === bgIdx) {
// // // //                       return [...subList, item];
// // // //                   }
// // // //                   return subList;
// // // //               });
      
// // // //               return newImages;
// // // //           });
// // // //       };

// // // //      const resetAllButtons = useCallback(() => {
// // // //           images.forEach((subList) => {
// // // //               subList.forEach((image) => {
// // // //                   if (image.resetButtonRef.current) {
// // // //                       image.resetButtonRef.current();
// // // //                   }
// // // //               });
// // // //           });
// // // //       }, [images]);
      
// // // //       const handleCanvasClick = useCallback(
// // // //           (event) => {
// // // //               if (event.target.attrs.id === "backgroundImage") {
// // // //                   resetAllButtons();
// // // //               }
// // // //           },
// // // //           [resetAllButtons]
// // // //       );

// // // //      const checkDeselect = (e) => {
// // // //           const clickedOnEmpty = e.target === e.target.getStage();
// // // //           if (clickedOnEmpty) {
// // // //                selectShape(null);
// // // //           }
// // // //      }

// // // //      const filterStickerByCategory = (category) => {
// // // //           setSelectedCategory(category);
// // // //      }

// // // //      const printFrameWithSticker = (event,) => {
// // // //           // console.log("stage refs",stageRefs)
// // // //           if (clickPrint == true) {
// // // //                return;
// // // //           }
// // // //           setClickPrint(true);

// // // //           callPrinter();
// // // //           uploadCloud();

// // // //           setTimeout(() => {
// // // //                navigate("/print");
// // // //           }, 3000);
// // // //      }

// // // //      const uploadCloud = () => {
// // // //           try {
// // // //                for (let i = 0; i < stageRefs.length; i++) {
// // // //                     const stageRef = stageRefs[i];
// // // //                       const formData = new FormData();
// // // //                formData.append("photo", stageRef.current.toDataURL());
// // // //                formData.append("order_code", sessionStorage.getItem('orderCodeNum'));

// // // //                originAxiosInstance.post(
// // // //                     `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
// // // //                     formData,
// // // //                     {
// // // //                          headers: {
// // // //                               'Content-Type': 'multipart/form-data'
// // // //                          }
// // // //                     })
// // // //                     .then(response => {
// // // //                          const data = response.data;
// // // //                          if (data.photo_url) {
// // // //                               sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
// // // //                               console.log(data.photo_url);
// // // //                          }
// // // //                     })
// // // //                     .catch(error => {
// // // //                          console.log(error);
// // // //                     });
// // // //                }
             
// // // //           } catch (error) {
// // // //                console.log(error);
// // // //           }
// // // //      }

// // // //      const callPrinter = () => {
// // // //           alert("callPrinter");
// // // // for (let i = 0; i < stageRefs.length; i++) {
// // // //      const stageRef = stageRefs[i];
// // // //       if (!stageRef.current) {
// // // //                alert("stageRef.current is null");
// // // //                return;
// // // //           }

// // // //           const formData = new FormData();
// // // //           const dataURL = stageRef.current.toDataURL();
// // // //           alert(dataURL);
// // // //           alert(selectedFrame);
// // // //           formData.append('photo', dataURL);
// // // //           formData.append('frame', selectedFrame);

// // // //           alert(formData);
// // // //           originAxiosInstance.post(
// // // //                `${process.env.REACT_APP_BACKEND}/frames/api/print`,
// // // //                formData,
// // // //                {
// // // //                     headers: {
// // // //                          'Content-Type': 'multipart/form-data'
// // // //                     }
// // // //                })
// // // //                .then(response => {
// // // //                     console.log(response);
// // // //                })
// // // //                .catch(error => {
// // // //                     console.log(error);
// // // //                });
// // // // }
         
// // // //      }

// // // //      const hoverGoBackButton = () => {
// // // //           if (language == 'en') {
// // // //                setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
// // // //           } else if (language == 'vi') {
// // // //                setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
// // // //           } else if (language == 'ko') {
// // // //                setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
// // // //           }
// // // //      }

// // // //      const hoverStickerButton = (stickerEffect) => {
// // // //           if (stickerEffect == 'mood') {
// // // //                if (language == 'en') {
// // // //                     setMood(mood == mood_en_click ? mood_en : mood_en_click);
// // // //                } else if (language == 'vi') {
// // // //                     setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
// // // //                } else if (language == 'ko') {
// // // //                     setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
// // // //                }
// // // //           } else if (stickerEffect == 'lovely') {
// // // //                if (language == 'en') {
// // // //                     setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
// // // //                } else if (language == 'vi') {
// // // //                     setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
// // // //                } else if (language == 'ko') {
// // // //                     setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
// // // //                }
// // // //           } else if (stickerEffect == 'cartoon') {
// // // //                if (language == 'en') {
// // // //                     setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
// // // //                } else if (language == 'vi') {
// // // //                     setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
// // // //                } else if (language == 'ko') {
// // // //                     setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
// // // //                }
// // // //           } else if (stickerEffect == 'y2k') {
// // // //                if (language == 'en') {
// // // //                     setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
// // // //                } else if (language == 'vi') {
// // // //                     setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
// // // //                } else if (language == 'ko') {
// // // //                     setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
// // // //                }
// // // //           }
// // // //      }

// // // //      const hoverPrintButton = () => {
// // // //           if (language == 'en') {
// // // //                setPrintButton(printButton == print_click ? print : print_click);
// // // //           } else if (language == 'vi') {
// // // //                setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
// // // //           } else if (language == 'ko') {
// // // //                setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
// // // //           }
// // // //      }

// // // //      // Chunk the selected photos array into arrays of 2 photos each
// // // //      const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
// // // //      const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// // // //      //스크롤 하면 인덱스에 따라 스티커 타입 정하기
// // // //      const myStickers = chunkArray(stickersData, 4);
// // // //      // console.log("프레임 백그라운드",myBackground)
// // // //      //크기 리사이징 예제코드
// // // //      const [isDragging, setIsDragging] = useState(false);
// // // //      const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
// // // //      const [radius, setRadius] = useState(50); // 초기 반지름

// // // //      const handleMouseDown = (e) => {
// // // //           setIsDragging(true);
// // // //      };

// // // //      const handleMouseUp = () => {
// // // //           setIsDragging(false);
// // // //      };

// // // //      const handleMouseMove = (e) => {
// // // //           if (!isDragging) return;

// // // //           const newPosition = {
// // // //                x: e.clientX,
// // // //                y: e.clientY
// // // //           };
// // // //           setPosition(newPosition);
// // // //      };

// // // //      const handleMouseLeave2 = () => {
// // // //           setIsDragging(false);
// // // //      };

// // // //      const handleMouseWheel = (e) => {
// // // //           if (e.deltaY > 0) {
// // // //                setRadius(radius - 5);
// // // //           } else {
// // // //                setRadius(radius + 5);
// // // //           }
// // // //      };
// // // //      console.log("my stickers", myStickers, stickers)
// // // //      const onDragStart = (event) => {
// // // //           setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
// // // //       };

// // // //      const onDragEnd = (event) => {
// // // //           const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
// // // //           if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
// // // //               setScrollIdx(prevIdx => (prevIdx + 1) % 4);
// // // //               const nextScrollIdx = (scrollIdx + 1) % 4;
// // // //               console.log("스크롤 인덱스>>>", nextScrollIdx)
// // // //               if (nextScrollIdx === 0) {
// // // //                   setSelectedCategory("MOOD");
// // // //               }
// // // //               else if (nextScrollIdx === 1) {
// // // //                   setSelectedCategory("LOVELY");
// // // //               }
// // // //               else if (nextScrollIdx === 2) {
// // // //                   setSelectedCategory("CARTOON");
// // // //               }
// // // //               else if (nextScrollIdx === 3) {
// // // //                   setSelectedCategory("Y2K");
// // // //               }
// // // //           }
// // // //       };
// // // //       const carouselRef = useRef(null);
// // // //       const [isDown, setIsDown] = useState(false);
// // // //       const [startY, setStartY] = useState(0);
// // // //       const [scrollTop, setScrollTop] = useState(0);
  
// // // //       useEffect(() => {
// // // //           console.log("스티커 드래그 in useeffect",stickerDrag)
// // // //           const carousel = carouselRef.current;
// // // //   const dragging=stickerDrag
// // // //           const handleMouseDown = (e) => {
// // // //                // if (dragging)return
// // // //                console.log(">>>마우스 다운",dragging)
// // // //               setIsDown(true);
// // // //               if (carousel) {
// // // //                if (stickerDrag)return
// // // //                   setStartY(e.pageY - carousel.offsetTop);
// // // //                   setScrollTop(carousel.scrollTop);
// // // //               }
// // // //           };
  
// // // //           const handleMouseLeave = () => {
// // // //                // if (stickerDrag)return
// // // //                console.log(">>>마우스 리브")
// // // //               setIsDown(false);
// // // //           };
  
// // // //           const handleMouseUp = () => {
// // // //                // if (stickerDrag)return
// // // //                console.log(">>>마우스 업")
// // // //               setIsDown(false);
// // // //               snapToClosestItem();
// // // //           };
  
// // // //           const handleMouseMove = (e) => {
// // // //                // return;
// // // //                // if (stickerMoving)return;
// // // //                if (dragging)return
              
// // // //               if (!isDown) return;
// // // //               e.preventDefault();
// // // //               if (carousel) { 
       
// // // //                   const y = e.pageY - carousel.offsetTop;
// // // //                   const walk = (y - startY) * 3; // Scroll speed
// // // //                   carousel.scrollTop = scrollTop - walk;
// // // //               }
// // // //           };
  
// // // //           const snapToClosestItem = () => {
// // // //               if (!carousel) return;
// // // //               const itemHeight = carousel.querySelector('.image').offsetHeight;
// // // //               const scrollY = carousel.scrollTop;
// // // //               const index = Math.round(scrollY / itemHeight);  
// // // //                     console.log(">>>백그라운드 인덱스",index)
// // // //                     setBgIdx(index)
// // // //               carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
// // // //           };
  
// // // //           if (carousel) {
// // // //               carousel.addEventListener('mousedown', handleMouseDown);
// // // //               carousel.addEventListener('mouseleave', handleMouseLeave);
// // // //               carousel.addEventListener('mouseup', handleMouseUp);
// // // //               carousel.addEventListener('mousemove', handleMouseMove);
// // // //           }
  
// // // //           return () => {
// // // //               if (carousel) {
// // // //                   carousel.removeEventListener('mousedown', handleMouseDown);
// // // //                   carousel.removeEventListener('mouseleave', handleMouseLeave);
// // // //                   carousel.removeEventListener('mouseup', handleMouseUp);
// // // //                   carousel.removeEventListener('mousemove', handleMouseMove);
// // // //               }
// // // //           };
// // // //       }, [isDown, startY, scrollTop,stickerDrag]);
    
// // // //      useEffect(() => {
// // // //   // add or remove refs

// // // //   setStageRefs((refs) =>
// // // //     Array(bgLength)
// // // //       .fill()
// // // //       .map((_, i) => refs[i] || createRef()),
// // // //   );


// // // // }, [bgLength]);  

// // // // // 선택된 아이템을 가지고 있는 리스트
// // // // const tempPhotos=[{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},]
// // // // console.log("choose img",selectedItems,selectedPhotos)
// // // // // const backgroundList = myBackgrounds.map((imageUrl) => {
// // // // //      const img = new Image();
// // // // //      img.crossOrigin = 'Anonymous';
// // // // //      img.src = imageUrl;
// // // // //      return img;
// // // // //  });
// // // //  console.log("백그라운드 이미지 리스트 생성>>>",backgroundList)
 
// // // //      const getImgListLayout=(selectedFrame,selectedItems)=>{
// // // //         if (selectedItems.length===0) {
          
// // // //           return <></>
// // // //         }
// // // //           if (selectedFrame==="Stripx2") { 
// // // //                 console.log("sel frame in func",selectedFrame,selectedItems)
// // // //                return <div
// // // //                className='selected-photos-s2-list'
               
// // // //                >
// // // //                     {/* 1 row */}
// // // //                      <div
// // // //                  className='selected-photos-s2-row'
// // // //                    ><img
// // // // className='stripx2img'
// // // //                    src={selectedItems[0].url}
// // // //                    />
// // // //                    <img
// // // // className='stripx2img'
// // // //                    src={selectedItems[1].url}
// // // //                    /></div>
// // // //                    {/* 2 row */}
// // // //                    <div
// // // //                   className='selected-photos-s2-row'
// // // //                  ><img
// // // // className='stripx2img'
// // // //                  src={selectedItems[2].url}
// // // //                  />
// // // //                  <img
// // // // className='stripx2img'
// // // //                  src={selectedItems[3].url}
// // // //                  /></div>
// // // //                   {/* 3 row */}
// // // //                   <div
// // // //                   className='selected-photos-s2-row'
// // // //                  ><img
// // // // className='stripx2img'
// // // //                  src={selectedItems[4].url}
// // // //                  />
// // // //                  <img
// // // // className='stripx2img'
// // // //                  src={selectedItems[5].url}
// // // //                  /></div>
// // // //                   {/* 4 row */}
// // // //                   <div
// // // //                   className='selected-photos-s2-row'
// // // //                  ><img
// // // // className='stripx2img'
// // // //                  src={selectedItems[6].url}
// // // //                  />
// // // //                  <img
// // // // className='stripx2img'
// // // //                  src={selectedItems[7].url}
// // // //                  /></div>
// // // //                </div>
// // // //           }
// // // //           else if(selectedFrame==="2cut-x2"){
// // // // return <div
// // // // className='selected-photos-2-list'

// // // // >
// // // //     {selectedItems.map((it,idx)=>
// // // //     idx===0?<div
// // // //     className='selected-photo-2-container-first'
// // // //     ><div
// // // //      className='selected-photo-2'
// // // //        style={{
          
// // // //           backgroundImage: `url(${it.url})`
// // // //       }}
// // // //      /></div>:
// // // //     <div
// // // //     className='selected-photo-2-container'
// // // //     ><div
// // // //      className='selected-photo-2'
// // // //        style={{
          
// // // //           backgroundImage: `url(${it.url})`
// // // //       }}
// // // //      /></div>
// // // //     )} 
// // // // </div>

// // // //           }
// // // //           else if(selectedFrame==="4-cutx2"){
// // // //                console.log("이건가")
// // // //                return <div
// // // //                className='cut4x2-container'
// // // //                >
// // // // <img
// // // // className='cut4x2-0'
// // // // src={selectedItems[0].url}
// // // // />
// // // // <img
// // // // className='cut4x2-1'
// // // // src={selectedItems[1].url}
// // // // />
// // // // <img
// // // // className='cut4x2-2'
// // // // src={selectedItems[2].url}
// // // // />
// // // // <img
// // // // className='cut4x2-3'
// // // // src={selectedItems[3].url}
// // // // />

// // // //                </div>
               
               
// // // //           }
// // // //           else if(selectedFrame==="6-cutx2"){
// // // //                return <div
// // // //                className='cut6x2-container'>
// // // //                     {/* 1 row */}
// // // //                     <div
// // // //                     className='cut6x2-row'
// // // //                     ><img
// // // //                     className='cut6x2-img'
// // // //                     src={selectedItems[0].url}
// // // //                     />
// // // //                          <img
// // // //                          className='cut6x2-img'
// // // //                     src={selectedItems[1].url}
// // // //                     />
// // // //                     </div>
// // // //                      {/* 2 row */}
// // // //                      <div
// // // //                     className='cut6x2-row'
// // // //                     ><img
// // // //                     className='cut6x2-img'
// // // //                     src={selectedItems[2].url}
// // // //                     />
// // // //                          <img
// // // //                          className='cut6x2-img'
// // // //                     src={selectedItems[3].url}
// // // //                     />
// // // //                     </div>
// // // //                     {/* 3 row */}
// // // //                     <div
// // // //                     className='cut6x2-row'
// // // //                     ><img
// // // //                     className='cut6x2-img'
// // // //                     src={selectedItems[4].url}
// // // //                     />
// // // //                          <img
// // // //                          className='cut6x2-img'
// // // //                     src={selectedItems[5].url}
// // // //                     />
// // // //                     </div>
// // // //                </div>
// // // //           }
// // // //           else{

// // // //           }
// // // //      }
// // // //      function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
// // // //           const backgroundImageSize = {width:width,height:height}
// // // //           const backgroundWidth = backgroundImageSize.width;
// // // //           const backgroundHeight = backgroundImageSize.height;
      
// // // //           // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
// // // //           const backgroundAspectRatio = backgroundWidth / backgroundHeight;
// // // //           const stickerAspectRatio = stickerWidth / stickerHeight;
      
// // // //           let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
// // // //           if (stickerAspectRatio > backgroundAspectRatio) {
// // // //               newStickerWidth = backgroundWidth * (stickerWidth / 1200);
// // // //               newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
// // // //               newStickerX = stickerX * (backgroundWidth / 1200);
// // // //               newStickerY = stickerY * (backgroundWidth / 1200);
// // // //           } else { 
// // // //               newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
// // // //               newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
// // // //               newStickerY = stickerY * (backgroundHeight / 1000);
// // // //               newStickerX = stickerX * (backgroundHeight / 1000); 
// // // //           }
      
         
// // // //           return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
// // // //       }
// // // //       //rerendering
// // // //       useEffect(() => {
// // // //           const loadImages = () => {
// // // //                const tempImg = new Image();
// // // //                tempImg.crossOrigin = 'Anonymous';
// // // //                tempImg.src = '/temp.jpg';
// // // //                setTempImage(tempImg)
// // // //                console.log("temp img",tempImg)
// // // //               if (backgroundList.length===0||!backgroundList[0].src||backgroundList[0].src===undefined||backgroundList[0]===undefined) {
// // // //                   const element = document.querySelector('.image');
// // // //                   if (element) {
// // // //                       const width = element.offsetWidth; // Get element width
// // // //                       const height = element.offsetHeight; // Get element height
// // // //                       setWidth(width);
// // // //                       setHeight(height);
// // // //                       const loadedImages = myBackgrounds.map((imageUrl) => {
// // // //                           const img = new Image();
// // // //                           img.crossOrigin = 'Anonymous';
// // // //                           img.src = imageUrl;
// // // //                           // Wait for the image to load before returning it
// // // //                           return new Promise((resolve, reject) => {
// // // //                               img.onload = () => resolve(img);
// // // //                               img.onerror = (err) => reject(err);
// // // //                           });
// // // //                       });
// // // //                       Promise.all(loadedImages)
// // // //                           .then((images) => {
// // // //                               // All images are loaded
// // // //                               setBackgroundList(images);
// // // //                           })
// // // //                           .catch((error) => {
// // // //                               console.error("Error loading images:", error);
// // // //                           });
// // // //                   }
// // // //               }
// // // //           };
      
// // // //           loadImages();
// // // //       }, [backgroundList, myBackgrounds]); //

// // // //       const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
// // // //           console.log("프레임 선택",selectedFrame)
// // // //           if (selectedFrame==="6-cutx2") {
// // // //                const calcedWidth=width/2 - 45
// // // //                const calcedHeight=height/3 - 30
// // // //                const x11=36
// // // //                const x12=calcedWidth+x11+18
// // // //                const y1=20 
// // // //                //
// // // //                const x21=36
// // // //                const x22=x12
// // // //                const y2=calcedHeight+y1+10 
// // // //                 //
// // // //                 const x31=36
// // // //                 const x32=x22
// // // //                 const y3=calcedHeight+y2+10 
// // // //                return      <>
// // // //                {/* 11 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x11}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 12 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x12}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //              {/* 21 */}
// // // //              <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x21}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 22 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x22}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //                {/* 31 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x31}
// // // //                y={y3}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 32 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x32}
// // // //                y={y3}
// // // //             image={imgTag}
            
// // // //             />
// // // //             </>  
// // // //           }
// // // //          else if (selectedFrame==="Stripx2") {
// // // //                const calcedWidth=width/2 - 30
// // // //                const calcedHeight=height/4 - 20
// // // //                //1 row
// // // //                const x11=15
// // // //                const x12=calcedWidth+x11+30
// // // //                const y1=20 
// // // //                //2 row
// // // //                const x21=x11
// // // //                const x22=x12
// // // //                const y2=calcedHeight+y1+6 
// // // //                 //3 row
// // // //                 const x31=x11
// // // //                 const x32=x22
// // // //                 const y3=calcedHeight+y2+6 
// // // //                              //4 row
// // // //                              const x41=x11
// // // //                              const x42=x32
// // // //                              const y4=calcedHeight+y3+6 
// // // //                return      <>
// // // //                {/* 11 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x11}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 12 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x12}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //              {/* 21 */}
// // // //              <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x21}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 22 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x22}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //                {/* 31 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x31}
// // // //                y={y3}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 32 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x32}
// // // //                y={y3}
// // // //             image={imgTag}
            
// // // //             />
// // // //               {/* 41 */}
// // // //               <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x41}
// // // //                y={y4}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 42 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x42}
// // // //                y={y4}
// // // //             image={imgTag}
            
// // // //             />
// // // //             </>  
// // // //           }
// // // //           else if(selectedFrame==="2cut-x2"){
// // // //                const calcedWidth=width/2 - 28
// // // //                const calcedHeight=height-116
// // // //                const x11=20
// // // //                const x12=calcedWidth+x11+14
// // // //                const y1=60
// // // //                //
// // // //                const x21=36
// // // //                const x22=x12
// // // //                const y2=calcedHeight+y1+10 
// // // //                 //
// // // //                 const x31=36
// // // //                 const x32=x22
// // // //                 const y3=calcedHeight+y2+10 
// // // //                return      <>
// // // //                {/* 11 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x11}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 12 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x12}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             /></>
// // // //           }
// // // //           else if(selectedFrame==="4-cutx2"){
// // // //                const calcedWidth=width/2 - 74
// // // //                const calcedHeight=height/2 - 50
// // // //                //1 row
// // // //                const x11=65
// // // //                const x12=calcedWidth+x11+20
// // // //                const y1=40
// // // //                //2 row
// // // //                const x21=x11
// // // //                const x22=x12
// // // //                const y2=calcedHeight+y1+20 
// // // //                 //
// // // //                 const x31=36
// // // //                 const x32=x22
// // // //                 const y3=calcedHeight+y2+10 
// // // //                return      <>
// // // //                {/* 11 */}
// // // //                <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x11}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 12 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x12}
// // // //                y={y1}
// // // //             image={imgTag}
            
// // // //             />
// // // //             {/* 21 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x21}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //           {/* 22 */}
// // // //             <KonvaImage
// // // //                width={calcedWidth}
// // // //                height={calcedHeight}
// // // //                x={x22}
// // // //                y={y2}
// // // //             image={imgTag}
            
// // // //             />
// // // //             </>
// // // //           }
// // // //           else {
// // // //                 return        <></>
// // // //           }
         
// // // //       }
// // // //      return (
// // // // <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
// // // // <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
// // // // <div className="left-sticker">
// // // // <div
// // // //        className='frame-box'
                          
// // // //                     style={{
// // // //                          backgroundImage: `url(${frame_box})`
// // // //                     }}
// // // //                             />
// // // //   <div className='v-carousel-container' ref={carouselRef}>
// // // //             <div className='v-carousel-images'>
// // // //             {myBackgrounds.map((src, index) => (
// // // //                  <div
// // // //                  className='image'
// // // //                  ><Stage
// // // //      width={width}
// // // //      height={height+50}
// // // //      x={0}
// // // //      y={50}
// // // //      // offsetY={50}
// // // //      // x={0}
// // // //      // scale={0.1}
// // // //      onClick={handleCanvasClick}
// // // //      onTap={handleCanvasClick}
// // // //      className="konva-image"
// // // //      onMouseDown={checkDeselect}
// // // //      onTouchStart={checkDeselect}
// // // //      ref={stageRefs[index]}
// // // // >
// // // //      <Layer
     
// // // //      >

// // // //            <KonvaImage
// // // //                image={backgroundList[bgIdx]}
// // // //                width={width}
// // // //                height={height}
               
// // // //                x = {0}
// // // //                y = {0}
// // // //                id="backgroundImage"
               
// // // //           /> 
// // // //      {/* photo for print */}

// // // //  {showKonvaImgLayout(selectedFrame,width,height,tempImage)}
// // // //            {images[bgIdx]===undefined?<></>:images[bgIdx].map((image, i) => {
// // // //                return (
// // // //                     <StickerItem
// // // //                     isStickerDrag={stickerDrag}
// // // //                     isSelected={isSel}
// // // //                     setStickerDrag={setStickerDrag}
// // // //                     onTransform={()=>{
// // // //                          console.log("이미지 리사이징 중")
// // // //                     }}
// // // //                     onSelect={()=>{
// // // //                          setIsSel(p=>!p)
// // // //                          console.log("스티커 클릭")}}

// // // //                          onDelete={() => {
// // // //                               const newImages = [...images];
// // // //                               newImages.splice(i, 1);
// // // //                               setImages(newImages);
// // // //                          }}
// // // //                          onDragEnd={(event) => {
// // // //                               image.x = event.target.x();
// // // //                               image.y = event.target.y();
// // // //                          }}
// // // //                          onChange={(x,y,width,height)=>{
// // // //                               console.log("리사이즈 한 너비 / 높이",width,height)
// // // //                          }}
// // // //                          key={i}
// // // //                          image={image}
// // // //                          shapeProps={image}
// // // //                     />
// // // //                );
// // // //           })}
// // // //      </Layer>
// // // // </Stage></div>
                      
                    
                   
                   
               
// // // //                ))}
// // // //        </div></div>
  
// // // // </div>

// // // // <div className="middle-sticker"
// // // //                     draggable={true}
// // // //                     onDragStart={onDragStart}
// // // //                     onDrag={() => {
// // // //                          console.log("드래그 스티커 배경")
// // // //                     }}
// // // //                     onDragEnd={onDragEnd}

// // // //                     style={{
// // // //                          backgroundImage: `url(${sticker_frame})`
// // // //                     }}>


// // // //                     {myStickers.map((group, index) => (
// // // //                          <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
// // // //                               {group.map((mySticker, photoIndex) => (
// // // //                                    <div
// // // //                                         key={photoIndex}
// // // //                                         className="sticker"
// // // //                                         onClick={() => {
// // // //                                              const element = document.querySelector('.image');
// // // //                                              const width = element.offsetWidth; // 요소의 너비
// // // //                                              const height = element.offsetHeight; // 요소의 높이  
// // // //                                              console.log("배경이미지의 원래크기",width,height)
// // // //                                              addStickerToPanel({
// // // //                                                   bgIdx: bgIdx,
// // // //                                              src: mySticker.photo,
// // // //                                              width: 100,
// // // //                                              // x:0,
// // // //                                              // y:0
// // // //                                              ...adjustStickerToBackgroundSize(width,height,500, 500, 300, 300) // 스티커의 초기 위치와 크기를 지정
// // // //                                              });
                                           
// // // //                                         }}
// // // //                                    >
// // // //                                         <img className="sticker-image"
// // // //                                              alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
// // // //                                    </div>
// // // //                               ))}
// // // //                          </div>
// // // //                     ))}
// // // //                </div>
// // // // <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
// // // //                     <div className="sticker-category">
// // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
// // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
// // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
// // // //                          <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
// // // //                     </div>
// // // //                     <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
// // // //                </div>
// // // // </div>
// // // //      );
// // // // }

// // // // export default Filter;

// // // import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
// // // import { useTranslation } from 'react-i18next';
// // // import { useNavigate } from 'react-router-dom';
// // // import i18n from '../translations/i18n';
// // // import "../css/Sticker.css";
// // // import frame from '../assets/Sticker/frame.png';
// // // import sticker_frame from '../assets/Sticker/sticker_frame.png';
// // // import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// // // import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// // // import Konva from 'konva';
// // // import useImage from 'use-image';
// // // import { StickerItem } from '../screens/StickerItem';
// // // import axios from 'axios';
// // // // import { Resizable } from 're-resizable';
// // // // Sticker
// // // import { stickers } from './stickers.data';

// // // // Go Back
// // // import goback_en from '../assets/Common/goback.png';
// // // import goback_en_hover from '../assets/Common/gobackhover.png';
// // // import goback_kr from '../assets/Common/kr/goback.png';
// // // import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// // // import goback_vn from '../assets/Common/vn/goback.png';
// // // import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // // // Background
// // // import background_en from '../assets/Sticker/BG.png';
// // // import background_kr from '../assets/Sticker/kr/BG.png';
// // // import background_vn from '../assets/Sticker/vn/BG.png';

// // // // Sticker
// // // import mood_en from '../assets/Sticker/mood.png';
// // // import mood_en_click from '../assets/Sticker/mood-click.png';
// // // import mood_kr from '../assets/Sticker/kr/mood-default.png';
// // // import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// // // import mood_vn from '../assets/Sticker/vn/mood-default.png';
// // // import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// // // import lovely_en from '../assets/Sticker/lovely.png';
// // // import lovely_en_click from '../assets/Sticker/lovely-click.png';
// // // import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// // // import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// // // import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// // // import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// // // import cartoon_en from '../assets/Sticker/cartoon.png';
// // // import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// // // import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// // // import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// // // import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// // // import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// // // import y2k_en from '../assets/Sticker/y2k.png';
// // // import y2k_en_click from '../assets/Sticker/y2k-click.png';
// // // import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// // // import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// // // import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// // // import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// // // import print from '../assets/Sticker/print.png';
// // // import print_click from '../assets/Sticker/print_click.png';
// // // import print_kr from '../assets/Sticker/kr/print-default.png';
// // // import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// // // import print_vn from '../assets/Sticker/vn/print-default.png';
// // // import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// // // //frame나오는 공간
// // // import frame_box from '../assets/Sticker/frame_box.png';
// // // import CustomCarousel from '../components/CustomCarousel';
// // // import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// // // import { originAxiosInstance } from '../api/config';

// // // function Filter() {
// // //      const { t } = useTranslation();
// // //      const navigate = useNavigate();
// // //      const [src, setSrc] = useState(null)
// // //      const [hoveredImage, setHoveredImage] = useState(null);
// // //      const [selectedLayout, setSelectedLayout] = useState(null);
// // //      const [selectedPhotos, setSelectedPhotos] = useState([]);
// // //      const [filterEffect, setFilterEffect] = useState(null);
// // //      const [myBackgrounds, setMyBackgrounds] = useState([]);
// // //      const bgLength=myBackgrounds.length
// // //      const [selectedFrame, setSelectedFrame] = useState(null);
// // //      const [images, setImages] = useState([]);
// // //      const [selectedId, selectShape] = useState(null);
// // //      const [clickPrint, setClickPrint] = useState(false);
// // //      const [orderCode, setOrderCode] = useState(null);
// // //      const [language, setLanguage] = useState('en');

// // //      const [backgroundImage, setBackgroundImage] = useState(background_en);
// // //      //스크롤 인덱스
// // //      const [scrollIdx, setScrollIdx] = useState(0)
// // //      const [dragStartY, setDragStartY] = useState(0);
// // //      const [bgIdx,setBgIdx]=useState(0)
// // //      const [stickerImgs,setStickerImgs]=useState([])
// // //      // Sticker
// // //      const [isSel,setIsSel]=useState(false)
// // //      const [mood, setMood] = useState(null);
// // //      const [lovely, setLovely] = useState(null);
// // //      const [cartoon, setCartoon] = useState(null);
// // //      const [y2k, setY2k] = useState(null);
// // //      const [printButton, setPrintButton] = useState(null);

// // //      const [goBackButton, setGoBackButton] = useState(goback_en);
// // //      const [clickedButton, setClickedButton] = useState(false);
// // //      const [stickerDrag,setStickerDrag]=useState(false)
// // // const [photos,setPhotos]=useState([])
// // // const [selectedItems,setSelectedItems]=useState([])
// // // const [width,setWidth]=useState(0)
// // // const [height,setHeight]=useState(0)
// // //      const background = new Image();
// // //      background.crossOrigin = 'Anonymous';
// // //      background.src = sessionStorage.getItem('downloaded-image');
// // //      console.log("다운로드 백그라운드", sessionStorage.getItem('photos'))
// // //      const [selectedCategory, setSelectedCategory] = useState('MOOD');
// // //      const [backgroundList,setBackgroundList]=useState([])
// // //      const [tempImage,setTempImage]=useState()
// // //      // const stageRef = useRef(null);
// // //      const [stageRefs,setStageRefs]=useState([])
// // //      const [frameSize,setFrameSize]=useState({
// // //           width:"",
// // //           height:""
// // //      })
// // //      const chunkArray = (arr, size) => {
// // //           return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
// // //      };

// // // useEffect(()=>{
// // //      const photos = JSON.parse(sessionStorage.getItem('photos'));
// // // console.log("photos>>>",photos)
// // // if (photos===null)return;
// // //      setPhotos(photos)
// // // },[])
// // // useEffect(()=>{
// // //      if (!photos)return;
// // //      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));

// // //      setSelectedItems(selItems)
// // // },[photos])
// // //      useEffect(() => {  
// // //           //  console.log("백그라운드 프레임",backgroundList)
// // //           if (!backgroundList.length===0) {
// // //                backgroundList[0].src = sessionStorage.getItem('downloaded-image');
// // //                window.location.reload();
// // //           }
// // //      }, []);

// // //      useEffect(() => {
// // //           const storedLanguage = sessionStorage.getItem('language');
// // //           if (storedLanguage) {
// // //                setLanguage(storedLanguage);
// // //                if (storedLanguage === 'en') {
// // //                     setBackgroundImage(background_en);
// // //                     setMood(mood_en);
// // //                     setLovely(lovely_en);
// // //                     setCartoon(cartoon_en);
// // //                     setY2k(y2k_en);
// // //                     setPrintButton(print);
// // //                     setGoBackButton(goback_en);
// // //                } else if (storedLanguage === 'ko') {
// // //                     setBackgroundImage(background_kr);
// // //                     setMood(mood_kr);
// // //                     setLovely(lovely_kr);
// // //                     setCartoon(cartoon_kr);
// // //                     setY2k(y2k_kr);
// // //                     setPrintButton(print_kr);
// // //                     setGoBackButton(goback_kr);
// // //                } else if (storedLanguage === 'vi') {
// // //                     setBackgroundImage(background_vn);
// // //                     setMood(mood_vn);
// // //                     setLovely(lovely_vn);
// // //                     setCartoon(cartoon_vn);
// // //                     setY2k(y2k_vn);
// // //                     setPrintButton(print_vn);
// // //                     setGoBackButton(goback_vn);
// // //                }
// // //           }

// // //           // get session storage selectedLayout
// // //           const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
// // //           if (sessionSelectedLayout) {
// // //                const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

// // //                console.log("레이아웃을 찾아서>>>", parsedSelectedLayout.photo_full)
// // //                setSelectedLayout(parsedSelectedLayout.photo_cover);
// // //                // setMyBackground(parsedSelectedLayout.photo);
// // //                setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

// // //                const imgs=[]
// // //           for (let i = 0; i < parsedSelectedLayout.length; i++) {
// // //              imgs.push([])
               
// // //           }
// // //           setImages(imgs)
// // //           setStickerImgs(imgs)
// // //                // setStageRefs()
// // //                setImages(parsedSelectedLayout.map(b=>[]))
// // //                // background.src=parsedSelectedLayout.photo_full
// // //                // setSrc(parsedSelectedLayout.photo_full)
// // //           }

// // //           // Retrieve selected photos from session storage
// // //           const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// // //           if (storedSelectedPhotos) {

// // //                setSelectedPhotos(storedSelectedPhotos);
// // //           }

// // //           // Filter
// // //           const filterSession = sessionStorage.getItem('filter');
// // //           if (filterSession) {
// // //                setFilterEffect(filterSession);
// // //           }

// // //           // Retrieve selected frame from session storage
// // //           const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
// // //           if (storedSelectedFrame) {

// // //                setSelectedFrame(storedSelectedFrame.frame);
// // //           }
// // //      }, []);

// // //      const handleMouseEnter = (image) => {
// // //           setHoveredImage(image);
// // //      }

// // //      const handleMouseLeave = () => {
// // //           setHoveredImage(null);
// // //      }

// // //      const displayClassNameForBackground = () => {
// // //           if (selectedFrame == '2cut-x2') {
// // //                return 'left-choose-photos-2cut';
// // //           } else if (selectedFrame == '4-cutx2') {
// // //                return 'left-choose-photos-4cut';
// // //           } else if (selectedFrame == '5-cutx2') {
// // //                return 'left-choose-photos-5cut';
// // //           } else {
// // //                return 'left-choose-photos';
// // //           }
// // //      }

// // //      const getImageStyle = () => {
// // //           return filterEffect;
// // //      }

// // //      const displayClassNameForLayout = () => {
// // //           if (selectedFrame == '2cut-x2') {
// // //                return 'left-choose-container-2cut';
// // //           } else if (selectedFrame == '4-cutx2') {
// // //                return 'left-choose-container-4cut';
// // //           } else if (selectedFrame == '5-cutx2') {
// // //                return 'left-choose-container';
// // //           } else {
// // //                return 'left-choose-container';
// // //           }
// // //      }

// // //      const displayClassNameForPhoto = (rowIndex, photoIndex) => {
// // //           if (selectedFrame === 'Stripx2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item-0-1';
// // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // //                     return 'choose-photo-item-1-0';
// // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // //                     return 'choose-photo-item-1-1';
// // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // //                     return 'choose-photo-item-2-0';
// // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // //                     return 'choose-photo-item-2-1';
// // //                } else if (rowIndex === 3 && photoIndex === 0) {
// // //                     return 'choose-photo-item-3-0';
// // //                } else if (rowIndex === 3 && photoIndex === 1) {
// // //                     return 'choose-photo-item-3-1';
// // //                }
// // //           } else if (selectedFrame === '6-cutx2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item6-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item6-0-1';
// // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // //                     return 'choose-photo-item6-1-0';
// // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // //                     return 'choose-photo-item6-1-1';
// // //                } else if (rowIndex === 2 && photoIndex === 0) {
// // //                     return 'choose-photo-item6-2-0';
// // //                } else if (rowIndex === 2 && photoIndex === 1) {
// // //                     return 'choose-photo-item6-2-1';
// // //                }
// // //           } else if (selectedFrame === '2cut-x2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item-2cut-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item-2cut-0-1';
// // //                }
// // //           } else if (selectedFrame === '3-cutx2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item-3cut-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item-3cut-0-1';
// // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // //                     return 'choose-photo-item-3cut-0-1';
// // //                }
// // //           } else if (selectedFrame === '4-cutx2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item-4cut-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item-4cut-0-1';
// // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // //                     return 'choose-photo-item-4cut-1-0';
// // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // //                     return 'choose-photo-item-4cut-1-1';
// // //                }
// // //           } else if (selectedFrame === '5-cutx2') {
// // //                if (rowIndex === 0 && photoIndex === 0) {
// // //                     return 'choose-photo-item-5cut-0-0';
// // //                } else if (rowIndex === 0 && photoIndex === 1) {
// // //                     return 'choose-photo-item-5cut-0-1';
// // //                } else if (rowIndex === 1 && photoIndex === 0) {
// // //                     return 'choose-photo-item-5cut-1-0';
// // //                } else if (rowIndex === 1 && photoIndex === 1) {
// // //                     return 'choose-photo-item-5cut-1-1';
// // //                }
// // //           }
// // //           return 'choose-photo-item';
// // //      }

 
// // //      const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
// // //           console.log("스티커 올라갈 프레임 인덱스", bgIdx, images);
      
// // //           const item = {
// // //               width,
// // //               x,
// // //               y,
// // //               src,
// // //               resetButtonRef: createRef()
// // //           };
      
// // //           setImages((currentImages) => {
// // //               const newImages = currentImages.map((subList, index) => {
// // //                   if (index === bgIdx) {
// // //                       return [...subList, item];
// // //                   }
// // //                   return subList;
// // //               });
      
// // //               return newImages;
// // //           });
// // //       };

// // //      const resetAllButtons = useCallback(() => {
// // //           images.forEach((subList) => {
// // //               subList.forEach((image) => {
// // //                   if (image.resetButtonRef.current) {
// // //                       image.resetButtonRef.current();
// // //                   }
// // //               });
// // //           });
// // //       }, [images]);
      
// // //       const handleCanvasClick = useCallback(
// // //           (event) => {
// // //               if (event.target.attrs.id === "backgroundImage") {
// // //                   resetAllButtons();
// // //               }
// // //           },
// // //           [resetAllButtons]
// // //       );

// // //      const checkDeselect = (e) => {
// // //           const clickedOnEmpty = e.target === e.target.getStage();
// // //           if (clickedOnEmpty) {
// // //                selectShape(null);
// // //           }
// // //      }

// // //      const filterStickerByCategory = (category) => {
// // //           setSelectedCategory(category);
// // //      }

// // //      const printFrameWithSticker = async(event,) => {
// // //           // console.log("stage refs",stageRefs)
// // //           if (clickPrint == true) {
// // //                return;
// // //           }
// // //           setClickPrint(true);

// // //            callPrinter();
// // //           uploadCloud();

// // //           setTimeout(() => {
// // //                navigate("/print");
// // //           }, 3000);
// // //      }
// // //      function rotateImageDataURL(dataURL, degrees) {
// // //           return new Promise((resolve, reject) => {
// // //               const image = new Image();
// // //               image.onload = () => {
// // //                   const canvas = document.createElement('canvas');
// // //                   const ctx = canvas.getContext('2d');
// // //                   const { width, height } = image;
      
// // //                   // Canvas 크기를 이미지 크기와 동일하게 설정
// // //                   canvas.width = width;
// // //                   canvas.height =height ;
      
// // //                   // 이미지를 회전시키고 Canvas에 그리기
// // //                   ctx.translate(height / 2, width / 2);
// // //                   console.log("이미지 로테이트 시 width height",width,height)
// // //                   ctx.rotate(degrees * Math.PI / 180);
// // //                   ctx.drawImage(image, -width / 2, -height / 2);
      
// // //                   // 회전된 이미지를 Data URL로 변환하여 반환
// // //                   resolve(canvas.toDataURL());
// // //               };
// // //               image.onerror = reject;
// // //               image.src = dataURL;
// // //           });
// // //       }
// // //      // function rotateImageDataURL(dataURL, degrees) {
// // //      //      return new Promise((resolve, reject) => {
// // //      //          const image = new Image();
// // //      //          image.onload = () => {
// // //      //              const canvas = document.createElement('canvas');
// // //      //              const ctx = canvas.getContext('2d');
// // //      //              const { width, height } = image;
      
// // //      //              // 회전 각도가 90도 또는 270도인 경우, 캔버스 크기를 바꿔야 함
// // //      //              if (degrees === 90 || degrees === 270) {
// // //      //                  canvas.width = height;
// // //      //                  canvas.height = width;
// // //      //              } else {
// // //      //                  canvas.width = width;
// // //      //                  canvas.height = height;
// // //      //              }
      
// // //      //              // 캔버스 중심을 기준으로 회전
// // //      //              ctx.translate(canvas.width / 2, canvas.height / 2);
// // //      //              ctx.rotate(degrees * Math.PI / 180);
      
// // //      //              // 이미지를 그릴 때 원래의 중심 위치로 이동하여 그리기
// // //      //              ctx.drawImage(image, -width / 2, -height / 2);
      
// // //      //              // 회전된 이미지를 Data URL로 변환하여 반환
// // //      //              resolve(canvas.toDataURL());
// // //      //          };
// // //      //          image.onerror = reject;
// // //      //          image.src = dataURL;
// // //      //      });
// // //      //  }
      
// // //      const uploadCloud = () => {
// // //           try {
// // //                // for (let i = 0; i < stageRefs.length; i++) {
// // //                     // for (let i = 0; i < 1; i++) {
// // //                          const stageRef = stageRefs[bgIdx];
// // //                     const originalDataURL = stageRef.current.toDataURL();
// // //                     let rotated=null
// // //                     rotateImageDataURL(originalDataURL, 90)
// // //                     .then(rotatedDataURL => {
// // //                         // 회전된 이미지의 Data URL을 사용하여 다른 작업을 수행합니다.
// // //                     //     rotated=rotatedDataURL
// // //                         console.log('이미지ㅣ 회전',originalDataURL);
// // //                         const formData = new FormData();
// // //                         //   formData.append("photo", stageRef.current.toDataURL());
// // //                           formData.append("photo", originalDataURL);
// // //                           formData.append("order_code", sessionStorage.getItem('orderCodeNum'));
    
// // //                    originAxiosInstance.post(
// // //                         `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
// // //                         formData,
// // //                         {
// // //                              headers: {
// // //                                   'Content-Type': 'multipart/form-data'
// // //                              }
// // //                         })
// // //                         .then(response => {
// // //                              const data = response.data;
// // //                              if (data.photo_url) {
// // //                                   sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
// // //                                   console.log('이미지 업로드//////',data.photo_url);
// // //                              }
// // //                         })
// // //                         .catch(error => {
// // //                              console.log(error);
// // //                              alert("업로드 에러")
// // //                         });
// // //                         // 이제 rotatedDataURL을 사용하여 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
// // //                     })
// // //                     .catch(error => {
// // //                         console.error('이미지 회전 중 오류 발생:', error);
// // //                     });
                    
// // //                // }
             
// // //           } catch (error) {
// // //                console.log(error);
// // //           }
// // //      }
// // //      const callPrinter = async() => {
// // //           alert("callPrinter");
// // //           // for (let i = 0; i < stageRefs.length; i++) {
// // //               const stageRef = stageRefs[bgIdx];
// // //               if (!stageRef.current) {
// // //                   alert("stageRef.current is null");
// // //                   return;
// // //               }
      
// // //               const originalDataURL = stageRef.current.toDataURL();
// // //               const formData = new FormData(); 
// // //               formData.append("photo", originalDataURL);
// // //               formData.append("frame", selectedFrame);
              
// // //               console.log('formdata in print', formData);
              
// // //               originAxiosInstance.post(
// // //                   `${process.env.REACT_APP_BACKEND}/frames/api/print`,
// // //                   formData,
// // //                   {
// // //                       headers: {
// // //                           'Content-Type': 'multipart/form-data'
// // //                       }
// // //                   }
// // //               )
// // //               .then(response => {
// // //                   console.log('print response', response);
// // //               })
// // //               .catch(error => {
// // //                   console.log(error);
// // //               });
  

             
// // //           // }
          
// // //       }
      

// // //      const hoverGoBackButton = () => {
// // //           if (language == 'en') {
// // //                setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
// // //           } else if (language == 'vi') {
// // //                setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
// // //           } else if (language == 'ko') {
// // //                setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
// // //           }
// // //      }

// // //      const hoverStickerButton = (stickerEffect) => {
// // //           if (stickerEffect == 'mood') {
// // //                if (language == 'en') {
// // //                     setMood(mood == mood_en_click ? mood_en : mood_en_click);
// // //                } else if (language == 'vi') {
// // //                     setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
// // //                } else if (language == 'ko') {
// // //                     setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
// // //                }
// // //           } else if (stickerEffect == 'lovely') {
// // //                if (language == 'en') {
// // //                     setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
// // //                } else if (language == 'vi') {
// // //                     setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
// // //                } else if (language == 'ko') {
// // //                     setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
// // //                }
// // //           } else if (stickerEffect == 'cartoon') {
// // //                if (language == 'en') {
// // //                     setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
// // //                } else if (language == 'vi') {
// // //                     setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
// // //                } else if (language == 'ko') {
// // //                     setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
// // //                }
// // //           } else if (stickerEffect == 'y2k') {
// // //                if (language == 'en') {
// // //                     setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
// // //                } else if (language == 'vi') {
// // //                     setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
// // //                } else if (language == 'ko') {
// // //                     setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
// // //                }
// // //           }
// // //      }

// // //      const hoverPrintButton = () => {
// // //           if (language == 'en') {
// // //                setPrintButton(printButton == print_click ? print : print_click);
// // //           } else if (language == 'vi') {
// // //                setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
// // //           } else if (language == 'ko') {
// // //                setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
// // //           }
// // //      }

// // //      // Chunk the selected photos array into arrays of 2 photos each
// // //      const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
// // //      const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// // //      //스크롤 하면 인덱스에 따라 스티커 타입 정하기
// // //      const myStickers = chunkArray(stickersData, 4);
// // //      // console.log("프레임 백그라운드",myBackground)
// // //      //크기 리사이징 예제코드
// // //      const [isDragging, setIsDragging] = useState(false);
// // //      const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
// // //      const [radius, setRadius] = useState(50); // 초기 반지름

// // //      const handleMouseDown = (e) => {
// // //           setIsDragging(true);
// // //      };

// // //      const handleMouseUp = () => {
// // //           setIsDragging(false);
// // //      };

// // //      const handleMouseMove = (e) => {
// // //           if (!isDragging) return;

// // //           const newPosition = {
// // //                x: e.clientX,
// // //                y: e.clientY
// // //           };
// // //           setPosition(newPosition);
// // //      };

// // //      const handleMouseLeave2 = () => {
// // //           setIsDragging(false);
// // //      };

// // //      const handleMouseWheel = (e) => {
// // //           if (e.deltaY > 0) {
// // //                setRadius(radius - 5);
// // //           } else {
// // //                setRadius(radius + 5);
// // //           }
// // //      };
// // //      console.log("my stickers", myStickers, stickers)
// // //      const onDragStart = (event) => {
// // //           setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
// // //       };

// // //      const onDragEnd = (event) => {
// // //           const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
// // //           if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
// // //               setScrollIdx(prevIdx => (prevIdx + 1) % 4);
// // //               const nextScrollIdx = (scrollIdx + 1) % 4;
// // //               console.log("스크롤 인덱스>>>", nextScrollIdx)
// // //               if (nextScrollIdx === 0) {
// // //                   setSelectedCategory("MOOD");
// // //               }
// // //               else if (nextScrollIdx === 1) {
// // //                   setSelectedCategory("LOVELY");
// // //               }
// // //               else if (nextScrollIdx === 2) {
// // //                   setSelectedCategory("CARTOON");
// // //               }
// // //               else if (nextScrollIdx === 3) {
// // //                   setSelectedCategory("Y2K");
// // //               }
// // //           }
// // //       };
// // //       const carouselRef = useRef(null);
// // //       const [isDown, setIsDown] = useState(false);
// // //       const [startY, setStartY] = useState(0);
// // //       const [scrollTop, setScrollTop] = useState(0);
  
// // //       useEffect(() => {
// // //           console.log("스티커 드래그 in useeffect",stickerDrag)
// // //           const carousel = carouselRef.current;
// // //   const dragging=stickerDrag
// // //           const handleMouseDown = (e) => {
// // //                // if (dragging)return
// // //                console.log(">>>마우스 다운",dragging)
// // //               setIsDown(true);
// // //               if (carousel) {
// // //                if (stickerDrag)return
// // //                   setStartY(e.pageY - carousel.offsetTop);
// // //                   setScrollTop(carousel.scrollTop);
// // //               }
// // //           };
  
// // //           const handleMouseLeave = () => {
// // //                // if (stickerDrag)return
// // //                console.log(">>>마우스 리브")
// // //               setIsDown(false);
// // //           };
  
// // //           const handleMouseUp = () => {
// // //                // if (stickerDrag)return
// // //                console.log(">>>마우스 업")
// // //               setIsDown(false);
// // //               snapToClosestItem();
// // //           };
  
// // //           const handleMouseMove = (e) => {
// // //                // return;
// // //                // if (stickerMoving)return;
// // //                if (dragging)return
              
// // //               if (!isDown) return;
// // //               e.preventDefault();
// // //               if (carousel) { 
       
// // //                   const y = e.pageY - carousel.offsetTop;
// // //                   const walk = (y - startY) * 3; // Scroll speed
// // //                   carousel.scrollTop = scrollTop - walk;
// // //               }
// // //           };
  
// // //           const snapToClosestItem = () => {
// // //               if (!carousel) return;
// // //               const itemHeight = carousel.querySelector('.image').offsetHeight;
// // //               const scrollY = carousel.scrollTop;
// // //               const index = Math.round(scrollY / itemHeight);  
// // //                     console.log(">>>백그라운드 인덱스",index)
// // //                     setBgIdx(index)
// // //               carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
// // //           };
  
// // //           if (carousel) {
// // //               carousel.addEventListener('mousedown', handleMouseDown);
// // //               carousel.addEventListener('mouseleave', handleMouseLeave);
// // //               carousel.addEventListener('mouseup', handleMouseUp);
// // //               carousel.addEventListener('mousemove', handleMouseMove);
// // //           }
  
// // //           return () => {
// // //               if (carousel) {
// // //                   carousel.removeEventListener('mousedown', handleMouseDown);
// // //                   carousel.removeEventListener('mouseleave', handleMouseLeave);
// // //                   carousel.removeEventListener('mouseup', handleMouseUp);
// // //                   carousel.removeEventListener('mousemove', handleMouseMove);
// // //               }
// // //           };
// // //       }, [isDown, startY, scrollTop,stickerDrag]);
    
// // //      useEffect(() => {
// // //   // add or remove refs

// // //   setStageRefs((refs) =>
// // //     Array(bgLength)
// // //       .fill()
// // //       .map((_, i) => refs[i] || createRef()),
// // //   );


// // // }, [bgLength]);  
// // // useEffect(()=>{
// // //      console.log("session storage",sessionStorage)
// // // },[])

// // // // 선택된 아이템을 가지고 있는 리스트
// // // const tempPhotos=[{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},]
// // // console.log("choose img",selectedItems,selectedPhotos)
// // // // const backgroundList = myBackgrounds.map((imageUrl) => {
// // // //      const img = new Image();
// // // //      img.crossOrigin = 'Anonymous';
// // // //      img.src = imageUrl;
// // // //      return img;
// // // //  });
// // //  console.log("백그라운드 이미지 리스트 생성>>>",backgroundList)
 
// // //      const getImgListLayout=(selectedFrame,selectedItems)=>{
// // //         if (selectedItems.length===0) {
          
// // //           return <></>
// // //         }
// // //           if (selectedFrame==="Stripx2") { 
// // //                 console.log("sel frame in func",selectedFrame,selectedItems)
// // //                return <div
// // //                className='selected-photos-s2-list'
               
// // //                >
// // //                     {/* 1 row */}
// // //                      <div
// // //                  className='selected-photos-s2-row'
// // //                    ><img
// // // className='stripx2img'
// // //                    src={selectedItems[0].url}
// // //                    />
// // //                    <img
// // // className='stripx2img'
// // //                    src={selectedItems[1].url}
// // //                    /></div>
// // //                    {/* 2 row */}
// // //                    <div
// // //                   className='selected-photos-s2-row'
// // //                  ><img
// // // className='stripx2img'
// // //                  src={selectedItems[2].url}
// // //                  />
// // //                  <img
// // // className='stripx2img'
// // //                  src={selectedItems[3].url}
// // //                  /></div>
// // //                   {/* 3 row */}
// // //                   <div
// // //                   className='selected-photos-s2-row'
// // //                  ><img
// // // className='stripx2img'
// // //                  src={selectedItems[4].url}
// // //                  />
// // //                  <img
// // // className='stripx2img'
// // //                  src={selectedItems[5].url}
// // //                  /></div>
// // //                   {/* 4 row */}
// // //                   <div
// // //                   className='selected-photos-s2-row'
// // //                  ><img
// // // className='stripx2img'
// // //                  src={selectedItems[6].url}
// // //                  />
// // //                  <img
// // // className='stripx2img'
// // //                  src={selectedItems[7].url}
// // //                  /></div>
// // //                </div>
// // //           }
// // //           else if(selectedFrame==="2cut-x2"){
// // // return <div
// // // className='selected-photos-2-list'

// // // >
// // //     {selectedItems.map((it,idx)=>
// // //     idx===0?<div
// // //     className='selected-photo-2-container-first'
// // //     ><div
// // //      className='selected-photo-2'
// // //        style={{
          
// // //           backgroundImage: `url(${it.url})`
// // //       }}
// // //      /></div>:
// // //     <div
// // //     className='selected-photo-2-container'
// // //     ><div
// // //      className='selected-photo-2'
// // //        style={{
          
// // //           backgroundImage: `url(${it.url})`
// // //       }}
// // //      /></div>
// // //     )} 
// // // </div>

// // //           }
// // //           else if(selectedFrame==="4-cutx2"){
// // //                console.log("이건가")
// // //                return <div
// // //                className='cut4x2-container'
// // //                >
// // // <img
// // // className='cut4x2-0'
// // // src={selectedItems[0].url}
// // // />
// // // <img
// // // className='cut4x2-1'
// // // src={selectedItems[1].url}
// // // />
// // // <img
// // // className='cut4x2-2'
// // // src={selectedItems[2].url}
// // // />
// // // <img
// // // className='cut4x2-3'
// // // src={selectedItems[3].url}
// // // />

// // //                </div>
               
               
// // //           }
// // //           else if(selectedFrame==="6-cutx2"){
// // //                return <div
// // //                className='cut6x2-container'>
// // //                     {/* 1 row */}
// // //                     <div
// // //                     className='cut6x2-row'
// // //                     ><img
// // //                     className='cut6x2-img'
// // //                     src={selectedItems[0].url}
// // //                     />
// // //                          <img
// // //                          className='cut6x2-img'
// // //                     src={selectedItems[1].url}
// // //                     />
// // //                     </div>
// // //                      {/* 2 row */}
// // //                      <div
// // //                     className='cut6x2-row'
// // //                     ><img
// // //                     className='cut6x2-img'
// // //                     src={selectedItems[2].url}
// // //                     />
// // //                          <img
// // //                          className='cut6x2-img'
// // //                     src={selectedItems[3].url}
// // //                     />
// // //                     </div>
// // //                     {/* 3 row */}
// // //                     <div
// // //                     className='cut6x2-row'
// // //                     ><img
// // //                     className='cut6x2-img'
// // //                     src={selectedItems[4].url}
// // //                     />
// // //                          <img
// // //                          className='cut6x2-img'
// // //                     src={selectedItems[5].url}
// // //                     />
// // //                     </div>
// // //                </div>
// // //           }
// // //           else{

// // //           }
// // //      }
// // //      function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
// // //           const backgroundImageSize = {width:width,height:height}
// // //           const backgroundWidth = backgroundImageSize.width;
// // //           const backgroundHeight = backgroundImageSize.height;
      
// // //           // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
// // //           const backgroundAspectRatio = backgroundWidth / backgroundHeight;
// // //           const stickerAspectRatio = stickerWidth / stickerHeight;
      
// // //           let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
// // //           if (stickerAspectRatio > backgroundAspectRatio) {
// // //               newStickerWidth = backgroundWidth * (stickerWidth / 1200);
// // //               newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
// // //               newStickerX = stickerX * (backgroundWidth / 1200);
// // //               newStickerY = stickerY * (backgroundWidth / 1200);
// // //           } else { 
// // //               newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
// // //               newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
// // //               newStickerY = stickerY * (backgroundHeight / 1000);
// // //               newStickerX = stickerX * (backgroundHeight / 1000); 
// // //           }
      
         
// // //           return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
// // //       }
// // //       //세로로 긴거
// // //       useEffect(() => {
// // //           if (frameSize.width===""||frameSize.height==="")return
// // //           const loadImages = () => {
// // //               const tempImg = new Image();
// // //               tempImg.crossOrigin = 'Anonymous';
// // //               tempImg.src = '/temp.jpg';
// // //               setTempImage(tempImg);
// // //               console.log("temp img", tempImg);
      
// // //               if (backgroundList.length === 0 || !backgroundList[0]?.src) {
// // //                   const element = document.querySelector('.image');
// // //                   if (element) {
// // //                       const targetWidth = frameSize.width//257.79;
// // //                       const targetHeight = frameSize.height//384;
      
// // //                       const loadedImages = myBackgrounds.map((imageUrl) => {
// // //                           return new Promise((resolve, reject) => {
// // //                               const img = new Image();
// // //                               img.crossOrigin = 'Anonymous';
// // //                               img.src = imageUrl;
      
// // //                               img.onload = () => {
// // //                                   // Calculate the aspect ratio
// // //                                   const aspectRatio = img.width / img.height;
      
// // //                                   let width, height;
// // //                                   if (aspectRatio > 1) {
// // //                                       // Landscape
// // //                                       width = targetWidth;
// // //                                       height = targetWidth / aspectRatio;
// // //                                   } else {
// // //                                       // Portrait or square
// // //                                       height = targetHeight;
// // //                                       width = targetHeight * aspectRatio;
// // //                                   }
      
// // //                                   // Set width and height state
// // //                                   setWidth(width);
// // //                                   setHeight(height);
      
// // //                                   resolve({
// // //                                       img,
// // //                                       width,
// // //                                       height
// // //                                   });
// // //                               };
// // //                               img.onerror = (err) => reject(err);
// // //                           });
// // //                       });
      
// // //                       Promise.all(loadedImages)
// // //                           .then((images) => {
// // //                               // All images are loaded
// // //                               console.log("백그라운드 이미지 세로가 긴거 사이즈", images[0])
// // //                               setBackgroundList(images);
// // //                           })
// // //                           .catch((error) => {
// // //                               console.error("Error loading images:", error);
// // //                           });
// // //                   }
// // //               }
// // //           };
      
// // //           loadImages();
// // //       }, [backgroundList, myBackgrounds]);
// // //       //정사각형에 가까운거
 
// // //       const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
// // //           if (selectedFrame==="6-cutx2") {
// // //                const calcedWidth=width/2 -22
// // //                const calcedHeight=height/3 - 28
// // //                const x11=17
// // //                const x12=calcedWidth+x11+10
// // //                const y1=18
// // //                //
// // //                const x21=20
// // //                const x22=x12
// // //                const y2=calcedHeight+y1+10 
// // //                 //
// // //                 const x31=20
// // //                 const x32=x22
// // //                 const y3=calcedHeight+y2+10 
// // //                return      <>
// // //                {/* 11 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x11}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 12 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x12}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //              {/* 21 */}
// // //              <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x21}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 22 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x22}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //                {/* 31 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x31}
// // //                y={y3}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 32 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x32}
// // //                y={y3}
// // //             image={imgTag}
            
// // //             />
// // //             </>  
// // //           }
// // //          else if (selectedFrame==="Stripx2") {
// // //                const calcedWidth=width/2 - 18
// // //                const calcedHeight=height/4 - 20
// // //                //1 row
// // //                const x11=8
// // //                const x12=calcedWidth+x11+20
// // //                const y1=22 
// // //                //2 row
// // //                const x21=x11
// // //                const x22=x12
// // //                const y2=calcedHeight+y1+8 
// // //                 //3 row
// // //                 const x31=x11
// // //                 const x32=x22
// // //                 const y3=calcedHeight+y2+8 
// // //                              //4 row
// // //                              const x41=x11
// // //                              const x42=x32
// // //                              const y4=calcedHeight+y3+6 
// // //                return      <>
// // //                {/* 11 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x11}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 12 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x12}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //              {/* 21 */}
// // //              <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x21}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 22 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x22}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //                {/* 31 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x31}
// // //                y={y3}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 32 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x32}
// // //                y={y3}
// // //             image={imgTag}
            
// // //             />
// // //               {/* 41 */}
// // //               <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x41}
// // //                y={y4}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 42 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x42}
// // //                y={y4}
// // //             image={imgTag}
            
// // //             />
// // //             </>  
// // //           }
// // //           else if(selectedFrame==="2cut-x2"){
// // //                const calcedWidth=width/2 - 32
// // //                const calcedHeight=height-90
// // //                const x11=26
// // //                const x12=calcedWidth+x11+14
// // //                const y1=48
// // //                //
// // //                const x21=36
// // //                const x22=x12
// // //                const y2=calcedHeight+y1+10 
// // //                 //
// // //                 const x31=36
// // //                 const x32=x22
// // //                 const y3=calcedHeight+y2+10 
// // //                return      <>
// // //                {/* 11 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x11}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 12 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x12}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             /></>
// // //           }
// // //           else if(selectedFrame==="4-cutx2"){
// // //                const calcedWidth=width/2 - 70
// // //                const calcedHeight=height/2 - 30
// // //                //1 row
// // //                const x11=62
// // //                const x12=calcedWidth+x11+18
// // //                const y1=25
// // //                //2 row
// // //                const x21=x11
// // //                const x22=x12
// // //                const y2=calcedHeight+y1+10
// // //                 //
// // //                 const x31=36
// // //                 const x32=x22
// // //                 const y3=calcedHeight+y2+10 
// // //                return      <>
// // //                {/* 11 */}
// // //                <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x11}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 12 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x12}
// // //                y={y1}
// // //             image={imgTag}
            
// // //             />
// // //             {/* 21 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x21}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //           {/* 22 */}
// // //             <KonvaImage
// // //                width={calcedWidth}
// // //                height={calcedHeight}
// // //                x={x22}
// // //                y={y2}
// // //             image={imgTag}
            
// // //             />
// // //             </>
// // //           }
// // //           else {
// // //                 return        <></>
// // //           }
         
// // //       }
// // //       //프레임 유형별로 stageWidth, height
// // //       useEffect(()=>{
// // // //ui 프레임 크기 조정
// // // const smallRatio=0.8
// // // const largeRatio=1.2
// // // if (selectedFrame==="6-cutx2") {
     
// // //      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// // // } 
// // // else if(selectedFrame==="Stripx2") {
// // //      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// // // }
// // // else if(selectedFrame==="2cut-x2"){
    
// // //         setFrameSize({width:576*smallRatio,height:384*smallRatio})
// // // }
// // // else{
// // //      setFrameSize({width:576*smallRatio,height:384*smallRatio})
// // // }
          
// // //       },[
// // //           selectedFrame
// // //       ])
// // //       const getKonvaClassName=(selectedFrame)=>{
// // //           if (selectedFrame==="6-cutx2"||selectedFrame==="Stripx2") {
// // //                return "konva-vertical-image"
// // //           } else {
// // //                return "konva-horizontal-image"
// // //           }
// // //       }
// // //      //  386.68
// // //      //  alert(selectedFrame)
// // //      return (
// // // <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
// // //     <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
// // //     <div className="left-sticker">
// // //         <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
// // //         <div className='v-carousel-container' ref={carouselRef}>
// // //             <div className='v-carousel-images'>
// // //                 {myBackgrounds.map((src, index) => (
// // //                     <div className='image' style={{}}>
// // //                         {/* ui용 */}
// // //                         <Stage
// // //                             width={frameSize.width} // Adjusted stage width
// // //                             height={frameSize.height} // Adjusted stage height
// // //                             scale={{ x: 1  , y: 1 }} // Ensure the scale is 1:1
// // //                             onClick={handleCanvasClick}
// // //                             onTap={handleCanvasClick}
// // //                             className={getKonvaClassName(selectedFrame)}
// // //                             onMouseDown={checkDeselect}
// // //                             onTouchStart={checkDeselect}
// // //                             ref={stageRefs[index]}
// // //                         >
// // //                             <Layer
// // //                             scale={{ x:1, y:1 }}
// // //                             >
// // //                                 {backgroundList[bgIdx] && (
// // //                                     <KonvaImage
// // //                                     scale={{ x:1, y:1 }}
// // //                                         image={backgroundList[bgIdx].img}
// // //                                         width={frameSize.width} // Adjusted stage width
// // //                                         height={frameSize.height} // Adjusted stage height
// // //                                         x={(frameSize.width - backgroundList[bgIdx].width) / 2} // Center the image horizontally
// // //                                         y={(frameSize.height - backgroundList[bgIdx].height) / 2} // Center the image vertically
// // //                                     />
// // //                                 )}
// // //                                 {showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage)}
// // //                                 {images[bgIdx] && images[bgIdx].map((image, i) => (
// // //                                     <StickerItem
// // //                                         isStickerDrag={stickerDrag}
// // //                                         isSelected={isSel}
// // //                                         setStickerDrag={setStickerDrag}
// // //                                         onTransform={() => console.log("이미지 리사이징 중")}
// // //                                         onSelect={() => {
// // //                                             setIsSel(p => !p);
// // //                                             console.log("스티커 클릭");
// // //                                         }}
// // //                                         onDelete={() => {
// // //                                             const newImages = [...images];
// // //                                             newImages.splice(i, 1);
// // //                                             setImages(newImages);
// // //                                         }}
// // //                                         onDragEnd={(event) => {
// // //                                             image.x = event.target.x();
// // //                                             image.y = event.target.y();
// // //                                         }}
// // //                                         onChange={(x, y, width, height) => {
// // //                                             console.log("리사이즈 한 너비 / 높이", width, height);
// // //                                         }}
// // //                                         key={i}
// // //                                         image={image}
// // //                                         shapeProps={image}
// // //                                     />
// // //                                 ))}
// // //                             </Layer>
// // //                         </Stage>

// // //                         {/* //프린트용 */}

// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </div>
// // //     </div>

// // //     <div className="middle-sticker"
// // //         draggable={true}
// // //         onDragStart={onDragStart}
// // //         onDrag={() => {
// // //             console.log("드래그 스티커 배경")
// // //         }}
// // //         onDragEnd={onDragEnd}

// // //         style={{
// // //             backgroundImage: `url(${sticker_frame})`
// // //         }}>
// // //         {myStickers.map((group, index) => (
// // //             <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
// // //                 {group.map((mySticker, photoIndex) => (
// // //                     <div
// // //                         key={photoIndex}
// // //                         className="sticker"
// // //                         onClick={() => {
// // //                             const element = document.querySelector('.image');
// // //                             const width = element.offsetWidth; // 요소의 너비
// // //                             const height = element.offsetHeight; // 요소의 높이  
// // //                             console.log("배경이미지의 원래크기", width, height)
// // //                             addStickerToPanel({
// // //                                 bgIdx: bgIdx,
// // //                                 src: mySticker.photo,
// // //                                 width: 100,
// // //                                 ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200) // 스티커의 초기 위치와 크기를 지정
// // //                             });
// // //                         }}
// // //                     >
// // //                         <img className="sticker-image"
// // //                             alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         ))}
// // //     </div>
// // //     <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
// // //         <div className="sticker-category">
// // //             <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
// // //             <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
// // //             <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
// // //             <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
// // //         </div>
// // //         <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
// // //     </div>
// // // </div>
// // //      );
// // // }

// // // export default Filter;




// // import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
// // import { useTranslation } from 'react-i18next';
// // import { useNavigate } from 'react-router-dom';
// // import i18n from '../translations/i18n';
// // import "../css/Sticker.css";
// // import frame from '../assets/Sticker/frame.png';
// // import sticker_frame from '../assets/Sticker/sticker_frame.png';
// // import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// // import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// // import Konva from 'konva';
// // import useImage from 'use-image';
// // import { StickerItem } from '../screens/StickerItem';
// // import axios from 'axios';
// // // import { Resizable } from 're-resizable';
// // // Sticker
// // import { stickers } from './stickers.data';
// // // import TempSrc from '../../../backend/media/uploads/2024-05-30-15-27-05.jpg'
// // // Go Back
// // import goback_en from '../assets/Common/goback.png';
// // import goback_en_hover from '../assets/Common/gobackhover.png';
// // import goback_kr from '../assets/Common/kr/goback.png';
// // import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// // import goback_vn from '../assets/Common/vn/goback.png';
// // import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // // Background
// // import background_en from '../assets/Sticker/BG.png';
// // import background_kr from '../assets/Sticker/kr/BG.png';
// // import background_vn from '../assets/Sticker/vn/BG.png';

// // // Sticker
// // import mood_en from '../assets/Sticker/mood.png';
// // import mood_en_click from '../assets/Sticker/mood-click.png';
// // import mood_kr from '../assets/Sticker/kr/mood-default.png';
// // import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// // import mood_vn from '../assets/Sticker/vn/mood-default.png';
// // import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// // import lovely_en from '../assets/Sticker/lovely.png';
// // import lovely_en_click from '../assets/Sticker/lovely-click.png';
// // import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// // import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// // import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// // import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// // import cartoon_en from '../assets/Sticker/cartoon.png';
// // import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// // import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// // import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// // import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// // import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// // import y2k_en from '../assets/Sticker/y2k.png';
// // import y2k_en_click from '../assets/Sticker/y2k-click.png';
// // import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// // import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// // import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// // import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// // import print from '../assets/Sticker/print.png';
// // import print_click from '../assets/Sticker/print_click.png';
// // import print_kr from '../assets/Sticker/kr/print-default.png';
// // import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// // import print_vn from '../assets/Sticker/vn/print-default.png';
// // import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// // //frame나오는 공간
// // import frame_box from '../assets/Sticker/frame_box.png';
// // import CustomCarousel from '../components/CustomCarousel';
// // import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// // import { originAxiosInstance } from '../api/config';

// // function Sticker() {
// //      const { t } = useTranslation();
// //      const navigate = useNavigate();
// //      const [src, setSrc] = useState(null)
// //      const [hoveredImage, setHoveredImage] = useState(null);
// //      const [selectedLayout, setSelectedLayout] = useState(null);
// //      const [selectedPhotos, setSelectedPhotos] = useState([]);
// //      const [filterEffect, setFilterEffect] = useState(null);
// //      const [myBackgrounds, setMyBackgrounds] = useState([]);
// //      const bgLength=myBackgrounds.length
// //      const [selectedFrame, setSelectedFrame] = useState(null);
// //      const [images, setImages] = useState([]);
// //      const [selectedId, selectShape] = useState(null);
// //      const [clickPrint, setClickPrint] = useState(false);
// //      const [orderCode, setOrderCode] = useState(null);
// //      const [language, setLanguage] = useState('en');

// //      const [backgroundImage, setBackgroundImage] = useState(background_en);
// //      //스크롤 인덱스
// //      const [scrollIdx, setScrollIdx] = useState(0)
// //      const [dragStartY, setDragStartY] = useState(0);
// //      const [bgIdx,setBgIdx]=useState(0)
// //      const [stickerImgs,setStickerImgs]=useState([])
// //      // Sticker
// //      const [isSel,setIsSel]=useState(false)
// //      const [mood, setMood] = useState(null);
// //      const [lovely, setLovely] = useState(null);
// //      const [cartoon, setCartoon] = useState(null);
// //      const [y2k, setY2k] = useState(null);
// //      const [printButton, setPrintButton] = useState(null);

// //      const [goBackButton, setGoBackButton] = useState(goback_en);
// //      const [clickedButton, setClickedButton] = useState(false);
// //      const [stickerDrag,setStickerDrag]=useState(false)
// // const [photos,setPhotos]=useState([])
// // const [selectedItems,setSelectedItems]=useState([])
// // const [width,setWidth]=useState(0)
// // const [height,setHeight]=useState(0)
// //      const background = new Image();
// //      background.crossOrigin = 'Anonymous';
// //      background.src = sessionStorage.getItem('downloaded-image');
// //      const [selectedCategory, setSelectedCategory] = useState('MOOD');
// //      const [backgroundList,setBackgroundList]=useState([])
// //      const [tempImage,setTempImage]=useState()
// //      // const stageRef = useRef(null);
// //      const [stageRefs,setStageRefs]=useState([])
// //      const [frameSize,setFrameSize]=useState({
// //           width:"",
// //           height:""
// //      })
// //      const chunkArray = (arr, size) => {
// //           return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
// //      };

// // useEffect(()=>{
// //      const photos = JSON.parse(sessionStorage.getItem('photos'));
// // if (photos===null)return;
// //      setPhotos(photos)
// // },[])
// // useEffect(()=>{
    
// //      const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// //     if (!storedSelectedPhotos)return;  
    
   
// // //     if (storedSelectedPhotos) {
// // //           setSelectedPhotos(storedSelectedPhotos);
// // //      }
// //      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));
// //       const tempImgs = selItems.map(photo => {
// //           const tempImg = new Image();
// //           tempImg.crossOrigin = 'Anonymous';
// //           tempImg.src = photo.url;
      
// //            tempImg.style.filter = filterEffect
// //           return tempImg;
// //       });

// //       // tempImg 리스트를 setTempImage에 넣음
// //       setTempImage(tempImgs);
// //      setSelectedItems(selItems)
// // },[photos,filterEffect])
// // // useEffect(()=>{
    
// // //      const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// // //     if (!storedSelectedPhotos)return;  
    
   
// // // //     if (storedSelectedPhotos) {
// // // //           setSelectedPhotos(storedSelectedPhotos);
// // // //      }
// // //      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));
// // //       const tempImgs = selItems.map(photo => {
// // //           const tempImg = new Image();
// // //           tempImg.crossOrigin = 'Anonymous';
// // //           tempImg.src = photo.url;
// // //           return tempImg;
// // //       });

// // //       // tempImg 리스트를 setTempImage에 넣음
// // //       setTempImage(tempImgs);
// // //      // setSelectedItems(selItems)
// // // },[photos])
// //      useEffect(() => {  
// //           if (!backgroundList.length===0) {
// //                backgroundList[0].src = sessionStorage.getItem('downloaded-image');
// //                window.location.reload();
// //           }
// //      }, []);

// //      useEffect(() => {
// //           const storedLanguage = sessionStorage.getItem('language');
// //           if (storedLanguage) {
// //                setLanguage(storedLanguage);
// //                if (storedLanguage === 'en') {
// //                     setBackgroundImage(background_en);
// //                     setMood(mood_en);
// //                     setLovely(lovely_en);
// //                     setCartoon(cartoon_en);
// //                     setY2k(y2k_en);
// //                     setPrintButton(print);
// //                     setGoBackButton(goback_en);
// //                } else if (storedLanguage === 'ko') {
// //                     setBackgroundImage(background_kr);
// //                     setMood(mood_kr);
// //                     setLovely(lovely_kr);
// //                     setCartoon(cartoon_kr);
// //                     setY2k(y2k_kr);
// //                     setPrintButton(print_kr);
// //                     setGoBackButton(goback_kr);
// //                } else if (storedLanguage === 'vi') {
// //                     setBackgroundImage(background_vn);
// //                     setMood(mood_vn);
// //                     setLovely(lovely_vn);
// //                     setCartoon(cartoon_vn);
// //                     setY2k(y2k_vn);
// //                     setPrintButton(print_vn);
// //                     setGoBackButton(goback_vn);
// //                }
// //           }

// //           // get session storage selectedLayout
// //           const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
// //           if (sessionSelectedLayout) {
// //                const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

// //                setSelectedLayout(parsedSelectedLayout.photo_cover);
// //                // setMyBackground(parsedSelectedLayout.photo);
// //                setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

// //                const imgs=[]
// //           for (let i = 0; i < parsedSelectedLayout.length; i++) {
// //              imgs.push([])
               
// //           }
// //           setImages(imgs)
// //           setStickerImgs(imgs)
// //                // setStageRefs()
// //                setImages(parsedSelectedLayout.map(b=>[]))
// //                // background.src=parsedSelectedLayout.photo_full
// //                // setSrc(parsedSelectedLayout.photo_full)
// //           }

// //           // Retrieve selected photos from session storage
// //           const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
// //           if (storedSelectedPhotos) {

// //                setSelectedPhotos(storedSelectedPhotos);
// //           }

// //           // Filter
// //           const filterSession = sessionStorage.getItem('filter');
// //           if (filterSession) {
// //                setFilterEffect(filterSession);
// //           }

// //           // Retrieve selected frame from session storage
// //           const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
// //           if (storedSelectedFrame) {

// //                setSelectedFrame(storedSelectedFrame.frame);
// //           }
// //      }, []);

// //      const handleMouseEnter = (image) => {
// //           setHoveredImage(image);
// //      }

// //      const handleMouseLeave = () => {
// //           setHoveredImage(null);
// //      }

// //      const displayClassNameForBackground = () => {
// //           if (selectedFrame == '2cut-x2') {
// //                return 'left-choose-photos-2cut';
// //           } else if (selectedFrame == '4-cutx2') {
// //                return 'left-choose-photos-4cut';
// //           } else if (selectedFrame == '5-cutx2') {
// //                return 'left-choose-photos-5cut';
// //           } else {
// //                return 'left-choose-photos';
// //           }
// //      }

// //      const getImageStyle = () => {
// //           return filterEffect;
// //      }

// //      const displayClassNameForLayout = () => {
// //           if (selectedFrame == '2cut-x2') {
// //                return 'left-choose-container-2cut';
// //           } else if (selectedFrame == '4-cutx2') {
// //                return 'left-choose-container-4cut';
// //           } else if (selectedFrame == '5-cutx2') {
// //                return 'left-choose-container';
// //           } else {
// //                return 'left-choose-container';
// //           }
// //      }

// //      const displayClassNameForPhoto = (rowIndex, photoIndex) => {
// //           if (selectedFrame === 'Stripx2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item-0-1';
// //                } else if (rowIndex === 1 && photoIndex === 0) {
// //                     return 'choose-photo-item-1-0';
// //                } else if (rowIndex === 1 && photoIndex === 1) {
// //                     return 'choose-photo-item-1-1';
// //                } else if (rowIndex === 2 && photoIndex === 0) {
// //                     return 'choose-photo-item-2-0';
// //                } else if (rowIndex === 2 && photoIndex === 1) {
// //                     return 'choose-photo-item-2-1';
// //                } else if (rowIndex === 3 && photoIndex === 0) {
// //                     return 'choose-photo-item-3-0';
// //                } else if (rowIndex === 3 && photoIndex === 1) {
// //                     return 'choose-photo-item-3-1';
// //                }
// //           } else if (selectedFrame === '6-cutx2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item6-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item6-0-1';
// //                } else if (rowIndex === 1 && photoIndex === 0) {
// //                     return 'choose-photo-item6-1-0';
// //                } else if (rowIndex === 1 && photoIndex === 1) {
// //                     return 'choose-photo-item6-1-1';
// //                } else if (rowIndex === 2 && photoIndex === 0) {
// //                     return 'choose-photo-item6-2-0';
// //                } else if (rowIndex === 2 && photoIndex === 1) {
// //                     return 'choose-photo-item6-2-1';
// //                }
// //           } else if (selectedFrame === '2cut-x2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item-2cut-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item-2cut-0-1';
// //                }
// //           } else if (selectedFrame === '3-cutx2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item-3cut-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item-3cut-0-1';
// //                } else if (rowIndex === 1 && photoIndex === 0) {
// //                     return 'choose-photo-item-3cut-0-1';
// //                }
// //           } else if (selectedFrame === '4-cutx2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item-4cut-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item-4cut-0-1';
// //                } else if (rowIndex === 1 && photoIndex === 0) {
// //                     return 'choose-photo-item-4cut-1-0';
// //                } else if (rowIndex === 1 && photoIndex === 1) {
// //                     return 'choose-photo-item-4cut-1-1';
// //                }
// //           } else if (selectedFrame === '5-cutx2') {
// //                if (rowIndex === 0 && photoIndex === 0) {
// //                     return 'choose-photo-item-5cut-0-0';
// //                } else if (rowIndex === 0 && photoIndex === 1) {
// //                     return 'choose-photo-item-5cut-0-1';
// //                } else if (rowIndex === 1 && photoIndex === 0) {
// //                     return 'choose-photo-item-5cut-1-0';
// //                } else if (rowIndex === 1 && photoIndex === 1) {
// //                     return 'choose-photo-item-5cut-1-1';
// //                }
// //           }
// //           return 'choose-photo-item';
// //      }

 
// //      const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
      
// //           const item = {
// //               width,
// //               x,
// //               y,
// //               src,
// //               resetButtonRef: createRef()
// //           };
      
// //           setImages((currentImages) => {
// //               const newImages = currentImages.map((subList, index) => {
// //                   if (index === bgIdx) {
// //                       return [...subList, item];
// //                   }
// //                   return subList;
// //               });
      
// //               return newImages;
// //           });
// //       };

// //      const resetAllButtons = useCallback(() => {
// //           images.forEach((subList) => {
// //               subList.forEach((image) => {
// //                   if (image.resetButtonRef.current) {
// //                       image.resetButtonRef.current();
// //                   }
// //               });
// //           });
// //       }, [images]);
      
// //       const handleCanvasClick = useCallback(
// //           (event) => {
// //               if (event.target.attrs.id === "backgroundImage") {
// //                   resetAllButtons();
// //               }
// //           },
// //           [resetAllButtons]
// //       );

// //      const checkDeselect = (e) => {
// //           const clickedOnEmpty = e.target === e.target.getStage();
// //           if (clickedOnEmpty) {
// //                selectShape(null);
// //           }
// //      }

// //      const filterStickerByCategory = (category) => {
// //           setSelectedCategory(category);
// //      }

// //      const printFrameWithSticker = async(event,) => {
// //           // console.log("stage refs",stageRefs)
// //           if (clickPrint == true) {
// //                return;
// //           }
// //           setClickPrint(true);

// //            callPrinter();
// //           uploadCloud();

// //           setTimeout(() => {
// //                navigate("/print");
// //           }, 3000);
// //      }
// //      function rotateImageDataURL(dataURL, degrees) {
// //           return new Promise((resolve, reject) => {
// //               const image = new Image();
// //               image.onload = () => {
// //                   const canvas = document.createElement('canvas');
// //                   const ctx = canvas.getContext('2d');
// //                   const { width, height } = image;
      
// //                   // Canvas 크기를 이미지 크기와 동일하게 설정
// //                   canvas.width = width;
// //                   canvas.height =height ;
      
// //                   // 이미지를 회전시키고 Canvas에 그리기
// //                   ctx.translate(height / 2, width / 2);
// //                   ctx.rotate(degrees * Math.PI / 180);
// //                   ctx.drawImage(image, -width / 2, -height / 2);
      
// //                   // 회전된 이미지를 Data URL로 변환하여 반환
// //                   resolve(canvas.toDataURL());
// //               };
// //               image.onerror = reject;
// //               image.src = dataURL;
// //           });
// //       }
// //      // function rotateImageDataURL(dataURL, degrees) {
// //      //      return new Promise((resolve, reject) => {
// //      //          const image = new Image();
// //      //          image.onload = () => {
// //      //              const canvas = document.createElement('canvas');
// //      //              const ctx = canvas.getContext('2d');
// //      //              const { width, height } = image;
      
// //      //              // 회전 각도가 90도 또는 270도인 경우, 캔버스 크기를 바꿔야 함
// //      //              if (degrees === 90 || degrees === 270) {
// //      //                  canvas.width = height;
// //      //                  canvas.height = width;
// //      //              } else {
// //      //                  canvas.width = width;
// //      //                  canvas.height = height;
// //      //              }
      
// //      //              // 캔버스 중심을 기준으로 회전
// //      //              ctx.translate(canvas.width / 2, canvas.height / 2);
// //      //              ctx.rotate(degrees * Math.PI / 180);
      
// //      //              // 이미지를 그릴 때 원래의 중심 위치로 이동하여 그리기
// //      //              ctx.drawImage(image, -width / 2, -height / 2);
      
// //      //              // 회전된 이미지를 Data URL로 변환하여 반환
// //      //              resolve(canvas.toDataURL());
// //      //          };
// //      //          image.onerror = reject;
// //      //          image.src = dataURL;
// //      //      });
// //      //  }
      
// //      const uploadCloud = () => {
// //           try {
// //                // for (let i = 0; i < stageRefs.length; i++) {
// //                     // for (let i = 0; i < 1; i++) {
// //                          const stageRef = stageRefs[bgIdx];
// //                     const originalDataURL = stageRef.current.toDataURL();
// //                     let rotated=null
// //                     rotateImageDataURL(originalDataURL, 90)
// //                     .then(rotatedDataURL => {
// //                         // 회전된 이미지의 Data URL을 사용하여 다른 작업을 수행합니다.
// //                     //     rotated=rotatedDataURL
// //                         const formData = new FormData();
// //                         //   formData.append("photo", stageRef.current.toDataURL());
// //                           formData.append("photo", originalDataURL);
// //                           formData.append("order_code", sessionStorage.getItem('orderCodeNum'));
    
// //                    originAxiosInstance.post(
// //                         `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
// //                         formData,
// //                         {
// //                              headers: {
// //                                   'Content-Type': 'multipart/form-data'
// //                              }
// //                         })
// //                         .then(response => {
// //                              const data = response.data;
// //                              if (data.photo_url) {
// //                                   sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
// //                              }
// //                         })
// //                         .catch(error => {
// //                              console.log(error);
// //                              alert("업로드 에러")
// //                         });
// //                         // 이제 rotatedDataURL을 사용하여 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
// //                     })
// //                     .catch(error => {
// //                         console.error('이미지 회전 중 오류 발생:', error);
// //                     });
                    
// //                // }
             
// //           } catch (error) {
// //                console.log(error);
// //           }
// //      }
// //      const callPrinter = async() => {
// //           alert("callPrinter");
// //           // for (let i = 0; i < stageRefs.length; i++) {
// //               const stageRef = stageRefs[bgIdx];
// //               if (!stageRef.current) {
// //                   alert("stageRef.current is null");
// //                   return;
// //               }
      
// //               const originalDataURL = stageRef.current.toDataURL();
// //               const formData = new FormData(); 
// //               formData.append("photo", originalDataURL);
// //               formData.append("frame", selectedFrame);
              
              
// //               originAxiosInstance.post(
// //                   `${process.env.REACT_APP_BACKEND}/frames/api/print`,
// //                   formData,
// //                   {
// //                       headers: {
// //                           'Content-Type': 'multipart/form-data'
// //                       }
// //                   }
// //               )
// //               .then(response => {
// //                   console.log('print response', response);
// //               })
// //               .catch(error => {
// //                   console.log(error);
// //               });
  

             
// //           // }
          
// //       }
      

// //      const hoverGoBackButton = () => {
// //           if (language == 'en') {
// //                setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
// //           } else if (language == 'vi') {
// //                setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
// //           } else if (language == 'ko') {
// //                setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
// //           }
// //      }

// //      const hoverStickerButton = (stickerEffect) => {
// //           if (stickerEffect == 'mood') {
// //                if (language == 'en') {
// //                     setMood(mood == mood_en_click ? mood_en : mood_en_click);
// //                } else if (language == 'vi') {
// //                     setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
// //                } else if (language == 'ko') {
// //                     setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
// //                }
// //           } else if (stickerEffect == 'lovely') {
// //                if (language == 'en') {
// //                     setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
// //                } else if (language == 'vi') {
// //                     setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
// //                } else if (language == 'ko') {
// //                     setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
// //                }
// //           } else if (stickerEffect == 'cartoon') {
// //                if (language == 'en') {
// //                     setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
// //                } else if (language == 'vi') {
// //                     setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
// //                } else if (language == 'ko') {
// //                     setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
// //                }
// //           } else if (stickerEffect == 'y2k') {
// //                if (language == 'en') {
// //                     setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
// //                } else if (language == 'vi') {
// //                     setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
// //                } else if (language == 'ko') {
// //                     setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
// //                }
// //           }
// //      }

// //      const hoverPrintButton = () => {
// //           if (language == 'en') {
// //                setPrintButton(printButton == print_click ? print : print_click);
// //           } else if (language == 'vi') {
// //                setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
// //           } else if (language == 'ko') {
// //                setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
// //           }
// //      }

// //      // Chunk the selected photos array into arrays of 2 photos each
// //      const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
// //      const selectedPhotoRows = chunkArray(selectedPhotos, 2);
// //      //스크롤 하면 인덱스에 따라 스티커 타입 정하기
// //      const myStickers = chunkArray(stickersData, 4);
// //      // console.log("프레임 백그라운드",myBackground)
// //      //크기 리사이징 예제코드
// //      const [isDragging, setIsDragging] = useState(false);
// //      const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
// //      const [radius, setRadius] = useState(50); // 초기 반지름

// //      const handleMouseDown = (e) => {
// //           setIsDragging(true);
// //      };

// //      const handleMouseUp = () => {
// //           setIsDragging(false);
// //      };

// //      const handleMouseMove = (e) => {
// //           if (!isDragging) return;

// //           const newPosition = {
// //                x: e.clientX,
// //                y: e.clientY
// //           };
// //           setPosition(newPosition);
// //      };

// //      const handleMouseLeave2 = () => {
// //           setIsDragging(false);
// //      };

// //      const handleMouseWheel = (e) => {
// //           if (e.deltaY > 0) {
// //                setRadius(radius - 5);
// //           } else {
// //                setRadius(radius + 5);
// //           }
// //      };
// //      const onDragStart = (event) => {
// //           setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
// //       };

// //      const onDragEnd = (event) => {
// //           const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
// //           if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
// //               setScrollIdx(prevIdx => (prevIdx + 1) % 4);
// //               const nextScrollIdx = (scrollIdx + 1) % 4;
// //               if (nextScrollIdx === 0) {
// //                   setSelectedCategory("MOOD");
// //               }
// //               else if (nextScrollIdx === 1) {
// //                   setSelectedCategory("LOVELY");
// //               }
// //               else if (nextScrollIdx === 2) {
// //                   setSelectedCategory("CARTOON");
// //               }
// //               else if (nextScrollIdx === 3) {
// //                   setSelectedCategory("Y2K");
// //               }
// //           }
// //       };
// //       const carouselRef = useRef(null);
// //       const [isDown, setIsDown] = useState(false);
// //       const [startY, setStartY] = useState(0);
// //       const [scrollTop, setScrollTop] = useState(0);
  
// //       useEffect(() => {
// //           const carousel = carouselRef.current;
// //   const dragging=stickerDrag
// //           const handleMouseDown = (e) => {
// //                // if (dragging)return
// //               setIsDown(true);
// //               if (carousel) {
// //                if (stickerDrag)return
// //                   setStartY(e.pageY - carousel.offsetTop);
// //                   setScrollTop(carousel.scrollTop);
// //               }
// //           };
  
// //           const handleMouseLeave = () => {
// //                // if (stickerDrag)return
// //               setIsDown(false);
// //           };
  
// //           const handleMouseUp = () => {
// //                // if (stickerDrag)return
// //               setIsDown(false);
// //               snapToClosestItem();
// //           };
  
// //           const handleMouseMove = (e) => {
// //                // return;
// //                // if (stickerMoving)return;
// //                if (dragging)return
              
// //               if (!isDown) return;
// //               e.preventDefault();
// //               if (carousel) { 
       
// //                   const y = e.pageY - carousel.offsetTop;
// //                   const walk = (y - startY) * 3; // Scroll speed
// //                   carousel.scrollTop = scrollTop - walk;
// //               }
// //           };
  
// //           const snapToClosestItem = () => {
// //               if (!carousel) return;
// //               const itemHeight = carousel.querySelector('.image').offsetHeight;
// //               const scrollY = carousel.scrollTop;
// //               const index = Math.round(scrollY / itemHeight);  
// //                     setBgIdx(index)
// //               carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
// //           };
  
// //           if (carousel) {
// //               carousel.addEventListener('mousedown', handleMouseDown);
// //               carousel.addEventListener('mouseleave', handleMouseLeave);
// //               carousel.addEventListener('mouseup', handleMouseUp);
// //               carousel.addEventListener('mousemove', handleMouseMove);
// //           }
  
// //           return () => {
// //               if (carousel) {
// //                   carousel.removeEventListener('mousedown', handleMouseDown);
// //                   carousel.removeEventListener('mouseleave', handleMouseLeave);
// //                   carousel.removeEventListener('mouseup', handleMouseUp);
// //                   carousel.removeEventListener('mousemove', handleMouseMove);
// //               }
// //           };
// //       }, [isDown, startY, scrollTop,stickerDrag]);
    
// //      useEffect(() => {
// //   // add or remove refs

// //   setStageRefs((refs) =>
// //     Array(bgLength)
// //       .fill()
// //       .map((_, i) => refs[i] || createRef()),
// //   );


// // }, [bgLength]);  


// // // 선택된 아이템을 가지고 있는 리스트
// // const tempPhotos=[{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},{url:"./temp.jpg"},]
// // // const backgroundList = myBackgrounds.map((imageUrl) => {
// // //      const img = new Image();
// // //      img.crossOrigin = 'Anonymous';
// // //      img.src = imageUrl;
// // //      return img;
// // //  });
 
  
// //      function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
// //           const backgroundImageSize = {width:width,height:height}
// //           const backgroundWidth = backgroundImageSize.width;
// //           const backgroundHeight = backgroundImageSize.height;
      
// //           // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
// //           const backgroundAspectRatio = backgroundWidth / backgroundHeight;
// //           const stickerAspectRatio = stickerWidth / stickerHeight;
      
// //           let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
// //           if (stickerAspectRatio > backgroundAspectRatio) {
// //               newStickerWidth = backgroundWidth * (stickerWidth / 1200);
// //               newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
// //               newStickerX = stickerX * (backgroundWidth / 1200);
// //               newStickerY = stickerY * (backgroundWidth / 1200);
// //           } else { 
// //               newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
// //               newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
// //               newStickerY = stickerY * (backgroundHeight / 1000);
// //               newStickerX = stickerX * (backgroundHeight / 1000); 
// //           }
      
         
// //           return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
// //       }
// //       //세로로 긴거
// //      //  useEffect(() => {
// //      //      if (frameSize.width===""||frameSize.height==="")return
// //      //      const loadImages = () => {
// //      //          const tempImg = new Image();
// //      //          tempImg.crossOrigin = 'Anonymous';
// //      //          tempImg.src = 'http://118.33.212.138:8000/serve_photo/C:/Users/USER/Desktop/DeepSoft/Project/photo/photomong/photomong-91c0cb267c45754dd9ecf69fb185bbfa7edb188f/backend/media/uploads/2024-05-31-12-35-19.jpg'//'/temp.jpg'//TempSrc;
// //      //          setTempImage(tempImg);
// //      //          console.log("temp img", tempImg);
      
// //      //          if (backgroundList.length === 0 || !backgroundList[0]?.src) {
// //      //              const element = document.querySelector('.image');
// //      //              if (element) {
// //      //                  const targetWidth = frameSize.width//257.79;
// //      //                  const targetHeight = frameSize.height//384;
      
// //      //                  const loadedImages = myBackgrounds.map((imageUrl) => {
// //      //                      return new Promise((resolve, reject) => {
// //      //                          const img = new Image();
// //      //                          img.crossOrigin = 'Anonymous';
// //      //                          img.src = imageUrl;
      
// //      //                          img.onload = () => {
// //      //                              // Calculate the aspect ratio
// //      //                              const aspectRatio = img.width / img.height;
      
// //      //                              let width, height;
// //      //                              if (aspectRatio > 1) {
// //      //                                  // Landscape
// //      //                                  width = targetWidth;
// //      //                                  height = targetWidth / aspectRatio;
// //      //                              } else {
// //      //                                  // Portrait or square
// //      //                                  height = targetHeight;
// //      //                                  width = targetHeight * aspectRatio;
// //      //                              }
      
// //      //                              // Set width and height state
// //      //                              setWidth(width);
// //      //                              setHeight(height);
      
// //      //                              resolve({
// //      //                                  img,
// //      //                                  width,
// //      //                                  height
// //      //                              });
// //      //                          };
// //      //                          img.onerror = (err) => reject(err);
// //      //                      });
// //      //                  });
      
// //      //                  Promise.all(loadedImages)
// //      //                      .then((images) => {
// //      //                          // All images are loaded
// //      //                          console.log("백그라운드 이미지 세로가 긴거 사이즈", images[0])
// //      //                          setBackgroundList(images);
// //      //                      })
// //      //                      .catch((error) => {
// //      //                          console.error("Error loading images:", error);
// //      //                      });
                          
// //      //              }
// //      //          }
// //      //      };
      
// //      //      loadImages();
// //      //  }, [backgroundList, myBackgrounds]);
// //      const addEmojiSound='./add_emoji.wav'
// //      // const audioRef = useRef(null);
   
// //      useEffect(() => {
// //        //음성 재생
// //        const audio = new Audio(addEmojiSound); 
// //        audio.muted=true
// //        audio.play()
// //        audio.muted=false
   
// //      }, []);

// //      useEffect(() => {
// //           if (frameSize.width === "" || frameSize.height === "") return;
      
// //           const loadImages = () => {
// //               // selectedPhotos의 각 항목의 url을 사용하여 tempImg 리스트를 생성
             
      
// //               if (backgroundList.length === 0 || !backgroundList[0]?.src) {
// //                   const element = document.querySelector('.image');
// //                   if (element) {
// //                       const targetWidth = frameSize.width;
// //                       const targetHeight = frameSize.height;
      
// //                       const loadedImages = myBackgrounds.map((imageUrl) => {
// //                           return new Promise((resolve, reject) => {
// //                               const img = new Image();
// //                               img.crossOrigin = 'Anonymous';
// //                               img.src = imageUrl;
      
// //                               img.onload = () => {
// //                                   // Calculate the aspect ratio
// //                                   const aspectRatio = img.width / img.height;
      
// //                                   let width, height;
// //                                   if (aspectRatio > 1) {
// //                                       // Landscape
// //                                       width = targetWidth;
// //                                       height = targetWidth / aspectRatio;
// //                                   } else {
// //                                       // Portrait or square
// //                                       height = targetHeight;
// //                                       width = targetHeight * aspectRatio;
// //                                   }
      
// //                                   // Set width and height state
// //                                   setWidth(width);
// //                                   setHeight(height);
      
// //                                   resolve({
// //                                       img,
// //                                       width,
// //                                       height
// //                                   });
// //                               };
// //                               img.onerror = (err) => reject(err);
// //                           });
// //                       });
      
// //                       Promise.all(loadedImages)
// //                           .then((images) => {
// //                               // All images are loaded
// //                               setBackgroundList(images);
// //                           })
// //                           .catch((error) => {
// //                               console.error("Error loading images:", error);
// //                           });
// //                   }
// //               }
// //           };
      
// //           loadImages();
// //       }, [backgroundList, myBackgrounds]);
      
      
// //       //정사각형에 가까운거
 
// //       const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
// //           if (selectedFrame==="6-cutx2") {
// //                const calcedWidth=width/2 -22
// //                const calcedHeight=height/3 - 28
// //                const x11=17
// //                const x12=calcedWidth+x11+10
// //                const y1=18
// //                //
// //                const x21=20
// //                const x22=x12
// //                const y2=calcedHeight+y1+10 
// //                 //
// //                 const x31=20
// //                 const x32=x22
// //                 const y3=calcedHeight+y2+10 
// //                return   imgTag.length===0?<></>:   <>
// //                {/* 11 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x11}
// //                y={y1}
// //             image={imgTag[0]}
            
// //             />
// //           {/* 12 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x12}
// //                y={y1}
// //             image={imgTag[1]}
            
// //             />
// //              {/* 21 */}
// //              <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x21}
// //                y={y2}
// //             image={imgTag[2]}
            
// //             />
// //           {/* 22 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x22}
// //                y={y2}
// //             image={imgTag[3]}
            
// //             />
// //                {/* 31 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x31}
// //                y={y3}
// //             image={imgTag[4]}
            
// //             />
// //           {/* 32 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x32}
// //                y={y3}
// //             image={imgTag[5]}
            
// //             />
// //             </>  
// //           }
// //          else if (selectedFrame==="Stripx2") {
// //                const calcedWidth=width/2 - 18
// //                const calcedHeight=height/4 - 20
// //                //1 row
// //                const x11=8
// //                const x12=calcedWidth+x11+20
// //                const y1=22 
// //                //2 row
// //                const x21=x11
// //                const x22=x12
// //                const y2=calcedHeight+y1+8 
// //                 //3 row
// //                 const x31=x11
// //                 const x32=x22
// //                 const y3=calcedHeight+y2+8 
// //                              //4 row
// //                              const x41=x11
// //                              const x42=x32
// //                              const y4=calcedHeight+y3+6 
// //                return    imgTag.length===0?<></>:   <>
// //                {/* 11 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x11}
// //                y={y1}
// //             image={imgTag[0]}
            
// //             />
// //           {/* 12 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x12}
// //                y={y1}
// //             image={imgTag[1]}
            
// //             />
// //              {/* 21 */}
// //              <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x21}
// //                y={y2}
// //             image={imgTag[2]}
            
// //             />
// //           {/* 22 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x22}
// //                y={y2}
// //             image={imgTag[3]}
            
// //             />
// //                {/* 31 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x31}
// //                y={y3}
// //             image={imgTag[4]}
            
// //             />
// //           {/* 32 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x32}
// //                y={y3}
// //             image={imgTag[5]}
            
// //             />
// //               {/* 41 */}
// //               <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x41}
// //                y={y4}
// //             image={imgTag[6]}
            
// //             />
// //           {/* 42 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x42}
// //                y={y4}
// //             image={imgTag[7]}
            
// //             />
// //             </>  
// //           }
// //           else if(selectedFrame==="2cut-x2"){
// //                const calcedWidth=width/2 - 32
// //                const calcedHeight=height-90
// //                const x11=26
// //                const x12=calcedWidth+x11+14
// //                const y1=48
// //                //
// //                const x21=36
// //                const x22=x12
// //                const y2=calcedHeight+y1+10 
// //                 //
// //                 const x31=36
// //                 const x32=x22
// //                 const y3=calcedHeight+y2+10 
// //                return   imgTag.length===0?<></>:    <>
// //                {/* 11 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x11}
// //                y={y1}
// //             image={imgTag[0]}
            
// //             />
// //           {/* 12 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x12}
// //                y={y1}
// //             image={imgTag[1]}
            
// //             /></>
// //           }
// //           else if(selectedFrame==="4-cutx2"){
// //                const calcedWidth=width/2 - 70
// //                const calcedHeight=height/2 - 30
// //                //1 row
// //                const x11=62
// //                const x12=calcedWidth+x11+18
// //                const y1=25
// //                //2 row
// //                const x21=x11
// //                const x22=x12
// //                const y2=calcedHeight+y1+10
// //                 //
// //                 const x31=36
// //                 const x32=x22
// //                 const y3=calcedHeight+y2+10 
// //                return   imgTag.length===0?<></>:    <>
// //                {/* 11 */}
// //                <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x11}
// //                y={y1}
// //             image={imgTag[0]}
            
// //             />
// //           {/* 12 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x12}
// //                y={y1}
// //             image={imgTag[1]}
            
// //             />
// //             {/* 21 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x21}
// //                y={y2}
// //             image={imgTag[2]}
            
// //             />
// //           {/* 22 */}
// //             <KonvaImage
// //                width={calcedWidth}
// //                height={calcedHeight}
// //                x={x22}
// //                y={y2}
// //             image={imgTag[3]}
            
// //             />
// //             </>
// //           }
// //           else {
// //                 return        <></>
// //           }
         
// //       }
// //       //프레임 유형별로 stageWidth, height
// //       useEffect(()=>{
// // //ui 프레임 크기 조정
// // const smallRatio=0.8
// // const largeRatio=1.2
// // if (selectedFrame==="6-cutx2") {
     
// //      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// // } 
// // else if(selectedFrame==="Stripx2") {
// //      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// // }
// // else if(selectedFrame==="2cut-x2"){
    
// //         setFrameSize({width:576*smallRatio,height:384*smallRatio})
// // }
// // else{
// //      setFrameSize({width:576*smallRatio,height:384*smallRatio})
// // }
          
// //       },[
// //           selectedFrame
// //       ])
// //       const getKonvaClassName=(selectedFrame)=>{
// //           if (selectedFrame==="6-cutx2"||selectedFrame==="Stripx2") {
// //                return "konva-vertical-image"
// //           } else {
// //                return "konva-horizontal-image"
// //           }
// //       }
// //      //  386.68
// //      //  alert(selectedFrame)
// //      // if (tempImage!=undefined||tempImage.length!=0) {
// //      //      console.log("선택된것들>>>",tempImage)
// //      // }
// //      // 
// //      return (
// // <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
// //     <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
// //     <div className="left-sticker">
// //         <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
// //         <div className='v-carousel-container' ref={carouselRef}>
// //             <div className='v-carousel-images'>
// //                 {myBackgrounds.map((src, index) => (
// //                     <div className='image' style={{}}>
// //                         {/* ui용 */}
// //                         <Stage
// //                             width={frameSize.width} // Adjusted stage width
// //                             height={frameSize.height} // Adjusted stage height
// //                             scale={{ x: 1  , y: 1 }} // Ensure the scale is 1:1
// //                             onClick={handleCanvasClick}
// //                             onTap={handleCanvasClick}
// //                             className={getKonvaClassName(selectedFrame)}
// //                             onMouseDown={checkDeselect}
// //                             onTouchStart={checkDeselect}
// //                             ref={stageRefs[index]}
// //                         >
// //                             <Layer
// //                             scale={{ x:1, y:1 }}
// //                             >
// //                                 {backgroundList[bgIdx] && (
// //                                     <KonvaImage
// //                                     scale={{ x:1, y:1 }}
// //                                         image={backgroundList[bgIdx].img}
// //                                         width={frameSize.width} // Adjusted stage width
// //                                         height={frameSize.height} // Adjusted stage height
// //                                         x={(frameSize.width - backgroundList[bgIdx].width) / 2} // Center the image horizontally
// //                                         y={(frameSize.height - backgroundList[bgIdx].height) / 2} // Center the image vertically
// //                                     />
// //                                 )}
// //                                 {tempImage&&showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage)}
// //                                 {images[bgIdx] && images[bgIdx].map((image, i) => (
// //                                     <StickerItem
// //                                         isStickerDrag={stickerDrag}
// //                                         isSelected={isSel}
// //                                         setStickerDrag={setStickerDrag}
// //                                         onTransform={() => {}}
// //                                         onSelect={() => {
// //                                             setIsSel(p => !p);
// //                                         }}
// //                                         onDelete={() => {
// //                                             const newImages = [...images];
// //                                             newImages.splice(i, 1);
// //                                             setImages(newImages);
// //                                         }}
// //                                         onDragEnd={(event) => {
// //                                             image.x = event.target.x();
// //                                             image.y = event.target.y();
// //                                         }}
// //                                         onChange={(x, y, width, height) => {
// //                                         }}
// //                                         key={i}
// //                                         image={image}
// //                                         shapeProps={image}
// //                                     />
// //                                 ))}
// //                             </Layer>
// //                         </Stage>

// //                         {/* //프린트용 */}

// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     </div>

// //     <div className="middle-sticker"
// //         draggable={true}
// //         onDragStart={onDragStart}
// //         onDrag={() => {
// //         }}
// //         onDragEnd={onDragEnd}

// //         style={{
// //             backgroundImage: `url(${sticker_frame})`
// //         }}>
// //         {myStickers.map((group, index) => (
// //             <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
// //                 {group.map((mySticker, photoIndex) => (
// //                     <div
// //                         key={photoIndex}
// //                         className="sticker"
// //                         onClick={() => {
// //                             const element = document.querySelector('.image');
// //                             const width = element.offsetWidth; // 요소의 너비
// //                             const height = element.offsetHeight; // 요소의 높이  
// //                             addStickerToPanel({
// //                                 bgIdx: bgIdx,
// //                                 src: mySticker.photo,
// //                                 width: 100,
// //                                 ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200) // 스티커의 초기 위치와 크기를 지정
// //                             });
// //                         }}
// //                     >
// //                         <img className="sticker-image"
// //                             alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
// //                     </div>
// //                 ))}
// //             </div>
// //         ))}
// //     </div>
// //     <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
// //         <div className="sticker-category">
// //             <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
// //             <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
// //             <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
// //             <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
// //         </div>
// //         <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
// //     </div>
// // </div>
// //      );
// // }

// // export default Sticker;






// import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import i18n from '../translations/i18n';
// import "../css/Sticker.css";
// import frame from '../assets/Sticker/frame.png';
// import sticker_frame from '../assets/Sticker/sticker_frame.png';
// import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
// import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
// import Konva from 'konva';
// import useImage from 'use-image';
// import { StickerItem } from '../screens/StickerItem';
// import axios from 'axios';
// // import { Resizable } from 're-resizable';
// // Sticker
// import { stickers } from './stickers.data';

// // Go Back
// import goback_en from '../assets/Common/goback.png';
// import goback_en_hover from '../assets/Common/gobackhover.png';
// import goback_kr from '../assets/Common/kr/goback.png';
// import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
// import goback_vn from '../assets/Common/vn/goback.png';
// import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// // Background
// import background_en from '../assets/Sticker/BG.png';
// import background_kr from '../assets/Sticker/kr/BG.png';
// import background_vn from '../assets/Sticker/vn/BG.png';

// // Sticker
// import mood_en from '../assets/Sticker/mood.png';
// import mood_en_click from '../assets/Sticker/mood-click.png';
// import mood_kr from '../assets/Sticker/kr/mood-default.png';
// import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
// import mood_vn from '../assets/Sticker/vn/mood-default.png';
// import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

// import lovely_en from '../assets/Sticker/lovely.png';
// import lovely_en_click from '../assets/Sticker/lovely-click.png';
// import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
// import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
// import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
// import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

// import cartoon_en from '../assets/Sticker/cartoon.png';
// import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
// import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
// import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
// import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
// import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

// import y2k_en from '../assets/Sticker/y2k.png';
// import y2k_en_click from '../assets/Sticker/y2k-click.png';
// import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
// import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
// import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
// import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

// import print from '../assets/Sticker/print.png';
// import print_click from '../assets/Sticker/print_click.png';
// import print_kr from '../assets/Sticker/kr/print-default.png';
// import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
// import print_vn from '../assets/Sticker/vn/print-default.png';
// import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
// //frame나오는 공간
// import frame_box from '../assets/Sticker/frame_box.png';
// import CustomCarousel from '../components/CustomCarousel';
// import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
// import { originAxiosInstance } from '../api/config';
// function Sticker() {
//      const { t } = useTranslation();
//      const navigate = useNavigate();
//      const [src, setSrc] = useState(null)
//      const [hoveredImage, setHoveredImage] = useState(null);
//      const [selectedLayout, setSelectedLayout] = useState(null);
//      const [selectedPhotos, setSelectedPhotos] = useState([]);
//      const [filterEffect, setFilterEffect] = useState(null);
//      const [myBackgrounds, setMyBackgrounds] = useState([]);
//      const bgLength=myBackgrounds.length
//      const [selectedFrame, setSelectedFrame] = useState(null);
//      const [images, setImages] = useState([]);
//      const [selectedId, selectShape] = useState(null);
//      const [clickPrint, setClickPrint] = useState(false);
//      const [orderCode, setOrderCode] = useState(null);
//      const [language, setLanguage] = useState('en');

//      const [backgroundImage, setBackgroundImage] = useState(background_en);
//      //스크롤 인덱스
//      const [scrollIdx, setScrollIdx] = useState(0)
//      const [dragStartY, setDragStartY] = useState(0);
//      const [bgIdx,setBgIdx]=useState(0)
//      const [stickerImgs,setStickerImgs]=useState([])
//      // Sticker
//      const [isSel,setIsSel]=useState(false)
//      const [mood, setMood] = useState(null);
//      const [lovely, setLovely] = useState(null);
//      const [cartoon, setCartoon] = useState(null);
//      const [y2k, setY2k] = useState(null);
//      const [printButton, setPrintButton] = useState(null);

//      const [goBackButton, setGoBackButton] = useState(goback_en);
//      const [clickedButton, setClickedButton] = useState(false);
//      const [stickerDrag,setStickerDrag]=useState(false)
// const [photos,setPhotos]=useState([])
// const [selectedItems,setSelectedItems]=useState([])
// const [width,setWidth]=useState(0)
// const [height,setHeight]=useState(0)
//      const background = new Image();
//      background.crossOrigin = 'Anonymous';
//      background.src = sessionStorage.getItem('downloaded-image');
//      const [selectedCategory, setSelectedCategory] = useState('MOOD');
//      const [backgroundList,setBackgroundList]=useState([])
//      const [tempImage,setTempImage]=useState()
//      // const stageRef = useRef(null);
//      const [stageRefs,setStageRefs]=useState([])
//      const [frameSize,setFrameSize]=useState({
//           width:"",
//           height:""
//      })
//      const chunkArray = (arr, size) => {
//           return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
//      };

// useEffect(()=>{
//      const photos = JSON.parse(sessionStorage.getItem('photos'));
// if (photos===null)return;
//      setPhotos(photos)
// },[])
// useEffect(()=>{
//      if (!photos)return;
//      const selItems = photos.filter((item, index) => selectedPhotos.includes(index));

//      setSelectedItems(selItems)
// },[photos])
//      useEffect(() => {  
//           if (!backgroundList.length===0) {
//                backgroundList[0].src = sessionStorage.getItem('downloaded-image');
//                window.location.reload();
//           }
//      }, []);

//      useEffect(() => {
//           const storedLanguage = sessionStorage.getItem('language');
//           if (storedLanguage) {
//                setLanguage(storedLanguage);
//                if (storedLanguage === 'en') {
//                     setBackgroundImage(background_en);
//                     setMood(mood_en);
//                     setLovely(lovely_en);
//                     setCartoon(cartoon_en);
//                     setY2k(y2k_en);
//                     setPrintButton(print);
//                     setGoBackButton(goback_en);
//                } else if (storedLanguage === 'ko') {
//                     setBackgroundImage(background_kr);
//                     setMood(mood_kr);
//                     setLovely(lovely_kr);
//                     setCartoon(cartoon_kr);
//                     setY2k(y2k_kr);
//                     setPrintButton(print_kr);
//                     setGoBackButton(goback_kr);
//                } else if (storedLanguage === 'vi') {
//                     setBackgroundImage(background_vn);
//                     setMood(mood_vn);
//                     setLovely(lovely_vn);
//                     setCartoon(cartoon_vn);
//                     setY2k(y2k_vn);
//                     setPrintButton(print_vn);
//                     setGoBackButton(goback_vn);
//                }
//           }

//           // get session storage selectedLayout
//           const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
//           if (sessionSelectedLayout) {
//                const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

//                setSelectedLayout(parsedSelectedLayout.photo_cover);
//                // setMyBackground(parsedSelectedLayout.photo);
//                setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

//                const imgs=[]
//           for (let i = 0; i < parsedSelectedLayout.length; i++) {
//              imgs.push([])
               
//           }
//           setImages(imgs)
//           setStickerImgs(imgs)
//                // setStageRefs()
//                setImages(parsedSelectedLayout.map(b=>[]))
//                // background.src=parsedSelectedLayout.photo_full
//                // setSrc(parsedSelectedLayout.photo_full)
//           }

//           // Retrieve selected photos from session storage
//           const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
//           if (storedSelectedPhotos) {

//                setSelectedPhotos(storedSelectedPhotos);
//           }

//           // Filter
//           const filterSession = sessionStorage.getItem('filter');
//           if (filterSession) {
//                setFilterEffect(filterSession);
//           }

//           // Retrieve selected frame from session storage
//           const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
//           if (storedSelectedFrame) {

//                setSelectedFrame(storedSelectedFrame.frame);
//           }
//      }, []);

//      const handleMouseEnter = (image) => {
//           setHoveredImage(image);
//      }

//      const handleMouseLeave = () => {
//           setHoveredImage(null);
//      }

//      const displayClassNameForBackground = () => {
//           if (selectedFrame == '2cut-x2') {
//                return 'left-choose-photos-2cut';
//           } else if (selectedFrame == '4-cutx2') {
//                return 'left-choose-photos-4cut';
//           } else if (selectedFrame == '5-cutx2') {
//                return 'left-choose-photos-5cut';
//           } else {
//                return 'left-choose-photos';
//           }
//      }

//      const getImageStyle = () => {
//           return filterEffect;
//      }

//      const displayClassNameForLayout = () => {
//           if (selectedFrame == '2cut-x2') {
//                return 'left-choose-container-2cut';
//           } else if (selectedFrame == '4-cutx2') {
//                return 'left-choose-container-4cut';
//           } else if (selectedFrame == '5-cutx2') {
//                return 'left-choose-container';
//           } else {
//                return 'left-choose-container';
//           }
//      }

//      const displayClassNameForPhoto = (rowIndex, photoIndex) => {
//           if (selectedFrame === 'Stripx2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item-0-1';
//                } else if (rowIndex === 1 && photoIndex === 0) {
//                     return 'choose-photo-item-1-0';
//                } else if (rowIndex === 1 && photoIndex === 1) {
//                     return 'choose-photo-item-1-1';
//                } else if (rowIndex === 2 && photoIndex === 0) {
//                     return 'choose-photo-item-2-0';
//                } else if (rowIndex === 2 && photoIndex === 1) {
//                     return 'choose-photo-item-2-1';
//                } else if (rowIndex === 3 && photoIndex === 0) {
//                     return 'choose-photo-item-3-0';
//                } else if (rowIndex === 3 && photoIndex === 1) {
//                     return 'choose-photo-item-3-1';
//                }
//           } else if (selectedFrame === '6-cutx2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item6-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item6-0-1';
//                } else if (rowIndex === 1 && photoIndex === 0) {
//                     return 'choose-photo-item6-1-0';
//                } else if (rowIndex === 1 && photoIndex === 1) {
//                     return 'choose-photo-item6-1-1';
//                } else if (rowIndex === 2 && photoIndex === 0) {
//                     return 'choose-photo-item6-2-0';
//                } else if (rowIndex === 2 && photoIndex === 1) {
//                     return 'choose-photo-item6-2-1';
//                }
//           } else if (selectedFrame === '2cut-x2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item-2cut-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item-2cut-0-1';
//                }
//           } else if (selectedFrame === '3-cutx2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item-3cut-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item-3cut-0-1';
//                } else if (rowIndex === 1 && photoIndex === 0) {
//                     return 'choose-photo-item-3cut-0-1';
//                }
//           } else if (selectedFrame === '4-cutx2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item-4cut-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item-4cut-0-1';
//                } else if (rowIndex === 1 && photoIndex === 0) {
//                     return 'choose-photo-item-4cut-1-0';
//                } else if (rowIndex === 1 && photoIndex === 1) {
//                     return 'choose-photo-item-4cut-1-1';
//                }
//           } else if (selectedFrame === '5-cutx2') {
//                if (rowIndex === 0 && photoIndex === 0) {
//                     return 'choose-photo-item-5cut-0-0';
//                } else if (rowIndex === 0 && photoIndex === 1) {
//                     return 'choose-photo-item-5cut-0-1';
//                } else if (rowIndex === 1 && photoIndex === 0) {
//                     return 'choose-photo-item-5cut-1-0';
//                } else if (rowIndex === 1 && photoIndex === 1) {
//                     return 'choose-photo-item-5cut-1-1';
//                }
//           }
//           return 'choose-photo-item';
//      }
//      const applyContrastFilter = (data, value) => {
//           const factor = (259 * (value + 255)) / (255 * (259 - value));
//           for (let i = 0; i < data.length; i += 4) {
//             data[i] = truncate(factor * (data[i] - 128) + 128);
//             data[i + 1] = truncate(factor * (data[i + 1] - 128) + 128);
//             data[i + 2] = truncate(factor * (data[i + 2] - 128) + 128);
//           }
//         };
      
//         const truncate = (value) => {
//           return Math.min(255, Math.max(0, value));
//         };
//      const applyStyles = (img, styles) => {
//           Object.assign(img, styles);
//         };
//         const applyFilters = (img, filters) => {
//           const canvas = document.createElement('canvas');
//           const context = canvas.getContext('2d');
//           canvas.width = img.width;
//           canvas.height = img.height;
//           context.drawImage(img, 0, 0, img.width, img.height);
//           const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
//           const data = imageData.data;
      
//           filters.split(' ').forEach(filter => {
//             const [name, value] = filter.replace(')', '').split('(');
//             const floatValue = parseFloat(value);
      
//             switch (name) {
//               case 'grayscale':
//                 applyGrayscaleFilter(data, floatValue);
//                 break;
//               case 'sepia':
//                 applySepiaFilter(data, floatValue);
//                 break;
//               case 'opacity':
//                 applyOpacityFilter(data, floatValue);
//                 break;
//               case 'saturate':
//                 applySaturateFilter(data, floatValue);
//                 break;
//               case 'contrast':
//                 applyContrastFilter(data, floatValue);
//                 break;
//               default:
//                 break;
//             }
//           });
      
//           context.putImageData(imageData, 0, 0);
//           const newImage = new window.Image();
//           newImage.src = canvas.toDataURL();
//           return newImage;
//         };
//         const applyGrayscaleFilter = (data, value) => {
//           for (let i = 0; i < data.length; i += 4) {
//             const avg = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
//             data[i] = data[i] * (1 - value) + avg * value;
//             data[i + 1] = data[i + 1] * (1 - value) + avg * value;
//             data[i + 2] = data[i + 2] * (1 - value) + avg * value;
//           }
//         };
      
//         const applySepiaFilter = (data, value) => {
//           for (let i = 0; i < data.length; i += 4) {
//             const r = data[i];
//             const g = data[i + 1];
//             const b = data[i + 2];
//             data[i] = r * (1 - value) + (r * 0.393 + g * 0.769 + b * 0.189) * value;
//             data[i + 1] = g * (1 - value) + (r * 0.349 + g * 0.686 + b * 0.168) * value;
//             data[i + 2] = b * (1 - value) + (r * 0.272 + g * 0.534 + b * 0.131) * value;
//           }
//         };
      
//         const applyOpacityFilter = (data, value) => {
//           for (let i = 3; i < data.length; i += 4) {
//             data[i] = data[i] * value;
//           }
//         };
      
//         const applySaturateFilter = (data, value) => {
//           for (let i = 0; i < data.length; i += 4) {
//             const r = data[i];
//             const g = data[i + 1];
//             const b = data[i + 2];
//             const gray = 0.299 * r + 0.587 * g + 0.114 * b;
//             data[i] = gray * (1 - value) + r * value;
//             data[i + 1] = gray * (1 - value) + g * value;
//             data[i + 2] = gray * (1 - value) + b * value;
//           }
//         };
//      const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
      
//           const item = {
//               width,
//               x,
//               y,
//               src,
//               resetButtonRef: createRef()
//           };
      
//           setImages((currentImages) => {
//               const newImages = currentImages.map((subList, index) => {
//                   if (index === bgIdx) {
//                       return [...subList, item];
//                   }
//                   return subList;
//               });
      
//               return newImages;
//           });
//       };

//      const resetAllButtons = useCallback(() => {
//           images.forEach((subList) => {
//               subList.forEach((image) => {
//                   if (image.resetButtonRef.current) {
//                       image.resetButtonRef.current();
//                   }
//               });
//           });
//       }, [images]);
      
//       const handleCanvasClick = useCallback(
//           (event) => {
//               if (event.target.attrs.id === "backgroundImage") {
//                   resetAllButtons();
//               }
//           },
//           [resetAllButtons]
//       );

//      const checkDeselect = (e) => {
//           const clickedOnEmpty = e.target === e.target.getStage();
//           if (clickedOnEmpty) {
//                selectShape(null);
//           }
//      }

//      const filterStickerByCategory = (category) => {
//           setSelectedCategory(category);
//      }

//      const printFrameWithSticker = async(event,) => {
//           if (clickPrint == true) {
//                return;
//           }
//           setClickPrint(true);

//            callPrinter();
//           uploadCloud();

//           setTimeout(() => {
//                navigate("/print");
//           }, 3000);
//      }
//      function rotateImageDataURL(dataURL, degrees) {
//           return new Promise((resolve, reject) => {
//               const image = new Image();
//               image.onload = () => {
//                   const canvas = document.createElement('canvas');
//                   const ctx = canvas.getContext('2d');
//                   const { width, height } = image;
      
//                   // Canvas 크기를 이미지 크기와 동일하게 설정
//                   canvas.width = width;
//                   canvas.height =height ;
      
//                   // 이미지를 회전시키고 Canvas에 그리기
//                   ctx.translate(height / 2, width / 2);
//                   ctx.rotate(degrees * Math.PI / 180);
//                   ctx.drawImage(image, -width / 2, -height / 2);
      
//                   // 회전된 이미지를 Data URL로 변환하여 반환
//                   resolve(canvas.toDataURL());
//               };
//               image.onerror = reject;
//               image.src = dataURL;
//           });
//       }
//      // function rotateImageDataURL(dataURL, degrees) {
//      //      return new Promise((resolve, reject) => {
//      //          const image = new Image();
//      //          image.onload = () => {
//      //              const canvas = document.createElement('canvas');
//      //              const ctx = canvas.getContext('2d');
//      //              const { width, height } = image;
      
//      //              // 회전 각도가 90도 또는 270도인 경우, 캔버스 크기를 바꿔야 함
//      //              if (degrees === 90 || degrees === 270) {
//      //                  canvas.width = height;
//      //                  canvas.height = width;
//      //              } else {
//      //                  canvas.width = width;
//      //                  canvas.height = height;
//      //              }
      
//      //              // 캔버스 중심을 기준으로 회전
//      //              ctx.translate(canvas.width / 2, canvas.height / 2);
//      //              ctx.rotate(degrees * Math.PI / 180);
      
//      //              // 이미지를 그릴 때 원래의 중심 위치로 이동하여 그리기
//      //              ctx.drawImage(image, -width / 2, -height / 2);
      
//      //              // 회전된 이미지를 Data URL로 변환하여 반환
//      //              resolve(canvas.toDataURL());
//      //          };
//      //          image.onerror = reject;
//      //          image.src = dataURL;
//      //      });
//      //  }
      
//      const uploadCloud = () => {
//           try {
//                // for (let i = 0; i < stageRefs.length; i++) {
//                     // for (let i = 0; i < 1; i++) {
//                          const stageRef = stageRefs[bgIdx];
//                     const originalDataURL = stageRef.current.toDataURL();
//                     let rotated=null
//                     rotateImageDataURL(originalDataURL, 90)
//                     .then(rotatedDataURL => {
//                         // 회전된 이미지의 Data URL을 사용하여 다른 작업을 수행합니다.
//                     //     rotated=rotatedDataURL
//                         const formData = new FormData();
//                         //   formData.append("photo", stageRef.current.toDataURL());
//                           formData.append("photo", originalDataURL);
//                           formData.append("order_code", sessionStorage.getItem('orderCodeNum'));
    
//                    originAxiosInstance.post(
//                         `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
//                         formData,
//                         {
//                              headers: {
//                                   'Content-Type': 'multipart/form-data'
//                              }
//                         })
//                         .then(response => {
//                              const data = response.data;
//                              if (data.photo_url) {
//                                   sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
//                              }
//                         })
//                         .catch(error => {
//                              console.log(error);
//                              alert("업로드 에러")
//                         });
//                         // 이제 rotatedDataURL을 사용하여 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
//                     })
//                     .catch(error => {
//                         console.error('이미지 회전 중 오류 발생:', error);
//                     });
                    
//                // }
             
//           } catch (error) {
//                console.log(error);
//           }
//      }
//      const callPrinter = async() => {
//           alert("callPrinter");
//           // for (let i = 0; i < stageRefs.length; i++) {
//               const stageRef = stageRefs[bgIdx];
//               if (!stageRef.current) {
//                   alert("stageRef.current is null");
//                   return;
//               }
      
//               const originalDataURL = stageRef.current.toDataURL();
//               const formData = new FormData(); 
//               formData.append("photo", originalDataURL);
//               formData.append("frame", selectedFrame);
              
              
//               originAxiosInstance.post(
//                   `${process.env.REACT_APP_BACKEND}/frames/api/print`,
//                   formData,
//                   {
//                       headers: {
//                           'Content-Type': 'multipart/form-data'
//                       }
//                   }
//               )
//               .then(response => {
//                   console.log('print response', response);
//               })
//               .catch(error => {
//                   console.log(error);
//               });
  

             
//           // }
          
//       }
      

//      const hoverGoBackButton = () => {
//           if (language == 'en') {
//                setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
//           } else if (language == 'vi') {
//                setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
//           } else if (language == 'ko') {
//                setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
//           }
//      }

//      const hoverStickerButton = (stickerEffect) => {
//           if (stickerEffect == 'mood') {
//                if (language == 'en') {
//                     setMood(mood == mood_en_click ? mood_en : mood_en_click);
//                } else if (language == 'vi') {
//                     setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
//                } else if (language == 'ko') {
//                     setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
//                }
//           } else if (stickerEffect == 'lovely') {
//                if (language == 'en') {
//                     setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
//                } else if (language == 'vi') {
//                     setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
//                } else if (language == 'ko') {
//                     setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
//                }
//           } else if (stickerEffect == 'cartoon') {
//                if (language == 'en') {
//                     setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
//                } else if (language == 'vi') {
//                     setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
//                } else if (language == 'ko') {
//                     setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
//                }
//           } else if (stickerEffect == 'y2k') {
//                if (language == 'en') {
//                     setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
//                } else if (language == 'vi') {
//                     setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
//                } else if (language == 'ko') {
//                     setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
//                }
//           }
//      }

//      const hoverPrintButton = () => {
//           if (language == 'en') {
//                setPrintButton(printButton == print_click ? print : print_click);
//           } else if (language == 'vi') {
//                setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
//           } else if (language == 'ko') {
//                setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
//           }
//      }

//      // Chunk the selected photos array into arrays of 2 photos each
//      const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
//      const selectedPhotoRows = chunkArray(selectedPhotos, 2);
//      //스크롤 하면 인덱스에 따라 스티커 타입 정하기
//      const myStickers = chunkArray(stickersData, 4);
//      // console.log("프레임 백그라운드",myBackground)
//      //크기 리사이징 예제코드
//      const [isDragging, setIsDragging] = useState(false);
//      const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
//      const [radius, setRadius] = useState(50); // 초기 반지름

//      const handleMouseDown = (e) => {
//           setIsDragging(true);
//      };

//      const handleMouseUp = () => {
//           setIsDragging(false);
//      };

//      const handleMouseMove = (e) => {
//           if (!isDragging) return;

//           const newPosition = {
//                x: e.clientX,
//                y: e.clientY
//           };
//           setPosition(newPosition);
//      };

//      const handleMouseLeave2 = () => {
//           setIsDragging(false);
//      };

//      const handleMouseWheel = (e) => {
//           if (e.deltaY > 0) {
//                setRadius(radius - 5);
//           } else {
//                setRadius(radius + 5);
//           }
//      };
//      const onDragStart = (event) => {
//           setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
//       };

//      const onDragEnd = (event) => {
//           const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
//           if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
//               setScrollIdx(prevIdx => (prevIdx + 1) % 4);
//               const nextScrollIdx = (scrollIdx + 1) % 4;
//               if (nextScrollIdx === 0) {
//                   setSelectedCategory("MOOD");
//               }
//               else if (nextScrollIdx === 1) {
//                   setSelectedCategory("LOVELY");
//               }
//               else if (nextScrollIdx === 2) {
//                   setSelectedCategory("CARTOON");
//               }
//               else if (nextScrollIdx === 3) {
//                   setSelectedCategory("Y2K");
//               }
//           }
//       };
//       const carouselRef = useRef(null);
//       const [isDown, setIsDown] = useState(false);
//       const [startY, setStartY] = useState(0);
//       const [scrollTop, setScrollTop] = useState(0);
  
//       useEffect(() => {
//           const carousel = carouselRef.current;
//   const dragging=stickerDrag
//           const handleMouseDown = (e) => {
//                // if (dragging)return
//               setIsDown(true);
//               if (carousel) {
//                if (stickerDrag)return
//                   setStartY(e.pageY - carousel.offsetTop);
//                   setScrollTop(carousel.scrollTop);
//               }
//           };
  
//           const handleMouseLeave = () => {
//                // if (stickerDrag)return
//               setIsDown(false);
//           };
  
//           const handleMouseUp = () => {
//                // if (stickerDrag)return
//               setIsDown(false);
//               snapToClosestItem();
//           };
  
//           const handleMouseMove = (e) => {
//                // return;
//                // if (stickerMoving)return;
//                if (dragging)return
              
//               if (!isDown) return;
//               e.preventDefault();
//               if (carousel) { 
       
//                   const y = e.pageY - carousel.offsetTop;
//                   const walk = (y - startY) * 3; // Scroll speed
//                   carousel.scrollTop = scrollTop - walk;
//               }
//           };
  
//           const snapToClosestItem = () => {
//               if (!carousel) return;
//               const itemHeight = carousel.querySelector('.image').offsetHeight;
//               const scrollY = carousel.scrollTop;
//               const index = Math.round(scrollY / itemHeight);  
//                     setBgIdx(index)
//               carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
//           };
  
//           if (carousel) {
//               carousel.addEventListener('mousedown', handleMouseDown);
//               carousel.addEventListener('mouseleave', handleMouseLeave);
//               carousel.addEventListener('mouseup', handleMouseUp);
//               carousel.addEventListener('mousemove', handleMouseMove);
//           }
  
//           return () => {
//               if (carousel) {
//                   carousel.removeEventListener('mousedown', handleMouseDown);
//                   carousel.removeEventListener('mouseleave', handleMouseLeave);
//                   carousel.removeEventListener('mouseup', handleMouseUp);
//                   carousel.removeEventListener('mousemove', handleMouseMove);
//               }
//           };
//       }, [isDown, startY, scrollTop,stickerDrag]);
    
//      useEffect(() => {
//   // add or remove refs

//   setStageRefs((refs) =>
//     Array(bgLength)
//       .fill()
//       .map((_, i) => refs[i] || createRef()),
//   );


// }, [bgLength]);  


// // 선택된 아이템을 가지고 있는 리스트
// // const backgroundList = myBackgrounds.map((imageUrl) => {
// //      const img = new Image();
// //      img.crossOrigin = 'Anonymous';
// //      img.src = imageUrl;
// //      return img;
// //  });
 
//      const getImgListLayout=(selectedFrame,selectedItems)=>{
//         if (selectedItems.length===0) {
          
//           return <></>
//         }
//           if (selectedFrame==="Stripx2") { 
//                return <div
//                className='selected-photos-s2-list'
               
//                >
//                     {/* 1 row */}
//                      <div
//                  className='selected-photos-s2-row'
//                    ><img
// className='stripx2img'
//                    src={selectedItems[0].url}
//                    />
//                    <img
// className='stripx2img'
//                    src={selectedItems[1].url}
//                    /></div>
//                    {/* 2 row */}
//                    <div
//                   className='selected-photos-s2-row'
//                  ><img
// className='stripx2img'
//                  src={selectedItems[2].url}
//                  />
//                  <img
// className='stripx2img'
//                  src={selectedItems[3].url}
//                  /></div>
//                   {/* 3 row */}
//                   <div
//                   className='selected-photos-s2-row'
//                  ><img
// className='stripx2img'
//                  src={selectedItems[4].url}
//                  />
//                  <img
// className='stripx2img'
//                  src={selectedItems[5].url}
//                  /></div>
//                   {/* 4 row */}
//                   <div
//                   className='selected-photos-s2-row'
//                  ><img
// className='stripx2img'
//                  src={selectedItems[6].url}
//                  />
//                  <img
// className='stripx2img'
//                  src={selectedItems[7].url}
//                  /></div>
//                </div>
//           }
//           else if(selectedFrame==="2cut-x2"){
// return <div
// className='selected-photos-2-list'

// >
//     {selectedItems.map((it,idx)=>
//     idx===0?<div
//     className='selected-photo-2-container-first'
//     ><div
//      className='selected-photo-2'
//        style={{
          
//           backgroundImage: `url(${it.url})`
//       }}
//      /></div>:
//     <div
//     className='selected-photo-2-container'
//     ><div
//      className='selected-photo-2'
//        style={{
          
//           backgroundImage: `url(${it.url})`
//       }}
//      /></div>
//     )} 
// </div>

//           }
//           else if(selectedFrame==="4-cutx2"){
//                return <div
//                className='cut4x2-container'
//                >
// <img
// className='cut4x2-0'
// src={selectedItems[0].url}
// />
// <img
// className='cut4x2-1'
// src={selectedItems[1].url}
// />
// <img
// className='cut4x2-2'
// src={selectedItems[2].url}
// />
// <img
// className='cut4x2-3'
// src={selectedItems[3].url}
// />

//                </div>
               
               
//           }
//           else if(selectedFrame==="6-cutx2"){
//                return <div
//                className='cut6x2-container'>
//                     {/* 1 row */}
//                     <div
//                     className='cut6x2-row'
//                     ><img
//                     className='cut6x2-img'
//                     src={selectedItems[0].url}
//                     />
//                          <img
//                          className='cut6x2-img'
//                     src={selectedItems[1].url}
//                     />
//                     </div>
//                      {/* 2 row */}
//                      <div
//                     className='cut6x2-row'
//                     ><img
//                     className='cut6x2-img'
//                     src={selectedItems[2].url}
//                     />
//                          <img
//                          className='cut6x2-img'
//                     src={selectedItems[3].url}
//                     />
//                     </div>
//                     {/* 3 row */}
//                     <div
//                     className='cut6x2-row'
//                     ><img
//                     className='cut6x2-img'
//                     src={selectedItems[4].url}
//                     />
//                          <img
//                          className='cut6x2-img'
//                     src={selectedItems[5].url}
//                     />
//                     </div>
//                </div>
//           }
//           else{

//           }
//      }
//      function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
//           const backgroundImageSize = {width:width,height:height}
//           const backgroundWidth = backgroundImageSize.width;
//           const backgroundHeight = backgroundImageSize.height;
      
//           // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
//           const backgroundAspectRatio = backgroundWidth / backgroundHeight;
//           const stickerAspectRatio = stickerWidth / stickerHeight;
      
//           let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
//           if (stickerAspectRatio > backgroundAspectRatio) {
//               newStickerWidth = backgroundWidth * (stickerWidth / 1200);
//               newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
//               newStickerX = stickerX * (backgroundWidth / 1200);
//               newStickerY = stickerY * (backgroundWidth / 1200);
//           } else { 
//               newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
//               newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
//               newStickerY = stickerY * (backgroundHeight / 1000);
//               newStickerX = stickerX * (backgroundHeight / 1000); 
//           }
      
         
//           return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
//       }
//       const loadImage = (src) => {
//           return new Promise((resolve) => {
//             const img = new window.Image();
//             img.crossOrigin = 'Anonymous';
//             img.src = src;
//             img.onload = () => resolve(img);
//           });
//         };
//         const getImageStyleObj = () => {
//           // return '';
//           if (filterEffect == null) {
//                return '';
//           }
//           const parsed=JSON.parse(filterEffect)
//           const filters = parsed.map(option => {
//                return `${option.property}(${option.value}${option.unit})`;
//           })
//           return filters.join(' ')
//      }
//       //세로로 긴거
//       useEffect(() => {
//           if (frameSize.width===""||frameSize.height==="")return
//           const loadImages = () => {
//                const selItems = photos.filter((item, index) => selectedPhotos.includes(index));
         
//                      const tempImgs = selItems.map(photo => {
//                          const tempImg = new Image();
//                          tempImg.crossOrigin = 'Anonymous';
//                          tempImg.src = photo.url;
//                          applyStyles(tempImg, {width: 800,height: 800,filter:photo.filter});
//                             return tempImg;
//                      });
//                     //  for (let i = 0; i < tempImgs.length; i++) {
//                     //      const item = tempImgs[i];
//                     //      console.log("item>>>",item)
                         
//                     //      applyStyles(item, {width: 800,height: 800,filter: getImageStyleObj()});
//                     //  }
               
//                      // tempImg 리스트를 setTempImage에 넣음
//                      setTempImage(tempImgs);
      
//               if (backgroundList.length === 0 || !backgroundList[0]?.src) {
//                   const element = document.querySelector('.image');
//                   if (element) {
//                       const targetWidth = frameSize.width//257.79;
//                       const targetHeight = frameSize.height//384;
      
//                       const loadedImages = myBackgrounds.map((imageUrl) => {
//                           return new Promise((resolve, reject) => {
//                               const img = new Image();
//                               img.crossOrigin = 'Anonymous';
//                               img.src = imageUrl;
      
//                               img.onload = () => {
//                                   // Calculate the aspect ratio
//                                   const aspectRatio = img.width / img.height;
      
//                                   let width, height;
//                                   if (aspectRatio > 1) {
//                                       // Landscape
//                                       width = targetWidth;
//                                       height = targetWidth / aspectRatio;
//                                   } else {
//                                       // Portrait or square
//                                       height = targetHeight;
//                                       width = targetHeight * aspectRatio;
//                                   }
      
//                                   // Set width and height state
//                                   setWidth(width);
//                                   setHeight(height);
      
//                                   resolve({
//                                       img,
//                                       width,
//                                       height
//                                   });
//                               };
//                               img.onerror = (err) => reject(err);
//                           });
//                       });
      
//                       Promise.all(loadedImages)
//                           .then((images) => {
//                               // All images are loaded
//                               setBackgroundList(images);
//                           })
//                           .catch((error) => {
//                               console.error("Error loading images:", error);
//                           });
//                   }
//               }
//           };
      
//           loadImages();
//       }, [backgroundList, myBackgrounds,filterEffect]);
//       //정사각형에 가까운거
 
//       const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
//           if (selectedFrame==="6-cutx2") {
//                const calcedWidth=width/2 -22
//                const calcedHeight=height/3 - 28
//                const x11=17
//                const x12=calcedWidth+x11+10
//                const y1=18
//                //
//                const x21=20
//                const x22=x12
//                const y2=calcedHeight+y1+10 
//                 //
//                 const x31=20
//                 const x32=x22
//                 const y3=calcedHeight+y2+10 
//                return   imgTag.length===0?<></>:   <>
//                {/* 11 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x11}
//                y={y1}
//             image={imgTag[0]}
            
//             />
//           {/* 12 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x12}
//                y={y1}
//             image={imgTag[1]}
            
//             />
//              {/* 21 */}
//              <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x21}
//                y={y2}
//             image={imgTag[2]}
            
//             />
//           {/* 22 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x22}
//                y={y2}
//             image={imgTag[3]}
            
//             />
//                {/* 31 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x31}
//                y={y3}
//             image={imgTag[4]}
            
//             />
//           {/* 32 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x32}
//                y={y3}
//             image={imgTag[5]}
            
//             />
//             </>  
//           }
//          else if (selectedFrame==="Stripx2") {
//                const calcedWidth=width/2 - 18
//                const calcedHeight=height/4 - 20
//                //1 row
//                const x11=8
//                const x12=calcedWidth+x11+20
//                const y1=22 
//                //2 row
//                const x21=x11
//                const x22=x12
//                const y2=calcedHeight+y1+8 
//                 //3 row
//                 const x31=x11
//                 const x32=x22
//                 const y3=calcedHeight+y2+8 
//                              //4 row
//                              const x41=x11
//                              const x42=x32
//                              const y4=calcedHeight+y3+6 
//                return    imgTag.length===0?<></>:   <>
//                {/* 11 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x11}
//                y={y1}
//             image={imgTag[0]}
            
//             />
//           {/* 12 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x12}
//                y={y1}
//             image={imgTag[1]}
            
//             />
//              {/* 21 */}
//              <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x21}
//                y={y2}
//             image={imgTag[2]}
            
//             />
//           {/* 22 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x22}
//                y={y2}
//             image={imgTag[3]}
            
//             />
//                {/* 31 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x31}
//                y={y3}
//             image={imgTag[4]}
            
//             />
//           {/* 32 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x32}
//                y={y3}
//             image={imgTag[5]}
            
//             />
//               {/* 41 */}
//               <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x41}
//                y={y4}
//             image={imgTag[6]}
            
//             />
//           {/* 42 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x42}
//                y={y4}
//             image={imgTag[7]}
            
//             />
//             </>  
//           }
//           else if(selectedFrame==="2cut-x2"){
//                const calcedWidth=width/2 - 32
//                const calcedHeight=height-90
//                const x11=26
//                const x12=calcedWidth+x11+14
//                const y1=48
//                //
//                const x21=36
//                const x22=x12
//                const y2=calcedHeight+y1+10 
//                 //
//                 const x31=36
//                 const x32=x22
//                 const y3=calcedHeight+y2+10 
//                return   imgTag.length===0?<></>:    <>
//                {/* 11 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x11}
//                y={y1}
//             image={applyFilters(imgTag[0], imgTag[0].filter)}
            
//             />
//           {/* 12 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x12}
//                y={y1}
//                image={applyFilters(imgTag[1], imgTag[1].filter)}
            
//             /></>
//           }
//           else if(selectedFrame==="4-cutx2"){
//                const calcedWidth=width/2 - 70
//                const calcedHeight=height/2 - 30
//                //1 row
//                const x11=62
//                const x12=calcedWidth+x11+18
//                const y1=25
//                //2 row
//                const x21=x11
//                const x22=x12
//                const y2=calcedHeight+y1+10
//                 //
//                 const x31=36
//                 const x32=x22
//                 const y3=calcedHeight+y2+10 
//                return   imgTag.length===0?<></>:    <>
//                {/* 11 */}
//                <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x11}
//                y={y1}
//             image={imgTag[0]}
            
//             />
//           {/* 12 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x12}
//                y={y1}
//             image={imgTag[1]}
            
//             />
//             {/* 21 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x21}
//                y={y2}
//             image={imgTag[2]}
            
//             />
//           {/* 22 */}
//             <KonvaImage
//                width={calcedWidth}
//                height={calcedHeight}
//                x={x22}
//                y={y2}
//             image={imgTag[3]}
            
//             />
//             </>
//           }
//           else {
//                 return        <></>
//           }
         
//       }
//       //프레임 유형별로 stageWidth, height
//       useEffect(()=>{
// //ui 프레임 크기 조정
// const smallRatio=0.8
// const largeRatio=1.2
// if (selectedFrame==="6-cutx2") {
     
//      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// } 
// else if(selectedFrame==="Stripx2") {
//      setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
// }
// else if(selectedFrame==="2cut-x2"){
    
//         setFrameSize({width:576*smallRatio,height:384*smallRatio})
// }
// else{
//      setFrameSize({width:576*smallRatio,height:384*smallRatio})
// }
          
//       },[
//           selectedFrame
//       ])
//       const getKonvaClassName=(selectedFrame)=>{
//           if (selectedFrame==="6-cutx2"||selectedFrame==="Stripx2") {
//                return "konva-vertical-image"
//           } else {
//                return "konva-horizontal-image"
//           }
//       }
//      //  386.68
//      //  alert(selectedFrame)
//      return (
// <div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
//     <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
//     <div className="left-sticker">
//         <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
//         <div className='v-carousel-container' ref={carouselRef}>
//             <div className='v-carousel-images'>
//                 {myBackgrounds.map((src, index) => (
//                     <div className='image' style={{}}>
//                         {/* ui용 */}
//                         <Stage
//                             width={frameSize.width} // Adjusted stage width
//                             height={frameSize.height} // Adjusted stage height
//                             scale={{ x: 1  , y: 1 }} // Ensure the scale is 1:1
//                             onClick={handleCanvasClick}
//                             onTap={handleCanvasClick}
//                             className={getKonvaClassName(selectedFrame)}
//                             onMouseDown={checkDeselect}
//                             onTouchStart={checkDeselect}
//                             ref={stageRefs[index]}
//                         >
//                             <Layer
//                             scale={{ x:1, y:1 }}
//                             filters={[Konva.Filters.Sepia]}
//                             >
//                                 {backgroundList[bgIdx] && (
//                                     <KonvaImage
//                                     scale={{ x:1, y:1 }}
//                                         image={backgroundList[bgIdx].img}
//                                         width={frameSize.width} // Adjusted stage width
//                                         height={frameSize.height} // Adjusted stage height
//                                         x={(frameSize.width - backgroundList[bgIdx].width) / 2} // Center the image horizontally
//                                         y={(frameSize.height - backgroundList[bgIdx].height) / 2} // Center the image vertically
//                                     />
//                                 )}
//                       {tempImage&&showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage)}
//                                 {images[bgIdx] && images[bgIdx].map((image, i) => (
//                                     <StickerItem
//                                         isStickerDrag={stickerDrag}
//                                         isSelected={isSel}
//                                         setStickerDrag={setStickerDrag}
//                                         onTransform={() => console.log("이미지 리사이징 중")}
//                                         onSelect={() => {
//                                             setIsSel(p => !p);
//                                             console.log("스티커 클릭");
//                                         }}
//                                         onDelete={() => {
//                                             const newImages = [...images];
//                                             newImages.splice(i, 1);
//                                             setImages(newImages);
//                                         }}
//                                         onDragEnd={(event) => {
//                                             image.x = event.target.x();
//                                             image.y = event.target.y();
//                                         }}
//                                         onChange={(x, y, width, height) => {
//                                         }}
//                                         key={i}
//                                         image={image}
//                                         shapeProps={image}
//                                     />
//                                 ))}
//                             </Layer>
//                         </Stage>

//                         {/* //프린트용 */}

//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>

//     <div className="middle-sticker"
//         draggable={true}
//         onDragStart={onDragStart}
//         onDrag={() => {
//         }}
//         onDragEnd={onDragEnd}

//         style={{
//             backgroundImage: `url(${sticker_frame})`
//         }}>
//         {myStickers.map((group, index) => (
//             <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
//                 {group.map((mySticker, photoIndex) => (
//                     <div
//                         key={photoIndex}
//                         className="sticker"
//                         onClick={() => {
//                             const element = document.querySelector('.image');
//                             const width = element.offsetWidth; // 요소의 너비
//                             const height = element.offsetHeight; // 요소의 높이  
//                             addStickerToPanel({
//                                 bgIdx: bgIdx,
//                                 src: mySticker.photo,
//                                 width: 100,
//                                 ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200) // 스티커의 초기 위치와 크기를 지정
//                             });
//                         }}
//                     >
//                         <img className="sticker-image"
//                             alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
//                     </div>
//                 ))}
//             </div>
//         ))}
//     </div>
//     <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
//         <div className="sticker-category">
//             <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
//             <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
//             <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
//             <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
//         </div>
//         <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
//     </div>
// </div>
//      );
// }

// export default Sticker;




import React, { useEffect, useState, createRef, useCallback, useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import i18n from '../translations/i18n';
import "../css/Sticker.css";
import frame from '../assets/Sticker/frame.png';
import sticker_frame from '../assets/Sticker/sticker_frame.png';
import sticker_taskbar from '../assets/Sticker/sticker_taskbar.png';
import { Image as KonvaImage, Layer, Stage, Rect, Transformer } from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import { StickerItem } from '../screens/StickerItem';
import axios from 'axios';
// import { Resizable } from 're-resizable';
// Sticker
import { stickers } from './stickers.data';

// Go Back
import goback_en from '../assets/Common/goback.png';
import goback_en_hover from '../assets/Common/gobackhover.png';
import goback_kr from '../assets/Common/kr/goback.png';
import goback_kr_hover from '../assets/Common/kr/gobackhover.png';
import goback_vn from '../assets/Common/vn/goback.png';
import goback_vn_hover from '../assets/Common/vn/gobackhover.png';

// Background
import background_en from '../assets/Sticker/BG.png';
import background_kr from '../assets/Sticker/kr/BG.png';
import background_vn from '../assets/Sticker/vn/BG.png';

// Sticker
import mood_en from '../assets/Sticker/mood.png';
import mood_en_click from '../assets/Sticker/mood-click.png';
import mood_kr from '../assets/Sticker/kr/mood-default.png';
import mood_kr_click from '../assets/Sticker/kr/mood-pressed.png';
import mood_vn from '../assets/Sticker/vn/mood-default.png';
import mood_vn_click from '../assets/Sticker/vn/mood-pressed.png';

import lovely_en from '../assets/Sticker/lovely.png';
import lovely_en_click from '../assets/Sticker/lovely-click.png';
import lovely_kr from '../assets/Sticker/kr/lovely-default.png';
import lovely_kr_click from '../assets/Sticker/kr/lovely-pressed.png';
import lovely_vn from '../assets/Sticker/vn/lovely-default.png';
import lovely_vn_click from '../assets/Sticker/vn/lovely-pressed.png';

import cartoon_en from '../assets/Sticker/cartoon.png';
import cartoon_en_click from '../assets/Sticker/cartoon-click.png';
import cartoon_kr from '../assets/Sticker/kr/cartoon-default.png';
import cartoon_kr_click from '../assets/Sticker/kr/cartoon-pressed.png';
import cartoon_vn from '../assets/Sticker/vn/cartoon-default.png';
import cartoon_vn_click from '../assets/Sticker/vn/cartoon-pressed.png';

import y2k_en from '../assets/Sticker/y2k.png';
import y2k_en_click from '../assets/Sticker/y2k-click.png';
import y2k_kr from '../assets/Sticker/kr/y2k-default.png';
import y2k_kr_click from '../assets/Sticker/kr/y2k-pressed.png';
import y2k_vn from '../assets/Sticker/vn/y2k-default.png';
import y2k_vn_click from '../assets/Sticker/vn/y2k-pressed.png';

import print from '../assets/Sticker/print.png';
import print_click from '../assets/Sticker/print_click.png';
import print_kr from '../assets/Sticker/kr/print-default.png';
import print_kr_click from '../assets/Sticker/kr/print-pressed.png';
import print_vn from '../assets/Sticker/vn/print-default.png';
import print_vn_click from '../assets/Sticker/vn/print-pressed.png';
//frame나오는 공간
import frame_box from '../assets/Sticker/frame_box.png';
import CustomCarousel from '../components/CustomCarousel';
import VerticalCustomCarousel from '../components/VerticalCustomCarousel';
import { originAxiosInstance } from '../api/config';
function Sticker() {
     const { t } = useTranslation();
     const navigate = useNavigate();
     const [src, setSrc] = useState(null)
     const [hoveredImage, setHoveredImage] = useState(null);
     const [selectedLayout, setSelectedLayout] = useState(null);
     const [selectedPhotos, setSelectedPhotos] = useState([]);
     const [filterEffect, setFilterEffect] = useState(null);
     const [myBackgrounds, setMyBackgrounds] = useState([]);
     const bgLength=myBackgrounds.length
     const [selectedFrame, setSelectedFrame] = useState(null);
     const [images, setImages] = useState([]);
     const [selectedId, selectShape] = useState(null);
     const [clickPrint, setClickPrint] = useState(false);
     const [orderCode, setOrderCode] = useState(null);
     const [language, setLanguage] = useState('en');

     const [backgroundImage, setBackgroundImage] = useState(background_en);
     //스크롤 인덱스
     const [scrollIdx, setScrollIdx] = useState(0)
     const [dragStartY, setDragStartY] = useState(0);
     const [bgIdx,setBgIdx]=useState(0)
     const [stickerImgs,setStickerImgs]=useState([])
     // Sticker
     const [isSel,setIsSel]=useState(false)
     const [mood, setMood] = useState(null);
     const [lovely, setLovely] = useState(null);
     const [cartoon, setCartoon] = useState(null);
     const [y2k, setY2k] = useState(null);
     const [printButton, setPrintButton] = useState(null);

     const [goBackButton, setGoBackButton] = useState(goback_en);
     const [clickedButton, setClickedButton] = useState(false);
     const [stickerDrag,setStickerDrag]=useState(false)
const [photos,setPhotos]=useState([])
const [selectedItems,setSelectedItems]=useState([])
const [width,setWidth]=useState(0)
const [height,setHeight]=useState(0)
     const background = new Image();
     background.crossOrigin = 'Anonymous';
     background.src = sessionStorage.getItem('downloaded-image');
     const [selectedCategory, setSelectedCategory] = useState('MOOD');
     const [backgroundList,setBackgroundList]=useState([])
     const [tempImage,setTempImage]=useState()
     // const stageRef = useRef(null);
     const [stageRefs,setStageRefs]=useState([])
     const [frameSize,setFrameSize]=useState({
          width:"",
          height:""
     })
     const chunkArray = (arr, size) => {
          return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
     };

useEffect(()=>{
     const photos = JSON.parse(sessionStorage.getItem('photos'));
if (photos===null)return;
     setPhotos(photos)
},[])
useEffect(()=>{
     if (!photos)return;
     const selItems = photos.filter((item, index) => selectedPhotos.includes(index));

     setSelectedItems(selItems)
},[photos])
     useEffect(() => {  
          if (!backgroundList.length===0) {
               backgroundList[0].src = sessionStorage.getItem('downloaded-image');
               window.location.reload();
          }
     }, []);

     useEffect(() => {
          const storedLanguage = sessionStorage.getItem('language');
          if (storedLanguage) {
               setLanguage(storedLanguage);
               if (storedLanguage === 'en') {
                    setBackgroundImage(background_en);
                    setMood(mood_en);
                    setLovely(lovely_en);
                    setCartoon(cartoon_en);
                    setY2k(y2k_en);
                    setPrintButton(print);
                    setGoBackButton(goback_en);
               } else if (storedLanguage === 'ko') {
                    setBackgroundImage(background_kr);
                    setMood(mood_kr);
                    setLovely(lovely_kr);
                    setCartoon(cartoon_kr);
                    setY2k(y2k_kr);
                    setPrintButton(print_kr);
                    setGoBackButton(goback_kr);
               } else if (storedLanguage === 'vi') {
                    setBackgroundImage(background_vn);
                    setMood(mood_vn);
                    setLovely(lovely_vn);
                    setCartoon(cartoon_vn);
                    setY2k(y2k_vn);
                    setPrintButton(print_vn);
                    setGoBackButton(goback_vn);
               }
          }

          // get session storage selectedLayout
          const sessionSelectedLayout = sessionStorage.getItem('selectedLayout');
          if (sessionSelectedLayout) {
               const parsedSelectedLayout = JSON.parse(sessionSelectedLayout);

               setSelectedLayout(parsedSelectedLayout.photo_cover);
               // setMyBackground(parsedSelectedLayout.photo);
               setMyBackgrounds(parsedSelectedLayout.map(it=>it.photo_full));

               const imgs=[]
          for (let i = 0; i < parsedSelectedLayout.length; i++) {
             imgs.push([])
               
          }
          setImages(imgs)
          setStickerImgs(imgs)
               // setStageRefs()
               setImages(parsedSelectedLayout.map(b=>[]))
               // background.src=parsedSelectedLayout.photo_full
               // setSrc(parsedSelectedLayout.photo_full)
          }

          // Retrieve selected photos from session storage
          const storedSelectedPhotos = JSON.parse(sessionStorage.getItem('choosePhotos'));
          if (storedSelectedPhotos) {

               setSelectedPhotos(storedSelectedPhotos);
          }

          // Filter
          const filterSession = sessionStorage.getItem('filter');
          if (filterSession) {
               setFilterEffect(filterSession);
          }

          // Retrieve selected frame from session storage
          const storedSelectedFrame = JSON.parse(sessionStorage.getItem('selectedFrame'));
          if (storedSelectedFrame) {

               setSelectedFrame(storedSelectedFrame.frame);
          }
     }, []);

     const handleMouseEnter = (image) => {
          setHoveredImage(image);
     }

     const handleMouseLeave = () => {
          setHoveredImage(null);
     }

     const displayClassNameForBackground = () => {
          if (selectedFrame == '2cut-x2') {
               return 'left-choose-photos-2cut';
          } else if (selectedFrame == '4-cutx2') {
               return 'left-choose-photos-4cut';
          } else if (selectedFrame == '5-cutx2') {
               return 'left-choose-photos-5cut';
          } else {
               return 'left-choose-photos';
          }
     }

     const getImageStyle = () => {
          return filterEffect;
     }

     const displayClassNameForLayout = () => {
          if (selectedFrame == '2cut-x2') {
               return 'left-choose-container-2cut';
          } else if (selectedFrame == '4-cutx2') {
               return 'left-choose-container-4cut';
          } else if (selectedFrame == '5-cutx2') {
               return 'left-choose-container';
          } else {
               return 'left-choose-container';
          }
     }

     const displayClassNameForPhoto = (rowIndex, photoIndex) => {
          if (selectedFrame === 'Stripx2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item-0-1';
               } else if (rowIndex === 1 && photoIndex === 0) {
                    return 'choose-photo-item-1-0';
               } else if (rowIndex === 1 && photoIndex === 1) {
                    return 'choose-photo-item-1-1';
               } else if (rowIndex === 2 && photoIndex === 0) {
                    return 'choose-photo-item-2-0';
               } else if (rowIndex === 2 && photoIndex === 1) {
                    return 'choose-photo-item-2-1';
               } else if (rowIndex === 3 && photoIndex === 0) {
                    return 'choose-photo-item-3-0';
               } else if (rowIndex === 3 && photoIndex === 1) {
                    return 'choose-photo-item-3-1';
               }
          } else if (selectedFrame === '6-cutx2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item6-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item6-0-1';
               } else if (rowIndex === 1 && photoIndex === 0) {
                    return 'choose-photo-item6-1-0';
               } else if (rowIndex === 1 && photoIndex === 1) {
                    return 'choose-photo-item6-1-1';
               } else if (rowIndex === 2 && photoIndex === 0) {
                    return 'choose-photo-item6-2-0';
               } else if (rowIndex === 2 && photoIndex === 1) {
                    return 'choose-photo-item6-2-1';
               }
          } else if (selectedFrame === '2cut-x2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item-2cut-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item-2cut-0-1';
               }
          } else if (selectedFrame === '3-cutx2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item-3cut-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item-3cut-0-1';
               } else if (rowIndex === 1 && photoIndex === 0) {
                    return 'choose-photo-item-3cut-0-1';
               }
          } else if (selectedFrame === '4-cutx2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item-4cut-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item-4cut-0-1';
               } else if (rowIndex === 1 && photoIndex === 0) {
                    return 'choose-photo-item-4cut-1-0';
               } else if (rowIndex === 1 && photoIndex === 1) {
                    return 'choose-photo-item-4cut-1-1';
               }
          } else if (selectedFrame === '5-cutx2') {
               if (rowIndex === 0 && photoIndex === 0) {
                    return 'choose-photo-item-5cut-0-0';
               } else if (rowIndex === 0 && photoIndex === 1) {
                    return 'choose-photo-item-5cut-0-1';
               } else if (rowIndex === 1 && photoIndex === 0) {
                    return 'choose-photo-item-5cut-1-0';
               } else if (rowIndex === 1 && photoIndex === 1) {
                    return 'choose-photo-item-5cut-1-1';
               }
          }
          return 'choose-photo-item';
     }
     const applyContrastFilter = (data, value) => {
          const factor = (259 * (value + 255)) / (255 * (259 - value));
          for (let i = 0; i < data.length; i += 4) {
            data[i] = truncate(factor * (data[i] - 128) + 128);
            data[i + 1] = truncate(factor * (data[i + 1] - 128) + 128);
            data[i + 2] = truncate(factor * (data[i + 2] - 128) + 128);
          }
        };
      
        const truncate = (value) => {
          return Math.min(255, Math.max(0, value));
        };
     const applyStyles = (img, styles) => {
          Object.assign(img, styles);
        };
        const applyFilters = (img, filters) => {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0, img.width, img.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
      
          filters.split(' ').forEach(filter => {
            const [name, value] = filter.replace(')', '').split('(');
            const floatValue = parseFloat(value);
      
            switch (name) {
              case 'grayscale':
                applyGrayscaleFilter(data, floatValue);
                break;
              case 'sepia':
                applySepiaFilter(data, floatValue);
                break;
              case 'opacity':
                applyOpacityFilter(data, floatValue);
                break;
              case 'saturate':
                applySaturateFilter(data, floatValue);
                break;
              case 'contrast':
                applyContrastFilter(data, floatValue);
                break;
              default:
                break;
            }
          });
      
          context.putImageData(imageData, 0, 0);
          const newImage = new window.Image();
          newImage.src = canvas.toDataURL();
          return newImage;
        };
        const applyGrayscaleFilter = (data, value) => {
          for (let i = 0; i < data.length; i += 4) {
            const avg = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
            data[i] = data[i] * (1 - value) + avg * value;
            data[i + 1] = data[i + 1] * (1 - value) + avg * value;
            data[i + 2] = data[i + 2] * (1 - value) + avg * value;
          }
        };
      
        const applySepiaFilter = (data, value) => {
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            data[i] = r * (1 - value) + (r * 0.393 + g * 0.769 + b * 0.189) * value;
            data[i + 1] = g * (1 - value) + (r * 0.349 + g * 0.686 + b * 0.168) * value;
            data[i + 2] = b * (1 - value) + (r * 0.272 + g * 0.534 + b * 0.131) * value;
          }
        };
      
        const applyOpacityFilter = (data, value) => {
          for (let i = 3; i < data.length; i += 4) {
            data[i] = data[i] * value;
          }
        };
      
        const applySaturateFilter = (data, value) => {
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const gray = 0.299 * r + 0.587 * g + 0.114 * b;
            data[i] = gray * (1 - value) + r * value;
            data[i + 1] = gray * (1 - value) + g * value;
            data[i + 2] = gray * (1 - value) + b * value;
          }
        };
     const addStickerToPanel = ({ bgIdx, src, width, x, y }) => {
      
          const item = {
              width,
              x,
              y,
              src,
              resetButtonRef: createRef()
          };
      
          setImages((currentImages) => {
              const newImages = currentImages.map((subList, index) => {
                  if (index === bgIdx) {
                      return [...subList, item];
                  }
                  return subList;
              });
      
              return newImages;
          });
      };

     const resetAllButtons = useCallback(() => {
          images.forEach((subList) => {
              subList.forEach((image) => {
                  if (image.resetButtonRef.current) {
                      image.resetButtonRef.current();
                  }
              });
          });
      }, [images]);
      
      const handleCanvasClick = useCallback(
          (event) => {
              if (event.target.attrs.id === "backgroundImage") {
                  resetAllButtons();
              }
          },
          [resetAllButtons]
      );

     const checkDeselect = (e) => {
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
               selectShape(null);
          }
     }

     const filterStickerByCategory = (category) => {
          setSelectedCategory(category);
     }

     const printFrameWithSticker = async(event,) => {
          if (clickPrint == true) {
               return;
          }
          setClickPrint(true);

           callPrinter();
          uploadCloud();

          setTimeout(() => {
               navigate("/print");
          }, 3000);
     }
     function rotateImageDataURL(dataURL, degrees) {
          return new Promise((resolve, reject) => {
              const image = new Image();
              image.onload = () => {
                  const canvas = document.createElement('canvas');
                  const ctx = canvas.getContext('2d');
                  const { width, height } = image;
      
                  // Canvas 크기를 이미지 크기와 동일하게 설정
                  canvas.width = width;
                  canvas.height =height ;
      
                  // 이미지를 회전시키고 Canvas에 그리기
                  ctx.translate(height / 2, width / 2);
                  ctx.rotate(degrees * Math.PI / 180);
                  ctx.drawImage(image, -width / 2, -height / 2);
      
                  // 회전된 이미지를 Data URL로 변환하여 반환
                  resolve(canvas.toDataURL());
              };
              image.onerror = reject;
              image.src = dataURL;
          });
      }
     // function rotateImageDataURL(dataURL, degrees) {
     //      return new Promise((resolve, reject) => {
     //          const image = new Image();
     //          image.onload = () => {
     //              const canvas = document.createElement('canvas');
     //              const ctx = canvas.getContext('2d');
     //              const { width, height } = image;
      
     //              // 회전 각도가 90도 또는 270도인 경우, 캔버스 크기를 바꿔야 함
     //              if (degrees === 90 || degrees === 270) {
     //                  canvas.width = height;
     //                  canvas.height = width;
     //              } else {
     //                  canvas.width = width;
     //                  canvas.height = height;
     //              }
      
     //              // 캔버스 중심을 기준으로 회전
     //              ctx.translate(canvas.width / 2, canvas.height / 2);
     //              ctx.rotate(degrees * Math.PI / 180);
      
     //              // 이미지를 그릴 때 원래의 중심 위치로 이동하여 그리기
     //              ctx.drawImage(image, -width / 2, -height / 2);
      
     //              // 회전된 이미지를 Data URL로 변환하여 반환
     //              resolve(canvas.toDataURL());
     //          };
     //          image.onerror = reject;
     //          image.src = dataURL;
     //      });
     //  }
      
     const uploadCloud = () => {
          try {
               // for (let i = 0; i < stageRefs.length; i++) {
                    // for (let i = 0; i < 1; i++) {
                         const stageRef = stageRefs[bgIdx];
                    const originalDataURL = stageRef.current.toDataURL();
                    let rotated=null
                    rotateImageDataURL(originalDataURL, 90)
                    .then(rotatedDataURL => {
                        // 회전된 이미지의 Data URL을 사용하여 다른 작업을 수행합니다.
                    //     rotated=rotatedDataURL
                        const formData = new FormData();
                        //   formData.append("photo", stageRef.current.toDataURL());
                          formData.append("photo", originalDataURL);
                          formData.append("order_code", sessionStorage.getItem('orderCodeNum'));
    
                   originAxiosInstance.post(
                        `${process.env.REACT_APP_BACKEND}/frames/api/upload_cloud`,
                        formData,
                        {
                             headers: {
                                  'Content-Type': 'multipart/form-data'
                             }
                        })
                        .then(response => {
                             const data = response.data;
                             if (data.photo_url) {
                                  sessionStorage.setItem('uploadedCloudPhotoUrl', data.photo_url);
                             }
                        })
                        .catch(error => {
                             console.log(error);
                             alert("업로드 에러")
                        });
                        // 이제 rotatedDataURL을 사용하여 이미지를 업로드하거나 다른 작업을 수행할 수 있습니다.
                    })
                    .catch(error => {
                        console.error('이미지 회전 중 오류 발생:', error);
                    });
                    
               // }
             
          } catch (error) {
               console.log(error);
          }
     }
     const callPrinter = async() => {
          alert("callPrinter");
          // for (let i = 0; i < stageRefs.length; i++) {
              const stageRef = stageRefs[bgIdx];
              if (!stageRef.current) {
                  alert("stageRef.current is null");
                  return;
              }
      
              const originalDataURL = stageRef.current.toDataURL();
              const formData = new FormData(); 
              formData.append("photo", originalDataURL);
              formData.append("frame", selectedFrame);
              
              
              originAxiosInstance.post(
                  `${process.env.REACT_APP_BACKEND}/frames/api/print`,
                  formData,
                  {
                      headers: {
                          'Content-Type': 'multipart/form-data'
                      }
                  }
              )
              .then(response => {
                  console.log('print response', response);
              })
              .catch(error => {
                  console.log(error);
              });
  

             
          // }
          
      }
      

     const hoverGoBackButton = () => {
          if (language == 'en') {
               setGoBackButton(goBackButton == goback_en_hover ? goback_en : goback_en_hover);
          } else if (language == 'vi') {
               setGoBackButton(goBackButton == goback_vn_hover ? goback_vn : goback_vn_hover);
          } else if (language == 'ko') {
               setGoBackButton(goBackButton == goback_kr_hover ? goback_kr : goback_kr_hover);
          }
     }

     const hoverStickerButton = (stickerEffect) => {
          if (stickerEffect == 'mood') {
               if (language == 'en') {
                    setMood(mood == mood_en_click ? mood_en : mood_en_click);
               } else if (language == 'vi') {
                    setMood(mood == mood_vn_click ? mood_vn : mood_vn_click);
               } else if (language == 'ko') {
                    setMood(mood == mood_kr_click ? mood_kr : mood_kr_click);
               }
          } else if (stickerEffect == 'lovely') {
               if (language == 'en') {
                    setLovely(lovely == lovely_en_click ? lovely_en : lovely_en_click);
               } else if (language == 'vi') {
                    setLovely(lovely == lovely_vn_click ? lovely_vn : lovely_vn_click);
               } else if (language == 'ko') {
                    setLovely(lovely == lovely_kr_click ? lovely_kr : lovely_kr_click);
               }
          } else if (stickerEffect == 'cartoon') {
               if (language == 'en') {
                    setCartoon(cartoon == cartoon_en_click ? cartoon_en : cartoon_en_click);
               } else if (language == 'vi') {
                    setCartoon(cartoon == cartoon_vn_click ? cartoon_vn : cartoon_vn_click);
               } else if (language == 'ko') {
                    setCartoon(cartoon == cartoon_kr_click ? cartoon_kr : cartoon_kr_click);
               }
          } else if (stickerEffect == 'y2k') {
               if (language == 'en') {
                    setY2k(y2k == y2k_en_click ? y2k_en : y2k_en_click);
               } else if (language == 'vi') {
                    setY2k(y2k == y2k_vn_click ? y2k_vn : y2k_vn_click);
               } else if (language == 'ko') {
                    setY2k(y2k == y2k_kr_click ? y2k_kr : y2k_kr_click);
               }
          }
     }

     const hoverPrintButton = () => {
          if (language == 'en') {
               setPrintButton(printButton == print_click ? print : print_click);
          } else if (language == 'vi') {
               setPrintButton(printButton == print_vn_click ? print_vn : print_vn_click);
          } else if (language == 'ko') {
               setPrintButton(printButton == print_kr_click ? print_kr : print_kr_click);
          }
     }

     // Chunk the selected photos array into arrays of 2 photos each
     const stickersData = stickers.filter(sticker => sticker.category === selectedCategory);
     const selectedPhotoRows = chunkArray(selectedPhotos, 2);
     //스크롤 하면 인덱스에 따라 스티커 타입 정하기
     const myStickers = chunkArray(stickersData, 4);
     // console.log("프레임 백그라운드",myBackground)
     //크기 리사이징 예제코드
     const [isDragging, setIsDragging] = useState(false);
     const [position, setPosition] = useState({ x: 100, y: 100 }); // 초기 위치
     const [radius, setRadius] = useState(50); // 초기 반지름

     const handleMouseDown = (e) => {
          setIsDragging(true);
     };

     const handleMouseUp = () => {
          setIsDragging(false);
     };

     const handleMouseMove = (e) => {
          if (!isDragging) return;

          const newPosition = {
               x: e.clientX,
               y: e.clientY
          };
          setPosition(newPosition);
     };

     const handleMouseLeave2 = () => {
          setIsDragging(false);
     };

     const handleMouseWheel = (e) => {
          if (e.deltaY > 0) {
               setRadius(radius - 5);
          } else {
               setRadius(radius + 5);
          }
     };
     const onDragStart = (event) => {
          setDragStartY(event.clientY); // 드래그 시작 위치의 Y 좌표를 저장
      };

     const onDragEnd = (event) => {
          const dragEndY = event.clientY; // 드래그 끝 위치의 Y 좌표
  
          if (dragEndY > dragStartY) { // 드래그가 위에서 아래로 일어났는지 확인
              setScrollIdx(prevIdx => (prevIdx + 1) % 4);
              const nextScrollIdx = (scrollIdx + 1) % 4;
              if (nextScrollIdx === 0) {
                  setSelectedCategory("MOOD");
              }
              else if (nextScrollIdx === 1) {
                  setSelectedCategory("LOVELY");
              }
              else if (nextScrollIdx === 2) {
                  setSelectedCategory("CARTOON");
              }
              else if (nextScrollIdx === 3) {
                  setSelectedCategory("Y2K");
              }
          }
      };
      const carouselRef = useRef(null);
      const [isDown, setIsDown] = useState(false);
      const [startY, setStartY] = useState(0);
      const [scrollTop, setScrollTop] = useState(0);
  
      useEffect(() => {
          const carousel = carouselRef.current;
  const dragging=stickerDrag
          const handleMouseDown = (e) => {
               // if (dragging)return
              setIsDown(true);
              if (carousel) {
               if (stickerDrag)return
                  setStartY(e.pageY - carousel.offsetTop);
                  setScrollTop(carousel.scrollTop);
              }
          };
  
          const handleMouseLeave = () => {
               // if (stickerDrag)return
              setIsDown(false);
          };
  
          const handleMouseUp = () => {
               // if (stickerDrag)return
              setIsDown(false);
              snapToClosestItem();
          };
  
          const handleMouseMove = (e) => {
               // return;
               // if (stickerMoving)return;
               if (dragging)return
              
              if (!isDown) return;
              e.preventDefault();
              if (carousel) { 
       
                  const y = e.pageY - carousel.offsetTop;
                  const walk = (y - startY) * 3; // Scroll speed
                  carousel.scrollTop = scrollTop - walk;
              }
          };
  
          const snapToClosestItem = () => {
              if (!carousel) return;
              const itemHeight = carousel.querySelector('.image').offsetHeight;
              const scrollY = carousel.scrollTop;
              const index = Math.round(scrollY / itemHeight);  
                    setBgIdx(index)
              carousel.scrollTo({ top: index * itemHeight, behavior: 'smooth' });
          };
  
          if (carousel) {
              carousel.addEventListener('mousedown', handleMouseDown);
              carousel.addEventListener('mouseleave', handleMouseLeave);
              carousel.addEventListener('mouseup', handleMouseUp);
              carousel.addEventListener('mousemove', handleMouseMove);
          }
  
          return () => {
              if (carousel) {
                  carousel.removeEventListener('mousedown', handleMouseDown);
                  carousel.removeEventListener('mouseleave', handleMouseLeave);
                  carousel.removeEventListener('mouseup', handleMouseUp);
                  carousel.removeEventListener('mousemove', handleMouseMove);
              }
          };
      }, [isDown, startY, scrollTop,stickerDrag]);
    
     useEffect(() => {
  // add or remove refs

  setStageRefs((refs) =>
    Array(bgLength)
      .fill()
      .map((_, i) => refs[i] || createRef()),
  );


}, [bgLength]);  


// 선택된 아이템을 가지고 있는 리스트
// const backgroundList = myBackgrounds.map((imageUrl) => {
//      const img = new Image();
//      img.crossOrigin = 'Anonymous';
//      img.src = imageUrl;
//      return img;
//  });
 
     const getImgListLayout=(selectedFrame,selectedItems)=>{
        if (selectedItems.length===0) {
          
          return <></>
        }
          if (selectedFrame==="Stripx2") { 
               return <div
               className='selected-photos-s2-list'
               
               >
                    {/* 1 row */}
                     <div
                 className='selected-photos-s2-row'
                   ><img
className='stripx2img'
                   src={selectedItems[0].url}
                   />
                   <img
className='stripx2img'
                   src={selectedItems[1].url}
                   /></div>
                   {/* 2 row */}
                   <div
                  className='selected-photos-s2-row'
                 ><img
className='stripx2img'
                 src={selectedItems[2].url}
                 />
                 <img
className='stripx2img'
                 src={selectedItems[3].url}
                 /></div>
                  {/* 3 row */}
                  <div
                  className='selected-photos-s2-row'
                 ><img
className='stripx2img'
                 src={selectedItems[4].url}
                 />
                 <img
className='stripx2img'
                 src={selectedItems[5].url}
                 /></div>
                  {/* 4 row */}
                  <div
                  className='selected-photos-s2-row'
                 ><img
className='stripx2img'
                 src={selectedItems[6].url}
                 />
                 <img
className='stripx2img'
                 src={selectedItems[7].url}
                 /></div>
               </div>
          }
          else if(selectedFrame==="2cut-x2"){
return <div
className='selected-photos-2-list'

>
    {selectedItems.map((it,idx)=>
    idx===0?<div
    className='selected-photo-2-container-first'
    ><div
     className='selected-photo-2'
       style={{
          
          backgroundImage: `url(${it.url})`
      }}
     /></div>:
    <div
    className='selected-photo-2-container'
    ><div
     className='selected-photo-2'
       style={{
          
          backgroundImage: `url(${it.url})`
      }}
     /></div>
    )} 
</div>

          }
          else if(selectedFrame==="4-cutx2"){
               return <div
               className='cut4x2-container'
               >
<img
className='cut4x2-0'
src={selectedItems[0].url}
/>
<img
className='cut4x2-1'
src={selectedItems[1].url}
/>
<img
className='cut4x2-2'
src={selectedItems[2].url}
/>
<img
className='cut4x2-3'
src={selectedItems[3].url}
/>

               </div>
               
               
          }
          else if(selectedFrame==="6-cutx2"){
               return <div
               className='cut6x2-container'>
                    {/* 1 row */}
                    <div
                    className='cut6x2-row'
                    ><img
                    className='cut6x2-img'
                    src={selectedItems[0].url}
                    />
                         <img
                         className='cut6x2-img'
                    src={selectedItems[1].url}
                    />
                    </div>
                     {/* 2 row */}
                     <div
                    className='cut6x2-row'
                    ><img
                    className='cut6x2-img'
                    src={selectedItems[2].url}
                    />
                         <img
                         className='cut6x2-img'
                    src={selectedItems[3].url}
                    />
                    </div>
                    {/* 3 row */}
                    <div
                    className='cut6x2-row'
                    ><img
                    className='cut6x2-img'
                    src={selectedItems[4].url}
                    />
                         <img
                         className='cut6x2-img'
                    src={selectedItems[5].url}
                    />
                    </div>
               </div>
          }
          else{

          }
     }
     function adjustStickerToBackgroundSize(width,height,stickerX, stickerY, stickerWidth, stickerHeight) {
          const backgroundImageSize = {width:width,height:height}
          const backgroundWidth = backgroundImageSize.width;
          const backgroundHeight = backgroundImageSize.height;
      
          // 배경 이미지와 스티커의 가로 및 세로 비율을 계산
          const backgroundAspectRatio = backgroundWidth / backgroundHeight;
          const stickerAspectRatio = stickerWidth / stickerHeight;
      
          let newStickerWidth, newStickerHeight, newStickerX, newStickerY;
      
       
          if (stickerAspectRatio > backgroundAspectRatio) {
              newStickerWidth = backgroundWidth * (stickerWidth / 1200);
              newStickerHeight = newStickerWidth * (stickerHeight / stickerWidth);
              newStickerX = stickerX * (backgroundWidth / 1200);
              newStickerY = stickerY * (backgroundWidth / 1200);
          } else { 
              newStickerHeight = backgroundHeight * (stickerHeight / 1000); 
              newStickerWidth = newStickerHeight * (stickerWidth / stickerHeight);
              newStickerY = stickerY * (backgroundHeight / 1000);
              newStickerX = stickerX * (backgroundHeight / 1000); 
          }
      
         
          return { x: newStickerX, y: newStickerY, width: newStickerWidth, height: newStickerHeight };
      }
      const loadImage = (src) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.crossOrigin = 'Anonymous';
            img.src = src;
            img.onload = () => resolve(img);
          });
        };
        const getImageStyleObj = () => {
          // return '';
          if (filterEffect == null) {
               return '';
          }
          const parsed=JSON.parse(filterEffect)
          const filters = parsed.map(option => {
               return `${option.property}(${option.value}${option.unit})`;
          })
          return filters.join(' ')
     }
      //세로로 긴거
      useEffect(() => {
          if (frameSize.width===""||frameSize.height==="")return
          const loadImages = () => {
               const selItems = photos.filter((item, index) => selectedPhotos.includes(index));
         
                     const tempImgs = selItems.map(photo => {
                         const tempImg = new Image();
                         tempImg.crossOrigin = 'Anonymous';
                         tempImg.src = photo.url;
                         applyStyles(tempImg, {width: 800,height: 800,filter:photo.filter});
                            return tempImg;
                     });
                    //  for (let i = 0; i < tempImgs.length; i++) {
                    //      const item = tempImgs[i];
                    //      console.log("item>>>",item)
                         
                    //      applyStyles(item, {width: 800,height: 800,filter: getImageStyleObj()});
                    //  }
               
                     // tempImg 리스트를 setTempImage에 넣음
                     setTempImage(tempImgs);
      
              if (backgroundList.length === 0 || !backgroundList[0]?.src) {
                  const element = document.querySelector('.image');
                  if (element) {
                      const targetWidth = frameSize.width//257.79;
                      const targetHeight = frameSize.height//384;
      
                      const loadedImages = myBackgrounds.map((imageUrl) => {
                          return new Promise((resolve, reject) => {
                              const img = new Image();
                              img.crossOrigin = 'Anonymous';
                              img.src = imageUrl;
      
                              img.onload = () => {
                                  // Calculate the aspect ratio
                                  const aspectRatio = img.width / img.height;
      
                                  let width, height;
                                  if (aspectRatio > 1) {
                                      // Landscape
                                      width = targetWidth;
                                      height = targetWidth / aspectRatio;
                                  } else {
                                      // Portrait or square
                                      height = targetHeight;
                                      width = targetHeight * aspectRatio;
                                  }
      
                                  // Set width and height state
                                  setWidth(width);
                                  setHeight(height);
      
                                  resolve({
                                      img,
                                      width,
                                      height
                                  });
                              };
                              img.onerror = (err) => reject(err);
                          });
                      });
      
                      Promise.all(loadedImages)
                          .then((images) => {
                              // All images are loaded
                              setBackgroundList(images);
                          })
                          .catch((error) => {
                              console.error("Error loading images:", error);
                          });
                  }
              }
          };
      
          loadImages();
      }, [backgroundList, myBackgrounds,filterEffect]);
      //정사각형에 가까운거
 
      const showKonvaImgLayout=(selectedFrame,width,height,imgTag)=>{
          if (selectedFrame==="6-cutx2") {
               const calcedWidth=width/2 -22
               const calcedHeight=height/3 - 28
               const x11=17
               const x12=calcedWidth+x11+10
               const y1=18
               //
               const x21=20
               const x22=x12
               const y2=calcedHeight+y1+10 
                //
                const x31=20
                const x32=x22
                const y3=calcedHeight+y2+10 
               return   imgTag.length===0?<></>:   <>
               {/* 11 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x11}
               y={y1}
               image={applyFilters(imgTag[0], imgTag[0].filter)}
            
            />
          {/* 12 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x12}
               y={y1}
               image={applyFilters(imgTag[1], imgTag[1].filter)}
            
            />
             {/* 21 */}
             <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x21}
               y={y2}
               image={applyFilters(imgTag[2], imgTag[2].filter)}
            
            />
          {/* 22 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x22}
               y={y2}
               image={applyFilters(imgTag[3], imgTag[3].filter)}
            
            />
               {/* 31 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x31}
               y={y3}
               image={applyFilters(imgTag[4], imgTag[4].filter)}
            
            />
          {/* 32 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x32}
               y={y3}
               image={applyFilters(imgTag[5], imgTag[5].filter)}
            
            />
            </>  
          }
         else if (selectedFrame==="Stripx2") {
               const calcedWidth=width/2 - 18
               const calcedHeight=height/4 - 20
               //1 row
               const x11=8
               const x12=calcedWidth+x11+20
               const y1=22 
               //2 row
               const x21=x11
               const x22=x12
               const y2=calcedHeight+y1+8 
                //3 row
                const x31=x11
                const x32=x22
                const y3=calcedHeight+y2+8 
                             //4 row
                             const x41=x11
                             const x42=x32
                             const y4=calcedHeight+y3+6 
               return    imgTag.length===0?<></>:   <>
               {/* 11 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x11}
               y={y1}
               image={applyFilters(imgTag[0], imgTag[0].filter)}
            
            />
          {/* 12 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x12}
               y={y1}
               image={applyFilters(imgTag[1], imgTag[1].filter)}
            
            />
             {/* 21 */}
             <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x21}
               y={y2}
               image={applyFilters(imgTag[2], imgTag[2].filter)}
            
            />
          {/* 22 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x22}
               y={y2}
               image={applyFilters(imgTag[3], imgTag[3].filter)}
            
            />
               {/* 31 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x31}
               y={y3}
               image={applyFilters(imgTag[4], imgTag[4].filter)}
            
            />
          {/* 32 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x32}
               y={y3}
               image={applyFilters(imgTag[5], imgTag[5].filter)}
            
            />
              {/* 41 */}
              <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x41}
               y={y4}
               image={applyFilters(imgTag[6], imgTag[6].filter)}
            />
          {/* 42 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x42}
               y={y4}
               image={applyFilters(imgTag[7], imgTag[7].filter)}
            
            />
            </>  
          }
          else if(selectedFrame==="2cut-x2"){
               const calcedWidth=width/2 - 32
               const calcedHeight=height-90
               const x11=26
               const x12=calcedWidth+x11+14
               const y1=48
               //
               const x21=36
               const x22=x12
               const y2=calcedHeight+y1+10 
                //
                const x31=36
                const x32=x22
                const y3=calcedHeight+y2+10 
               return   imgTag.length===0?<></>:    <>
               {/* 11 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x11}
               y={y1}
            image={applyFilters(imgTag[0], imgTag[0].filter)}
            
            />
          {/* 12 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x12}
               y={y1}
               image={applyFilters(imgTag[1], imgTag[1].filter)}
            
            /></>
          }
          else if(selectedFrame==="4-cutx2"){
               const calcedWidth=width/2 - 70
               const calcedHeight=height/2 - 30
               //1 row
               const x11=62
               const x12=calcedWidth+x11+18
               const y1=25
               //2 row
               const x21=x11
               const x22=x12
               const y2=calcedHeight+y1+10
                //
                const x31=36
                const x32=x22
                const y3=calcedHeight+y2+10 
               return   imgTag.length===0?<></>:    <>
               {/* 11 */}
               <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x11}
               y={y1}
               image={applyFilters(imgTag[0], imgTag[0].filter)}
            
            />
          {/* 12 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x12}
               y={y1}
               image={applyFilters(imgTag[1], imgTag[1].filter)}
            
            />
            {/* 21 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x21}
               y={y2}
               image={applyFilters(imgTag[2], imgTag[2].filter)}
            
            />
          {/* 22 */}
            <KonvaImage
               width={calcedWidth}
               height={calcedHeight}
               x={x22}
               y={y2}
               image={applyFilters(imgTag[3], imgTag[3].filter)}
            
            />
            </>
          }
          else {
                return        <></>
          }
         
      }
      //프레임 유형별로 stageWidth, height
      useEffect(()=>{
//ui 프레임 크기 조정
const smallRatio=0.8
const largeRatio=1.2
if (selectedFrame==="6-cutx2") {
     
     setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
} 
else if(selectedFrame==="Stripx2") {
     setFrameSize({width:257.79*largeRatio,height:384*largeRatio})
}
else if(selectedFrame==="2cut-x2"){
    
        setFrameSize({width:576*smallRatio,height:384*smallRatio})
}
else{
     setFrameSize({width:576*smallRatio,height:384*smallRatio})
}
          
      },[
          selectedFrame
      ])
      const getKonvaClassName=(selectedFrame)=>{
          if (selectedFrame==="6-cutx2"||selectedFrame==="Stripx2") {
               return "konva-vertical-image"
          } else {
               return "konva-horizontal-image"
          }
      }
     //  386.68
     //  alert(selectedFrame)
     return (
<div className='sticker-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="go-back" style={{ backgroundImage: `url(${goBackButton})` }} onClick={() => navigate("/filter")} onMouseEnter={hoverGoBackButton} onMouseLeave={hoverGoBackButton}></div>
    <div className="left-sticker">
        <div className='frame-box' style={{ backgroundImage: `url(${frame_box})` }} />
        <div className='v-carousel-container' ref={carouselRef}>
            <div className='v-carousel-images'>
                {myBackgrounds.map((src, index) => (
                    <div className='image' style={{}}>
                        {/* ui용 */}
                        <Stage
                            width={frameSize.width} // Adjusted stage width
                            height={frameSize.height} // Adjusted stage height
                            scale={{ x: 1  , y: 1 }} // Ensure the scale is 1:1
                            onClick={handleCanvasClick}
                            onTap={handleCanvasClick}
                            className={getKonvaClassName(selectedFrame)}
                            onMouseDown={checkDeselect}
                            onTouchStart={checkDeselect}
                            ref={stageRefs[index]}
                        >
                            <Layer
                            scale={{ x:1, y:1 }}
                            filters={[Konva.Filters.Sepia]}
                            >
                                {backgroundList[bgIdx] && (
                                    <KonvaImage
                                    scale={{ x:1, y:1 }}
                                        image={backgroundList[bgIdx].img}
                                        width={frameSize.width} // Adjusted stage width
                                        height={frameSize.height} // Adjusted stage height
                                        x={(frameSize.width - backgroundList[bgIdx].width) / 2} // Center the image horizontally
                                        y={(frameSize.height - backgroundList[bgIdx].height) / 2} // Center the image vertically
                                    />
                                )}
                      {tempImage&&showKonvaImgLayout(selectedFrame, frameSize.width, frameSize.height, tempImage)}
                                {images[bgIdx] && images[bgIdx].map((image, i) => (
                                    <StickerItem
                                        isStickerDrag={stickerDrag}
                                        isSelected={isSel}
                                        setStickerDrag={setStickerDrag}
                                        onTransform={() => console.log("이미지 리사이징 중")}
                                        onSelect={() => {
                                            setIsSel(p => !p);
                                            console.log("스티커 클릭");
                                        }}
                                        onDelete={() => {
                                            const newImages = [...images];
                                            newImages.splice(i, 1);
                                            setImages(newImages);
                                        }}
                                        onDragEnd={(event) => {
                                            image.x = event.target.x();
                                            image.y = event.target.y();
                                        }}
                                        onChange={(x, y, width, height) => {
                                        }}
                                        key={i}
                                        image={image}
                                        shapeProps={image}
                                    />
                                ))}
                            </Layer>
                        </Stage>

                        {/* //프린트용 */}

                    </div>
                ))}
            </div>
        </div>
    </div>

    <div className="middle-sticker"
        draggable={true}
        onDragStart={onDragStart}
        onDrag={() => {
        }}
        onDragEnd={onDragEnd}

        style={{
            backgroundImage: `url(${sticker_frame})`
        }}>
        {myStickers.map((group, index) => (
            <div key={index} className={index === 0 ? 'sticker-line-1' : 'sticker-line'}>
                {group.map((mySticker, photoIndex) => (
                    <div
                        key={photoIndex}
                        className="sticker"
                        onClick={() => {
                            const element = document.querySelector('.image');
                            const width = element.offsetWidth; // 요소의 너비
                            const height = element.offsetHeight; // 요소의 높이  
                            addStickerToPanel({
                                bgIdx: bgIdx,
                                src: mySticker.photo,
                                width: 100,
                                ...adjustStickerToBackgroundSize(width, height, 500, 500, 200, 200) // 스티커의 초기 위치와 크기를 지정
                            });
                        }}
                    >
                        <img className="sticker-image"
                            alt={mySticker.title} src={mySticker.photo} width='90px' height='90px' />
                    </div>
                ))}
            </div>
        ))}
    </div>
    <div className="right-sticker" style={{ backgroundImage: `url(${sticker_taskbar})` }}>
        <div className="sticker-category">
            <div className="sticker-category-item" style={{ backgroundImage: `url(${mood})` }} onClick={() => filterStickerByCategory('MOOD')} onMouseEnter={() => hoverStickerButton('mood')} onMouseLeave={() => hoverStickerButton('mood')}></div>
            <div className="sticker-category-item" style={{ backgroundImage: `url(${lovely})` }} onClick={() => filterStickerByCategory('LOVELY')} onMouseEnter={() => hoverStickerButton('lovely')} onMouseLeave={() => hoverStickerButton('lovely')}></div>
            <div className="sticker-category-item" style={{ backgroundImage: `url(${cartoon})` }} onClick={() => filterStickerByCategory('CARTOON')} onMouseEnter={() => hoverStickerButton('cartoon')} onMouseLeave={() => hoverStickerButton('cartoon')}></div>
            <div className="sticker-category-item" style={{ backgroundImage: `url(${y2k})` }} onClick={() => filterStickerByCategory('Y2K')} onMouseEnter={() => hoverStickerButton('y2k')} onMouseLeave={() => hoverStickerButton('y2k')}></div>
        </div>
        <div className="sticker-print-btn" style={{ backgroundImage: `url(${printButton})` }} onClick={printFrameWithSticker} onMouseEnter={hoverPrintButton} onMouseLeave={hoverPrintButton}></div>
    </div>
</div>
     );
}

export default Sticker;


