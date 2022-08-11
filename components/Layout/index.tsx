import React from 'react';

function Layout({ children }): JSX.Element {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="bg-black">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex justify-between">
              <div className="mx-w-10 text-2xl font-bold text-white flex items-center">sabersol.com</div>

              <div className="flex flex-row">
                {/* <!-- nav menu --> */}
                <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                  <li className="active relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      Publications
                    </a>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      Teaching
                    </a>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      Projects
                    </a>
                  </li>
                  <li className="relative border-l border-gray-800 hover:bg-gray-900">
                    <a className="block py-3 px-6 border-b-2 border-transparent" href="index.html">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Contents */}
      <main id="content">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-black text-gray-400">
        <div id="footer-content" className="relative pt-8 xl:pt-16 pb-6 xl:pb-12">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2 overflow-hidden">
            <div className="flex flex-wrap flex-row lg:justify-between -mx-3">
              <div className="flex-shrink max-w-full w-full lg:w-2/5 px-3 lg:pr-16">
                <div className="flex items-center mb-2">
                  <span className="text-3xl leading-normal mb-2 font-bold text-gray-100 mt-2">Saber Soleymani</span>
                  {/* <!-- <img src="src/img-min/logo.png" alt="LOGO"> --> */}
                </div>
                <p>This website provides access to my favorite resources, teaching materials and tools, and my social media contents. </p>
                <ul className="space-x-3 mt-6 mb-6 Lg:mb-0">

                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://medium.com/@saber" title="Medium">
                      {/* <!-- <i className="fab fa-youtube fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg>
                    </a>
                  </li>
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://twitter.com/saber_soley" title="Twitter">
                      {/* <!-- <i className="fab fa-twitter fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path></svg>
                    </a>
                  </li>
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://instagram.com/saber1144" title="Instagram">
                      {/* <!-- <i className="fab fa-instagram fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path><path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path><path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"></path></svg>
                    </a>
                  </li>
                  <li className="inline-block">
                    <a target="_blank" className="hover:text-gray-100" rel="noopener noreferrer" href="https://github.com/noghte" title="GitHub">
                      {/* <!-- <i className="fab fa-facebook fa-2x"></i> --> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink max-w-full w-full lg:w-3/5 px-3">
                <div className="flex flex-wrap flex-row">
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Articles</h4>
                    <ul>
                      <li className="py-1 hover:text-white"><a href="#">Landing</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Pages</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Sections</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Sign Up</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Login</a></li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Papers</h4>
                    <ul>
                      <li className="py-1 hover:text-white"><a href="#">Documentation</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Changelog</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Tools</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Icons</a></li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Teaching</h4>
                    <ul>
                      <li className="py-1 hover:text-white"><a href="#">Utilities</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Components</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Example code</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Updates</a></li>
                    </ul>
                  </div>
                  <div className="flex-shrink max-w-full w-1/2 md:w-1/4 mb-6 lg:mb-0">
                    <h4 className="text-base leading-normal mb-3 uppercase text-gray-100">Projects</h4>
                    <ul>
                      <li className="py-1 hover:text-white hover:text-white"><a href="#">Privacy Policy</a></li>
                      <li className="py-1 hover:text-white"><a href="#">Terms of Use</a></li>
                      <li className="py-1 hover:text-white"><a href="#">License</a></li>
                      <li className="py-1 hover:text-white"><a href="#">GDPR</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-dark">
          <div className="container py-4 border-t border-gray-200 border-opacity-10">
            <div className="row">
              <div className="col-12 col-md text-center">
                <p className="d-block my-3">The source of this website and all of its contents, unless stated otherwise in the orignal content, are free and open-source under the <a href="http://opensource.org/licenses/MIT">MIT License</a>. <br/> Made with Payload CMS by Saber Soleymani. </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
