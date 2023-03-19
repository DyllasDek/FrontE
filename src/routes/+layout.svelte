<script lang="ts">
    import SideNav from '$lib/sidenav.svelte';
    import './styles.css';
  </script>
<main>
    <div class="maincont">
        <SideNav />
    </div>
    <div class="main maincont">
    <slot />
    </div>
</main>