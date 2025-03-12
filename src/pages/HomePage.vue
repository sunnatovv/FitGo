<template>
  <!-- Navbar -->
  <nav
    id="navbar"
    class="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
  >
    <div class="flex justify-between container py-4 h-[90px] items-center">
      <div><img src="/navbarlogo.png" alt="Logo" /></div>
      <ul class="flex space-x-6">
        <li><a href="#" @click.prevent="scrollToSection('home')">Home</a></li>
        <li><a href="#" @click.prevent="scrollToSection('about')">About</a></li>
        <li>
          <a href="#" @click.prevent="scrollToSection('services')">Services</a>
        </li>
        <li>
          <a href="#" @click.prevent="scrollToSection('trainers')">Trainers</a>
        </li>
        <li>
          <a href="#" @click.prevent="scrollToSection('contact')">Contact</a>
        </li>
      </ul>
      <div class="mr-4 flex gap-2">
        <button class="py-2 border border-white text-white rounded-full px-5">
          Login
        </button>
        <button
          class="py-2 border border-white bg-white font-medium !text-[#063835] rounded-full px-5"
        >
          SignUp
        </button>
      </div>
    </div>
  </nav>

  <!-- Home Section -->
  <section
    id="home"
    class="bg-[#063835] relative flex items-center h-[1000px] w-full"
  >
    <div class="container kachokcha relative">
      <div class="mainText absolute z-40 w-[620px] top-[-320px]">
        <h2 class="text-white text-[90px] font-normal">
          FITNESS <br />
          AND <span class="text-[#063835] tracking-wider">HEALTH</span> TRAINING
        </h2>
        <p class="font-medium text-[#E5E4E4] font-gilroy mb-6 w-[500px]">
          Join a community of thousands transforming their lives through
          expert-guided fitness programs, personalized nutrition, and holistic
          wellness
        </p>

        <button
          class="px-6 py-3 border border-[#FE4F31] text-[#E5E4E4] rounded-full bg-[#FE4F31] font-light"
        >
          Get Started Now
        </button>
        <div class="bgtext"></div>
      </div>
      <div class="kachok"></div>
    </div>
    <div class="heroBg"></div>

    <div class="absolute top-0 right-0 z-5 bg-[#063835]">
      <img src="/POWER.png" alt="Power" class="w-[18vw] h-[1000px]" />
    </div>
    <!-- Hero Background (Pastda chiqishi uchun) -->
  </section>
  <!-- Home Section -->

  <!-- About section -->
  <section id="about" class="h-[1500px] bg-gray-100">
    <div class="pt-[120px]">
      <div class="container">
        <div class="mx-auto w-[500px]">
          <h2 class="text-center">About</h2>
          <h2 class="text-[#0C2E68] text-[65px]">
            Empower Your Health Journey
          </h2>
        </div>

        <div class="grid grid-cols-2 gap-[60px] py-8">
          <div class="">
            <img src="/abouthero.png" alt="sportsmen" />
          </div>
          <div
            class="w-[440px] h-[530px] mt-14 ml-16 grid grid-cols-2 row-span-3 gap-4"
          >
            <div v-for="(i, index) in stats" :key="index">
              <p class="text-[#851EE5] font-normal text-[60px]">
                {{ i.number }}
              </p>
              <p class="text-[#303030] text-[18px] russoText">{{ i.text }}</p>
            </div>
            <p class="row-span-2 col-span-2 russoText">{{ description }}</p>

            <button
              class="py-1 px-6 text-white bg-[#FE4F31] border rounded-full"
            >
              Get Started Now
            </button>
          </div>
        </div>

        <div class="grid grid-cols-3 mt-[-110px]">
          <div class="">
            <img src="/about1.png" alt="blablabla" />
          </div>
          <div class="">
            <img src="/about2.png" alt="blablabla" />
          </div>
          <div class="">
            <img src="/about3.png" alt="blablabla" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About section -->

  <!-- Programs Section -->
  <section id="programs" class="h-[1200px] bg-[#1D1E22]">
    <div class="container py-[100px]">
      <img src="/programs.png" alt="" />
      <div class="grid grid-cols-3 row-span-2 py-8">
        <div class="col-span-2">
          <h2 class="text-[75px] text-white uppercase">
            Our Ultimate <br />Health Program
          </h2>
        </div>
        <div class="col-span-1 mt-[85px]">
          <p class="text-[#D3D3D3] text-[18px] font-medium">
            Whether you want to lose weight, build strength, improve
            flexibility, or simply stay active, FitGo offers a variety of
            expert-designed programs to suit your needs
          </p>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6 py-8">
        <div class="bg-[#292B30] h-[300px] rounded-xl"></div>
        <div class="bg-[#292B30] h-[300px] rounded-xl col-span-2"></div>
        <div class="bg-[#292B30] h-[300px] rounded-xl"></div>
        <div class="bg-[#292B30] h-[300px] rounded-xl"></div>
        <div class="bg-[#292B30] h-[300px] rounded-xl"></div>
      </div>
    </div>
  </section>
  <!-- Programs Section -->

  <!-- Services section -->
  <section id="services" class="h-[1200px] bg-[#F5F5F5]">
    <div class="container">
      <h2>Services Section</h2>
    </div>
  </section>
  <!-- Services section -->
  <!--Highlight section-->
  <section id="services" class="h-[1150px] bg-[#F5F5F5]">
    <div class="container py-[80px]">
      <img src="/highlights.png" alt="" />

      <div class="py-[35px]">
        <h2 class="text-[75px] text-[#0C2E68] uppercase">
          highlights of health success history
        </h2>
      </div>

      <div class="grid grid-cols-5 grid-rows-3 gap-6 py-6">
        <div class="col-span-5 row-span-3 rounded-xl bg-[#292B30] h-[430px]"></div>
        <div class="col-span-1 row-span-1 rounded-xl bg-[#292B30] h-[200px]"></div>
        <div class="col-span-1 row-span-1 rounded-xl bg-[#292B30] h-[200px]"></div>
        <div class="col-span-1 row-span-1 rounded-xl bg-[#292B30] h-[200px]"></div>
        <div class="col-span-1 row-span-1 rounded-xl bg-[#292B30] h-[200px]"></div>
        <div class="col-span-1 row-span-1 rounded-xl bg-[#292B30] h-[200px]"></div>
      </div>
    </div>
  </section>
  <!-- Highlight section -->

  <section
    id="contact"
    class="h-screen flex items-center justify-center bg-gray-300"
  >
    <h2>Contact Section</h2>
  </section>

  <section >
    <div class="footerPhoto flex items-center justify-center">
      <div class="w-[600px] text-center">
        <h3 class="uppercase text-white text-[88px] py-2">Join Our community</h3>
        <button class="text-white py-5 mt-2 px-6 rounded-full bg-[#FE4F31]">Get Started Now</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const stats = ref([
  { number: "30+", text: "Years Experience" },
  { number: "70+", text: "Professional Trainer" },
  { number: "150+", text: "Expert Workout Plans" },
  { number: "500+", text: "Members Join" },
]);

const description = ref(
  "At FitGo, we believe that a healthy lifestyle is the key to unlocking your full potential. That's why we've created an all-in-one platform that combines expert-led fitness programs."
);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    // 50px scroll bo'lganda
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
</script>

<style scoped>
nav ul {
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
}

section {
  border-bottom: 2px solid #ddd;
}

#navbar {
  background-color: transparent;
  backdrop-filter: blur(0px); /* Tumanlanish yo'q */
}

/* Scroll bo'lganda (blur va yarim shaffof) */
#navbar.scrolled {
  background-color: rgba(6, 56, 53, 0.5); /* Yarim shaffof oq rang */
  backdrop-filter: blur(10px); /* Tumanlanish effekti */
}
</style>
