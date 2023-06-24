import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import OnBoardingModal from "../OnBoardingModal";
import { useAppSelector } from "@/store/store";

type Props = {
  isOpen: boolean;
  closeModal: () => void;
};

export default function SideBar({ isOpen, closeModal }: Props) {
  const authState = useAppSelector((state) => state.auth);
  const [onBoarding, setOnBoarding] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return (
    <>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 max-w-0"
                enterTo="opacity-100 max-w-sm"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-x-0 max-w-sm"
                leaveTo="opacity-0 translate-x-96 max-w-sm">
                <Dialog.Panel className="h-screen w-full max-w-sm transform overflow-hidden bg-white p-6 text-left shadow-xl transition-all">
                  <div className="my-8 flex justify-end">
                    <button onClick={closeModal}>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <ul className="space-y-6 pl-8 text-lg font-thin">
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        Culture
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="hover:text-primary-dark">
                        Games
                      </Link>
                    </li>
                    {authState.isAuthenticated ? (
                      <li>
                        <Link to="/profile" className="hover:text-primary-dark">
                          Profile
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <button
                          className="hover:text-primary-dark"
                          onClick={() => {
                            setOnBoarding(true);
                            closeModal();
                          }}>
                          Login / Register
                        </button>
                      </li>
                    )}
                  </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <OnBoardingModal
        isOpen={onBoarding && !authState.isAuthenticated}
        closeModal={() => setOnBoarding(false)}
      />
    </>
  );
}
