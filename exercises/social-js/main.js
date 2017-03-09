var soccerPlayer = {
    name: "Titus",
    age: 24,
    injuries:["acl","femur","broken-toes"],
    soccerPals:[
        {
            name: "Lucy",
            age: 24,
            injuries:["bruised-heel","twisted ankle"],
            soccerPals:["ronald","pele","tiger"],
            favoriteSaying: function(){
                console.log("No guts! No Glory!");
            }
        },
        {
            name: "Jake",
            age: 27,
            injuries: ["headache","bad-neck","ribs"],
            soccerPals:[
                {
                name:"Ron",
                age:"7",
                injuries:["damaged"],
                soccerPals:["ron","rons","ronnie"]
                },
                {
                name:"Ryan",
                age:88,
                injuries:5},
                {
                name:"Turtle",
                age: 110,
                injuries: 1
                }
                       ]
        },        
        {
            name: "Nate",
            age: 42,
            injuries: ["pinky","broken-nose","ribs"],
            soccerPals:[
                {
                name:"Ron",
                age:"7",
                injuries:["damaged"],
                soccerPals:["ron","rons","ronnie"]
                },
                {
                name:"Ryan",
                age:66,
                injuries:2},
                {
                name:"Turtle",
                age:78,
                injuries: 4
                }
            ]
        }
    ]
}
soccerPlayer.shoes= "Red";
soccerPlayer.soccerPals[0].shoes= "blue";
console.log(soccerPlayer.soccerPals[1]);
soccerPlayer.soccerPals[2].soccerPals[0].soccerPals.push("Lucy");

soccerPlayer.injuries.push("bigFingers");
soccerPlayer.soccerPals[2]

//return(soccerPlayer.soccerPals[0].favoriteSaying());
