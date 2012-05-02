<?php 
$args = array(
	'order'          => 'ASC',
	'post_type'      => 'attachment',
	'post_parent'    => $post->ID,
	'post_mime_type' => 'image',
	'post_status'    => null,
	'exclude' => get_post_thumbnail_id(),
	'numberposts'    => -1
	);
								
	$attachments = get_posts($args);			 
	$post_slug = str_replace(" ", "-",$post->post_name);											
											
if ($attachments) { ?>
									
<!-- Super Container -->
<div class="super-container full-width main-content-area post-image-slider" id="section-slider">

	<!-- 960 Container --> 
	<div class="container">
		
		<!-- FlexSlider -->
		<div class="sixteen columns">
									
			<div class="slider-shadow">
				<div class="flexslider-container">
					<div class="flexslider"> 
					  <ul class="slides">
						   <?php 
								foreach ($attachments as $attachment) {
										$attachment_url = wp_get_attachment_url($attachment->ID, 'full');
										echo '<li><a data-rel="prettyPhoto['.$post_slug.']" href="'.$attachment_url.'"><img src="'.$attachment_url.'" /></a></li>';
								}								
							?>	
					  </ul>
					</div>
				</div>			
			</div>									
		</div>		
		<!-- /End Full Width Slider-->

	</div>
	<!-- /End 960 Container -->
	
</div>
<!-- /End Super Container -->	
<?php } ?>