import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export const UnipixExactAbout: React.FC = () => {
  const { locale } = useI18n();
  const [videoOpen, setVideoOpen] = useState(false);

  // Parallax scroll effect: as user scrolls past this section, the image stays relatively stationary/moves gently
  // creating the "fixed in background window" animation effect (matching Unipix Jarallax)
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // When container enters viewport at bottom (0): image is at 0% (revealing the clock tower/dome at top)
  // When container leaves viewport at top (1): image is translated up by -26% (revealing the ground walkway & entrance)
  const imageY = useTransform(smoothProgress, [0, 1], ['0%', '-26%']);

  return (
    <section className="py-24 bg-white text-ink overflow-hidden border-b border-black/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
        {/* ============================================================== */}
        {/* TOP ROW: "Empowering Minds, Enriching Lives" + "Establish 1995" + Laurel Crest */}
        {/* ============================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-4">
          {/* Left Title: 2 lines in majestic display font */}
          <div className="max-w-xl">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.08]"
              style={{
                fontFamily: '"Playfair Display", "Cinzel", "Times New Roman", Georgia, serif',
              }}
            >
              Empowering Minds, <br />
              Enriching Lives
            </h2>
          </div>

          {/* Right Trust Badge: "Establish 2026" + Laurel Crest Emblem (matching screenshot exactly) */}
          <div className="flex items-center gap-6 self-start lg:self-center">
            {/* Number + Label */}
            <div className="flex flex-col text-right">
              <span className="text-xs font-semibold text-ink-55 tracking-wider uppercase mb-1">
                Establish
              </span>
              <span
                className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[#890C25] tabular-nums tracking-tight leading-none"
                style={{
                  fontFamily: '"Playfair Display", "Times New Roman", Georgia, serif',
                }}
              >
                2026
              </span>
            </div>

            {/* Circular Laurel Wreath Crest Emblem SVG (exact from Unipix) */}
            <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 shrink-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 146 140"
                fill="none"
                className="w-full h-full text-[#890C25]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M74.276 118.629C76.0694 103.439 85.5298 89.3135 94.6413 84.7053C88.0191 76.2 84.235 65.0104 83.1392 56.5042H72.982H62.8743C61.7291 65.0104 57.945 76.2 51.3228 84.7053C60.4343 89.3134 69.9449 103.439 71.7374 118.629V83.7944C70.2435 83.2885 69.1477 81.8196 69.1477 80.0981C69.1477 77.9718 70.8909 76.2001 72.982 76.2001C75.1233 76.2001 76.8164 77.9718 76.8164 80.0981C76.8164 81.8196 75.77 83.2885 74.276 83.7944V118.629ZM72.982 39.2393L99.4719 46.53L83.1392 50.985V54.8337H62.8743V50.985L60.0361 50.2255L73.131 47.4408C73.4304 47.3907 73.6295 47.087 73.5299 46.7324V46.6813C73.4797 46.8845 73.3299 47.036 73.131 47.0869L57.8454 50.3275V56.0991C58.0948 56.3015 58.2938 56.6052 58.2938 57.0101C58.2938 57.2635 58.1934 57.5171 58.0445 57.7194L58.1934 58.1745L59.1394 61.466H57.2474H55.3554L56.3014 58.1745L56.4512 57.6684C56.3014 57.466 56.2028 57.2635 56.2028 57.0101C56.2028 56.6052 56.4018 56.3016 56.6995 56.0991V50.4286C56.6995 49.9727 56.6502 49.4156 56.8492 49.3645L46.4922 46.5297L72.982 39.2393Z"
                  fill="#890C25"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M109.579 125.312C106.492 124.957 103.604 126.274 101.812 128.603C103.007 131.286 105.546 133.261 108.633 133.615C111.72 134.02 114.608 132.653 116.4 130.324C115.206 127.641 112.666 125.666 109.579 125.312ZM97.8284 131.59C94.8907 130.577 91.7541 131.235 89.5625 133.159C90.2108 136.046 92.2517 138.526 95.1894 139.539C98.1772 140.552 101.264 139.843 103.505 137.919C102.858 135.084 100.816 132.603 97.8284 131.59ZM112.218 29.2137C113.861 31.4923 116.4 32.7077 118.94 32.7579L119.339 33.2138C126.708 42.1247 131.189 52.7573 132.632 63.8457C134.077 74.8831 132.484 86.3763 127.654 96.9076C122.823 107.439 115.206 116.046 105.994 122.071C98.5751 126.83 90.0609 129.97 81.1484 131.033V132.754C90.4097 131.691 99.2226 128.502 106.89 123.54C116.4 117.363 124.268 108.451 129.197 97.6161C134.177 86.7812 135.819 74.9842 134.325 63.5923C132.832 52.2002 128.251 41.2641 120.683 32.0996L120.235 31.5935C120.882 29.1125 120.434 26.378 118.791 24.2015C116.948 21.6694 113.961 20.455 111.073 20.7075C110.027 23.4421 110.326 26.6825 112.218 29.2137ZM113.413 42.226C116.55 42.1248 119.189 40.3522 120.634 37.7701C119.039 35.2891 116.251 33.7198 113.164 33.821C110.027 33.9223 107.338 35.6948 105.944 38.2771C107.538 40.758 110.326 42.3272 113.413 42.226ZM119.289 52.7062C122.327 53.3646 125.314 52.3014 127.305 50.175C126.359 47.3904 124.02 45.1628 120.981 44.5045C117.944 43.8462 114.907 44.9094 112.916 47.0357C113.911 49.8205 116.201 52.048 119.289 52.7062ZM122.425 64.3007C125.263 65.7185 128.401 65.4149 130.89 63.8457C130.592 60.9089 128.848 58.1743 126.06 56.7574C123.272 55.3897 120.086 55.6433 117.646 57.2635C117.944 60.2003 119.637 62.8837 122.425 64.3007ZM122.774 76.3511C125.165 78.3762 128.3 78.8832 131.04 77.9714C131.487 75.0353 130.492 71.9463 128.101 69.9211C125.712 67.8959 122.526 67.3899 119.786 68.3009C119.339 71.2377 120.384 74.2758 122.774 76.3511ZM120.235 88.0978C122.027 90.68 124.965 91.9456 127.902 91.6921C128.998 88.9584 128.75 85.7691 126.907 83.1868C125.064 80.6046 122.127 79.3381 119.238 79.5916C118.143 82.3261 118.393 85.5156 120.235 88.0978ZM114.957 98.8826C116.102 101.819 118.641 103.794 121.529 104.249C123.273 101.92 123.769 98.6794 122.624 95.7433C121.43 92.8064 118.89 90.8825 116.052 90.3764C114.309 92.7562 113.811 95.9457 114.957 98.8826ZM107.289 108.046C107.687 111.186 109.729 113.717 112.368 114.882C114.608 113.008 115.853 110.021 115.454 106.882C115.007 103.743 113.015 101.261 110.326 100.047C108.085 101.92 106.841 104.907 107.289 108.046ZM97.6292 115.084C97.2804 118.223 98.6748 121.16 100.965 122.932C103.604 121.666 105.496 119.084 105.845 115.945C106.193 112.806 104.799 109.869 102.509 108.046C99.9194 109.312 97.978 111.894 97.6292 115.084ZM86.6257 119.489C85.5299 122.476 86.1764 125.666 87.9698 127.944C90.8079 127.387 93.2973 125.362 94.393 122.375C95.4377 119.388 94.8406 116.198 93.0488 113.92C90.1604 114.476 87.6704 116.502 86.6257 119.489ZM123.172 30.4794C123.123 33.6187 124.766 36.4544 127.205 38.0235C129.696 36.5046 131.389 33.7198 131.438 30.5805C131.438 27.391 129.845 24.6064 127.405 23.0371C124.865 24.5553 123.222 27.2899 123.172 30.4794ZM130.541 41.6689C129.845 44.7572 130.841 47.8464 132.932 49.9217C135.67 48.9598 137.911 46.631 138.558 43.5427C139.255 40.4536 138.259 37.3653 136.168 35.2892C133.43 36.2519 131.189 38.5806 130.541 41.6689ZM135.421 54.2253C134.126 57.1112 134.475 60.3015 136.119 62.7826C139.006 62.4279 141.645 60.6052 142.94 57.7193C144.235 54.8334 143.886 51.5929 142.242 49.162C139.355 49.5168 136.716 51.3394 135.421 54.2253ZM137.662 67.491C135.819 70.0222 135.471 73.2628 136.566 75.9972C139.454 76.2498 142.442 75.0353 144.284 72.5032C146.127 69.972 146.475 66.7315 145.38 63.997C142.492 63.7445 139.504 64.9591 137.662 67.491ZM137.114 80.9584C134.774 83.0345 133.828 86.1738 134.325 89.0597C137.114 89.9205 140.251 89.3633 142.591 87.2872C144.931 85.1608 145.877 82.0726 145.38 79.1867C142.591 78.275 139.454 78.8831 137.114 80.9584ZM133.878 94.0217C131.138 95.5909 129.595 98.3756 129.446 101.363C131.986 102.78 135.173 102.882 137.91 101.363C140.6 99.7935 142.193 96.9576 142.292 94.0217C139.753 92.5528 136.566 92.4517 133.878 94.0217ZM128.003 106.122C125.015 107.034 122.924 109.464 122.177 112.35C124.367 114.274 127.455 115.084 130.443 114.122C133.43 113.16 135.521 110.73 136.268 107.895C134.077 105.92 130.99 105.16 128.003 106.122ZM119.786 116.705C116.7 116.957 114.11 118.932 112.815 121.565C114.558 123.944 117.447 125.362 120.533 125.059C123.62 124.755 126.209 122.831 127.504 120.198C125.762 117.818 122.873 116.4 119.786 116.705Z"
                  fill="#890C25"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.9824 0L75.5219 8.05026L83.8371 8.00021L77.1153 12.9614L79.7041 21.0116L72.9822 15.9994L66.3098 21.0116L68.85 12.9614L62.1275 8.00021L70.4427 8.05026L72.9824 0ZM53.2644 12.7087L51.6218 17.9232H46.2441L50.5761 21.1127L48.9325 26.3282L53.2644 23.1387L57.6459 26.3282L55.9529 21.1127L60.3351 17.9232H54.9575L53.2644 12.7087ZM92.7003 12.7087L94.3933 17.9232H99.7701L95.3887 21.1127L97.0817 26.3282L92.7004 23.1387L88.3683 26.3282L90.012 21.1127L85.68 17.9232H91.0568L92.7003 12.7087Z"
                  fill="#890C25"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.9817 128.451C74.8737 128.451 76.3676 129.97 76.3676 131.894C76.3676 133.818 74.8737 135.337 72.9817 135.337C71.1398 135.337 69.5957 133.818 69.5957 131.894C69.5956 129.97 71.1398 128.451 72.9817 128.451Z"
                  fill="#890C25"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MAIN SPLIT ROW: Left Building Architecture Photo + Right Cards & Founder */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Campus Building Architecture Photo with Parallax Window & Rotating Play Badge */}
          <div className="lg:col-span-5 relative">
            {/* The signature ARCH mask (rounded top arch + rounded bottom corners) with Parallax Window */}
            <div
              ref={containerRef}
              className="relative rounded-t-[160px] sm:rounded-t-[200px] lg:rounded-t-[240px] rounded-b-[20px] overflow-hidden shadow-xl border border-black/5 aspect-[4/5] bg-sand/30"
            >
              {/* Parallax moving image wrapper - taller than window, reveals top first then bottom as user scrolls */}
              <motion.div
                style={{ y: imageY }}
                className="absolute top-0 left-0 w-full h-[140%] will-change-transform"
              >
                <img
                  src="/assets/home8/rectangle-9257-1-6899b5763a08f-1.webp"
                  alt="RKDF University Campus Heritage Architecture"
                  className="w-full h-full object-cover object-top img-warm select-none pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Rotating Circular Text Badge with Play Button anchored to top-right shoulder (outside overflow-hidden) */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center z-20 pointer-events-none">
              {/* Spinning SVG text */}
              <svg
                className="w-full h-full animate-[spin_14s_linear_infinite] select-none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <path
                    id="aboutSpinnerCircle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-[9px] font-bold uppercase tracking-[0.16em] fill-[#890C25]">
                  <textPath xlinkHref="#aboutSpinnerCircle">
                    Explore Future • RKDF University • Estd. 2026 •
                  </textPath>
                </text>
              </svg>

              {/* Central Play Triangle Button */}
              <button
                onClick={() => setVideoOpen(true)}
                className="absolute w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-[#890C25] hover:scale-110 active:scale-95 transition-transform border border-black/10 pointer-events-auto cursor-pointer"
                aria-label="Play Campus Heritage Video"
              >
                <Play className="w-5 h-5 fill-[#890C25] translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Statement, 2 Icon History Cards, and Founder / Signature */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bold Headline Statement */}
            <p
              className="text-2xl sm:text-3xl lg:text-[32px] font-medium text-ink leading-[1.3] tracking-tight"
              style={{
                fontFamily: '"Playfair Display", "Times New Roman", Georgia, serif',
              }}
            >
              We’re a center for academic excellence, innovation, and student growth. Join a legacy of learning that shapes the future.
            </p>

            {/* Normal 2-line body paragraph (as requested by user) */}
            <p className="text-sm sm:text-base text-ink-55 leading-relaxed font-normal max-w-xl">
              Offering accredited degree pathways aligned with the UAE’s National Agenda for Higher Education. Our DIAC campus equips you with world-class faculty, modern research hubs, and guaranteed enterprise placements.
            </p>

            {/* Two Off-White Cards Side by Side (matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: University History (Campus Building Outline Icon) */}
              <div className="p-8 rounded-[20px] bg-[#F9F9F9] border border-black/[0.04] flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 flex items-center justify-center text-[#890C25]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 118 118"
                    fill="none"
                  >
                    <path
                      d="M115.966 55.2161H89.9445V50.1909C89.9432 49.457 89.5467 48.7805 88.9069 48.4209L61.0345 32.7554V24.7802H66.5479V27.8116C66.5479 28.9351 67.4589 29.8461 68.5824 29.8461H85.2041C86.3277 29.8456 87.2381 28.9344 87.2379 27.8108C87.2379 27.5753 87.1967 27.3416 87.1165 27.1199L85.4483 22.3795L87.1369 17.7409C87.5189 16.6843 86.9721 15.518 85.9154 15.136C85.6939 15.0559 85.4602 15.015 85.2245 15.0147H77.6562V12.0647C77.6562 10.9412 76.7453 10.0302 75.6217 10.0302H61.0345V7.54815C61.0345 6.42461 60.1235 5.51367 59 5.51367C57.8765 5.51367 56.9655 6.42461 56.9655 7.54815V32.7554L29.0931 48.4006C28.4533 48.7602 28.0568 49.4366 28.0555 50.1706V55.1957H2.03448C0.91094 55.1957 0 56.1067 0 57.2302V110.452C0 111.576 0.91094 112.487 2.03448 112.487H115.966C117.089 112.487 118 111.576 118 110.452V57.2506C118 56.127 117.089 55.2161 115.966 55.2161ZM77.6562 22.7457L77.5748 22.6644V19.1651H82.2134L81.3793 21.7692C81.2127 22.2224 81.2127 22.7198 81.3793 23.173L82.3355 25.7771H70.6169V24.7802H75.6217C76.7453 24.7802 77.6562 23.8693 77.6562 22.7457ZM61.0345 14.0992H73.5872V17.1306V20.7113H61.0345V14.0992ZM28.0555 108.418H4.06897V59.285H28.0555V108.418ZM56.9655 108.418H46.2845V85.184H56.9655V108.418ZM71.7155 108.418H61.0345V85.184H71.7155V108.418ZM85.9569 108.418H75.7845V83.1495C75.7845 82.026 74.8735 81.1151 73.75 81.1151H44.25C43.1265 81.1151 42.2155 82.026 42.2155 83.1495V108.418H32.0431V51.4523L59 36.2751L85.8755 51.3709L85.9569 57.2302V108.418ZM113.931 108.418H89.9445V59.285H113.931V108.418Z"
                      fill="#890C25"
                    />
                    <path
                      d="M58.9991 42.5C54.2877 42.5112 50.4746 46.3335 50.4746 51.0448C50.4858 55.7529 54.3114 59.5602 59.0194 59.549C63.7275 59.5378 67.5348 55.7122 67.5236 51.0041C67.5124 46.3042 63.699 42.5 58.9991 42.5ZM58.9991 55.48C56.5384 55.4688 54.5527 53.4648 54.5639 51.0041C54.5751 48.5595 56.5542 46.5802 58.9991 46.569C61.4631 46.5802 63.4546 48.5808 63.4546 51.0448H63.475C63.4638 53.5055 61.4598 55.4912 58.9991 55.48Z"
                      fill="#890C25"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold text-ink"
                  style={{
                    fontFamily: '"Playfair Display", "Times New Roman", Georgia, serif',
                  }}
                >
                  University History
                </h3>
              </div>

              {/* Card 2: Academic Heritage (Classical Temple Outline Icon) */}
              <div className="p-8 rounded-[20px] bg-[#F9F9F9] border border-black/[0.04] flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow">
                <div className="w-24 h-24 flex items-center justify-center text-[#890C25]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="88"
                    height="88"
                    viewBox="0 0 118 118"
                    fill="none"
                  >
                    <path
                      d="M111.87 102.443V91.1273H106.2V83.591H102.42V42.0836H106.2V34.5473H113.759V20.0047L59 0.460938L4.24062 20.0047V34.5473H11.8V42.0836H15.5797V83.591H11.8V91.1273H6.13047V102.443H0.460938V117.539H117.539V102.443H111.87ZM102.443 38.3039H87.3477V34.5242H102.443V38.3039ZM66.5594 83.591V42.0836H70.3391V34.5473H83.568V42.0836H87.3477V83.591H83.568V91.1273H70.3391V83.591H66.5594ZM30.6754 83.591V42.0836H34.4551V34.5473H47.684V42.0836H51.4637V83.591H47.684V91.1273H34.4551V83.591H30.6754ZM15.5797 38.3039V34.5242H30.6754V38.3039H15.5797ZM26.8957 42.0836V83.591H19.3363V42.0836H26.8957ZM51.4406 87.3477H66.5363V91.1273H51.4406V87.3477ZM55.2203 83.591V42.0836H62.7797V83.591H55.2203ZM51.4406 38.3039V34.5242H66.5363V38.3039H51.4406ZM87.3246 87.3477H102.42V91.1273H87.3246V87.3477ZM91.1043 83.591V42.0836H98.6637V83.591H91.1043ZM8.02031 30.7676V22.6551L59 4.47109L109.98 22.6551V30.7676H8.02031ZM15.5797 87.3477H30.6754V91.1273H15.5797V87.3477ZM9.91016 94.907H108.09V102.443H9.91016V94.907ZM113.759 113.759H4.24062V106.223H113.759V113.759Z"
                      fill="#890C25"
                    />
                  </svg>
                </div>
                <h3
                  className="text-lg font-bold text-ink"
                  style={{
                    fontFamily: '"Playfair Display", "Times New Roman", Georgia, serif',
                  }}
                >
                  University History
                </h3>
              </div>
            </div>

            {/* Bottom Row: About Us Button (left) + Founder Portrait & Signature (right) */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
              {/* Deep Red "About Us" Button */}
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-[#890C25] hover:brightness-110 active:brightness-95 text-white font-semibold text-xs px-7 py-3.5 rounded-[10px] shadow-md transition-all hover:scale-105 group"
              >
                <span>About Us</span>
                <span className="w-5 h-5 rounded-[4px] bg-white text-[#890C25] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Founder Avatar + Name + Signature (matching screenshot) */}
              <div className="flex items-center gap-4">
                <img
                  src="/assets/home8/ellipse-368-1-6899b89c8124b.webp"
                  alt="Founder Jhon Milton"
                  className="w-12 h-12 rounded-full object-cover border border-black/10 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-[11px] text-ink-55 font-medium">Founder</span>
                  <span className="text-xs font-bold text-ink">Jhon Milton</span>
                </div>
                <img
                  src="/assets/home8/signature.svg"
                  alt="Founder Signature"
                  className="h-10 w-auto object-contain opacity-85 pl-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-card overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src="/assets/rkdf-drone.mp4"
              controls
              autoPlay
              className="w-full h-auto aspect-video"
            />
          </div>
        </div>
      )}
    </section>
  );
};
