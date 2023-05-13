import { sleep } from "@/utils/utils";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { usePopper } from "react-popper";

interface Author {
  id: number;
  name: string;
}

export default function AuthorPopOver() {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const [fetching, setFetching] = useState(true);
  const [author, setAuthor] = useState({} as Author);

  const timeoutRef = useRef<NodeJS.Timeout | undefined>();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  });

  async function fetchAuthorDetails() {
    if (author.id) return;
    setFetching(true);
    await sleep(1000);
    setAuthor({ id: 1, name: "Abdulkarim Ogaji" });
    setFetching(false);
  }

  return (
    <Popover className="relative">
      {({ close }) => (
        <div
          onMouseEnter={() => {
            timeoutRef.current = setTimeout(() => {
              referenceElement?.click();
            }, 500);
          }}
          onMouseLeave={() => {
            clearTimeout(timeoutRef.current);
            close();
            referenceElement?.blur();
          }}>
          <Popover.Button
            ref={setReferenceElement}
            className={"font-medium underline focus:outline-none"}>
            Abdulkarim Ogaji
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            afterEnter={() => fetchAuthorDetails()}>
            <Popover.Panel
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className={"author-popper"}>
              <div className="relative z-10 mb-4 mt-4 h-40 w-96 rounded border border-gray-300 bg-white p-5">
                <div className="absolute inset-0">
                  <div
                    className="author-popper-arrow relative h-full before:absolute before:inset-0 before:mx-auto before:h-4 before:w-4 before:bg-white"
                    ref={setArrowElement}
                  />
                </div>
                {fetching ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <svg
                      className="inline h-8 w-8 animate-spin text-white"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="#C4A484"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="#C4A484"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between">
                      <img
                        src="/featured.jpg"
                        alt=""
                        className="h-16 w-16 rounded-circle object-cover"
                      />
                      <button className="cursor-pointer rounded-md border border-gray-300 bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        Follow
                      </button>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold">{author.name}</h4>
                    </div>
                  </>
                )}
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
