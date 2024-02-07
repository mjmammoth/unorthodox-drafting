export function Header() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center w-full py-6 md:py-7 lg:py-8 xl:py-9 bg-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Unconventional Drafting
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
              for Dota 2
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
