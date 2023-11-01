// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
// current this function equals 43 which means someValue is 43
if (someValue === 43)
    return someValue - 42
else if (someValue < 42)
    return (42 - someValue)
else (someValue === 50)
    return someValue - 42
}


function distanceFromHqInFeet(someValue){
    // 264 ft = 1 block
    if (someValue === 43)
        return ((someValue - 42) * 264)
    else if (someValue < 42)
        return ((42 - someValue) * 264)
    else (someValue === 50)
        return ((someValue - 42) * 264)
}
   
function distanceTravelledInFeet(start, destination){
    // returns the number of feet traveled
    if (start === 43 && destination === 48)
        return ((destination - start) *264)
    else if (destination < start)
        return ((start - destination) *264)
    else (start === 50 && destination === 60)
        return ((destination - start) *264)
}



function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    //  also equals to ((destination - start) *264)
    const dist = distance - 400
    //returns the fare for the customer
if (distance <= '400') {
    return (0)
// 0 to 400 feet are free
} else if (distance > 400 && distance < 2000) {
    return (dist * 0.02)
// 2 cents per foot starting with 401 feet and up
} else if (distance > 2000 && distance < 2500) {
    return (25)
// $25 for 2001 and up
} else if (distance > 2500) {
    return ('cannot travel that far')
  }
//  doesnt allow 2501 and up returns 'cannot travel that far'
}