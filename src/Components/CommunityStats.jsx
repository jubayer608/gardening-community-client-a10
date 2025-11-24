import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CommunityStats = () => {
  const [stats, setStats] = useState({
    totalTips: 0,
    totalGardeners: 0,
    totalLikes: 0,
    activeMembers: 0,
  });

  useEffect(() => {
    // Fetch stats from API
    Promise.all([
      fetch('https://gardening-community-server-flax.vercel.app/tips')
        .then((res) => res.json())
        .then((data) => ({ tips: data.length, likes: data.reduce((sum, tip) => sum + (tip.totalLiked || 0), 0) }))
        .catch(() => ({ tips: 0, likes: 0 })),
      fetch('https://gardening-community-server-flax.vercel.app/gardeners')
        .then((res) => res.json())
        .then((data) => ({ gardeners: data.length, active: data.filter((g) => g.status === 'active').length }))
        .catch(() => ({ gardeners: 0, active: 0 })),
    ]).then(([tipsData, gardenersData]) => {
      setStats({
        totalTips: tipsData.tips,
        totalGardeners: gardenersData.gardeners,
        totalLikes: tipsData.likes,
        activeMembers: gardenersData.active,
      });
    });
  }, []);

  const formatNumber = (value) =>
    Number.isFinite(value) ? value.toLocaleString() : '—';

  const engagementRate =
    stats.totalGardeners > 0
      ? Math.round((stats.activeMembers / stats.totalGardeners) * 100)
      : 0;
  const numericTipsPerMember =
    stats.totalGardeners > 0 ? stats.totalTips / stats.totalGardeners : 0;
  const tipsPerMember = numericTipsPerMember.toFixed(1);
  const appreciationRatio =
    stats.totalTips > 0
      ? Math.round((stats.totalLikes / stats.totalTips) * 100)
      : 0;

  const statItems = [
    {
      label: 'Total Tips Published',
      value: stats.totalTips,
      icon: '💡',
      accent:
        'border-primary-200/80 shadow-primary-500/20 dark:border-primary-500/50 dark:shadow-primary-500/30',
      highlight: `${tipsPerMember} tips per gardener`,
    },
    {
      label: 'Gardeners United',
      value: stats.totalGardeners,
      icon: '👥',
      accent:
        'border-primary-100/80 shadow-primary-300/20 dark:border-emerald-400/40 dark:shadow-emerald-400/30',
      highlight: `${engagementRate}% actively sharing`,
    },
    {
      label: 'Appreciations Sent',
      value: stats.totalLikes,
      icon: '❤️',
      accent:
        'border-secondary-100/80 shadow-secondary-300/20 dark:border-secondary-400/40 dark:shadow-secondary-400/30',
      highlight: `${appreciationRatio}% love per tip`,
    },
    {
      label: 'Members Active Now',
      value: stats.activeMembers,
      icon: '🌟',
      accent:
        'border-amber-100/80 shadow-amber-300/20 dark:border-amber-400/40 dark:shadow-amber-400/30',
      highlight: 'Real-time conversations blooming',
    },
  ];

  const insightCards = [
    {
      title: 'Community Pulse',
      metric: `${engagementRate}% engagement`,
      description: 'Members who logged in or posted during the past week.',
      progress: engagementRate,
      gradient:
        'from-primary-200/70 via-primary-100/60 to-transparent dark:from-primary-500/30 dark:via-emerald-500/20 dark:to-transparent',
    },
    {
      title: 'Knowledge Flow',
      metric: `${tipsPerMember} tips / member`,
      description: 'Average contributions keeping the garden vibrant.',
      progress: Math.min(numericTipsPerMember * 15, 100),
      gradient:
        'from-primary-100/70 via-secondary-50/60 to-transparent dark:from-cyan-500/30 dark:via-blue-500/20 dark:to-transparent',
    },
    {
      title: 'Appreciation Heat',
      metric: `${formatNumber(stats.totalLikes)} likes`,
      description: 'Cheerful reactions watering every success story.',
      progress: Math.min(appreciationRatio, 100),
      gradient:
        'from-secondary-100/70 via-secondary-50/60 to-transparent dark:from-rose-500/30 dark:via-orange-500/20 dark:to-transparent',
    },
  ];

  return (
    <section className="relative rounded-3xl overflow-hidden py-16 px-4 bg-theme-secondary dark:bg-[#0f172a]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-200/70 to-transparent dark:via-emerald-400/40" />
        <div className="absolute -right-20 top-6 h-48 w-48 rounded-full bg-white/40 blur-3xl dark:bg-emerald-500/15" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary-100/60 blur-[150px] dark:bg-cyan-500/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-12">
        <motion.div
          className="flex flex-col items-center text-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center  gap-2 rounded-full border border-primary-400 dark:border-primary-500  text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-700 dark:to-primary-800 shadow-sm  ">
            🌱 Community Pulse
          </span>
          <h2 className="text-balance text-3xl font-bold text-primary-700 dark:text-primary-400 md:text-5xl">
            Where every gardener’s story sparks the next bloom
          </h2>
          <p className="max-w-3xl text-base text-theme-secondary md:text-lg">
            Live stats refresh with every shared tip, cheer, and connection—showing how vibrant our collective garden grows in real time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statItems.map((item, index) => (
            <motion.article
              key={item.label}
              className={`relative overflow-hidden rounded-2xl border card-theme px-6 py-8 text-theme-primary shadow-[0_15px_40px_-20px_var(--shadow-color)] transition hover:-translate-y-2 hover:border-primary-200 hover:bg-primary-50 dark:text-white dark:hover:bg-white/10 dark:shadow-[0_15px_40px_-20px_rgba(0,0,0,0.8)] ${item.accent}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/60 via-transparent to-transparent dark:from-white/5" />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary-100 p-3 text-3xl dark:bg-white/15">{item.icon}</div>
                  <span className="text-sm uppercase tracking-[0.3em] text-theme-secondary dark:text-slate-200/70">
                    {item.label}
                  </span>
                </div>
                <motion.div
                  className="text-4xl font-black tracking-tight md:text-5xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.12 + 0.2, type: 'spring' }}
                >
                  {formatNumber(item.value)}
                </motion.div>
                <p className="text-sm text-theme-secondary dark:text-slate-200/80">
                  {item.highlight}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {insightCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative rounded-2xl border card-theme p-6 text-theme-primary shadow-[0_30px_60px_-35px_var(--shadow-color)] backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.5 }}
            >
              <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient}`} />
              <div className="relative flex flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-theme-secondary dark:text-emerald-100/70">
                    {card.title}
                  </p>
                  <h3 className="text-2xl font-semibold">{card.metric}</h3>
                </div>
                <p className="text-sm text-theme-secondary dark:text-slate-200/80">
                  {card.description}
                </p>
                <div>
                  <div className="mb-2 flex items-center justify-between text-xs text-theme-secondary dark:text-slate-200/70">
                    <span>Now</span>
                    <span>{Math.round(card.progress)}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-theme-tertiary dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-400 via-secondary-300 to-primary-500 dark:from-emerald-400 dark:via-lime-300 dark:to-teal-200"
                      style={{ width: `${card.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;

