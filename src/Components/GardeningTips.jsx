import { motion as Motion } from 'framer-motion';

const communityHighlights = [
  {
    label: 'Starter gardens funded',
    value: '320+ rooftops',
    description: 'Micro-grants unlocked through weekly community pledges.',
    accent: 'from-primary-200 to-primary-100',
  },
  {
    label: 'Workshops this month',
    value: '18 sessions',
    description: 'Hosted across Dhaka, Chattogram, and Sylhet.',
    accent: 'from-secondary-200 to-secondary-100',
  },
  {
    label: 'Seed bundles exchanged',
    value: '1,450 packs',
    description: 'Tracked through our weekend swap trails.',
    accent: 'from-emerald-200 to-primary-100',
  },
];

const initiativeTimeline = [
  {
    title: 'Soil Rescue Sprint',
    detail: 'Collecting coconut coir + compost for balcony beds.',
    status: 'In progress',
  },
  {
    title: 'Shade Net Drive',
    detail: 'Volunteer crews visiting terraces to install UV-safe nets.',
    status: 'Volunteer slots open',
  },
  {
    title: 'Monsoon Mentor Circles',
    detail: 'Pairing first-time growers with senior gardeners regionally.',
    status: 'Starts next week',
  },
];

const GardeningTips = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-theme-secondary px-6 py-14 text-theme-primary dark:bg-primary-950 dark:text-white">
      <div className="absolute inset-0">
        <div className="absolute -right-16 top-10 h-48 w-48 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-secondary-100/60 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        <Motion.div
          className="flex-1 rounded-3xl bg-card-bg p-8 shadow-xl ring-1 ring-primary-100/60 dark:bg-card-bg dark:ring-primary-800/40"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary-700 dark:bg-primary-900 dark:text-primary-100 mb-2">Community Pulse</p>
          <h2 className="text-3xl font-bold  text-primary-700 dark:text-primary-400 md:text-4xl">
            Labs & live initiatives powering our shared garden future
          </h2>
          <p className="mt-3 text-theme-secondary dark:text-slate-200">
            Everything you see here is shaped by our growers, data, and the local climate playbook—open for everyone to co-create and improve each week.
          </p>

          <span className=" mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary-700 dark:bg-primary-900 dark:text-primary-100">
            Community Labs
          </span>
          <div className="mt-8 space-y-5">
            {initiativeTimeline.map((item, index) => (
              <Motion.div
                key={item.title}
                className="rounded-2xl border border-theme bg-theme-primary p-5 shadow-sm dark:border-primary-800/40 dark:bg-primary-900/30"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <span className="rounded-full bg-secondary-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-primary-700 dark:bg-primary-800 dark:text-primary-100">
                    {item.status}
                  </span>
                </div>
                <p className="mt-2 text-theme-secondary dark:text-slate-300">{item.detail}</p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>

          <Motion.div
            className="flex-1 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {communityHighlights.map((card) => (
            <Motion.div
              key={card.label}
              className="rounded-3xl border border-theme bg-card-bg p-6  shadow-lg  dark:border-primary-800/40 "
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className={`mb-3 h-1 w-16 rounded-full bg-gradient-to-r ${card.accent}`} />
                <p className="text-xs uppercase tracking-[0.35em]  ">{card.label}</p>
                <p className="text-2xl font-black  text-primary-700 dark:text-primary-400">{card.value}</p>
                <p className="mt-2 ">{card.description}</p>
            </Motion.div>
          ))}

          <div className="rounded-3xl border border-theme bg-card-bg p-6 shadow-inner dark:border-primary-800 dark:bg-primary-900">
            <p className="text-xs uppercase tracking-[0.4em] text-primary-500 dark:text-primary-200">Next unlock</p>
            <h3 className="mt-2 text-2xl font-bold  text-primary-700 dark:text-primary-400">50 Rooftop Micro-forests</h3>
            <p className="text-white">
              Once the community logs 2,000 care sessions, we activate the seedling sponsorship
              budget for apartment blocks in Narayanganj.
            </p>
            <div className="mt-4 h-2 w-full rounded-full bg-primary-100 dark:bg-primary-800">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 dark:from-primary-400 dark:to-secondary-300" />
            </div>
            <p className="mt-2 text-sm font-semibold text-primary-700 dark:text-primary-200">74% synced · 1,482 / 2,000 sessions</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default GardeningTips;
