import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
      Home Page
    </div>
  );
});

export const head: DocumentHead = {
  title: 'App Start',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
