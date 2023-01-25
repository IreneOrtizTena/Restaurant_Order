import React from "react";

function About() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-2 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Our menu highlights things that utilize the sound and fragrant
            flavors, however, forget the stuffing ghee, spread, oil, and
            overwhelming cream.
          </h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="About us"
              src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-20">
            <article class="space-y-4 text-gray-600 text-xl">
              <p className="bonheur-royale">
                We welcome you to sit back, unwind and appreciate the lovely
                sights and hints of the ocean while our best gourmet expert sets
                you up for a scrumptious dinner utilizing the best and freshest
                ingredients.’
              </p>

              <p>
                The company Name’s legacy comes from The parent Restaurant,
                which was built in 1963. Organization Name’ worked for people in
                general and has advanced into a combination of exquisite chic
                and contemporary fine charge. Enjoy our dazzling dishes and make
                the most of your eating background with us!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
