<script lang="ts">
	import { base } from '$app/paths';
</script>
<nav class="sidenav">
    <div style="text-align: center;">
        <!--<div style="background-image: url(images/logo.jpg);"></div>-->
        <h3 style="background-color: rgba(50,55,65,0.65); ">Danila Korneenko</h3>
    </div>
    <ul class="list-unstyled components mb-5">
        <li>
            <a href="{base}/"><span class="fa fa-folder-open mr-3"></span> About me</a>
        </li>
        <li>
            <a href="{base}/edu"><span class="fa fa-mortar-board mr-3"></span>Education</a>
        </li>
        <li>
            <a href="{base}/port"><span class="fa fa-trophy mr-3"></span> Portfolio</a>
        </li>
        <li>
            <a href="{base}/cont"><span class="fa fa-telegram mr-3"></span> Contact</a>
        </li>
        <li>
            <a href="{base}/joke"><span class="fa fa-comment mr-3"></span> Joke</a>
        </li>
    </ul>
</nav>

<style>
    /* The sidebar menu */
.sidenav {
    height: 100%;
    /* Full-height: remove this if you want "auto" height */
    width: 250px;
    /* Set the width of the sidebar */
    position: fixed;
    /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1;
    /* Stay on top */
    top: 0;
    /* Stay at the top */
    left: 0;
    background-color: rgb(50, 55, 61);
    /* Black */
    overflow-x: hidden;
    /* Disable horizontal scroll */
    padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
}

.sidenav h3 {
    color: whitesmoke;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}
</style>