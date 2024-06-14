import Banner from '@/components/Banner/Banner.client';
import Card from '@/components/Card/Card.server';
import { fetchCoffeeStores } from '@/lib/coffee-stores';
import { CoffeeStoreType } from '@/types';

const getData = async () => {
  //mapbox api
  return await fetchCoffeeStores();
};

export default async function Home() {
  const coffeeStore = await getData();

  return (
    <div className='mb-56'>
      <main className='mx-auto mt-10 max-w-6xl px-4'>
        <Banner />
        <div className='mt-20'>
          <h2 className='mt-8 pb-8 text-4xl font-bold text-white'>
            Toronto Stores
          </h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6'>
            {coffeeStore.map((coffeeStore: CoffeeStoreType) => (
              <Card
                name={coffeeStore.name}
                imgUrl={coffeeStore.imgUrl}
                href={`/coffee-store/${coffeeStore.id}`}
                key={`${coffeeStore.name}-${coffeeStore.id}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
