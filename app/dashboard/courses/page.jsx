"use client";
import React from "react";
import Image from "next/image";

const categories = [
  "ChatGPT",
  "Data Science",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence (AI)",
  "Statistics",
  "Natural Language Processing",
];

const courses = [
  {
    title: "The Complete Python Guide  & More",
    instructor: "Julian Melanson, Benza Maman, Leap...",
    rating: "4.5",
    reviews: "47,344",
    badge: "Bestseller",
    image: "/courese1.jpeg", // Replace with your own images
  },
  {
    title: "The Complete React.js",
    instructor: "Ing. Tomáš Morávek",
    rating: "4.3",
    reviews: "1,870",
   
    badge: "",
    image: "/courese2.png",
  },
  {
    title: "Sql Advances",
    instructor: "Anton Voroniuk",
    rating: "4.6",
    reviews: "564",
    badge: "",
    image: "/courese3.png",
  },
  {
    title: "Upgrade Your Communication",
    instructor: "Anton Voroniuk",
    rating: "4.6",
    reviews: "290",
    badge: "",
    image: "/courese4.jpeg",
  },
];

export default function Page() {
  return (
    <div className="px-6 py-10 bg-gray-50 min-h-screen">
      {/* Category Pills */}
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="whitespace-nowrap bg-gray-100 hover:bg-purple-100 px-4 py-2 rounded-full font-medium"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-3 hover:shadow-lg transition"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={220}
              className="rounded-md object-cover"
            />
            <h3 className="mt-3 font-semibold text-md">{course.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{course.instructor}</p>
            <div className="text-sm text-yellow-600 mt-1">
              ⭐ {course.rating} ({course.reviews})
            </div>
            <div className="mt-2 flex items-center space-x-2 text-sm">
              <span className="font-semibold">{course.price}</span>
              <span className="line-through text-gray-500">{course.oldPrice}</span>
            </div>
            <div className="mt-2 flex space-x-2">
              <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                Premium
              </span>
              {course.badge && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {course.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show all button */}
      <div className="mt-10 text-center">
        <button className="px-6 py-2 border rounded-full text-purple-600 hover:bg-purple-50">
          Show all Data Science courses
        </button>
      </div>
    </div>
  );
}

