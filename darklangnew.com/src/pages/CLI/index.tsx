/**
 * CLI Page Component
 */

import React from 'react';
import cliImage from '../../assets/cli.png';
import doubleGridImage from '../../assets/double-grid.png';
import gridImage from '../../assets/grid.png';
import logoAscii from '../../assets/logo-ascii.png';
import Terminal from '../../components/ui/Terminal';
import Button from '../../components/ui/Button.tsx';

const CLIPage: React.FC = () => {
  return (
    <div className="bg-dark text-white font-code">
      {/* ASCII Art Header Section */}
      <section className="py-18 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto text-center">
        <div className="">
          <pre className="text-white font-mono text-lg md:text-xl 2xl:text-2xl">
            {`
     _            _    _                       ____ _     ___
  __| | __ _ _ __| | _| | __ _ _ __   __ _    / ___| |   |_ _|
/ _  | / _  | '__| |/ / | / _  | '_ \ / _  | | |   | |    | |
| (_| | (_| | |  |   <| | (_| | | | | (_| |  | |___| |___ | |
\__,_|\__,_ |_|  |_|\_\_|\__,_|_| |_|\__,  |  \____|_____|___|
                                      |___/
`}
          </pre>
        </div>
      </section>

      {/* CLI Platform Section */}
      <section className="py-12 pl-6 pr-8 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-2/3">
            <div className="text-2xl font-medium text-purple-dbg mb-8">$ darklang platform |</div>
            <h2 className="text-xl mb-12 mr-10">
              Darklang's CLI is fully cross-platform, seamlessly running on
              macOS, Linux, and Windows for a consistent development
              experience everywhere
            </h2>
            <button className="inline-block bg-blue-dbg hover:bg-purple-dbg text-white font-semibold py-2.5 px-8 rounded-md transition duration-200 tracking-widest md:text-lg">
              &gt;_ Try It Now!
            </button>
          </div>
          <div className="w-[700px] absolute -right-30 2xl:right-30">
            <img src={cliImage} alt="Darklang CLI Terminal" className="rounded-lg shadow-lg 2xl:w-7xl" />
          </div>
        </div>
      </section>

      {/* Bash Complexities Section */}
      <section className="py-32 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-xl md:text-2xl font-medium">$ darklang get started |</div>

      </section>

      {/* Bash Complexities Section */}
      <section className="py-16 px-6 max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-xl md:text-2xl font-medium">$ darklang solving bash complexities |</div>

        <div className="space-y-8 flex flex-row">
          <div className='w-3/4'>
            <p className="text-white text-lg leading-relaxed">
              Darklang CLI is a better replacement for traditional file-based scripts, such
              as in bash, python, lua, js, etc.
            </p>

            <p className="text-white text-lg leading-relaxed">
              bash is super hard to read, using weird variable names. While lots of us can
              read and write bash scripts, since there are few experts, it's not a great
              language.
            </p>

            <ul className="space-y-8 mt-8">
              <li className="flex">
                <span className="text-white mr-4">-</span>
                <span className="text-white text-xl leading-relaxed">
                  lack of a package manager means the generated code has to use cli tools,
                  which each have different interfaces, which may not be installed, and are
                  often opaque
                </span>
              </li>

              <li className="flex">
                <span className="text-white mr-4">-</span>
                <span className="text-white text-xl leading-relaxed">
                  different versions of the tools might be installed with subtly different
                  behaviour (esp gnu vs bsd)
                </span>
              </li>

              <li className="flex">
                <span className="text-white mr-4">-</span>
                <span className="text-white text-xl leading-relaxed">
                  lack of real types and functions (which are a mess in bash) contributes to
                  these problems
                </span>
              </li>
            </ul>
          </div>
          <div className='w-1/4 absolute -right-20 2xl:-right-45'>
            <img src={doubleGridImage} alt="grid" className='w-2xs 2xl:w-md' />
          </div>
        </div>
      </section>

      {/* Darklang for Scripts Section */}
      <section className="py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-6 text-xl md:text-2xl font-semibold">$ darklang for your scripts |</div>
        <div className='relative'>
          <img src={gridImage} alt="grid" className='w-2xs absolute -right-40 -bottom-45' />
          <div className="space-y-8">
            <p className="text-white text-xl leading-6">
              Darklang is used as a better language for scripts:
            </p>

            <ul className="space-y-6 mt-6 ml-4">
              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Static types help ensure correctness
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Immutable values make code easier to understand and verify
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Built-in package manager
                </span>
              </li>

              <li className="flex items-start ml-8">
                <span className="text-mint mr-3">✓</span>
                <span className="text-white text-xl leading-6">
                  without an npm install step
                </span>
              </li>

              <li className="flex items-start ml-8">
                <span className="text-mint mr-3">✓</span>
                <span className="text-white text-xl leading-6">
                  versioned immutable functions and packages
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Easy to take a script and move it to the cloud
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Easy to use traces
                </span>
              </li>

              <li className="flex items-start">
                <span className="text-blue-dbg mr-3">›</span>
                <span className="text-white text-xl leading-6">
                  Easy to test, and be sure it's working
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      {/* Darklang Examples Section */}
      <section className="py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto relative">
        <div className="text-purple-dbg mb-10 text-xl md:text-2xl font-semibold">$ darklang examples |</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-20">
          {/* Left Terminal - Installation */}
          <Terminal className='z-2'>
            <div className="flex">
              <span className="text-white mr-2">$</span>
              <span className="text-blue-dbg mr-2">curl</span>
              <span className="text-white">https://darklang.com/download</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-purple-lbg">bash</span>
            </div>

            <div className="mt-4 text-white">
              Darklang installed in <span className="text-gray-400">~/.darklang/bin/darklang</span>
            </div>

            <div className="mt-2 flex">
              <span className="text-white mr-2">Add to</span>
              <span className="text-purple-dbg">PATH</span>
              <span className="text-white mx-2">via .bashrc</span>
              <span className="text-gray-400 mx-2">[y, n, ?]:</span>
              <span className="text-white">y</span>
            </div>

            <div className="mt-2 flex">
              <span className="text-mint mr-2">✓</span>
              <span className="text-white">Added to .bashrc.</span>
            </div>

            <div className="mt-4 text-white">Next you can:</div>
            <p className="text-blue-300 mr-2 my-3"># Try the tutorial</p>
            <p className="text-white mr-2">darklang tutorial</p>
            <p className="text-blue-300 mr-2 my-3"># Run some code from the package manager darklang</p>
            <p className="text-white mr-2 my-3">@paul.fizzbuzz 3</p>
            <p className="text-blue-300 mr-2 my-3"># Generate some code</p>
            <p className="text-white mr-2">darklang prompt <span className="text-gray-400">"Find ts scripts with more than 600 lines which use the commonjs format"</span></p>
            <p className="text-blue-300 mr-2 my-3"># See available command line options</p>
            <p className="text-white mr-2 my-3">darklang help</p>
          </Terminal>

          {/* Right Column - Multiple Terminal Examples */}
          <div className="space-y-8">
            {/* Top Terminal - Fizzbuzz Example */}
            <Terminal>
              <div className="flex">
                <span className="text-white mr-2">$</span>
                <span className="text-purple-dbg mr-2">darklang</span>
                <span className="text-white">@paul.fizzbuzz 3</span>
              </div>
              <div className="mt-2 text-white">1</div>
              <div className="text-white">2</div>
              <div className="text-white">Fizz</div>
            </Terminal>

            {/* Middle Terminal - Deploy Example */}
            <Terminal>
              <div className="flex">
                <span className="text-white mr-2">$</span>
                <span className="text-purple-dbg mr-2">darklang</span>
                <span className="text-white">deploy @paul.fizzbuzz /fizzbuzz</span>
              </div>

              <div className="text-gray-400 mt-2"> <span className='text-white'>Deployed to</span> https://furry-squirrel-3562.darklang.io/fizzbuzz</div>
              <div className="flex">
                <span className="text-white mr-2">in</span>
                <span className="text-olive">0.135s</span>
              </div>
            </Terminal>

            {/* Bottom Terminal - Curl Example */}
            <Terminal>
              <div className="flex">
                <span className="text-white mr-2">$ curl -sSO</span>
                <span className="text-gray-400">https://furry-squirrel-3562.darklang.io/fizzbuzz/3</span>
              </div>
              <div className="mt-2 text-white">1</div>
              <div className="text-white">2</div>
              <div className="text-white">Fizz</div>
            </Terminal>
          </div>
        </div>
        <img src={logoAscii} alt='logo-ascii' className='absolute -left-40 w-xs z-1 -bottom-10' />
      </section>

      {/* Darklang Commands Section */}
      <section className="py-16 px-6  max-w-7xl 2xl:max-w-[100rem] mx-auto">
        <div className="text-purple-dbg mb-10 text-xl md:text-2xl font-semibold">$ darklang commands |</div>

        <div className="space-y-6 ml-6 text-lg 2xl:text-xl">
          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-blue-dbg">help</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Show this help message and exit</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-tan">[function name]</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Run a function in the package manager i.e. `dark @Darklang.Stdlib.Bool.not true`</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-mint">run [script path]</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Run a .dark script i.e. `dark ./my-script.dark`</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-purple-dbg">install</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Install the darklang CLI so it's available globally in your terminal</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-sand">http</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Lists both local and cloud handlers</div>
          </div>

          <div className="grid grid-cols-12 gap-4 items-start">
            <div className="col-span-3 md:col-span-3">dark <span className="text-olive">dbs</span></div>
            <div className="col-span-9 md:col-span-9 text-white">Lists both local and cloud dbs</div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-purple-dbg text-white py-3 px-6 rounded-md border border-blue-dbg hover:border-purple-dbg transition duration-200 ml-4"
            onClick={() => window.location.href = '#'}
          >
            &gt;_ See Full List
          </Button>
        </div>
      </section>

      {/* Getting Started Section */}
      <div className="flex items-center justify-center min-h-screen text-white">
        {/* Relative container to position the intersecting corner lines and content */}
        <div className="relative w-full max-w-4xl px-6 py-20">
          {/* Corner lines that properly intersect */}
          {/* Horizontal lines */}
          <div className="absolute top-0 -left-5 -right-5 h-[1px]">
            <div className="absolute -left-5 w-[500px] h-full bg-gradient-to-r from-gray-200 to-gray-200/5"></div>
            <div className="absolute -right-5 w-[500px] h-full bg-gradient-to-l from-gray-200 to-gray-200/5"></div>
          </div>

          <div className="absolute bottom-0 -left-5 -right-5 h-[1px]">
            <div className="absolute -left-5 w-[500px] h-full bg-gradient-to-r from-gray-200 to-gray-200/5"></div>
            <div className="absolute -right-5 w-[500px] h-full bg-gradient-to-l from-gray-200 to-gray-200/5"></div>
          </div>

          {/* Vertical lines */}
          <div className="absolute -top-5 -bottom-5 left-0 w-[1px]">
            <div className="absolute -top-5 h-[220px] w-full bg-gradient-to-b from-gray-200 to-gray-200/5"></div>
            <div className="absolute -bottom-5 h-[220px] w-full bg-gradient-to-t from-gray-200 to-gray-200/5"></div>
          </div>

          <div className="absolute -top-5 -bottom-5 right-0 w-[1px]">
            <div className="absolute -top-5 h-[220px] w-full bg-gradient-to-b from-gray-200 to-gray-200/5"></div>
            <div className="absolute -bottom-5 h-[220px] w-full bg-gradient-to-t from-gray-200 to-gray-200/5"></div>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              Getting Started with Darklang CLI
            </h1>
            <p className="text-gray-300 text-lg mb-12">
              Write your first script in Darklang today and have it running in minutes
            </p>
            <button className="bg-blue-dbg hover:bg-purple-dbg text-white py-3 px-8 rounded">
              &gt;_ Try It Now!
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CLIPage;