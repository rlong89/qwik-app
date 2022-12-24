import { component$ } from '@builder.io/qwik';
import { useContent } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';
export default component$(() => {
  const { menu } = useContent();
  const { pathname } = useLocation();

  return (
    <header>
      <div class="flex items-center justify-between">
        <div >
          <a href="/"  title="app">
            SITE
          </a>
        </div>
        <div>
        {menu
          ? menu.items?.map((item) => (
              <>
                <ul class="">
                  {item.items?.map((item) => (
                    <li>
                      <a
                        href={item.href}
                        class={{
                          'is-active': pathname === item.href,
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ))
          : null}
        </div>
      </div>
    </header>
  );
});
