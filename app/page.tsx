import { Hero, CustomFilter, SearchBar, CarCard } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p> Explore the vehicle you like</p>
        </div>

        <div className="home__filter">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>

        {!isDataEmpty ? (
          <section>
            we Have Cars
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => {
                return <CarCard car={car} />;
              })}
            </div>
          </section>
        ) : (
          <div className="home_error-container">
            <h2 className="text-back text-xl"> No results found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
