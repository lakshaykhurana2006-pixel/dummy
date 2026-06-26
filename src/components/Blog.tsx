import { useState } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  // Return to lists
  const handleBackToList = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Select article
  const handleSelectArticle = (article: BlogArticle) => {
    setActiveArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen" id="blog-view-container">
      {activeArticle ? (
        <Helmet>
          <title>{activeArticle.title} - Fitzee Blog</title>
          <meta name="description" content={activeArticle.excerpt} />
          <link rel="canonical" href={`https://fitzzee.netlify.app/blog/${activeArticle.id}`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>Fitness Blog</title>
          <meta name="description" content="Read professional knowledge, training schedules, and fitness tips from Fitzee." />
          <link rel="canonical" href="https://fitzzee.netlify.app/blog" />
        </Helmet>
      )}
      {/* Page banner */}
      <section className="bg-slate-900 py-16 text-center text-white" id="blog-header-banner">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Fitness Tips & Guides</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm font-light text-slate-400">
          Professional knowledge, training schedules, and recovery protocols curated directly by Fitzee athletics specialists. Explore Workout Tips, Health & Fitness, Gym Training, and Weight Loss Tips.
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        
        {activeArticle ? (
          /* Active Article Reader Mode */
          <article className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md md:p-10 animate-in fade-in duration-300" id={`article-reader-${activeArticle.id}`}>
            {/* Back button */}
            <button
              onClick={handleBackToList}
              className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700"
              id="btn-back-to-blogs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to all articles
            </button>

            {/* Article Header Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-orange-500" />
                {activeArticle.publishDate}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-orange-500" />
                {activeArticle.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl" id="article-read-title">
              {activeArticle.title}
            </h1>

            {/* Main Featured Image */}
            <div className="my-8 aspect-16/9 w-full overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Content Body (HTML simulation parsed neatly using paragraphs/lists) */}
            <div 
              className="prose prose-orange max-w-none text-slate-700 leading-relaxed font-light space-y-6 text-sm md:text-base"
              id="article-read-body"
            >
              {activeArticle.content.split('\n\n').map((paragraph, index) => {
                // If header
                if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-lg md:text-xl font-extrabold text-slate-950 pt-4">
                      {paragraph.replace('###', '').trim()}
                    </h3>
                  );
                }
                // If bullet items
                if (paragraph.startsWith('*')) {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-slate-600">
                      {paragraph.split('\n').map((bullet, bIdx) => (
                        <li key={bIdx} className="pl-1">
                          {bullet.replace('*', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                // If numerical items
                if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.') || paragraph.startsWith('4.') || paragraph.startsWith('5.')) {
                  return (
                    <div key={index} className="pl-2 border-l-2 border-orange-500/30 space-y-2">
                      {paragraph.split('\n').map((numLine, nIdx) => (
                        <p key={nIdx} className="text-slate-600 font-light">
                          {numLine.trim()}
                        </p>
                      ))}
                    </div>
                  );
                }
                // Regular prose block
                const boldRegex = /\*\*(.*?)\*\*/g;
                if (boldRegex.test(paragraph)) {
                  // Simply render with matching key values
                  return (
                    <p 
                      key={index}
                      className="leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(boldRegex, '<strong>$1</strong>')
                      }}
                    />
                  );
                }

                return (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <hr className="my-10 border-slate-100" />

            {/* Article Footer Quote Signoff */}
            <div className="flex gap-4 rounded-2xl bg-orange-50/50 p-6 border border-orange-100/40">
              <Quote className="h-8 w-8 text-orange-600 shrink-0 opacity-40 rotate-185" />
              <div>
                <p className="text-sm font-semibold text-slate-800 leading-normal">
                  "Fitness is not a destination, it is an integrated active ritual of self-discipline, energy, and progressive physical building."
                </p>
                <span className="text-xs text-orange-600 font-semibold uppercase tracking-widest mt-2 block">
                  — FITZEE HEALTH SCIENCE BOARD
                </span>
              </div>
            </div>

            {/* Related articles links */}
            <div className="mt-12">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Other Recommended Articles:</h4>
              <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
                {BLOG_ARTICLES.filter((item) => item.id !== activeArticle.id).slice(0, 2).map((rec) => (
                  <button
                    key={rec.id}
                    onClick={() => handleSelectArticle(rec)}
                    className="flex text-left items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all hover:border-orange-200 hover:bg-white"
                  >
                    <img src={rec.image} alt={rec.title} className="h-12 w-12 rounded-lg object-cover" />
                    <div>
                      <h5 className="text-xs font-bold leading-snug line-clamp-1 text-slate-900 group-hover:text-orange-600">{rec.title}</h5>
                      <span className="text-[10px] text-slate-400 font-light mt-0.5 block">{rec.publishDate}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </article>
        ) : (
          /* Articles List view */
          <div className="space-y-10" id="blog-articles-index-list">
            {BLOG_ARTICLES.map((article) => (
              <div
                key={article.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md md:flex-row"
                id={`blog-card-${article.id}`}
              >
                {/* Article image */}
                <div className="aspect-16/9 w-full overflow-hidden bg-slate-50 md:aspect-auto md:w-80 shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info block */}
                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                  <div className="space-y-3">
                    {/* Date and duration */}
                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-orange-500" />
                        {article.publishDate}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-orange-500" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="line-clamp-2 text-xl font-black tracking-tight text-slate-900 leading-snug transition-colors group-hover:text-orange-600">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="line-clamp-3 text-sm font-light leading-relaxed text-slate-500">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read action */}
                  <div className="mt-6 pt-4 border-t border-slate-100/60">
                    <button
                      onClick={() => handleSelectArticle(article)}
                      className="group flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700"
                      id={`btn-read-more-${article.id}`}
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>
    </div>
  );
}
