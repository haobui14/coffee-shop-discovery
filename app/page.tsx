import Banner from '@/components/Banner/Banner.client';
import Card from '@/components/Card/Card.server';

export default function Home() {
  const coffeeStoreId = 'starbucks-coffee';
  const coffeeStore = [
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
    {
      name: 'StrangeLove Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      name: 'Dark Horse Coffee',
      imgUrl:
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80',
    },
  ];
  return (
    <div className='mb-56'>
      <main className='mx-auto mt-10 max-w-6xl px-4'>
        <Banner />
        <div className='mt-20'>
          <h2>Toronto Stores</h2>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-6'>
            {coffeeStore.map((store, index) => (
              <Card
                name={store.name}
                imgUrl={store.imgUrl}
                href={`/coffee-store/${index}`}
                key={`${store.name}-index`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
