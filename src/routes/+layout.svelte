<script lang="ts">
    import './styles.css';
    import SideNav from '$lib/sidenav.svelte';    
  </script>

<div class="maincont">
    <SideNav />
</div>
<div class="main maincont">
<slot />
</div>
