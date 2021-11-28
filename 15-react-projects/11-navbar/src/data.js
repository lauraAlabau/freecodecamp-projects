import React from 'react'
import { FaGithubAlt, FaLinkedinIn, FaWordpress } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/laura-alabau-rodriguez/',
    icon: <FaLinkedinIn />,
  },
  {
    id: 2,
    url: 'https://github.com/lauraAlabau',
    icon: <FaGithubAlt />,
  },
  {
    id: 3,
    url: 'https://laura-alabau.com/',
    icon: <FaWordpress />,
  },

]
