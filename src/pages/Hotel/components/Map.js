import React, { useEffect } from 'react';

const { kakao } = window;

function Map({ centerLat, centerLng, data }) {
  useEffect(() => {
    const container = document.getElementById('myMap');
    const airportPosition = new kakao.maps.LatLng(centerLat, centerLng);
    const hotelPosition1 = new kakao.maps.LatLng(
      Number(data[0]?.latitude),
      Number(data[0]?.longitude)
    );

    const hotelPosition2 = new kakao.maps.LatLng(
      Number(data[1]?.latitude),
      Number(data[1]?.longitude)
    );
    const hotelPosition3 = new kakao.maps.LatLng(
      Number(data[2]?.latitude),
      Number(data[2]?.longitude)
    );
    const hotelPosition4 = new kakao.maps.LatLng(
      Number(data[3]?.latitude),
      Number(data[3]?.longitude)
    );
    const hotelPosition5 = new kakao.maps.LatLng(
      Number(data[4]?.latitude),
      Number(data[4]?.longitude)
    );

    const options = {
      center: airportPosition,
      level: 8,
    };

    console.log(data);

    const map = new kakao.maps.Map(container, options);
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.TOPRIGHT);

    const airportImg = 'images/airplaneBlue.png',
      imageSize = new kakao.maps.Size(40, 40),
      imageOption = { offset: new kakao.maps.Point(20, 40) };

    const airportMarkerImg = new kakao.maps.MarkerImage(
      airportImg,
      imageSize,
      imageOption
    );

    const airportMarker = new kakao.maps.Marker({
      position: airportPosition,
      image: airportMarkerImg,
      clickable: true,
    });

    const hotelMarker1 = new kakao.maps.Marker({
      position: hotelPosition1,
      clickable: true,
    });
    const hotelMarker2 = new kakao.maps.Marker({
      position: hotelPosition2,
      clickable: true,
    });
    const hotelMarker3 = new kakao.maps.Marker({
      position: hotelPosition3,
      clickable: true,
    });
    const hotelMarker4 = new kakao.maps.Marker({
      position: hotelPosition4,
      clickable: true,
    });
    const hotelMarker5 = new kakao.maps.Marker({
      position: hotelPosition5,
      clickable: true,
    });

    airportMarker.setMap(map);
    hotelMarker1.setMap(map);
    hotelMarker2.setMap(map);
    hotelMarker3.setMap(map);
    hotelMarker4.setMap(map);
    hotelMarker5.setMap(map);

    const iwContent =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      '<img src="images/airplaneBlue.png" style="width:210px; height:110px;"></img>' +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      '<span style="font-size:16px; font-weight:bold;" >호텔이름</span>' +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      '<div style="margin-top: 13px; font-size:12px;">김해공항에서 5km</div>' +
      '<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩89,000원</span> 박</div>' +
      '</div>' +
      '</div>';

    const hotelIwContent1 =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      `<img src=${data[0]?.image} style="width:210px; height:110px;"></img>` +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      `<span style="font-size:16px; font-weight:bold;" >${data[0]?.name}</span>` +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      `<div style="margin-top: 13px; font-size:12px;">${data[0]?.region}공항에서 ${data[0]?.distance}km</div>` +
      `<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩${data[0]?.price?.toLocaleString()}원</span> 박</div>` +
      '</div>' +
      '</div>';
    const hotelIwContent2 =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      `<img src=${data[1]?.image} style="width:210px; height:110px;"></img>` +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      `<span style="font-size:16px; font-weight:bold;" >${data[1]?.name}</span>` +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      `<div style="margin-top: 13px; font-size:12px;">${data[1]?.region}공항에서 ${data[1]?.distance}km</div>` +
      `<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩${data[1]?.price?.toLocaleString()}원</span> 박</div>` +
      '</div>' +
      '</div>';
    const hotelIwContent3 =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      `<img src=${data[2]?.image} style="width:210px; height:110px;"></img>` +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      `<span style="font-size:16px; font-weight:bold;" >${data[2]?.name}</span>` +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      `<div style="margin-top: 13px; font-size:12px;">${data[2]?.region}공항에서 ${data[2]?.distance}km</div>` +
      `<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩${data[2]?.price?.toLocaleString()}원</span> 박</div>` +
      '</div>' +
      '</div>';
    const hotelIwContent4 =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      `<img src=${data[3]?.image} style="width:210px; height:110px;"></img>` +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      `<span style="font-size:16px; font-weight:bold;" >${data[3]?.name}</span>` +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      `<div style="margin-top: 13px; font-size:12px;">${data[3]?.region}공항에서 ${data[3]?.distance}km</div>` +
      `<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩${data[3]?.price?.toLocaleString()}원</span> 박</div>` +
      '</div>' +
      '</div>';
    const hotelIwContent5 =
      '<div style="width: 210px; height:240px;">' +
      '<div style="width: 210px; height:110px; " >' +
      `<img src=${data[4]?.image} style="width:210px; height:110px;"></img>` +
      '</div>' +
      '<div style="padding:10px 20px; display:flex; flex-direction:column; border-top: 1px solid black; border-radius:7px;">' +
      `<span style="font-size:16px; font-weight:bold;" >${data[4]?.name}</span>` +
      '<div style="margin-top: 13px;">3.5/5</div>' +
      `<div style="margin-top: 13px; font-size:12px;">${data[4]?.region}공항에서 ${data[4]?.distance}km</div>` +
      `<div style="margin-top: 13px; margin-left: 65px;"><span style="font-weight:bold; font-size:18px;">₩${data[4]?.price?.toLocaleString()}원</span> 박</div>` +
      '</div>' +
      '</div>';

    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: true,
    });

    const hotelInfowindow1 = new kakao.maps.InfoWindow({
      content: hotelIwContent1,
      removable: true,
    });
    const hotelInfowindow2 = new kakao.maps.InfoWindow({
      content: hotelIwContent2,
      removable: true,
    });
    const hotelInfowindow3 = new kakao.maps.InfoWindow({
      content: hotelIwContent3,
      removable: true,
    });
    const hotelInfowindow4 = new kakao.maps.InfoWindow({
      content: hotelIwContent4,
      removable: true,
    });
    const hotelInfowindow5 = new kakao.maps.InfoWindow({
      content: hotelIwContent5,
      removable: true,
    });
    kakao.maps.event.addListener(hotelMarker1, 'click', function () {
      hotelInfowindow1.open(map, hotelMarker1);
    });
    kakao.maps.event.addListener(hotelMarker2, 'click', function () {
      hotelInfowindow2.open(map, hotelMarker2);
    });
    kakao.maps.event.addListener(hotelMarker3, 'click', function () {
      hotelInfowindow3.open(map, hotelMarker3);
    });
    kakao.maps.event.addListener(hotelMarker4, 'click', function () {
      hotelInfowindow4.open(map, hotelMarker4);
    });
    kakao.maps.event.addListener(hotelMarker5, 'click', function () {
      hotelInfowindow5.open(map, hotelMarker5);
    });
  }, [data]);
  return (
    <div
      id="myMap"
      style={{
        width: '550px',
        height: '550px',
      }}
    />
  );
}

export default Map;
