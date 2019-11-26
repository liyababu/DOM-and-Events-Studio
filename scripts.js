// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let rocket = document.getElementById("rocket");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    rocket.style.bottom = "0px";
    rocket.style.right = "0px"
    rocket.style.position = "absolute";
    let takeoff = document.getElementById("takeoff");
          takeoff.addEventListener("click", function (event) {
              window.confirm("Confirm that the shuttle is ready for takeoff.");
              document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
              document.getElementById("shuttleBackground").style.backgroundColor = "blue";
              document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    
     });

     let landing = document.getElementById("landing");
     landing.addEventListener("click", function (event) {
         window.alert("The shuttle is landing. Landing gear engaged.");
         document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
         document.getElementById("shuttleBackground").style.backgroundColor = "green";
         document.getElementById("spaceShuttleHeight").innerHTML = 0;

});

let missionAbort = document.getElementById("missionAbort");
     missionAbort.addEventListener("click", function (event) {
         window.confirm("Confirm that you want to abort the mission.");
         document.getElementById("flightStatus").innerHTML = "Mission Aborted";
         document.getElementById("shuttleBackground").style.backgroundColor = "green";
         document.getElementById("spaceShuttleHeight").innerHTML = 0;

});

let up = document.getElementById("up");
    up.addEventListener("click", function (event){
        let movement = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
    });

    let down = document.getElementById("down");
    down.addEventListener("click", function (event){
        let movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000
      
    });   

    let right = document.getElementById("right");
    right.addEventListener("click", function (event){
        let movement = parseInt(rocket.style.right) - 10 + 'px';
        rocket.style.right = movement;
      
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function (event){
        let movement = parseInt(rocket.style.right) + 10 + 'px';
        rocket.style.right = movement;
      
    });

});
