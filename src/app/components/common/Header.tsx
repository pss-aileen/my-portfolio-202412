'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { GoTriangleDown } from 'react-icons/go';
import { GoX } from 'react-icons/go';
import profileImage from './img-profile.png';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 flex w-full justify-between p-6 items-center max-w-screen-lg mx-auto z-50'>
        <h1 className='text-base'>
          <Link href='/' className='' onClick={handleClick}>
            <Image src={profileImage} width='48' height='48' alt='Aileen' className='rounded-full' priority={true} />
          </Link>
        </h1>

        <button className='border py-2 px-4 rounded-3xl bg-white lg:hidden flex items-center justify-center gap-2' onClick={() => setIsOpen(!isOpen)}>
          Menu
          <GoTriangleDown className='text-lg' />
        </button>

        <div className={`fixed top-0 left-0 right-0 w-full h-full bg-neutral-950/60 backdrop-blur transition-opacity duration-300 cursor-pointer ${isOpen ? '' : 'opacity-0 pointer-events-none'}`} onClick={handleClick}></div>
        <nav className={`fixed top-6 left-0 right-0 lg:static bg-white mx-6 px-6 pt-6 pb-4  lg:m-0 lg:p-0 rounded-3xl shadow-lg lg:shadow-none transition-opacity duration-300 lg:opacity-100 lg:pointer-events-auto lg:bg-transparent ${isOpen ? '' : 'opacity-0 pointer-events-none'}`}>
          <div className='flex justify-between lg:hidden'>
            <p className='text-neutral-500'>Menu </p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <GoX className='text-lg' />
            </button>
          </div>

          <ul className='mt-4 lg:mt-0 lg:flex lg:gap-4 font-bold'>
            <li>
              <Link href='/' className={`block py-2 ${pathname === '/' ? 'text-sky-700' : ''}`} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href='/about' className={`block py-2 ${pathname === '/about' ? 'text-sky-700' : ''}`} onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link href='/blog' className={`block py-2 ${pathname === '/blog' ? 'text-sky-700' : ''}`} onClick={handleClick}>
                Blog
              </Link>
            </li>
            <li>
              <Link href='/projects' className={`block py-2 ${pathname === '/projects' ? 'text-sky-700' : ''}`} onClick={handleClick}>
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
