
export function NotFoundPage() {
    return (
      <main className="w-full h-screen flex flex-col items-center justify-center text-center relative">
        <h1 className="text-[300px] text-gray-300">404</h1>
        <div className="absolute z-10 space-y-5">
          <h2 className="text-5xl font-bold">WE ARE SORRY, PAGE NOT FOUND!</h2>
          <div className="space-y-10">
            <p className="text-base mx-64">
              THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAIABLE.
            </p>
            <div>
              <a href="/" className="bg-blue-400 text-white px-9 py-5 rounded-full">
                Back To Homepage
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
  