<?php
/*
 * Template Name: Traditional Blog
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
		
		
		<!-- CONTENT -->
		<div class="eleven columns content">
		
			
			<h1 class="title"><span><?php the_title(); ?></span></h1>
			
			<!-- Page Content (if it exists) -->
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>	
			<div class="eleven columns content alpha">
				<?php the_content(); ?>			
			</div>	
			<?php endwhile; ?>	
			
			<!-- ============================================== -->			
			
			
			<!-- CATEGORY QUERY + START OF THE LOOP -->
			<?php get_template_part( 'element', 'categoryfilterquery' ); ?>
			<?php while ( have_posts() ) : the_post(); ?>							
			
				<?php get_template_part( 'element', 'excerpt' ); ?>					
							
			<?php endwhile; endif; ?>
			<!-- /STOP LOOP -->
			
			
			<!-- ============================================== -->		
			
		
		<!-- Previous / More Entries -->
		<br />
		<hr />
		<div class="article_nav">
			<div class="p button"><?php next_posts_link(__('Previous Posts', 'skeleton')); ?></div>
			<div class="m button"><?php previous_posts_link(__('Next Posts', 'skeleton')); ?></div>
		</div>
		<br class="clearfix" />
		<!-- </Previous / More Entries -->
		
		</div>	
		<!-- /CONTENT -->
		
		
		<!-- ============================================== -->
		
		
		<!-- SIDEBAR --> 
		<div class="five columns sidebar">
			
			<?php dynamic_sidebar( 'default-widget-area' ); ?>	
				
		</div>
		<!-- /SIDEBAR -->		
				

	</div>
	<!-- /End 960 Container -->
	
</div>
<!-- /End Super Container -->


<!-- ============================================== -->


<?php get_footer(); ?>