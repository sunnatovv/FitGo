
  <template>
  <div>
    <!-- Navbar -->
    <nav>
      <ul>
        <li><a href="#" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a href="#" @click.prevent="scrollToSection('services')">Services</a></li>
        <li><a href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
      </ul>
    </nav>

    <!-- Content Sections -->
    <section id="about">
      <h2>About Section</h2>
      <p>Bu yerda about bo‘limi.</p>
    </section>

    <section id="services">
      <h2>Services Section</h2>
      <p>Xizmatlar haqida.</p>
    </section>

    <section id="contact">
      <h2>Contact Section</h2>
      <p>Bog‘lanish ma’lumotlari.</p>
    </section>
  </div>
</template>



<script setup>
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>


<style>
/* Bo‘limlar biroz pastda bo‘lishi uchun */
section {
  height: 100vh; /* Har bir bo‘lim ekranni to‘liq egallaydi */
  padding: 50px;
  border-bottom: 2px solid #ddd;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  cursor: pointer;
}
</style>
