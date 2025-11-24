import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const featureHighlights = [
  'Bangla-first gardening playbooks',
  'Handpicked tips for every climate zone',
  'Weekly live Q&A with expert growers',
];

const impactStats = [
  { label: 'Tips shared', value: '14K+', accent: 'from-primary-200 to-primary-50' },
  { label: 'Active gardeners', value: '8.2K', accent: 'from-secondary-200 to-secondary-50' },
  { label: 'Cities covered', value: '38', accent: 'from-emerald-200 to-primary-50' },
];

const Hero = () => {
  const highlightCards = [
    {
      title: 'Live Knowledge Pods',
      description: 'Drop into 15‑minute micro-workshops hosted every evening.',
      badge: 'Daily 7PM',
    },
    {
      title: 'Seed Swap Trails',
      description: 'Track where heirloom seeds landed last week across 12 cities.',
      badge: 'Map refresh',
    },
    {
      title: 'Community Stories',
      description: 'Curated success journals to keep you inspired through the season.',
      badge: 'New edition',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-theme-primary shadow-[0_40px_120px_-60px_rgba(5,150,105,0.2)]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
          alt="Lush garden background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,253,245,0.2),transparent_55%)]" />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-12 px-4 py-12 sm:px-6 lg:px-12 xl:px-20 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7 rounded-3xl border border-primary-100/30 bg-primary-900/40 p-6 text-white backdrop-blur-2xl sm:p-8"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-200/70 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary-700 shadow-sm">
              Rooted in Bangladesh
            </span>

            <h1 className="text-balance text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent">
                Grow bold gardens
              </span>{' '}
              with neighbors who care
            </h1>

            <p className="text-base text-white/85 sm:text-lg">
              Discover new techniques, rescue tired plants, and celebrate every bloom together.
              Your next harvest, rooftop jungle, or courtyard oasis starts right here.
            </p>

            <ul className="space-y-3 text-white/85">
              {featureHighlights.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                    ✓
                  </span>
                  <span className="text-base font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="/auth/register"
                className="w-full rounded-xl bg-secondary-400 px-6 py-3 text-center text-base font-semibold text-primary-900 shadow-xl transition hover:-translate-y-1 hover:bg-secondary-300 sm:w-auto sm:px-8"
              >
                Start Free
              </a>
              <a
                href="/browse-tips"
                className="rounded-xl border border-primary-200/60 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10 sm:px-8"
              >
                Explore Tips
              </a>
              <div className="flex items-center gap-3 rounded-full border border-primary-200/60 bg-primary-900/30 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
                <span className="flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                Live gardeners online now
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[150px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-primary-300/30 bg-primary-900/40 px-5 py-6 text-center text-white shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:bg-primary-900/60"
                >
                  <div className={`mx-auto mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r ${stat.accent}`} />
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-3xl font-black">{stat.value}</p>
                  <p className="text-[11px] text-white/70">community milestone</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-6 rounded-3xl border border-primary-100/40 bg-primary-950/40 p-6 text-white shadow-2xl backdrop-blur-2xl sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Typewriter
                words={['Grow Together', 'Urban Gardening', 'Share & Bloom']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
              <span className="w-fit rounded-full border border-white/30 px-3 py-1 text-xs tracking-[0.4em] uppercase">
                Pulse
              </span>
            </div>

            <div className="rounded-2xl border border-primary-100/30 bg-gradient-to-br from-primary-500/20 to-primary-900/40 p-5 text-white shadow-lg sm:p-6">
              <p className="text-sm uppercase tracking-[0.5em] text-primary-100">Today</p>
              <h3 className="mt-3 text-3xl font-bold text-secondary-200">Rooftop Revival Playbook</h3>
              <p className="mt-3 text-white/85">
                Dhaka growers share their soil rescue checklist and balcony irrigation hacks.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-primary-200/60 px-4 py-1">Soil</span>
                <span className="rounded-full border border-primary-200/60 px-4 py-1">Hydro</span>
                <span className="rounded-full border border-primary-200/60 px-4 py-1">Lighting</span>
              </div>
            </div>

            <div className="space-y-4">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-primary-100/20 bg-primary-900/40 p-5 text-sm shadow-lg backdrop-blur-lg transition hover:-translate-y-1 hover:bg-primary-900/70 sm:text-base"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-primary-100">
                    <span className="h-1 w-6 rounded-full bg-secondary-300" />
                    {card.badge}
                  </div>
                  <h4 className="text-xl font-semibold">{card.title}</h4>
                  <p className="text-sm text-white/80">{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {['Seed Swaps', 'Weekend Workshops', 'Community Challenges'].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-primary-100/25 bg-primary-900/40 px-5 py-4 text-center text-white shadow-lg backdrop-blur-xl text-sm font-semibold tracking-wide sm:text-base"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
