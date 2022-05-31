

let currentHouseNumber = 0;

$(function() {
    $('#map-image').mapster({
        fillOpacity: 0.5,
        isSelectable: false,
        scaleMap: true,
        render_highlight: {
            fillColor: '4a4a4a',
            stroke: true,
        },
        onClick: function (e){
            currentHouseNumber=e.key;
            loadFloorplanning(e.key);
            showPopup();
        },
    });
});

function hidePopup(){
    $('#popup-main').css('display', 'none');
}

function showPopup(){
    $('#popup-main').css('display', 'block');
}
const house = [
    {
        'floorUrls': [
            'img/house1/house1floor1.png',
            'img/house1/house1floor2.png',
            'img/house1/house1floor3.png',
            'img/house1/house1floor4.png'
        ]
    },
    {
        'floorUrls': [
            'img/house2/house2floor1.png',
            'img/house2/house2floor2.png',
            'img/house2/house2floor3.png',
            'img/house2/house2floor4.png',
            'img/house2/house2floor5.png'
        ]
    },
    {
        'floorUrls': [
            11,
            2,
            3,
        ]
    },
    {
        'floorUrls': [
            1,
            2,
            3,
            4
        ]
    },
    {
        'floorUrls': [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        'floorUrls': [
            1,
            2,
            3
        ]
    },
];

const slider = document.getElementById("zoomer");
slider.oninput = function(){
    let value = parseInt(slider.value)+1;
    updateFloors(currentHouseNumber, value);
};

function loadFloorplanning(houseNumber){
    let floorImage = document.getElementById("floorImage");
    floorImage.src=house[houseNumber].floorUrls[0];
    setSliderRange(houseNumber);
}

function updateFloors(houseNumber, sliderValue){
    const floorImage = document.getElementById("floorImage");
    floorImage.src=house[houseNumber].floorUrls[sliderValue-1];
    let floorNumber = parseInt(sliderValue);
    $('#floor-count').html("Floor: " + floorNumber);
}

function setSliderRange(houseNumber){
    const slider = document.getElementById("zoomer");
    slider.max = setFloorAmount(houseNumber)-1;
    slider.value = 0;
    $('#floor-count').html("Floor: " + 1);
}

function setFloorAmount(houseNumber){
    let numberOfFloors = 0;
    for(let i = 0; i<house[houseNumber].floorUrls.length; i++){
        numberOfFloors++;
    }
    return numberOfFloors;
}
