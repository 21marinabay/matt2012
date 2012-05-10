<?php
/*
 * Template Name: Full Width (Dev Sandbox)
*/

get_header();
?>


<!-- ============================================== -->


<!-- FlexSlider Conditional -->
<?php if(get_custom_field('frontpage_slider') == 'Yes') {  
	
	if(get_option_tree('frontpage_slider') == 'Yes') { 
		get_template_part( 'element', 'flexslider' ); 
	}	

} else {}; 
?>

<!-- ============================================== -->

<!-- Super Container -->
<div class="super-container full-width main-content-area" id="section-content">

	<!-- 960 Container -->
	<div class="container">
		
		<?php get_template_part( 'element', 'pagecaption' ); ?>
		
		<!-- CONTENT -->
		<div class="sixteen columns content" style="background:url('http://matt2012.super.21marinabay.com/wp-content/uploads/2012/05/matric.jpg');background-repeat:no-repeat;
background-position:right;">
			
			<!-- THE POST LOOP -->
			<?php while ( have_posts() ) : the_post(); ?>	

				<?php if(get_custom_field('hide_title') == 'Yes') : else : ?>
				<h1 class="title"><span><?php the_title(); ?></span></h1>
				<?php endif; ?>
				
		
		</div>
		<div class="content">
				<?php the_content(); ?>
				
			<?php endwhile; ?>	
			
		</div>	
		<!-- /CONTENT -->
		

	</div>
	<!-- /End 960 Container -->
	
</div>
<!-- /End Super Container -->


<!-- ============================================== -->


<?php get_footer(); ?>