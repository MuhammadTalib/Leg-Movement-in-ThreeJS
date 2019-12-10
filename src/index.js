import * as THREE from "three"
import { compileFunction } from "vm";

var scene = new THREE.Scene();
var camera =new THREE.OrthographicCamera(-100,100,-100,100,-100,1000)
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#fff");
renderer.setSize( 1000,1000 );
document.body.appendChild( renderer.domElement );

var Robot = new THREE.Object3D();
scene.add( Robot );
Robot.rotation.y-=Math.PI/4

var LeftLeg = new THREE.Object3D();


//Leg Socket
var geometry = new THREE.SphereGeometry( 4, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var LegSocket = new THREE.Mesh( geometry, material );
var edges = new THREE.EdgesHelper(LegSocket, 0x003333);
edges.material.linewidth = 0.5;
LegSocket.add(edges)
LegSocket.translateY(13)

var geometry = new THREE.ConeGeometry( 10, 20, 4 );
var material = new THREE.MeshBasicMaterial( {color: 0xff8f00} );
var cone = new THREE.Mesh( geometry, material );
scene.add( cone );
var edges = new THREE.EdgesHelper(cone, 0xff3333);
edges.material.linewidth = 0.5;
cone.add(edges)
cone.translateX(50)

//Leg Upper
var Leggeo = new THREE.BoxGeometry( 8,20,8 );
var Legmat = new THREE.MeshBasicMaterial( { color:0xffbf00,vertexColors: THREE.FaceColors} );
var Leg = new THREE.Mesh( Leggeo, Legmat );
var edges = new THREE.EdgesHelper(Leg, 0xff3333);
edges.material.linewidth = 0.5;
Leg.add( edges );


//Leg Lower
var Thighgeo = new THREE.BoxGeometry( 8,20,8 );
var Thighmat = new THREE.MeshBasicMaterial( { color:0xffbf00,vertexColors: THREE.FaceColors} );
var Thigh = new THREE.Mesh( Thighgeo, Thighmat );
Thigh.position.y+=25
var edges = new THREE.EdgesHelper(Thigh, 0xff3333);
edges.material.linewidth = 0.5;
Thigh.add(edges)


//Drawing Leg
LeftLeg.add(LegSocket)
LeftLeg.add(Leg)
LeftLeg.add(Thigh)

//Right Leg
var RightLeg=LeftLeg.clone()
RightLeg.position.x+=20

//Adding Prts in Robot
Robot.add( LeftLeg );
Robot.add( RightLeg );

Robot.position.x-=20
console.log("Robot",Robot)

var rotationFactor=0.01
var rotationQuant=0

function moveLeg(){
  if(rotationQuant<=Math.PI/4){
    // rotationQuant+=0.01
    // LeftLeg.children[2].rotation.x+=rotationFactor
  }else if(rotationQuant>=0){
    // LeftLeg.children[2].rotation.x-=0.01
    
    // rotationQuant=rotationQuant-0.01
    //LeftLeg.position.z+=0.5
  }
}



var render = function () {
  cone.rotation.y+=0.01
  moveLeg()
  // LeftLeg.children[1].rotation.x+=0.01
  // RightLeg.children[1].rotation.x+=0.01

  // LeftLeg.children[2].rotation.x+=0.01
  // RightLeg.children[2].rotation.x+=0.01
   // Robot.rotation.x+=0.01
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

render();