import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <div class="bg-gray-600 text-white py-8 text-center">
          Footer
        </div>
      </footer>
    </>
  );
});
