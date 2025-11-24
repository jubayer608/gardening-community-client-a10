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
      description: 'Drop into 15-minute micro-workshops hosted every evening.',
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
      {/* background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
          alt="Lush garden background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/70 to-primary-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,253,245,0.2),transparent_55%)]" />
      </div>

      {/* content */}
      <div className="relative z-10 flex w-full flex-col gap-8 px-4 py-8 sm:px-6 lg:px-10 xl:px-20 lg:py-10">
        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 rounded-3xl border border-primary-100/30 bg-primary-900/40 p-5 text-white backdrop-blur-2xl sm:p-6"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-200/70 bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-primary-700 shadow-sm">
              Rooted in Bangladesh
            </span>

            <h1 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-primary-200 to-secondary-200 bg-clip-text text-transparent">
                Grow bold gardens
              </span>{' '}
              with neighbors who care
            </h1>

            <p className="text-sm text-white/85 sm:text-base">
              Discover new techniques, rescue tired plants, and celebrate every bloom together.
            </p>

            <ul className="space-y-2 text-white/85">
              {featureHighlights.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs text-white">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="/auth/register"
                className="w-full rounded-lg bg-secondary-400 px-6 py-2.5 text-center text-sm font-semibold text-primary-900 shadow-xl transition hover:-translate-y-1 hover:bg-secondary-300 sm:w-auto sm:px-8"
              >
                Start Free
              </a>
              <a
                href="/browse-tips"
                className="rounded-lg border border-primary-200/60 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10 sm:px-8"
              >
                Explore Tips
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[120px] w-full flex-col items-center justify-center gap-2 rounded-2xl border border-primary-300/30 bg-primary-900/40 px-4 py-5 text-center text-white shadow-lg backdrop-blur-xl"
                >
                  <div className={`mx-auto mb-2 h-1 w-12 rounded-full bg-gradient-to-r ${stat.accent}`} />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-2xl font-black">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-4 rounded-3xl border border-primary-100/40 bg-primary-950/40 p-5 text-white shadow-2xl backdrop-blur-2xl sm:p-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Typewriter
                words={['Grow Together', 'Urban Gardening', 'Share & Bloom']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
              <span className="w-fit rounded-full border border-white/30 px-3 py-0.5 text-[10px] tracking-[0.4em] uppercase">
                Pulse
              </span>
            </div>

            <div className="rounded-2xl border border-primary-100/30 bg-gradient-to-br from-primary-500/20 to-primary-900/40 p-4 text-white shadow-lg sm:p-5">
              <p className="text-xs uppercase tracking-[0.5em] text-primary-100">Today</p>
              <h3 className="mt-2 text-2xl font-bold text-secondary-200">Rooftop Revival Playbook</h3>
              <p className="mt-2 text-white/85 text-sm">
                Dhaka growers share their soil rescue checklist and balcony irrigation hacks.
              </p>
            </div>

            <div className="space-y-3">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-primary-100/20 bg-primary-900/40 p-4 text-sm shadow-lg backdrop-blur-lg"
                >
                  <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-primary-100">
                    <span className="h-1 w-5 rounded-full bg-secondary-300" />
                    {card.badge}
                  </div>
                  <h4 className="text-lg font-semibold">{card.title}</h4>
                  <p className="text-sm text-white/80">{card.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
