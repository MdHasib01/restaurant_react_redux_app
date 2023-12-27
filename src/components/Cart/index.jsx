import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../features/cart/cartSlice";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Button, Text } from "components";
// import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc: "images/img_pngitem41084.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc: "images/img_pngitem41084.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart({ open, setOpen }) {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-[#fff] shadow-xl">
                    <div className="flex-1 overflow-y-auto h-full px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                            <h1>X</h1>
                          </button>
                        </div>
                      </div>

                      {!carts.cart.length > 0 ? (
                        <div className="h-full flex justify-center items-center">
                          <div className="text-center  my-5 text-red-700 font-bold bg-red-200 w-full p-6">
                            Cart is Empty!
                          </div>
                        </div>
                      ) : (
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {carts.cart.map((cart) => (
                                <li key={cart.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src="images/img_pngitem41084.png"
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{cart.food_name}</h3>
                                        <p className="ml-4">{cart.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {cart.description}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between items-center text-sm">
                                      <p className="text-gray-500">
                                        Qty: {cart?.quantity}
                                      </p>
                                      <div className="bg-gray-51 flex flex-row items-center justify-between rounded-[16.5px] w-[42%]">
                                        <Button
                                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                                          shape="round"
                                          color="white_A700"
                                          variant="fill"
                                          onClick={() =>
                                            dispatch(
                                              decreaseItemQuantity(cart.id)
                                            )
                                          }
                                        >
                                          -
                                        </Button>
                                        <Text
                                          className="text-[16.62px] text-gray-900"
                                          size="txtPoppinsRegular1662"
                                        >
                                          {cart.quantity}
                                        </Text>
                                        <Button
                                          className="cursor-pointer h-[33px] rounded-[50%] text-center w-[33px]"
                                          shape="round"
                                          color="white_A700"
                                          variant="fill"
                                          onClick={() =>
                                            dispatch(
                                              increaseItemQuantity(cart.id)
                                            )
                                          }
                                        >
                                          +
                                        </Button>
                                      </div>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() => {
                                            toast.success(
                                              "Item removed successfully!"
                                            );
                                            dispatch(removeItem(cart.id));
                                          }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{carts.totalPrice.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        {carts.cart.length > 0 ? (
                          <a
                            onClick={() => navigate("/checkout")}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-[#fff] shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </a>
                        ) : (
                          <a
                            onClick={() => toast.error("No item in Cart!")}
                            className="flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-[#fff] shadow-sm hover:bg-gray-700"
                          >
                            Checkout
                          </a>
                        )}
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <Toaster />
        </div>
      </Dialog>
    </Transition.Root>
  );
}
