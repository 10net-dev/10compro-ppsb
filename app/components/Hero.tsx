import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Truspilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
  return (
    // <section className="flex items-center justify-center absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] h-[90vh] ">
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Gradient Top Lite Red Gradient */}
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,0,0,0.13)_0,rgba(255,0,0,0)_50%,rgba(255,0,0,0)_100%)]"></div> */}
        
        {/* Gradient Top Red Gradient V1*/}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen -translate-x-[0%] -translate-y-[70%] rounded-full bg-[rgba(255,0,0,0.5)] opacity-50 blur-[80px]"></div>
        </div>  */}

        {/* Gradient Top Red Gradient V2*/}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(254,0,0,0.3),rgba(255,255,255,0))]"></div>
        </div>  */}
        {/* Gradient Bottom Red Gradient */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen -translate-x-[0%] translate-y-[90%] rounded-full bg-[rgba(255,0,0,0.5)] opacity-50 blur-[80px]"></div>
        </div>  */}
        {/* Gradient Red Slope */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#dc2627_100%)]"></div>
        </div> */}
        {/* Table Cloth  */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div> */}
        {/* Big Table Cloth and Gradient */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
          <div className="absolute h-screen w-screen bg-[radial-gradient(circle_500px_at_50%_200px,#ff0008,transparent)] opacity-20"></div>
        </div> */}
        {/* Subtle Polkadot */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:16px_16px]"></div>
        </div> */}
        {/* Ambient Light */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
        </div> */}
        {/* Gaussian Blur */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px)]">
          <svg className="absolute h-screen w-screen" fill="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_106_41)">
                    <g filter="url(#filter0_f_106_41)">
                      <path d="M304 790.031C129.768 684.678 -406.4 1167.32 -413.584 1177.23C-718.041 1523.9 91.1496 1378.93 110.908 1378.93C-180.976 1161.92 286.936 941.307 304 790.031Z" fill="#3B37FF"></path>
                      <path d="M161.807 644.898C161.554 520.595 -136.124 671.417 -284.931 762.366C-403.337 932.004 -13.0687 1192.9 1.35155 1035.57C23.94 789.128 162.125 800.276 161.807 644.898Z" fill="#37E7FF"></path>
                      <path d="M121.085 684.621C125.261 544.097 -214.984 734.315 -385.628 846.989C-555.644 959.056 16.778 1314.39 -102.496 1145.13C-221.77 975.865 115.866 860.276 121.085 684.621Z" fill="#FF37D3"></path>
                      <path d="M97.589 685.346C0.588959 626.846 -297.911 894.846 -301.911 900.346C-471.411 1092.85 -20.911 1012.35 -9.91104 1012.35C-172.411 891.846 88.089 769.346 97.589 685.346Z" fill="#EB1B1B"></path>
                      <path d="M98.8172 786.222C105.645 707.089 -155.821 865.52 -287.408 954.627C-342.535 990.996 -241.058 1042.93 -137.111 1149.4C-33.164 1255.87 -1.43155 1149.01 -6.87316 1007.24C-12.3148 865.481 90.2819 885.138 98.8172 786.222Z" fill="#FFF500"></path>
                      <path d="M79.6747 793.766C70.5845 765.971 -181.806 928.87 -306.865 1013.79C-207.001 1086.12 -12.6963 1207.5 -34.3905 1114.39C-61.5083 998.009 -9.31017 919.777 18.4035 892.264C46.1172 864.751 91.0373 828.51 79.6747 793.766Z" fill="white"></path>
                    </g>
                    <g filter="url(#filter1_f_106_41)" className="gausian-blur-dodge" >
                      <path d="M285.396 691.649C91.9932 627.999 -322.445 1218.47 -327.229 1229.74C-546.3 1635.8 209.859 1313.26 229.116 1308.83C-103.959 1162.72 302.65 842.904 285.396 691.649Z" fill="#3B37FF"></path>
                      <path d="M135.808 620.898C135.554 496.595 -162.124 647.417 -310.931 738.366C-429.337 908.004 -39.0683 1168.9 -24.648 1011.57C-2.05946 765.128 136.125 776.276 135.808 620.898Z" fill="#37E7FF"></path>
                      <path d="M264.085 728.029C295.212 662.809 -38.8403 870.317 -242.627 890.397C-412.644 1002.46 159.778 1357.79 40.5042 1188.53C-78.7699 1019.27 188.395 886.626 264.085 728.029Z" fill="#FF37D3"></path>
                      <path d="M63.2555 586.832C-45.5052 555.172 -265.269 890.776 -267.724 897.118C-382.172 1126.66 32.6034 933.287 43.2353 930.466C-144.738 855.683 75.6212 670.458 63.2555 586.832Z" fill="#EB1B1B"></path>
                      <path d="M154.112 907.632C199.29 842.305 -106.329 850.19 -264.786 862.298C-330.693 866.536 -268.337 961.966 -230.885 1105.97C-193.433 1249.98 -112.876 1172.93 -47.2874 1047.13C18.301 921.334 97.6386 989.29 154.112 907.632Z" fill="#FFF500"></path>
                      <path d="M129.742 813.25C121.087 785.316 -133.815 944.257 -260.183 1027.22C-161.46 1101.1 30.9269 1225.49 10.6881 1132.06C-14.6104 1015.27 38.8021 937.856 66.9417 910.779C95.0813 883.702 140.561 848.167 129.742 813.25Z" fill="white"></path>
                    </g>
                    <g filter="url(#filter2_f_106_41)">
                      <path d="M1140.7 659.115C1237.3 776.059 1733.06 568.547 1740.55 563.349C2039.92 394.456 1529.82 270.985 1515.93 266.125C1515.82 644.929 1189.91 556.934 1140.7 659.115Z" fill="#3B37FF"></path>
                      <path d="M1098.22 512.71C1192.56 619.584 1652.14 410.657 1659.02 405.566C1935.22 238.529 1542.85 63.0972 1529.64 58.9411C1467.33 354.141 1305.24 419.284 1098.22 512.71Z" fill="#37E7FF"></path>
                      <path d="M1188.06 528.72C1386.37 555.048 1559.14 355.019 1562.99 269.094C1509.96 68.883 1450.87 -249.17 1437.38 84.2393C1422.27 457.75 890.157 489.171 1188.06 528.72Z" fill="#FF37D3"></path>
                      <path d="M1180.14 483.812C1170.93 546.68 1458.32 445.558 1585.1 347.02C1740.62 149.026 1606.16 -64.3923 1485.77 165.155C1449.31 234.678 1448.21 346.131 1273.18 409.921C1235.35 423.707 1182.62 466.882 1180.14 483.812Z" fill="white"></path>
                    </g>
                    <g filter="url(#filter3_f_106_41)" className="gausian-blur-dodge">
                      <path d="M1075.07 624.68C1183.34 665.319 1928.88 307.765 1991.15 478.431C2448.34 220.503 1669.33 31.9428 1648.11 24.5205C1670.96 -99.9098 1041.44 188.527 1075.07 624.68Z" fill="#3B37FF"></path>
                      <path d="M1157.15 586.417C1251.49 693.29 1711.07 484.363 1717.95 479.272C1994.15 312.236 1601.78 136.804 1588.57 132.648C1526.26 427.847 1364.17 492.99 1157.15 586.417Z" fill="#37E7FF"></path>
                      <path d="M1277.57 295.664C1475.88 321.992 1648.65 121.962 1652.5 36.0375C1599.47 -164.174 1540.38 -482.226 1526.89 -148.817C1511.78 224.693 979.665 256.114 1277.57 295.664Z" fill="#FF37D3"></path>
                      <path d="M1224.1 465.095C1214.89 527.963 1502.28 426.841 1629.07 328.302C1784.59 130.309 1650.12 -83.1096 1529.74 146.438C1493.27 215.961 1492.17 327.414 1317.14 391.203C1279.31 404.99 1226.58 448.165 1224.1 465.095Z" fill="white"></path>
                    </g>
                    <g filter="url(#filter4_f_106_41)">
                      <path d="M664.474 107.87C641.358 124.696 170.932 248.337 252.874 -365.067C364.865 -442.45 573.937 -82.0188 664.474 107.87Z" fill="#37E7FF"></path>
                      <path d="M393.411 -410.629C304.927 -322.705 264.346 -131.269 559.222 44.9769C895.049 245.699 621.708 -244.567 393.411 -410.629Z" fill="#3B37FF"></path>
                    </g>
                    <g filter="url(#filter5_f_106_41)" className="gausian-blur-dodge">
                      <path d="M574.831 -4.21438C548.914 8.94132 102.388 98.0663 399.01 -400.636C523.041 -460.996 567.904 -161.505 574.831 -4.21438Z" fill="#37E7FF"></path>
                      <path d="M167.001 -411.685C94.0128 -286.811 109.91 -42.5197 506.461 122.1C958.082 309.582 483.689 -247.587 167.001 -411.685Z" fill="#3B37FF"></path>
                    </g>
                    <g filter="url(#filter6_f_106_41)">
                      <path d="M769.312 668.888C713.944 557.598 514.063 824.819 421.044 972.341C390.178 1176.9 855.682 1237.6 798.814 1090.2C709.734 859.309 662.489 874.183 769.312 668.888Z" fill="#3B37FF"></path>
                      <path d="M654.567 580C696.502 663.067 791.358 1013.32 715.491 1029.57C836.162 1255.9 919.082 805.839 922.947 795.54C753.034 905.341 729.873 618.408 654.567 580Z" fill="#EB1B1B"></path>
                    </g>
                    <g filter="url(#filter7_f_106_41)" className="gausian-blur-dodge">
                      <path d="M898.312 681.889C842.943 570.598 643.063 837.82 550.044 985.341C519.178 1189.9 984.682 1250.6 927.814 1103.2C838.733 872.309 791.488 887.183 898.312 681.889Z" fill="#3B37FF"></path>
                      <path d="M659.751 623.067C701.685 706.135 796.541 1056.39 720.674 1072.64C841.345 1298.97 924.265 848.906 928.13 838.608C758.217 948.408 735.057 661.476 659.751 623.067Z" fill="#EB1B1B"></path>
                    </g>
                  </g>
                  <defs>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="1011.21" id="filter0_f_106_41" width="986" x="-582" y="497.789">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="1060.69" id="filter1_f_106_41" width="852.948" x="-467.015" y="473.789">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="955.751" id="filter2_f_106_41" width="936.951" x="997.614" y="-160.955">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="1121.94" id="filter3_f_106_41" width="1260.95" x="973.772" y="-394.011">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="739.821" id="filter4_f_106_41" width="672.933" x="143.302" y="-510.629">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="771.866" id="filter5_f_106_41" width="759.207" x="33.001" y="-511.685">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="791.621" id="filter6_f_106_41" width="703.374" x="319.573" y="480">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="761.554" id="filter7_f_106_41" width="584.064" x="448.572" y="523.067">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                      <feGaussianBlur result="effect1_foregroundBlur_106_41" stdDeviation="50"></feGaussianBlur>
                    </filter>
                    <clipPath id="clip0_106_41">
                      <rect fill="white" height="800" width="1440"></rect>
                    </clipPath>
                  </defs>
                </svg>
          </div>
        </div> */}

        {/* Corner Mesh Gradient */}
        {/* <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen tablecloth">
            <svg className="absolute blur-3xl -right-96 -top-80" fill="none" viewBox="0 0 400 400" height="80%" width="80%" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#6551f3"></path>
                </g>
              </g>
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
            <svg className="absolute blur-3xl -bottom-64 left-[-30rem]" fill="none" viewBox="0 0 400 400" height="60%" width="60%" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#fc0808"></path>
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#fc0808"></path>
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#fc0808"></path>
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#e84f4f"></path>
                </g>
              </g>
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>  */}

        {/* Full Mesh Gradient */}
        <div className="absolute inset-0 z-2">
          <div className="absolute h-screen w-screen bg-gradient-to-t from-[#ffffff] items-center to-[#f3f3f3]">
            <svg className="absolute" fill="none" height="100%" viewBox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_17_17)">
                <g filter="url(#filter0_f_17_17)">
                  <path d="M128.6 0H0V322.2L51.5 67.5L128.6 0Z" fill="#EB03FF"></path>
                  <path d="M0 322.2V400H240H320L51.5 67.5L0 322.2Z" fill="#FF0F9F"></path>
                  <path d="M320 400H400V78.75L51.5 67.5L320 400Z" fill="#3A0D84"></path>
                  <path d="M400 0H128.6L51.5 67.5L400 78.75V0Z" fill="#FAD8F4"></path>
                </g>
              </g>
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_17_17" width="720.666" x="-160.333" y="-160.333">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_17_17" stdDeviation="80.1666"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div> 
        </div> 

        {/* Multi Mesh Gradient Bottom */}
        {/* <div className="absolute inset-0 z-2 -translate-x-[0%] translate-y-[90%]">
          <div className="absolute h-screen w-screen">
            <svg className="absolute -mt-24 blur-3xl" fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_10_20)">
                <g filter="url(#filter0_f_10_20)">
                  <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff0008"></path>
                  <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#db272d"></path>
                  <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                  <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"></path>
                </g>
              </g>
              <defs>
                <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                  <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div> */}


        <div className="z-10">
          <div className="max-w-5xl mx-auto text-center">
              <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
              <div>
                  <span className="w-auto px-6 py-3 rounded-full bg-secondary">
                  <span className="text-sm font-medium text-primary">
                      Innovative. Versatile. Customer-Centric
                  </span>
                  </span>

                  <h1 className="mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl">
                  PT Tennet Nasional Teknologi
                  </h1>

                  <p className="max-w-xl mx-auto mt-8 text-base lg:text-xl text-secondary-foreground">
                  Your Partner in Navigating Tomorrow's Technology
                  </p>
              </div>
          </div>
        </div>
        
          {/* <div className="mesh-gradient-pink-purple opacity-5"></div> */}
        <div className="absolute bottom-5 flex w-full flex-col items-center"></div>
      </div>
    </section>
  );
}
