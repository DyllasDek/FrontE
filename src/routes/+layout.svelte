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

<style>
/* Style page content */
.main {
    margin-left: 250px;
    /* Same as the width of the sidebar */
    /*padding: 0px 10px;*/
}

</style>