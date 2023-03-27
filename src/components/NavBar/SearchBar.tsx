import { Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export default function SearchBar({ isOpen, closeModal }: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-transparent bg-opacity-5" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden bg-white bg-opacity-90 p-6 py-24 text-left">
                <Dialog.Title className="text-2xl font-semibold">
                  Search The Latch
                </Dialog.Title>
                <form onSubmit={() => console.log("")} className="mt-4 flex">
                  <input
                    type="text"
                    className="flex-grow border-b border-black text-2xl font-semibold focus:outline-none"
                  />
                  <button type="submit" className="-ml-12">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                  </button>
                </form>
                <div className="min-h-[300px]" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
