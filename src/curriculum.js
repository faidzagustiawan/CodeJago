document.addEventListener("DOMContentLoaded", function () {
    const modules = [
        {
            id: 1,
            title: "Webflow Fundamentals",
            description: "Master the basics of Webflow and understand its powerful features.",
            duration: "4 hours",
            difficulty: "Beginner",
            lessons: [
                "Introduction to Webflow Interface",
                "Creating Your First Project",
                "Understanding the Box Model",
                "Working with Sections and Containers",
                "Basic Styling and Typography"
            ]
        },
        {
            id: 2,
            title: "Responsive Design",
            description: "Learn how to create fully responsive websites that look great on all devices.",
            duration: "5 hours",
            difficulty: "Intermediate",
            lessons: [
                "Responsive Design Principles",
                "Breakpoints and Media Queries",
                "Flexbox in Webflow",
                "Grid Systems and Layouts",
                "Testing and Troubleshooting"
            ]
        },
        {
            id: 3,
            title: "Interactions and Animations",
            description: "Add life to your websites with smooth animations and interactive elements.",
            duration: "6 hours",
            difficulty: "Intermediate",
            lessons: [
                "Introduction to Interactions",
                "Trigger Types and Actions",
                "Creating Multi-step Animations",
                "Scroll-based Animations",
                "Performance Optimization"
            ]
        },
        {
            id: 4,
            title: "CMS and Dynamic Content",
            description: "Build powerful dynamic websites with Webflow CMS and custom fields.",
            duration: "7 hours",
            difficulty: "Advanced",
            lessons: [
                "CMS Collections and Fields",
                "Dynamic Pages and Templates",
                "Filtering and Sorting Content",
                "Reference Fields and Relationships",
                "CMS Pagination and Search"
            ]
        },
        {
            id: 5,
            title: "Advanced Techniques",
            description: "Take your Webflow skills to the next level with advanced techniques.",
            duration: "8 hours",
            difficulty: "Advanced",
            lessons: [
                "Custom Code Integration",
                "Third-party API Integration",
                "Advanced Form Handling",
                "Membership Areas",
                "E-commerce Functionality"
            ]
        },
        {
            id: 6,
            title: "Client Projects and Workflows",
            description: "Learn how to work efficiently with clients and deliver professional projects.",
            duration: "6 hours",
            difficulty: "Advanced",
            lessons: [
                "Project Planning and Structure",
                "Client Onboarding Process",
                "Handoff Documentation",
                "Training Clients on CMS",
                "Maintenance and Support"
            ]
        }
    ];
    const modulesContainer = document.getElementById("modules-container");

    modules.forEach(module => {
        const moduleDiv = document.createElement("div");
        moduleDiv.className = "mb-6 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100";

        moduleDiv.innerHTML = `
            <button class="w-full px-6 py-5 flex items-center justify-between focus:outline-none" onclick="toggleModule(${module.id})">
                <div class="flex items-center">
                    <span class="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold mr-4">${module.id}</span>
                    <span class="text-xl font-semibold text-indigo-900">${module.title}</span>
                </div>
                <div class="flex items-center space-x-6">
                    <div class="flex items-center text-gray-500 text-sm">
                        <i class="fa-regular fa-clock mr-2"></i> <span>${module.duration}</span>
                    </div>
                    <div class="flex items-center text-gray-500 text-sm">
                        <i class="fa-solid fa-chart-simple mr-2"></i> <span>${module.difficulty}</span>
                    </div>
                    <div class="text-gray-400 text-xl" id="arrow-${module.id}">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </div>
            </button>
            <div class="px-6 pb-6 pt-2 hidden" id="module-${module.id}">
                <p class="text-gray-600 mb-4">${module.description}</p>
                <h4 class="font-medium text-indigo-900 mb-3">Lessons in this module:</h4>
                <ul class="space-y-2">
                    ${module.lessons.map(lesson => `<li class="flex items-start text-gray-600"><i class="fa-solid fa-check-circle text-green-500 mr-2"></i> ${lesson}</li>`).join('')}
                </ul>
            </div>
        `;

        modulesContainer.appendChild(moduleDiv);
    });
});

function toggleModule(moduleId) {
    const moduleContent = document.getElementById(`module-${moduleId}`);
    const arrowIcon = document.getElementById(`arrow-${moduleId}`).querySelector("i");

    if (moduleContent.classList.contains("hidden")) {
        moduleContent.classList.remove("hidden");
        arrowIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
        moduleContent.classList.add("hidden");
        arrowIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
}