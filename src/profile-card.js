const teamMembers = [
  {
    name: "John Doe",
    role: "Programmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "John Doe",
    role: "Programmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "John Doe",
    role: "Programmer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];
const container = document.getElementById("profile-container");

teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.className = `
  relative aspect-[3/4] rounded-[45px] overflow-hidden min-w-60 lg:w-70 xl:w-75 2xl:w-80
  bg-gradient-to-b from-black to-blue-700 text-white text-center flex flex-col justify-center items-center mx-auto 
`;


  card.innerHTML = `
            <div class="py-3 z-10 relative">
              <h2 class="mb-1 mt-4 text-md md:text-2xl xl:text-3xl xl:mt-10 xl:mb-2 ">${member.name}</h2>
              <p class=" mb-2 text-xs xl:text-[18px] xl:mb-5 xl:font-light text-gray-300">${member.role}</p>
            </div>
            <img 
              src="${member.image}" 
              alt="${member.name}" 
              class="w-full h-full object-cover"
            />
          `;

  container.appendChild(card);
});
