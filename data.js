var APP_DATA = {
  "scenes": [
    {
      "id": "0-ext1",
      "name": "EXT1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.004175748860284045,
        "pitch": -0.04079933209768072,
        "fov": 1.0609204322191137
      },
      "linkHotspots": [
        {
          "yaw": -0.21626850026675015,
          "pitch": 0.023139176454733956,
          "rotation": 0,
          "target": "1-ext2"
        },
        {
          "yaw": -0.0925233821339333,
          "pitch": 0.010854589112172519,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ext2",
      "name": "EXT2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1610827856724555,
          "pitch": 0.022656236094842797,
          "rotation": 0,
          "target": "0-ext1"
        },
        {
          "yaw": -0.4912693202949434,
          "pitch": 0.024304342841283244,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4157507188543619,
          "pitch": 0.15274166128498656,
          "rotation": 0,
          "target": "1-ext2"
        },
        {
          "yaw": 1.197777428852504,
          "pitch": 0.03532322158601886,
          "rotation": 0,
          "target": "0-ext1"
        },
        {
          "yaw": -1.121478587143649,
          "pitch": 0.1306435744022263,
          "rotation": 0,
          "target": "3-billiard1"
        },
        {
          "yaw": -0.09154229372454026,
          "pitch": 0.14371808655681484,
          "rotation": 0,
          "target": "4-cafe"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-billiard1",
      "name": "BILLIARD1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9340097703986938,
          "pitch": 0.10670100771194235,
          "rotation": 0,
          "target": "5-billiard2"
        },
        {
          "yaw": 1.978318817239658,
          "pitch": 0.1682415192527209,
          "rotation": 0,
          "target": "4-cafe"
        },
        {
          "yaw": -2.723036000298883,
          "pitch": 0.221698729970905,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 0.25064684458542885,
          "pitch": 0.06792540354642362,
          "rotation": 0,
          "target": "6-billiard3"
        },
        {
          "yaw": -0.3631720458117158,
          "pitch": 0.07273525064182707,
          "rotation": 0,
          "target": "7-billiard4"
        },
        {
          "yaw": 2.89663475901464,
          "pitch": 0.13676013782560936,
          "rotation": 0,
          "target": "1-ext2"
        },
        {
          "yaw": 2.6382961802428877,
          "pitch": 0.0518600747952096,
          "rotation": 0,
          "target": "0-ext1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cafe",
      "name": "CAFE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7255673311008923,
          "pitch": 0.08793504598472879,
          "rotation": 0,
          "target": "3-billiard1"
        },
        {
          "yaw": 1.8662142712064842,
          "pitch": 0.14423461750975086,
          "rotation": 0,
          "target": "5-billiard2"
        },
        {
          "yaw": -0.027455837255976334,
          "pitch": 0.1629340260032741,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 1.7521364977617155,
          "pitch": 0.06285949908431476,
          "rotation": 0,
          "target": "6-billiard3"
        },
        {
          "yaw": 1.148915457376905,
          "pitch": 0.05926876106959611,
          "rotation": 0,
          "target": "7-billiard4"
        },
        {
          "yaw": -0.6736799602509258,
          "pitch": 0.2068818758198372,
          "rotation": 0,
          "target": "1-ext2"
        },
        {
          "yaw": -1.5381822659917148,
          "pitch": 0.05951820797965546,
          "rotation": 0,
          "target": "0-ext1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-billiard2",
      "name": "BILLIARD2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2643156435261975,
          "pitch": 0.18175332538044486,
          "rotation": 0,
          "target": "4-cafe"
        },
        {
          "yaw": 1.036823399292743,
          "pitch": 0.08996216111617628,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 1.7166287837125545,
          "pitch": 0.10333130185382622,
          "rotation": 0,
          "target": "3-billiard1"
        },
        {
          "yaw": 2.48861373180158,
          "pitch": 0.07183273805729051,
          "rotation": 0,
          "target": "7-billiard4"
        },
        {
          "yaw": -3.101732106658524,
          "pitch": 0.11952998610978227,
          "rotation": 0,
          "target": "6-billiard3"
        },
        {
          "yaw": 0.2960713076564936,
          "pitch": -0.0014240542714354376,
          "rotation": 0,
          "target": "0-ext1"
        },
        {
          "yaw": 0.5590566311778566,
          "pitch": 0.08658292491965014,
          "rotation": 0,
          "target": "1-ext2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-billiard3",
      "name": "BILLIARD3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9074972375857477,
          "pitch": 0.1259888156352158,
          "rotation": 0,
          "target": "5-billiard2"
        },
        {
          "yaw": -0.2074291014347054,
          "pitch": 0.09606040740452215,
          "rotation": 0,
          "target": "3-billiard1"
        },
        {
          "yaw": -0.7478937133882493,
          "pitch": 0.08861596414943662,
          "rotation": 0,
          "target": "4-cafe"
        },
        {
          "yaw": -0.312229513501574,
          "pitch": 0.05640578719302525,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 0.6887169530595543,
          "pitch": 0.09768075499544437,
          "rotation": 0,
          "target": "7-billiard4"
        },
        {
          "yaw": 1.8585148704603611,
          "pitch": 0.12392439231328467,
          "rotation": 0,
          "target": "8-billiard5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-billiard4",
      "name": "BILLIARD4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3696461964021651,
          "pitch": 0.13039977764917765,
          "rotation": 0,
          "target": "6-billiard3"
        },
        {
          "yaw": 0.3529008396537989,
          "pitch": 0.07036246197362317,
          "rotation": 0,
          "target": "5-billiard2"
        },
        {
          "yaw": 1.207762071829178,
          "pitch": 0.1437046492119478,
          "rotation": 0,
          "target": "3-billiard1"
        },
        {
          "yaw": 1.36586610520912,
          "pitch": 0.09755561096331888,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": 0.8129242363573894,
          "pitch": 0.06451017582723395,
          "rotation": 0,
          "target": "4-cafe"
        },
        {
          "yaw": -1.42541914965922,
          "pitch": 0.12695282506200378,
          "rotation": 0,
          "target": "8-billiard5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-billiard5",
      "name": "BILLIARD5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39423791621446824,
          "pitch": 0.13082712359341642,
          "rotation": 0,
          "target": "7-billiard4"
        },
        {
          "yaw": -0.7385781196641847,
          "pitch": 0.10842703456457947,
          "rotation": 0,
          "target": "6-billiard3"
        },
        {
          "yaw": 0.22297131569337125,
          "pitch": 0.044503365600318645,
          "rotation": 0,
          "target": "2-lobby"
        },
        {
          "yaw": -0.1469448343634756,
          "pitch": 0.04669471734239039,
          "rotation": 0,
          "target": "4-cafe"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
