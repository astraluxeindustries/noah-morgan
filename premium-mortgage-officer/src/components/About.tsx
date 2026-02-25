import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Noah Morgan" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Noah Morgan
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Noah Morgan believes the mortgage process should feel clear, strategic, and personal. As a Mortgage Consultant, he focuses on building real relationships with his clients and guiding them through one of the most important financial decisions they will make.
              </p>
              <p>
                Known for his steady communication and genuine approach, Noah takes time to understand each client’s goals before recommending a solution. Whether you are purchasing your first home, refinancing, or investing in property, he works to simplify the process and remove unnecessary stress. His priority is making sure you feel informed, confident, and supported from application to closing.
              </p>
              <p>
                Outside of work, Noah is a devoted husband and father who values time spent with family above all else. He enjoys staying active through golf and mountain biking, and he appreciates the balance that comes from both outdoor adventure and personal wellness. His grounded, authentic nature carries into his professional life, where clients consistently value his honesty and calm presence.
              </p>
              <p>
                For Noah, mortgage advising is not just about rates and paperwork. It is about helping families create stability, opportunity, and a place to build lasting memories.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
