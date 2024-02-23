import Image from "next/image";
import Link from "next/link";

import configCopy from "../config";
import Detik from "./../../public/assets/news-detiktravel.png"
import Kompas from "./../../public/assets/news-kompascom.png"
import Kumparan from "./../../public/assets/news-kumparan.png"
import IdnTimes from "./../../public/assets/news-idntimes.png"
import Sindonews from "./../../public/assets/news-sindonews.png"
import PPSB from "./../../public/assets/PPSB.png";

// const Detik = './../public/assets/news-detiktravel.png';
// const Kompas = './../public/assets/news-kompascom.png';
// const Kumparan = './../public/assets/news-kumparan.png';
// const IdnTimes = './../public/assets/news-idntimes.png';
// const SindoNews = './../public/assets/news-sindonews.png';

const news =  {
    header: "Spotlight",
    detail: "As Seen on News",
    list: [
      {media:"Detik",logo:{Detik}, url:""},
      {media:"Kompas",logo:{Kompas}, url:""},
        // {media:"Sindonews",logo:{SindoNews}, url:""},
        // {media:"Kumparan",logo:{Kumparan}, url:""},
        // {media:"IDN Times",logo:{IdnTimes}, url:""},
    ],
}

export function News() {
  return (
    <div className="flex flex-col gap-y-[8px] py-[8px] lg:py-[40px] lg:gap-y-[20px] w-full">
        <div className="container flex flex-col justify-center px-0">
          <div className="flex flex-col text-center w-full mb-10 ">
            <h2 className="text-xs text-lime-800 tracking-widest font-medium title-font mb-1">
              {news.header}
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              {news.detail} 
            </h1>
          </div>

          <div className="flex flex-wrap justify-center mt-8 md:justify-around bg-gray-300 rounded-[4px] w-full">
            
              <div className="py-8 text-gray-400 dark:text-gray-400 grayscale">
                <Link href="https://travel.detik.com/domestic-destination/d-4579726/ini-4-hal-menarik-di-rest-area-km-260b-banjaratma-brebes" target="_blank">
                  <Image 
                    src={Detik}
                    width="100"
                    height="100"
                    className="h-8 w-auto mr-2" 
                    alt="Detik"/>
                </Link>
              </div>
              <div className="py-8 text-gray-400 dark:text-gray-400 grayscale">
                <Link href="https://www.kompas.com/properti/read/2019/06/10/172127721/megahnya-rest-area-km-260b-menelusuri-jejak-sejarah-pabrik-gula" target="_blank">
                  <Image 
                    src={Kompas}
                    width="100"
                    height="100"
                    className="h-8 w-auto mr-2" 
                    alt="Kompas"/>
                </Link>
              </div>
              <div className="py-8 text-gray-400 dark:text-gray-400 grayscale">
                <Link href="https://kumparan.com/jendela-dunia/21sidYkbq3G" target="_blank">
                  <Image 
                    src={Kumparan}
                    width="100"
                    height="100"
                    className="h-8 w-auto mr-2" 
                    alt="Kumparan"/>
                </Link>
              </div>
              <div className="py-8 text-gray-400 dark:text-gray-400 grayscale">
                <Link href="https://www.idntimes.com/automotive/car/seo-intern/rest-area-banjaratma" target="_blank">
                  <Image 
                    src={IdnTimes}
                    width="100"
                    height="100"
                    className="h-8 w-auto mr-2" 
                    alt="IDN Times"/>
                </Link>
              </div>
              <div className="py-8 text-gray-400 dark:text-gray-400 grayscale">
                <Link href="https://ekbis.sindonews.com/berita/1389571/34/bumn-sinergi-dorong-pengembangan-umkm-di-rest-area" target="_blank">
                  <Image 
                    src={Sindonews}
                    width="100"
                    height="100"
                    className="h-8 w-auto mr-2" 
                    alt="Sindonews"/>
                </Link>
              </div>
          </div>
        </div>

    </div>
  );
}
