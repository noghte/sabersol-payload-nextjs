import React from 'react';
// import NotFound from '../components/NotFound';
// import getConfig from 'next/config';
// const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

function Home(): JSX.Element {
  return (
    <React.Fragment>
      <main id="content">
        {/* <!-- advertisement --> */}
        {/* <div className="bg-gray-50 py-4 hidden">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="mx-auto table text-center text-sm">
              <a
                className="uppercase"
                href="#"
              >
                Advertisement
              </a>
              <a href="#">
                <img
                  src="src/img/ads/ads_728.jpg"
                  alt="advertisement area"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                <div className="relative hover-img max-h-98 overflow-hidden">
                  <a href="#">
                    <img
                      className="max-w-full w-full mx-auto h-auto"
                      src="src/img/dummy/img1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                    <a href="#">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                  </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink max-w-full w-full lg:w-1/2">
                <div className="box-one flex flex-row flex-wrap">
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img2.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                          </a>
                        <div className="pt-1">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Techno
                      </div>
                          </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img3.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
                          </a>
                        <div className="pt-1">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Architecture
                      </div>
                          </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img4.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
                          </a>
                        <div className="pt-1">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Interior
                      </div>
                          </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img5.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                          </a>
                        <div className="pt-1">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Lifestyle
                      </div>
                          </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Europe
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img6.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img7.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img8.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img9.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img10.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img11.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                <div className="w-full bg-gray-50 h-full">
                  <div className="text-sm py-6 sticky">
                    <div className="w-full text-center">
                      <a
                        className="uppercase"
                        href="#"
                      >
                    Advertisement
                      </a>
                      <a href="#">
                        <img
                            className="mx-auto"
                            src="src/img/ads/250.jpg"
                            alt="advertisement area"
                          />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="relative bg-gray-50"
          style={{ backgroundImage: 'url(\'src/img/bg.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
          <div className="bg-black bg-opacity-70">
            <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
              <div className="flex flex-row flex-wrap">
                <div className="flex-shrink max-w-full w-full py-12 overflow-hidden">
                  <div className="w-full py-3">
                    <h2 className="text-white text-2xl font-bold text-shadow-black">
                      <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                      American
                    </h2>
                  </div>
                  <div
                    id="post-carousel"
                    className="splide post-carousel"
                  >
                    <div className="splide__track">
                      <ul className="splide__list">
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img14.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img15.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img16.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img17.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img18.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                        <li className="splide__slide">
                            <div className="w-full pb-3">
                            <div className="hover-img bg-white">
                              <a href="">
                            <img
                              className="max-w-full w-full mx-auto"
                              src="src/img/dummy/img1.jpg"
                              alt="alt title"
                            />
                          </a>
                              <div className="py-3 px-6">
                            <h3 className="text-lg font-bold leading-tight mb-2">
                              <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                            </h3>
                            <a
                              className="text-gray-500"
                              href="#"
                            >
                              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                              Europe
                            </a>
                          </div>
                            </div>
                          </div>
                          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Africa
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img19.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img20.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img21.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img22.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img23.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img24.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img25.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img26.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Asian
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full px-3 pb-5">
                    <div className="relative hover-img max-h-98 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img2.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                          </a>
                        <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                        <div className="pt-2">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                      </div>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img27.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img3.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img4.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img5.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img6.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                            className="max-w-full w-full mx-auto"
                            src="src/img/dummy/img7.jpg"
                            alt="alt title"
                          />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
                <div className="w-full bg-white">
                  <div className="mb-6">
                    <div className="p-4 bg-gray-100">
                      <h2 className="text-lg font-bold">Most Popular</h2>
                    </div>
                    <ul className="post-number">
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Why the world would end without political polls
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Meet The Man Who Designed The Ducati Monster
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      2020 Audi R8 Spyder spy shots release
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Lamborghini makes Huracán GT3 racer faster for 2019
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      ZF plans $14 billion autonomous vehicle push, concept van
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-sm py-6 sticky">
                  <div className="w-full text-center">
                    <a
                      className="uppercase"
                      href="#"
                    >
                      Advertisement
                    </a>
                    <a href="#">
                      <img
                        className="mx-auto"
                        src="src/img/ads/250.jpg"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-gray-50 py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              {/* <!-- post --> */}
              <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden">
                <div className="w-full py-3">
                  {/* <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-3 border-red-600 mr-2" />
                    Latest news
                  </h2> */}
                </div>
                <div className="flex flex-row flex-wrap -mx-3 mt-10">
                  {/* <div className="flex-shrink max-w-full w-full px-3 pb-5">
                    <div className="relative hover-img max-h-98 overflow-hidden">
                      <a href="#">
                        <img
                            className="max-w-full w-full mx-auto h-auto"
                            src="src/img/dummy/img15.jpg"
                            alt="Image description"
                          />
                      </a>
                      <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                        <a href="#">
                            <h2 className="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                          </a>
                        <p className="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                        <div className="pt-2">
                            <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                      </div>
                          </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                      <img className="max-w-full w-full mx-auto" src="/media/img7.jpg" alt="alt title" />

                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                      <img className="max-w-full w-full mx-auto" src="/media/img24.jpg" alt="alt title" />

                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img className="max-w-full w-full mx-auto" src={`/media/img17.jpg`} alt="alt title" />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img className="max-w-full w-full mx-auto" src="/media/img17.jpg" alt="alt title" />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                       <img className="max-w-full w-full mx-auto" src="/media/img24.jpg" alt="alt title" />

                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                      <img className="max-w-full w-full mx-auto" src="/media/img7.jpg" alt="alt title" />

                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                          </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a
                            className="text-gray-500"
                            href="#"
                          >
                            <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Europe
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- sidebar --> */}
              <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pr-8 lg:pt-14 lg:pb-8 order-first">
                <div className="w-full bg-white">
                  <div className="mb-6">
                    <div className="p-4 bg-gray-100">
                      <h2 className="text-lg font-bold">Liked Articles</h2>
                    </div>
                    <ul className="post-number">
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Why the world would end without political polls
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Meet The Man Who Designed The Ducati Monster
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      2020 Audi R8 Spyder spy shots release
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      Lamborghini makes Huracán GT3 racer faster for 2019
                          </a>
                      </li>
                      <li className="border-b border-gray-100 hover:bg-gray-50">
                        <a
                            className="text-lg font-bold px-6 py-3 flex flex-row items-center"
                            href="#"
                          >
                      ZF plans $14 billion autonomous vehicle push, concept van
                          </a>
                      </li>
                    </ul>
                  </div>
                </div>
{/* 
                <div className="text-sm py-6 sticky">
                  <div className="w-full text-center">
                    <a
                      className="uppercase"
                      href="#"
                    >
                      Advertisement
                    </a>
                    <a href="#">
                      <img
                        className="mx-auto"
                        src="src/img/ads/250.jpg"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
