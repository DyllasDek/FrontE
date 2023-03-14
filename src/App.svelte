<script lang="ts">
  import Comic from './lib/comic.svelte'
  import Contact from './lib/contact.svelte'
  import Portfolio from './lib/portfolio.svelte'
  import Education from './lib/edu.svelte'
  import About from './lib/aboutme.svelte'
  import SideNav from './lib/sidenav.svelte'
</script>

<main>
  <div class="maincont">
      <SideNav />
      <!-- Page Content  -->
      <div class="main maincont">
          <section class="childcont" id="about">
            <About />
          </section>
          <section class="childcont" id="edu">
            <Education />
          </section>
          <section class="childcont" id="port">
            <Portfolio />
          </section>
          <section class="childcont" id="cont">
            <Contact />
          </section>
          <section class="childcont" >
            <Comic />
          </section>
      </div>
  </div>
</main>
