import { fetchCoffeeStore } from '@/lib/coffee-stores';
import Link from 'next/link';

const getData = async (id: string) => {
  //mapbox api
  return await fetchCoffeeStore(id);
};

const Page = async (props: { params: { id: string } }) => {
  const {
    params: { id },
  } = props;

  const coffeeStore = await getData(id);
  console.log(coffeeStore);
  return (
    <div className='h-full pb-80'>
      <div className='m-auto grid max-w-full px-12 lg:max-w-6xl lg:grid-cols-2 lg:gap-4'>
        <div className='mb-2 mt-24 text-lg font-bold'>
          <Link href='/'>← Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
