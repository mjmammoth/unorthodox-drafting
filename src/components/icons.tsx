import React from 'react';

// interface IconProps {
//   wh?: string;
//   className?: string;
// }

export function TechMammothIcon ({ wh = '42px', className = 'svg-icon' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={wh} height={wh} viewBox="0 0 437.7 331.4" className={className}>
      <path d="M328.5 268.5c6.8-4 13.5-7.9 19.1-11.1 3-12.1 5.6-23.2 8.5-34.7-2.4-.8-5.7-1.9-8.9-3.1-8.8-3.4-12.9-9.2-12.9-18.6v-33c-1.7-1.5-3.6-3.2-5.7-5h-40.7c-6.2 5.3-9.7 4.5-12.9 1.1-2.9-3.1-2.6-7.4.4-10.3 3.4-3.2 7.7-2.6 12.4 2h43.8c2.9 3 6.1 6.2 9.2 9.4v33.2c0 9.9 2.9 13.7 12.5 16.3 1.9.5 3.8.8 6.1 1.3 1.2-3.3 2.4-6.4 3.6-9.7-4.5-3.3-8.9-6.5-13.1-9.6v-37.9c-5.8-6-11.2-11.6-16.7-17.3h-41.5c-3.7-4-7.5-8.2-11.2-12.2-5.3 5.6-10.3 10.8-16.5 17.2 0 6.6-.1 15.3 0 23.9 0 3.7 2.3 5.4 5.8 5.5 2.5.1 5 0 7.5 0 3.9 0 8.1 0 9.3 4.8 1.3 4.8-.9 8-4.9 9.1v48c0 1.7.1 3.3-.1 5-.5 4-3.6 6.8-7.3 6.7-4-.1-6.5-2.7-6.5-7.2-.1-15.3 0-30.7 0-46v-6c-14.1-3.2-19.2-15.8-27.8-25.8-2.5 3.6-4.8 7-7.2 10.5-2.4 3.4-4.1 8.1-10.7 6.2-.8-1.4-2.2-3.2-3.1-5.3-8.8-19.2-19.8-36.9-35-51.8-3.3-3.3-6.9-6.2-10.5-9.2-4-3.3-5.9-7.1-5.8-12.5.3-17 .3-34 .1-51-.1-5.1 1.7-8.9 4.9-12.6 7.5-8.7 15-17.4 22.2-26.3 2.2-2.7 3.6-6 5.5-8.9 2.5-3.8 6.2-4.2 9.1-.7 13.6 16.3 30.5 28.7 48.4 39.8 5 3.1 7.4 7 7.3 13.1-.3 12.7-.2 25.3.1 38 .1 4.9-1.5 8.5-5 11.8-5.6 5.2-10.7 10.7-16.9 16.9h11.3c8.2-8.2 16.7-16.7 25.3-25.2V15c-6.7 2.2-12.9 4.3-20 6.7 5.6 5.9 10.3 11 14.8 15.7v8.9c-7.8-8.2-14.9-15.6-22.2-23.3H237c-4-4.2-7.6-8-11.9-12.4 1.9-.4 2.9-.9 3.9-.8 16.3 1.8 31.3-2.9 46.7-7.2 28.1-7.8 55 2.3 70.4 25.7 4.2 6.4 6.9 14.1 8.6 21.5 3.6 15.5 11.3 28.4 23.3 38.6 4.2 3.6 5.6 7.2 5.5 12.8-.4 24.5-.2 49-.2 73.5v17.6c6.7 7.2 13.8 14.9 21.2 22.9-9.8 8-20.1 5.5-31.1 2.7-4.3 15-14.2 29-9.2 45.3 3 9.9 1.2 17.3-4.9 24.8-2.3 2.8-4.1 6.1-6.3 9.4q1.65 1.05 3 1.8c3.6 2 5 5.8 3.4 9.2s-5.4 4.8-9.3 3.2c-17.5-7.1-28.8-19.9-34.7-37.6-2.3-6.9-4-14-5.8-21.1-1.3-4.9.6-8.3 4.8-9.4 4-1.1 7.3 1.1 8.7 6 1.6 5.7 3.2 11.5 4.8 17.2-.2.5.1.9.6 1.8m7.6-145.8c-5.4 4.9-9.6 5.4-13 2-3-3.1-3.1-7.7 0-10.7 4-3.9 8.4-3.1 13.3 2.2 7.1-1.5 10.1-4.7 9.3-11.6-.4-3.7-2.1-7.8-4.5-10.6-6.9-8.1-14.5-15.6-21.9-23.3-3.2-3.4-6.6-6.6-9.6-10.2-2.8-3.4-2.4-7.7.5-10.3 3-2.7 7.2-2.7 10.4.1 1 .8 1.6 2.1 1.9 2.5h18c-2.4-24.7-29.2-42.5-54.2-37.8v5.3c0 24.8.1 49.7-.2 74.5 0 3-1.5 6.5-3.5 8.7-7.3 8-14.9 15.7-22.8 23.2-1.8 1.7-4.8 2.6-7.4 3-3.3.5-6.8.1-10.3.1v25.7c8.4-3.5 10.8 3.7 15.4 9.2v-24.1c5.4-5.1 11.1-10.3 16.6-15.6 4.2-4.1 7.3-4 11.4.4 3 3.3 6.2 6.5 9.1 9.6h42.9c4.7 5.2 10.4 11 15.6 17.3 1.7 2.1 3.2 5.1 3.2 7.8.4 11.1.2 22.3.2 33.9 2.8 1.8 5.6 3.6 9.1 5.9 1.6-5.6 3.9-10.2 4-14.8.3-28.3.2-56.6.2-85.2-11.9-11.6-22.8-23.7-26.8-40-14.1-1.5-19.9-.9-22.3 2.4l5.1 5.4c7.2 7.6 14.6 15.1 21.6 22.9 5.4 6 6.9 13.3 4.3 20.9-2.5 7.3-7.8 11.1-15.6 11.2M213.8 66.2c2.9-2.8 5.7-5.3 8.3-8.2 8.4-9.3 8.1-8.6 16.4-.3 4 4 8.1 7.9 12.8 12.5V55.9C235.7 44 220.8 32.6 205.7 21c-.4.4-1.3 1.7-1.8 2.3v59.5c5.5 5.8 6.2 10 2.5 13.5-3 2.9-7.3 3-10.4.3-3.8-3.4-3.3-7.6 1.5-13.2V72.8c-6.1 5.8-11.4 10.9-16.1 15.3v14.6c11.3 11.9 21.7 22.9 32.4 34.2zm13.4 93.2c.5-2.6 1.3-5.2 1.3-7.8.1-24.1.1-48.2.1-72.3 1-.8 1.8-1.5 2.6-2 .4-.2.9-.2 2.8-.5 2.7 11.1.1 22.5 1.4 33.4 5-5 9.8-9.9 15.3-15.5v-14c-7.7-7.8-14.3-14.5-21.1-21.4-3 3.1-6 6.3-9.1 9.6 0 24.8.2 49.4-.2 74 0 6.5 2.8 11.3 6.9 16.5m-29.9-96.8v-31c-2.7 3-4.4 5.6-6.7 7.3-8.2 6-10.8 14-9.6 23.8.6 5.1.1 10.4.1 15.5.4.1.8.2 1.3.3 4.9-5.1 9.7-10.3 14.9-15.9m139 222.5c5.5-4.6 10.4-8.7 15.2-12.7-.9-3.1-1.6-5.4-2.4-8.2-6.5 3.8-12.6 7.3-19.5 11.2 2.6 3.7 4.9 7 6.7 9.7m43.5-85.1c-1.3 3.6-2.7 7.3-4.3 11.7 6 .8 11.1 1.5 17.7 2.4-1.7-2.5-2.3-3.7-3.2-4.6-3.2-3.1-6.5-6-10.2-9.5M25.7 146.3c-4.5 6-5.9 12.6-7.1 20.2 0 20.1-.7 38.8-.8 59 0 10.2-8.3 19.8-17.8 21.5v-11.7c8.2-4.1 9.2-10.8 9-19.8-.6-27.5-.6-27.5-.8-41-.1-4.5-.1-8.9-.1-13.4.1-5.3.8-10.6 1.9-15.7 6.3-30.9 17.4-59.6 37.7-84.2C67.2 37.6 91.6 21.4 121.5 13c3.2 2.6 6.4 5.2 9.6 7.7-.3.8-.7 1.6-1 2.4-1.5.9-2.9 2.3-4.5 2.7-31.8 8.7-56.9 26.8-75.3 54.1-3.5 5.2-6.7 10.8-9.6 16.3-1 1.9-1.2 4.5-1.2 6.7-.1 21.7-.1 43.3-.1 65 0 1.7.1 3.4-.3 5-.9 3.9-3.3 6.2-7.5 5.7-3.9-.4-5.9-2.8-5.9-6.8-.1-8.5 0-17 0-25.5M167 225.4h-32.4v5.7c0 16.5.1 33 .1 49.4 0 5.3-1.9 7.7-6 8.1-4.8.5-7.8-1.9-7.8-6.8-.1-20.5 0-41 .1-61.4 0-5.5 3.4-8.6 8.9-8.7 14.2-.1 28.3-.2 42.5-.1 5.5 0 8.7 3 8.8 8.6.2 8.3.2 16.7 0 25-.1 4.7-3 7.4-7.1 7.3-4 0-6.8-2.9-7-7.5-.2-6.4-.1-12.8-.1-19.6"/>
      <path d="M317 228.6c-.9-15-1.8-28.8-2.6-42.5-.1-2-.5-4.6.5-5.8 1.7-2 4.4-4 6.9-4.3 3.1-.3 5.7 2 5.8 5.6.3 14.8.7 29.6.5 44.4-.1 7.7-5.4 12.2-13.2 12.8-7.9.6-14.5-3.4-15.8-10.6-2.7-14.9-4.8-29.8-6.9-44.7-.5-3.8 2.8-7.6 6.4-7.5 3.8.1 6.8 2 7.1 6.2 1 12.1 1.9 24.2 2.9 36.3.3 3.1.7 6.2 1.1 10.1zM111.7 90.4h-44c-3.8 4-7.6 8-11.8 12.3v47.5c.5.3.8.6 1.1.6 9.2-1.3 15.3 3.5 20.8 10.1 3.9 4.7 8.7 8.7 12.8 13.3 1.2 1.3 1.6 3.4 2.3 5.1-.5.6-1.1 1.1-1.6 1.7-1.9-1-4.2-1.5-5.7-2.9-6.8-6.6-13.3-13.5-20-20.3h-15c-.6-2-1.7-3.9-1.7-5.8-.1-17.2-.1-34.3-.1-51.8 5.4-5.2 10.9-10.5 16.9-16.3h48.2c11.1 11.2 22.3 22.4 33.6 33.7v6.6c-.3.3-.7.6-1 .9-11.6-11.6-23.2-23.1-34.8-34.7M398.5 254.3c6.2-6.6 12.1-12.9 18.8-20 4.5 3.9 8.1 6.9 11.5 10.2 2.6 2.5 5.2 5.2 7.3 8.1 2.6 3.5 1.9 7.3-1.4 9.7-3.3 2.3-6.6 2.1-9.5-.8-2.4-2.5-4.6-5.2-7.2-8-1.7 1.6-3.1 3-4.6 4.4 1 10.1-1.7 19-8.6 26.6-8.5 9.3-21.3 12.7-33.2 8.6-5.1-1.8-7.5-5.3-6.2-9.2 1.4-4.4 4.9-5.8 10.4-4.2 10.5 3.1 17.6.6 22.1-8.6 1.6-3.3 1.3-7.6 1.6-11.4.1-1.6-.6-3.3-1-5.4M235.3 317.6h32.3c0-9.1.2-17.9-.1-26.7-.1-4.9 1.6-8 6.8-9.1 4.9.7 7.2 3.8 7.2 8.9 0 10.2.1 20.3 0 30.5-.1 6.6-3.3 10-9.8 10.1-13.7.2-27.3.1-41 0-4.3 0-8.1-1.6-9.2-6.2-1.1-4.8-2.3-10.2 1.6-14.2 1.5-1.5 5.4-2.5 7.1-1.6 2.4 1.3 3.9 4.5 5.7 6.9-.2.5-.4 1-.6 1.4M218.1 186.1c1.7 1.5 2.7 2.4 4.5 4-3.3 3.7-6.2 7.1-9.3 10.5s-6.3 6.8-10.4 11.2h20.8c8.2 0 11.1 2.9 11.1 11.1v30.5c0 5.7-2.3 8.3-6.9 8.3-4.3 0-6.8-3-6.9-8.5v-27.8h-27c-1.8 0-3.7 0-5.5-.3-3.9-.8-5.7-3.6-5.4-7.3.3-3.4 2.6-5.7 6.3-5.9 1.5-.1 3 0 4.4 0 8.2-8.7 16.1-17.2 24.3-25.8M39.3 317.6h31.8c.4-1.1.5-2.8 1.4-3.4 2.2-1.5 4.7-3.5 7-3.3 2 .1 4.9 2.5 5.7 4.5 3.4 8.8-1.6 15.9-10.9 15.9q-18.75.15-37.5 0c-8.2-.1-11.1-3-11.1-11.1 0-8.3-.1-16.7 0-25 .1-5.2 2.1-7.4 6.6-7.5 4.3-.1 6.9 2.4 7 7.3.2 7.3 0 14.6 0 22.6M148.4 199.8H111v11c4.2 1.4 6 4.5 4.5 9.1-1.3 4.1-5.1 5.9-11.4 5.6V200H72c-.8-1.7-1.5-3.1-2.6-5.6 3.2-.6 5.5-1.3 7.8-1.4 20.8-.1 41.6-.1 62.4-.1h5.8c11.6-11.6 23.5-23 34.6-35.1 5-5.4 10.1-6.8 17.2-5.6 1.1 1.7 2.3 3.5 3.9 6.1h-12.9c-13.2 13.8-26.7 27.8-39.8 41.5"/>
      <path d="M424.7 265.9c6.5 2.2 7.8 4.8 5.8 11.2-9.8 30.8-30.4 41.4-60.3 41.8-4.3.1-7.3-2.6-7.4-6.5 0-4.1 2.2-6.5 6.3-7 4.6-.6 9.3-.7 13.9-1.3 18.1-2.3 28.9-12.8 33.8-29.9 1.2-4 2.6-7.7 7.9-8.3M160.6 122.6h15.9c1.9 2 3.7 3.9 6.2 6.6H154V45.3h-27.3c-6.3 4.4-10.4 4.7-13.4.9-2.4-3.1-2-7.7.9-10.3 3.7-3.3 7.1-2.6 13.1 2.9h32c.4 2.6 1.2 5.1 1.2 7.6.1 23.3 0 46.6 0 69.9.1 1.8.1 3.8.1 6.3M101.8 127.7H81c-7 4.7-10.6 5-13.6.8-2.5-3.5-1.9-8.3 1.4-10.8 3.5-2.7 7.7-1.7 11.8 3.1h15.7c12.4-.1 12.5-1.3 12.3 12.1-.1 10.3 0 20.6 0 31.7h12.2c8.7 0 17.3-.1 26 .1 2.1.1 4.1 1.3 6.2 2 0 .9 0 1.7.1 2.6-2 .7-4 2-6 2.1-10.8.2-21.6 0-32.5 0h-4.3c-2 5.4-3.8 10-5.4 14.4h-7.5c-.1-.5-.3-1-.2-1.1 5.1-5.5 4.9-12.2 4.8-19.1-.4-12.5-.2-24.9-.2-37.9M25.6 226.1v-31.9c0-5.3 2.3-8.2 6.5-8.4 4-.2 7.2 3.2 7.2 8.4.1 21.3.1 42.5 0 63.8 0 5.1-3.3 8.6-7.3 8.4-4.1-.2-6.4-3.1-6.4-8.5z"/>
      <path d="M102.5 108.4h-38c-.3-1.8-.5-3.3-.9-5.6 7.7-2.1 15.2-.8 22.5-1s14.6-.1 20.6-.1c17.3 16.7 33.9 32.5 50.1 48.1 4.7-4.4 9.8-9.2 15-14.1h17.1c1.3 1.8 2.5 3.7 4.2 6.1H175c-4.5 4.6-9 9-13.5 13.5-3.7 3.7-6.3 3.6-10.1-.1-15.8-15.1-31.6-30.1-48.9-46.8M135.1 317.7h31.4c.3-1.4.6-2.6.9-3.9 1-3.8 3.6-5.4 7.4-5.1 4 .3 5.9 2.7 6.2 6.5.2 2.2.2 4.3.1 6.5-.3 6.2-3 9.5-9.1 9.6q-21 .45-42 0c-6.3-.1-9.1-3.7-9.2-10 0-1.7-.1-3.3 0-5 .2-4.9 2.5-7.4 6.8-7.6 4.4-.2 6.6 2 7.1 7 .2.5.2.9.4 2M242.5 297.1c3.7-3.4 6.6-6 9.3-8.5v-12.9h-29.2c-.3-2-.5-3.3-.8-5.4 9.9-3.2 19.7-.5 29.1-1.7 4.1-4.4 8.1-8.7 11.6-12.5h16.8c.3 1.8.5 3.3.9 5.8h-14.6c.1.4.1.7.2 1.1-1.8 1.9-3.5 3.7-5.7 6h19.6v6.6h-20.6v15.5c-4.3 4-8.9 8.2-13.7 12.6h-21.3c-2.8-3.9-2.2-6 2.1-6.3 5.6-.5 11.3-.3 16.3-.3M85.6 225.5v29.2c0 1.8-.1 3.7-.7 5.3-1.3 3.3-3.9 5-7.5 4.4-3.4-.6-5.7-2.7-5.7-6.5 0-12.8 0-25.6.2-38.4.1-4.2 3.8-7.6 8.2-7.8 4.1-.2 8.3-.2 12.5 0 3.8.2 6.1 2.2 6.3 6.3.2 4.2-2 6.6-5.9 7.3-2.3.5-4.6.2-7.4.2M179.3 23.5h-41c-2.6-3.5-5.3-7.2-8.5-11.6 2.3-.9 3.9-2 5.5-2 17-.1 34-.1 52.2-.1-3 5-5.6 9.3-8.2 13.7M131.6 65.8c5.1 5.4 10.3 10.9 15.8 16.7v7.7c-6-6.6-11.4-12.7-15.9-17.6h-31.4c-11.2-8.9-17.6-17.1-16.4-22C93 51.8 95.5 61.4 103 65.8zM179.4 257.9v6h-29.3v6.8h29.1c1.9 4.7.9 6.8-3.2 6.8-9.3.2-18.6.1-27.9 0-3.3 0-5.2-1.9-5.2-5.4.1-4.7.3-9.3.5-14.2zM241.8 201.5c5.5 4.9 11 9.9 16.6 14.7 3 2.6 4.2 5.7 2.7 9.3-1.5 3.5-4.5 5.4-8.5 4.5-4.1-.9-6.3-3.6-5.9-7.9.2-1.7.9-3.4 1.4-5.3-5.6-5.6-11.5-11-16.6-17-1.6-1.8-2.1-5.8-1.3-8.1.8-2.1 4.2-4.4 6.3-4.3 2.4.1 5.9 2.2 6.8 4.4 1.1 2.6 0 6.1-.2 9.2-.3.2-.8.3-1.3.5"/>
      <path d="M56.3 227.9v37.4c1.5 1.2 3.1 2.6 5.4 4.5h20.7c.2 2.1.3 3.7.5 6.1H58.5c-5.8-3.9-9.7-9.2-8.9-18 .9-9.9.2-19.8.2-30zM176.5 176.7h35.4v6.6c-8.1.1-19.9.2-28.3.2v5c5 5.3 5.7 9.6 2.4 13.1-2.7 2.8-7.5 3.1-10.4.6-4-3.3-3.6-7.6 1-13.1-.1-4.1 0-11.8-.1-12.4M56 282.5h29.3v6.3c-10.5 0-21.2.5-31.7-.3-3-.2-5.7-4.2-9.4-7.1H25.9c-.1-2.2-.2-4.1-.3-6.4h22.2c2.4 2.1 5 4.6 8.2 7.5M76.4 175.9c-1.1 2.2-1.7 4.1-3 5.5-4.7 4.9-9.6 9.7-14.4 14.5-1.4 1.4-2.5 3-3.8 4.6 1 1.4 1.7 2.4 2.5 3.5 2.6 3.7 2.3 7.5-.7 10.3-2.8 2.6-7.7 2.4-10.4-.2-2.9-2.8-3.5-7.8-1.3-11.5 1.4-2.3 2.6-3.2 4.1-5.2 20.5-23.1 20.5-23.1 27-21.5M122.2 302.5v-5.7h57.6v5.7zM47.1 298.6h38.3v6.9H56.7c-.3 2.5-.5 4.5-.7 6.5-9.1 2.3-10.7-3.3-8.9-13.4M258.9 238c1.1 7-13.8 25.2-20.3 25.4.4-2.2.2-4.5 1.2-6q6.3-8.4 13.2-16.2c1.2-1.4 3.5-2 5.9-3.2M150.2 233.6c4.1.1 6.8 2.9 6.6 7-.1 4-3 6.9-7 6.9s-7.2-3.4-7-7.5c.2-3.7 3.4-6.5 7.4-6.4M221 289.2V283h22c-.2 2.3-.4 4.4-.6 6.2zM179.8 283.2c.3 1.4.7 2.7 1.2 4.6-6.6 2.4-12.7 2-19.2.5.1-1.9.2-3.3.3-5.1zM314.8 110.8c0 7.1-5.3 12.4-12.2 12.5-7 .1-12.7-5.6-12.7-12.7 0-6.9 5.4-11.9 12.6-11.9 7.2-.1 12.3 5 12.3 12.1M329.1 105.6c-5-5.3-10-10.7-14.9-15.9h-19.8c.3-2.4.5-3.9.7-5.8h20.3c5.6 5.3 11 10.1 16 15.1 2.5 2.6 1.9 4.1-2.3 6.6"/>
    </svg>
  );
};

export function FileQuestionIcon({ wh = '24' }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      width={wh} 
      height={wh} >
    <path d="M4,23H20a1,1,0,0,0,1-1V6a1,1,0,0,0-.293-.707l-4-4A1,1,0,0,0,16,1H4A1,1,0,0,0,3,2V22A1,1,0,0,0,4,23ZM5,3H15.586L19,6.414V21H5Zm8,13v1a1,1,0,0,1-2,0V16a1,1,0,0,1,2,0Zm1.954-7.429a3.142,3.142,0,0,1-1.789,3.421.4.4,0,0,0-.165.359V13a1,1,0,0,1-2,0v-.649a2.359,2.359,0,0,1,1.363-2.191A1.145,1.145,0,0,0,12.981,8.9a1.069,1.069,0,0,0-.8-.88.917.917,0,0,0-.775.2,1.155,1.155,0,0,0-.4.9,1,1,0,1,1-2,0,3.151,3.151,0,0,1,1.127-2.436,2.946,2.946,0,0,1,2.418-.632A3.085,3.085,0,0,1,14.954,8.571Z"/>
    </svg>
  );
}

export function InfoIcon({ wh = '20' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={wh}
      height={wh}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.5 15h-1v-1h1v1zm0-3h-1v-5h1v5z" />
    </svg>
  );
}
