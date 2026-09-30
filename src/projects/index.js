import DiscBrake from "./discBrake/DiscBrake";
import discBrake from "./discBrake/project";
import Cmm from "./cmm/Cmm";
import cmm from "./cmm/project";
import Geneva from "./geneva/Geneva";
import geneva from "./geneva/project";
import Drs from "./drs/Drs";
import drs from "./drs/project";
import Truck from "./truck/Truck";
import truck from "./truck/project";
import ShockAbsorber from "./shockAbsorber/ShockAbsorber";
import shockAbsorber from "./shockAbsorber/project";

const projects = [
  { ...discBrake, component: DiscBrake },
  { ...cmm, component: Cmm },
  { ...geneva, component: Geneva },
  { ...shockAbsorber, component: ShockAbsorber },
  { ...truck, component: Truck },
  { ...drs, component: Drs },
];

export default projects;