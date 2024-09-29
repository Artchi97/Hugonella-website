import Nela1l from "./assets/nela/Nela1-large.jpg";
import Nela2l from "./assets/nela/Nela2-large.jpg";
import NelaDiplomaL from "./assets/nela/Nela-diploma-large.jpg";
import NelaPosterL from "./assets/nela/Nela-plakat-large.jpg";
import Hugo1l from "./assets/hugo/Hugo1-large.jpg";
import Hugo2l from "./assets/hugo/Hugo2-large.jpg";
import Hugo3l from "./assets/hugo/Hugo3-large.jpg";
import Aika1l from "./assets/aika/Aika1-large.jpg";
import Aika2l from "./assets/aika/Aika2-large.jpg";
import AikaDiplomaL from "./assets/aika/Aika-diploma-large.jpg";
import AikaDiploma2l from "./assets/aika/Aika-diploma2-large.jpg";
import AikaPosterL from "./assets/aika/Aika-plakat-large.jpg";
import Kora1l from "./assets/kora/Kora1-large.jpg";
import Kora2l from "./assets/kora/Kora2-large.jpg";
import Kora3l from "./assets/kora/Kora3-large.jpg";
import KoraDiplomaL from "./assets/kora/Kora-diploma-large.jpg";
import KoraPosterL from "./assets/kora/Kora-plakat-large.jpg";
import Ana1l from "./assets/ana/Ana1-large.jpg";
import Ana2l from "./assets/ana/Ana2-large.jpg";
import Ana3l from "./assets/ana/Ana3-large.jpg";
import Ana4l from "./assets/ana/Ana4-large.jpg";
import AnaDiplomaM from "./assets/ana/Ana-diploma1-medium.jpg";
import AnaDiploma2M from "./assets/ana/Ana-diploma2-medium.jpg";
import AnaPosterL from "./assets/ana/Ana-plakat-large.jpg";
import Frida1l from "./assets/frida/Frida1-large.jpg";
import Frida2l from "./assets/frida/Frida2-large.jpg";
import Frida3l from "./assets/frida/Frida3-large.jpg";
import Frida4l from "./assets/frida/Frida4-large.jpg";
import Frida5l from "./assets/frida/Frida5-large.jpg";
import Frida6l from "./assets/frida/Frida6-large.jpg";
import Frida7l from "./assets/frida/Frida7-large.jpg";
import Teddy1l from "./assets/teddy/Teddy1-large.jpg";
import Teddy2l from "./assets/teddy/Teddy2-large.jpg";
import Teddy3l from "./assets/teddy/Teddy3-large.jpg";
import Teddy4l from "./assets/teddy/Teddy4-large.jpg";
import Teddy6l from "./assets/teddy/Teddy6-large.jpg";
import River1l from "./assets/river/River1-large.jpg";
import River2l from "./assets/river/River2-large.jpg";
import River3l from "./assets/river/River3-large.jpg";
import River4l from "./assets/river/River4-large.jpg";

const dogsData = [
  {
    dogName: "Nela",
    fullName: "BUENA LADY z Alei Dębowej",
    birthday: "27.02.2015r.",
    parents: "POTTER Labkolandia & EMMA CARAMELLA od Himalajskego Cedru",
    dogDesciption: "",
    images: [Nela2l, Nela1l, NelaPosterL, NelaDiplomaL],

    tests: [
      "HD- A",
      "ED- 0/0",
      "OptiGen-B",
      "EIC,CNM,MD,RD/OSD- clear",
      "HNPK-carrier",
      "EEbb- pur chocolate",
    ],
    lineage: "https://www.k9data.com/pedigree.asp?ID=989493",
    status: "retired",
    titles: [],
  },
  {
    dogName: "Hugo",
    fullName: "LARGO Pati-Żako i Labusie",
    birthday: "19.06.2015r.",
    parents: "JAZZMAN Molto Bene & PANAMA Urok Pojezierza",
    dogDesciption: "",
    images: [Hugo1l, Hugo2l, Hugo3l],

    tests: "",
    lineage: [],
    status: "retired",
    titles: [],
  },
  {
    dogName: "Aika",
    fullName: "AIKA HugoNella",
    birthday: "31.12.2016r.",
    parents: "CEDARWOOD Play Mor So Much Mor & BUENA LADY z Alei Dębowej",
    dogDesciption: "",
    images: [Aika1l, Aika2l, AikaDiplomaL, AikaDiploma2l, AikaPosterL],
    tests: ["HD-A", "ED-0/0", "EIC,CNM,PRA-prcd - clear", "HNPK- carrier"],
    lineage: "https://www.k9data.com/pedigree.asp?ID=989487",
    status: "retired",
    titles: [
      "Champion Polski",
      "Młodzieżowy Champion Polski",
      "Młodzieżowy Champion Węgier",
      "Nominacja na Crufts 2019",
    ],
  },
  {
    dogName: "Kora",
    fullName: "PRINCESS KORA HugoNella",
    birthday: "02.07.2019r.",
    parents: "Madabout’s KISS IN MOTION & AIKA HugoNella",
    dogDesciption: "",
    images: [Kora2l, Kora3l, Kora1l, KoraDiplomaL, KoraPosterL],
    tests: [
      "HD-A",
      "ED-0/0",
      "EIC,CNM,PRA-prcd- clear by parentage",
      "HNPK-carrier",
    ],
    lineage: "https://www.k9data.com/pedigree.asp?ID=1009638",
    status: "retired",
    titles: ["Champion Polski"],
  },
  {
    dogName: "Ana",
    fullName: "CHRISTMAS LITTLE ANGEL HugoNella",
    birthday: "25.12.2020r.",
    parents: "Play Mor WORTH WAITING FOR & AIKA HugoNella",
    dogDesciption: "",
    images: [Ana2l, Ana1l, Ana3l, Ana4l, AnaDiplomaM, AnaDiploma2M, AnaPosterL],
    tests: [
      "HD-A",
      "ED-0/0",
      "EIC,CNM,PRA-prcd- clear by parentage",
      "HNPK-carrier",
    ],
    lineage: "https://www.k9data.com/pedigree.asp?ID=1153187",
    status: "active",
    titles: ["Champion Polski", "Młodzieżowy Champion Polski"],
  },
  {
    dogName: "Frida",
    fullName: "Passion of my life INDIA",
    birthday: "06.06.2022",
    parents:
      "PLCh, HUCh Poland Winner ’23 ’24 Passion of my life DJANGO & Ch ZODIACAL LIGHT z Grodu Hrabiego Malmesbury",
    dogDesciption: "",
    images: [Frida2l, Frida1l, Frida3l, Frida4l, Frida5l, Frida6l, Frida7l],
    tests: ["HD-A", "ED-0/0", "OCD-FREE"],
    lineage: "https://www.k9data.com/pedigree.asp?ID=1355471",
    status: "active",
    titles: [],
  },
  {
    dogName: "Teddy",
    fullName: "SWEET TEDDY HugoNella",
    birthday: "30.12.2022r.",
    parents: "Greenstone’s Earl Grey At Salt Creek & PRINCESS KORA HugoNella",
    dogDesciption: "",
    images: [Teddy6l, Teddy1l, Teddy2l, Teddy3l, Teddy4l],

    tests: [
      "HD-A",
      "ED-0/0",
      "OCD-FREE",
      "EIC,CNM,DM,RD/OSD,prcd-PRA,SD2- CLEAR",
      "HNPK-carrier",
      "Eebb-chocolate carrying yellow",
      "Long coat- L/L",
    ],
    lineage: "https://www.k9data.com/pedigree.asp?ID=1286200",
    status: "active",
    titles: ["Champion Polski Młodzieży"],
  },
  {
    dogName: "River",
    fullName: "RIVER HugoNella",
    birthday: "09.12.2023r.",
    parents: "Play Mor DREAM CATCH HER & AIKA HugoNella",
    dogDesciption: "",
    images: [River1l, River2l, River3l, River4l],
    tests: [],
    lineage: [],
    status: "active",
    titles: ["Champion Polski Szczeniąt"],
  },
];

export default dogsData;
