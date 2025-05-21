document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="dark:bg-white sticky top-0 z-1000 border-gray-200 bg-gray-900">
        <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
        <button type="button" class="flex text-sm  rounded-full md:me-0 " id="user-menu-button" aria-expanded="false"
            data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span class="sr-only">Open user menu</span>
        <img id="navProfilePicture" class="w-8 h-8 rounded-full object-cover" src="https://randomuser.me/api/portraits/default.jpg" alt="User photo" />
        <span id="navProfileName" tabindex="0"

            class="self-center ml-2 text-sm font-medium tracking-wide focus:text-blue-700 hover:text-blue-500 md:text-md lg:text-xl dark:text-gray-700 text-white ">Cristian
            Kontolunus</span>

        </button>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <!-- Dropdown menu -->
            <div
            class="z-50 hidden my-4 text-base list-none dark:bg-gray-900 divide-y dark:divide-gray-100 rounded-lg shadow-sm bg-gray-700 divide-gray-600"
            id="user-dropdown">
            <div class="px-4 py-3">
                <span id="userMenuName" class="block text-sm dark:text-gray-900 text-white">Bonnie Green</span>
                <span id="userMenuEmail" class="block text-sm dark:text-gray-500 truncate text-gray-400">name@flowbite.com</span>
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                <a href="/pages/Profilepage.html"
                    class="block px-4 py-2 text-sm dark:text-gray-700 dark:hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white">Settings</a>
                </li>
                <li>
                <a href="/pages/Loginpage.html"
                    class="block px-4 py-2 text-sm dark:text-gray-700 dark:hover:bg-gray-100 hover:bg-gray-600 text-gray-200 hover:text-white">Sign
                    out</a>
                </li>
            </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm dark:text-gray-500 rounded-lg md:hidden dark:hover:bg-gray-100   text-gray-400 hover:bg-gray-700 "
            aria-controls="navbar-user" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
            </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2" id="navbar-user">
            <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border  dark:border-gray-100 rounded-lg dark:bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-white bg-gray-800 md:bg-gray-900 border-gray-900">
            <li>
    <a href="Homepage.html" id="homeLink"
        class="block nav-link relative py-2 px-3 text-white rounded-sm bg-gray-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
        aria-current="page">Home</a>
</li>
<li>
    <a href="Coursepage.html" id="courseLink"
        class="block nav-link relative py-2 px-3 dark:text-gray-900 rounded-sm dark:hover:bg-gray-100 md:dark:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
        Course</a>
</li>
<li>
    <a href="Reviewpage.html" id="reviewLink"
        class="block nav-link relative py-2 px-3 dark:text-gray-900 rounded-sm dark:hover:bg-gray-100 md:dark:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
        Student Stories</a>
</li>
<li>
    <a href="Aboutpage.html" id="aboutLink"
        class="block nav-link relative py-2 px-3 dark:text-gray-900 rounded-sm dark:hover:bg-gray-100 md:dark:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
        About</a>
</li>   
            </ul>
        </div>
        </div>
    </nav>
        `;


    document.getElementById("navbar").innerHTML = navbarHTML;

    // 🔹 Menentukan halaman yang sedang aktif
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = {
        "Homepage.html": "homeLink",
        "Coursepage.html": "courseLink",
        "Reviewpage.html": "reviewLink",
        "Aboutpage.html": "aboutLink"
    };


    // Hapus kelas "active" dari semua elemen navbar
    Object.values(navLinks).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.className = "block nav-link relative py-2 px-3 dark:text-gray-900 rounded-sm dark:hover:bg-gray-100 md:dark:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700";
        }
    });

    // 🔹 Tambahkan kelas aktif ke halaman saat ini
    if (navLinks[currentPage] && document.getElementById(navLinks[currentPage])) {
        document.getElementById(navLinks[currentPage]).className = "block nav-link relative py-2 px-3 text-white rounded-sm bg-gray-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
    }



    // 🔹 Perbarui Nama & Foto dari `localStorage`
    const profileData = JSON.parse(localStorage.getItem("profileData"));
    if (profileData) {
        document.getElementById("navProfilePicture").src = profileData.profilePicture;
        document.getElementById("navProfileName").textContent = profileData.profileName;
        document.getElementById("userMenuName").textContent = profileData.profileName;
        document.getElementById("userMenuEmail").textContent = profileData.email;
    }

});