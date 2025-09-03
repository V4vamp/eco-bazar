"use client";

import React, { useState } from "react";
import { Country, State, IState } from "country-state-city";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { GoHome } from "react-icons/go";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [isOrderSuccess, setIsOrderSuccess] = useState<boolean>(false);
  const countries = Country.getAllCountries();
  const [states, setStates] = useState<IState[]>([]);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    additionalInfo: "",
    paymentMethod: "",
  });

  const [showShipping, setShowShipping] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    state: "",
    streetAddress: "",
  });

  const paymentMethods = [
    { value: "cod", label: "Cash on Delivery" },
    { value: "amazon", label: "Amazon Pay" },
    { value: "paypal", label: "PayPal" },
  ];

  const handleBillingChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setBillingInfo((prev) => ({
      ...prev,
      country: code,
      state: "",
    }));
    setStates(State.getStatesOfCountry(code));
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBillingInfo((prev) => ({
      ...prev,
      state: e.target.value,
    }));
  };

  const handleShippingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setShippingInfo({ ...shippingInfo, country: code, state: "" });
    setStates(State.getStatesOfCountry(code));
  };

  const handleShippingState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setShippingInfo({ ...shippingInfo, state: code });
  };

  const handleShowShipping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowShipping(e.target.checked);
  };

  const handleCloseModal = () => {
    clearCart();
    router.push("/");
    setIsOrderSuccess(false);
  }

  const isBillingValid = () => {
    const { firstName, lastName, streetAddress, country, state, zipCode, email, phone, paymentMethod } = billingInfo;
    return (
      firstName.trim() &&
      lastName.trim() &&
      streetAddress.trim() &&
      country &&
      state &&
      zipCode.trim() &&
      email.trim() &&
      phone.trim() &&
      paymentMethod
    );
  };

  const isShippingValid = () => {
    if (!showShipping) return true;
    return (
      shippingInfo.country &&
      shippingInfo.state &&
      shippingInfo.streetAddress.trim()
    );
  };

  const isFormValid = isBillingValid() && isShippingValid();

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsOrderSuccess(true);
  };
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col items-center mt-[238px] lg:mt-46 gap-7 pb-10 font-poppins bg-[#FFF]">
        <header className="w-full h-[75px] flex items-center relative px-6 lg:px-[200px]">
          <Image
            src={"/images/crop.png"}
            alt="Crop Image"
            fill
            className="object-cover object-center transform scale-x-[-1]"
          />
          <div className="w-full relative flex items-center gap-2">
            <Link href={"/"}>
              <GoHome size={16} color="#808080" />
            </Link>
            <MdOutlineKeyboardArrowRight size={16} color="#808080" />
            <span className="text-[#00B207] text-[12px]">Checkout</span>
          </div>
        </header>
        <form
          onSubmit={handlePlaceOrder}
          className="w-full flex flex-col lg:flex-row lg:justify-between items-start px-6 lg:px-[200px]"
        >
          <div className="w-full lg:w-[65%] flex flex-col gap-5">
            <h2 className="text-[#1A1A1A] text-[16px] font-medium">
              Billing Information
            </h2>
            <div className="w-full grid lg:grid-cols-3 gap-4">
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="firstName"
              >
                First Name
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="firstName"
                  value={billingInfo.firstName}
                  onChange={handleBillingChange}
                  placeholder="Your first name"
                />
              </label>
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="lastName"
              >
                Last Name
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="lastName"
                  value={billingInfo.lastName}
                  onChange={handleBillingChange}
                  placeholder="Your last name"
                />
              </label>
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="company"
              >
                <h4>
                  Comapny Name{" "}
                  <span className="text-[#999999]">(Optional)</span>
                </h4>
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="companyName"
                  value={billingInfo.companyName}
                  onChange={handleBillingChange}
                  placeholder="Company's name"
                />
              </label>
            </div>
            <label
              className="w-full flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
              htmlFor="streetAddress"
            >
              Street Address
              <input
                className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                type="text"
                name="streetAddress"
                value={billingInfo.streetAddress}
                onChange={handleBillingChange}
                placeholder="Street address"
              />
            </label>
            <div className="w-full grid lg:grid-cols-3 gap-4">
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="country"
              >
                Country/Region
                <select
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  value={billingInfo.country}
                  onChange={handleCountryChange}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c.isoCode} value={c.isoCode}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="state"
              >
                State
                <select
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  onChange={handleStateChange}
                  value={billingInfo.state}
                  disabled={!billingInfo.country}
                >
                  <option value="">Select State</option>
                  {states.map((s) => (
                    <option key={s.isoCode} value={s.isoCode}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </label>
              <label
                className="w-full flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="zipCode"
              >
                Zip Code
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="zipCode"
                  value={billingInfo.zipCode}
                  onChange={handleBillingChange}
                  placeholder="Zip code"
                />
              </label>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="email"
              >
                Email Address
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="email"
                  value={billingInfo.email}
                  onChange={handleBillingChange}
                  placeholder="Email Address"
                />
              </label>
              <label
                className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                htmlFor="phone"
              >
                Phone
                <input
                  className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                  type="text"
                  name="phone"
                  value={billingInfo.phone}
                  onChange={handleBillingChange}
                  placeholder="Phone Number"
                />
              </label>
            </div>
            <label
              className="text-[#4D4D4D] text-[10px] flex items-center"
              htmlFor=""
            >
              <input
                type="checkbox"
                checked={showShipping}
                onChange={handleShowShipping}
                className="mr-2"
              />
              Ship to a different address
            </label>
            {showShipping && (
              <div className="w-full grid lg:grid-cols-3 gap-4">
                <label
                  className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                  htmlFor="country"
                >
                  Country/Region
                  <select
                    className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                    value={shippingInfo.country}
                    onChange={handleShippingCountry}
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c.isoCode} value={c.isoCode}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label
                  className="flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                  htmlFor="state"
                >
                  State
                  <select
                    className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                    onChange={handleShippingState}
                    value={shippingInfo.state}
                    disabled={!shippingInfo.country}
                  >
                    <option value="">Select State</option>
                    {states.map((s) => (
                      <option key={s.isoCode} value={s.isoCode}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label
                  className="w-full flex flex-col gap-1 text-[#1A1A1A] text-[12px]"
                  htmlFor="streetAddress"
                >
                  Street Address
                  <input
                    className="w-full border-[1px] border-[#E5E5E5] rounded-[6px] p-2 text-[#1A1A1A]"
                    type="text"
                    name="streetAddress"
                    value={shippingInfo.streetAddress}
                    onChange={handleShippingChange}
                    placeholder="Zip code"
                  />
                </label>
              </div>
            )}
            <hr />
            <h2 className="text-[#1A1A1A] text-[16px] font-medium">
              Additional Info
            </h2>
            <label
              className="w-full flex flex-col gap-1"
              htmlFor="additionalInfo"
            >
              <h4 className="text-[12px] text-[#1A1A1A]">
                Order Notes <span>(Optional)</span>
              </h4>
              <textarea
                name="additionalInfo"
                value={billingInfo.additionalInfo}
                onChange={handleBillingChange}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className="w-full border-[#E5E5E5] border-[1px] p-2 rounded-[6px] placeholder:text-[12px] placeholder:text-[#999999] text-[12px] text-[#1A1A1A] outline-0"
              />
            </label>
          </div>
          <div className="w-full mt-5 lg:mt-0 lg:w-[33%] flex flex-col gap-4 rounded-[8px] border-[#E5E5E5] border-[1px] p-4">
            <h2 className="text-[#1A1A1A] text-[16px] font-medium">
              Order Summary
            </h2>
            <div className="w-full flex flex-col gap-2">
              {cart.map((item) => (
                <div
                  className="w-full flex justify-between items-center"
                  key={item.id}
                >
                  <span className="flex items-center gap-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <p className="text-[#1A1A1A] text-[10px]">{item.name}</p>
                    <p className="text-[#1A1A1A] text-[10px]">
                      x{item.quantity}
                    </p>
                  </span>
                  <p className="text-[#1A1A1A] text-[10px] font-semibold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <span className="w-full flex justify-between items-center pb-4 border-[#E5E5E5] border-b-[1px]">
              <p className="text-[#4D4D4D] text-[10px]">Subtotal:</p>
              <p className="text-[#1A1A1A] text-[10px] font-semibold">
                ${cartTotal}
              </p>
            </span>
            <span className="w-full flex justify-between items-center pb-4 border-[#E5E5E5] border-b-[1px]">
              <p className="text-[#4D4D4D] text-[10px]">Shipping:</p>
              <p className="text-[#1A1A1A] text-[10px] font-semibold">Free</p>
            </span>
            <span className="w-full flex justify-between items-center">
              <p className="text-[#4D4D4D] text-[10px]">Total:</p>
              <h4 className="text-[#1A1A1A] text-[12px] font-semibold">${cartTotal}</h4>
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#1A1A1A] text-[14px] font-medium mb-1">Payment Method</h3>
              {paymentMethods.map((method) => (
                <div key={method.value} className="radio flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.value}
                    checked={billingInfo.paymentMethod === method.value}
                    onChange={handleBillingChange}
                    className=""
                  />
                  <label className="text-[12px]" htmlFor="">{method.label}</label>
                </div>
              ))}
            </div>
            <button 
            disabled={!isFormValid}
            className={`w-full bg-[#00B207] rounded-[43px] py-2 font-semibold text-[#FFF] ${!isFormValid ? "opacity-10 cursor-not-allowed" : "cursor-pointer"}`}>
              Place Order
            </button>
          </div>
        </form>
        {isOrderSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center max-w-xs w-full">
              <h3 className="text-lg font-semibold text-[#00B207] mb-2">Thank you for your order!</h3>
              <p className="text-sm text-[#1A1A1A] mb-6 text-center">
                Your order has been placed successfully and is on its way to you.
              </p>
              <button
                className="bg-[#00B207] text-white px-6 py-2 rounded-full font-medium"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Page;
