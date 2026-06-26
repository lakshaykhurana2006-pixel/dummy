import { ShieldCheck, Sparkles, Users, Scale, Target, Eye, Milestone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { CORE_VALUES, TIMELINE } from '../data';

export default function About() {
  // Map icons dynamically
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-orange-600" />;
      case 'Sparkles':
        return <Sparkles className="h-6 w-6 text-orange-600" />;
      case 'Users':
        return <Users className="h-6 w-6 text-orange-600" />;
      case 'Scale':
        return <Scale className="h-6 w-6 text-orange-600" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50" id="about-view-container">
      <Helmet>
        <title>About Fitzee</title>
        <meta name="description" content="Learn more about Fitzee and our mission" />
        <link rel="canonical" href="https://fitzzee.netlify.app/about" />
      </Helmet>
      {/* Page Header banner */}
      <section className="bg-slate-900 py-16 text-center text-white" id="about-header-banner">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          About Our Company
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-light text-slate-400">
          Making high-quality fitness hardware and workout essentials accessible to training enthusiasts across the globe.
        </p>
      </section>

      {/* Main Story & Core Info */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="about-intro-section">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text panel */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Our Foundations
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-100 bg-slate-900 px-6 py-4 rounded-2xl w-full">
              About Fitzee
            </h2>
            <p className="text-base font-light leading-relaxed text-slate-600">
              Fitzee was founded with one simple mission: to make high-quality fitness equipment accessible to everyone.
            </p>
            <p className="text-base font-light leading-relaxed text-slate-600">
              Whether you're building a home gym, training for competition, or beginning your fitness journey, we provide reliable products that support your goals.
            </p>
          </div>

          {/* Graphic/Image representation */}
          <div className="relative h-96 overflow-hidden rounded-3xl shadow-lg shadow-slate-950/5">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000"
              alt="Heavy gym weights workout environment"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Mission & Vision Bento Cards */}
      <section className="bg-white py-16 border-y border-slate-100" id="about-mission-vision-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Mission Card */}
            <div className="flex flex-col rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm transition-all hover:border-orange-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-sm">
                <Target className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900">
                Our Mission
              </h3>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-slate-500">
                To empower people worldwide by providing innovative fitness equipment and accessories that inspire healthier lifestyles.
              </p>
            </div>

            {/* Vision Card */}
            <div className="flex flex-col rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-sm transition-all hover:border-orange-200">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-sm">
                <Eye className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900">
                Our Vision
              </h3>
              <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-slate-500">
                To become a trusted global fitness brand known for quality, innovation, and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="about-values-section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600">The Standards We Maintain</span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm font-light text-slate-500 leading-relaxed">
            Every material sourced and customer inquiry supported is guided directly by our core foundational values.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-orange-100 hover:shadow-md"
              id={`value-${val.title.toLowerCase()}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                {getValueIcon(val.iconName)}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">{val.title}</h3>
              <p className="mt-2 text-xs font-light leading-relaxed text-slate-500">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="bg-slate-900 py-20 text-white" id="about-timeline-section">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-600 text-white shadow-md shadow-orange-500/20">
              <Milestone className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Our Journey
            </h2>
            <p className="mt-2 text-xs text-orange-400 font-semibold uppercase tracking-widest">
              From Humble Origins to Global Reach
            </p>
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12">
            {TIMELINE.map((evt, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10" id={`timeline-evt-${evt.year}`}>
                {/* Timeline Dot */}
                <div className="absolute -left-2.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 ring-4 ring-slate-900">
                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                </div>

                {/* Event Card */}
                <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 transition-all hover:border-orange-500/40 hover:bg-slate-950">
                  <span className="inline-block rounded-lg bg-orange-600 px-3 py-1 font-mono text-xs font-black text-white">
                    {evt.year}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-white">{evt.title}</h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-slate-400">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
