import { Planet, Rover, Media } from '../models';

export interface PlanetState extends Omit<Planet,"circumference" | "surfaceArea">{} 

export const Planets: PlanetState[] = [{
id: "1",
name: "Mars",
diameter: 6779,
}]

export interface RoverState extends Omit<Rover, "planetVisited"> {
  planetVisited: String
}


export const Rovers: RoverState[] = [{
  id: "1",
  name: "Spirit",
  launchDate: new Date("2003-06-10T17:58:00.000Z"),
  status: "COMPLETED",
  planetVisited: "1",
  cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITIES"]
},
{
  id: "2",
  name: "Opportunity",
  launchDate: new Date('July 7, 2003, 23:18 EDT'),
  status: "COMPLETED",
  planetVisited: "1",
  cameras: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITIES"]
},
{
  id: "3",
  name: "Curiosity",
  launchDate: new Date('November 26, 2011, 10:02 EST'),
  status: "COMPLETED",
  planetVisited: "1",
  cameras: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"]
},
{
  id: "4",
  name: "Perseverance",
  launchDate: new Date('July 30, 2020 EST'),
  status: "IN_PROGRESS",
  planetVisited: "1",
  cameras: ["EDL_RUCAM", "EDL_RDCAM", "EDL_DDCAM", "EDL_PUCAM1", "EDL_PUCAM2", "NAVCAM_LEFT", "NAVCAM_RIGHT", "MCZ_RIGHT", "MCZ_LEFT", "FRONT_HAZCAM_LEFT_A", "FRONT_HAZCAM_RIGHT_A", "REAR_HAZCAM_LEFT", "REAR_HAZCAM_RIGHT", "SKYCAM", "SHERLOC_WATSON"]
}
]

export interface MediaState extends Omit<Media, "planet" | "rover">{
  planetName: String;
  roverName: String;
}
export const Medias: MediaState[] = [{
  id: "1",
  planetName: "Mars",
  roverName: "Perseverance",
  photos: [
    {
      id: "1",
      cameraName: "MCZ_RIGHT",
      dateTaken: "2021-02-22",
      url: "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00004/ids/fdr/browse/zcam/ZRF_0004_0667303280_000FDR_N0010052AUT_04096_110085J01_1200.jpg"
    }
  ]
},
{
  id: "1",
  planetName: "Mars",
  roverName: "Curiosity",
  photos: [
    {
      id: "1",
      cameraName: "MAST",
      dateTaken: "2012-08-09",
      url: "https://mars.nasa.gov/msl-raw-images/msss/00003/mcam/0003ML0000012000E1_DXXX.jpg"
    },
    {
      id: "2",
      cameraName: "NAVCAM",
      dateTaken: "2012-08-08",
      url: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00002/opgs/edr/ncam/NLA_397682493EDR_F0020000AUT_04096M_.JPG"
    }
  ]
}
]